/**
 * Email templates for Zer0 Waste confirmation emails
 * Design inspired by the site: dark forest greens, lime accents, clean typography
 */

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600;700&display=swap');
  body { margin: 0; padding: 0; background-color: #0d2015; font-family: 'DM Sans', Arial, sans-serif; }
  * { box-sizing: border-box; }
`;

const logoBlock = `
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding: 32px 40px 24px;">
        <div style="display:inline-block; background:#fff; border-radius:10px; padding:8px 12px;">
          <span style="font-size:13px; font-weight:700; color:#1a4a2e; letter-spacing:0.06em;">CONSILIUL JUDEȚEAN ILFOV</span>
        </div>
      </td>
    </tr>
  </table>
`;

const footer = `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:40px;">
    <tr>
      <td style="padding:24px 40px; border-top:1px solid rgba(255,255,255,0.06);">
        <p style="margin:0; font-size:12px; color:rgba(236,224,196,0.35); line-height:1.6;">
          Parcul Natural Zer0 Waste · Pădurea Căldăraru, Cernica, Ilfov<br/>
          Proiect inițiat de <strong style="color:rgba(236,224,196,0.5);">Consiliul Județean Ilfov</strong><br/>
          <a href="mailto:zerowaste@cjilfov.ro" style="color:#9fd653; text-decoration:none;">zerowaste@cjilfov.ro</a>
        </p>
      </td>
    </tr>
  </table>
`;

/**
 * Thank-you email for the Contact form submission
 */
export function contactEmailHtml({ name, org, role, interests = [], contact_when = '' }) {
    const contactWhenText = {
        today: 'astăzi',
        tomorrow: 'mâine',
        next_week: 'săptămâna viitoare',
    }[contact_when] || '';

    const contactNote = contactWhenText
        ? `<p style="margin:0 0 16px; font-size:15px; color:rgba(236,224,196,0.65); line-height:1.7;">
        Ai menționat că preferi să fii contactat <strong style="color:#9fd653;">${contactWhenText}</strong> — vom ține cont de asta.
       </p>`
        : '';

    const interestsList = interests.length > 0
        ? `<div style="margin:24px 0; padding:18px 20px; background:rgba(159,214,83,0.07); border-left:3px solid #9fd653; border-radius:4px;">
         <p style="margin:0 0 8px; font-size:11px; font-weight:700; letter-spacing:0.12em; color:rgba(236,224,196,0.4); text-transform:uppercase;">Interesele tale</p>
         ${interests.map(i => `<div style="font-size:14px; color:rgba(236,224,196,0.8); padding:3px 0;">• ${i}</div>`).join('')}
       </div>`
        : '';

    return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Mulțumim, ${name}!</title>
  <style>${baseStyles}</style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#0d2015">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#0f2a1a; border-radius:16px; overflow:hidden; border:1px solid rgba(159,214,83,0.12);">

          <!-- Header -->
          ${logoBlock}

          <!-- Hero band -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f3320 0%,#162e1a 100%); padding:40px 40px 36px;">
              <p style="margin:0 0 10px; font-size:11px; font-weight:700; letter-spacing:0.18em; color:#9fd653; text-transform:uppercase;">Formular tău a fost primit ✓</p>
              <h1 style="margin:0 0 12px; font-size:28px; font-weight:700; color:#ffffff; line-height:1.2;">Mulțumim, ${name}!</h1>
              <p style="margin:0; font-size:16px; color:rgba(236,224,196,0.7); line-height:1.6;">
                Echipa Parcului Natural Zer0 Waste te va contacta în cel mult <strong style="color:#9fd653;">24 de ore</strong>.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 16px; font-size:15px; color:rgba(236,224,196,0.65); line-height:1.7;">
                Am înregistrat cu succes solicitarea ta din partea <strong style="color:rgba(236,224,196,0.9);">${org}</strong> (${role}).
              </p>
              ${contactNote}
              ${interestsList}
              <p style="margin:24px 0 0; font-size:15px; color:rgba(236,224,196,0.65); line-height:1.7;">
                Între timp, poți afla mai multe despre proiect sau descărca prezentarea de pe site-ul nostru.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td style="background:#9fd653; border-radius:8px;">
                    <a href="https://zerowasteilfov.ro" style="display:inline-block; padding:14px 32px; font-size:15px; font-weight:700; color:#0f2a1a; text-decoration:none; letter-spacing:0.02em;">
                      Vizitează site-ul →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr><td>${footer}</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Thank-you email for the Survey (Public Consultation) form
 */
export function surveyEmailHtml({ name, selected_needs = [] }) {
    const needsList = selected_needs.length > 0
        ? `<div style="margin:24px 0; padding:18px 20px; background:rgba(159,214,83,0.07); border-left:3px solid #9fd653; border-radius:4px;">
         <p style="margin:0 0 10px; font-size:11px; font-weight:700; letter-spacing:0.12em; color:rgba(236,224,196,0.4); text-transform:uppercase;">Nevoile tale selectate</p>
         ${selected_needs.map(n => `<div style="font-size:14px; color:rgba(236,224,196,0.8); padding:3px 0;">• ${n}</div>`).join('')}
       </div>`
        : '';

    return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Opinia ta contează, ${name}!</title>
  <style>${baseStyles}</style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#0d2015">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#0f2a1a; border-radius:16px; overflow:hidden; border:1px solid rgba(159,214,83,0.12);">

          <!-- Header -->
          ${logoBlock}

          <!-- Hero band -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f3320 0%,#162e1a 100%); padding:40px 40px 36px;">
              <p style="margin:0 0 10px; font-size:11px; font-weight:700; letter-spacing:0.18em; color:#9fd653; text-transform:uppercase;">Consultare publică · Răspuns înregistrat ✓</p>
              <h1 style="margin:0 0 12px; font-size:28px; font-weight:700; color:#ffffff; line-height:1.2;">Opinia ta contează, ${name}!</h1>
              <p style="margin:0; font-size:16px; color:rgba(236,224,196,0.7); line-height:1.6;">
                Răspunsurile tale vor contribui direct la conturarea <strong style="color:#9fd653;">Parcului Natural Zer0 Waste</strong>.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 20px; font-size:15px; color:rgba(236,224,196,0.65); line-height:1.7;">
                Am înregistrat cu succes participarea ta la consultarea publică. Fiecare voce ajută echipa să proiecteze un parc cu adevărat util comunității.
              </p>
              ${needsList}
              <p style="margin:20px 0; font-size:15px; color:rgba(236,224,196,0.55); line-height:1.7;">
                Dacă dorești să ne contactezi direct sau să afli noutăți despre progresul proiectului, scrie-ne la
                <a href="mailto:zerowaste@cjilfov.ro" style="color:#9fd653; text-decoration:none;">zerowaste@cjilfov.ro</a>.
              </p>

              <!-- Park pillars -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
                <tr>
                  ${['♻️ Reciclare', '📚 Educație', '💡 Inovație'].map(pillar => `
                  <td width="33%" style="padding:0 6px 0 0;">
                    <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(159,214,83,0.15); border-radius:8px; padding:14px; text-align:center;">
                      <div style="font-size:14px; color:rgba(236,224,196,0.7);">${pillar}</div>
                    </div>
                  </td>`).join('')}
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td style="background:#9fd653; border-radius:8px;">
                    <a href="https://zerowasteilfov.ro" style="display:inline-block; padding:14px 32px; font-size:15px; font-weight:700; color:#0f2a1a; text-decoration:none;">
                      Descoperă mai mult →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr><td>${footer}</td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
