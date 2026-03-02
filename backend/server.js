import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sgMail from '@sendgrid/mail';
import { contactEmailHtml, surveyEmailHtml } from './emailTemplates.js';

/* 
  IMPORTANT: Do NOT paste credentials (private keys, etc.) directly into the code.
  - Use a .env file for SPREADSHEET_ID and PORT.
  - Use a credentials.json file for the Google Cloud Service Account.
  Both files are ignored in .gitignore to prevent accidental leaks to GitHub.
*/



const __dirname = dirname(fileURLToPath(import.meta.url));
const creds = JSON.parse(readFileSync(join(__dirname, 'credentials.json'), 'utf8'));

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const PORT = process.env.PORT || 3001;

// ─── SendGrid setup ────────────────────────────────────────────────────────────
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'zerowaste@cjilfov.ro';
const FROM_NAME = process.env.FROM_NAME || 'Parcul Natural Zer0 Waste';

if (SENDGRID_API_KEY && SENDGRID_API_KEY.startsWith('SG.')) {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('✅ SendGrid configured');
} else {
  console.warn('⚠️  SENDGRID_API_KEY not set or invalid — emails will be skipped');
}

/**
 * Send an email via SendGrid. Non-blocking — errors are logged but don't affect the API response.
 */
async function sendEmail({ to, subject, html }) {
  if (!SENDGRID_API_KEY) return;
  try {
    await sgMail.send({
      to,
      from: { email: FROM_EMAIL, name: FROM_NAME },
      subject,
      html,
    });
    console.log(`📧 Email sent to ${to}`);
  } catch (err) {
    console.error('SendGrid error:', err?.response?.body || err.message);
  }
}

// ─── Google Sheets setup ───────────────────────────────────────────────────────
const auth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

let doc = null;
async function getDoc() {
  if (!doc) {
    doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);
    await doc.loadInfo();

    let contactSheet = doc.sheetsByTitle['Contacte'];
    if (!contactSheet) {
      contactSheet = await doc.addSheet({ title: 'Contacte' });
    }
    await contactSheet.setHeaderRow([
      'Timestamp', 'Nume', 'Organizație', 'Rol', 'Email', 'Telefon', 'Interese', 'Preferință Contact',
    ]);

    let surveySheet = doc.sheetsByTitle['Consultare Publica'];
    if (!surveySheet) {
      surveySheet = await doc.addSheet({ title: 'Consultare Publica' });
    }
    await surveySheet.setHeaderRow(['Timestamp', 'Nume', 'Email', 'Nevoi Selectate']);
  }
  return doc;
}

const app = express();
app.use(cors());
app.use(express.json());

// ─── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// ─── Contact form → Sheet "Contacte" + confirmation email ─────────────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { name, org, role, email, phone, interests = [], contact_when = '' } = req.body;

    if (!name || !org || !role || !email || !phone) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const roleLabels = {
      uat: 'CJ / Primărie / UAT',
      company: 'Companie',
      ngo: 'ONG',
      press: 'Presă / Media',
      consultant: 'Consultant',
      other: 'Altul',
    };

    const contactWhenLabels = {
      today: 'Astăzi',
      tomorrow: 'Mâine',
      next_week: 'Săptămâna viitoare',
    };

    // 1. Save to Google Sheets
    const document = await getDoc();
    const sheet = document.sheetsByTitle['Contacte'];
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Nume: name,
      'Organizație': org,
      Rol: roleLabels[role] || role,
      Email: email,
      Telefon: phone,
      Interese: Array.isArray(interests) ? interests.join(', ') : interests,
      'Preferință Contact': contactWhenLabels[contact_when] || contact_when,
    });

    // 2. Send confirmation email (non-blocking — we respond to client first)
    sendEmail({
      to: email,
      subject: `Mulțumim, ${name}! Te contactăm în 24h — Parcul Natural Zer0 Waste`,
      html: contactEmailHtml({
        name,
        org,
        role: roleLabels[role] || role,
        interests: Array.isArray(interests) ? interests : [],
        contact_when,
      }),
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('[/api/contact]', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

// ─── Survey form → Sheet "Consultare Publica" + confirmation email ─────────────
app.post('/api/survey', async (req, res) => {
  try {
    const { name, email, selected_needs = [] } = req.body;

    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // 1. Save to Google Sheets
    const document = await getDoc();
    const sheet = document.sheetsByTitle['Consultare Publica'];
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Nume: name,
      Email: email,
      'Nevoi Selectate': Array.isArray(selected_needs) ? selected_needs.join(', ') : selected_needs,
    });

    // 2. Send confirmation email (non-blocking)
    sendEmail({
      to: email,
      subject: `Mulțumim pentru participare, ${name}! — Consultare Publică Zer0 Waste`,
      html: surveyEmailHtml({
        name,
        selected_needs: Array.isArray(selected_needs) ? selected_needs : [],
      }),
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('[/api/survey]', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Zer0Waste backend running on http://localhost:${PORT}`);
});
