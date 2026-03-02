import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Privacy = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookies'>(location.pathname === '/cookies' ? 'cookies' : 'privacy');
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [prefsConsent, setPrefsConsent] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (location.pathname === '/cookies' || window.location.hash === '#cookies') setActiveTab('cookies');
    else setActiveTab('privacy');
  }, [location.pathname]);

  const savePrefs = () => {
    document.cookie = `zw_consent_analytics=${analyticsConsent};max-age=31536000;path=/;SameSite=Lax`;
    document.cookie = `zw_consent_prefs=${prefsConsent};max-age=31536000;path=/;SameSite=Lax`;
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-dark text-cream font-body">
      {/* Header */}
      <header className="bg-forest py-14 px-6 text-center">
        <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-lime border border-lime/30 px-3.5 py-1 rounded-sm mb-5">
          Consiliul Județean Ilfov · zerowaste.cjilfov.ro
        </span>
        <h1 className="text-[clamp(1.5rem,4vw,2.4rem)] font-semibold text-cream mb-2.5">
          Politica de Confidențialitate<br />& Politica Cookies
        </h1>
        <p className="text-[0.88rem] text-muted-foreground font-light">
          Ultima actualizare: <strong className="text-cream font-semibold">Februarie 2026</strong> &nbsp;·&nbsp; Operator: Consiliul Județean Ilfov
        </p>
      </header>

      {/* Tabs */}
      <nav className="bg-forest sticky top-0 z-50" style={{ borderBottom: '1px solid hsl(77 69% 58% / 0.15)' }}>
        <div className="max-w-[820px] mx-auto px-6 flex">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`bg-transparent border-none font-body text-sm font-medium px-6 py-4 cursor-pointer border-b-2 transition-colors ${activeTab === 'privacy' ? 'text-lime border-lime' : 'text-muted-foreground border-transparent hover:text-cream'}`}
          >
            Politica de Confidențialitate
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`bg-transparent border-none font-body text-sm font-medium px-6 py-4 cursor-pointer border-b-2 transition-colors ${activeTab === 'cookies' ? 'text-lime border-lime' : 'text-muted-foreground border-transparent hover:text-cream'}`}
          >
            Politica Cookies
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[820px] mx-auto px-6 py-14">
        {activeTab === 'privacy' && (
          <div>
            <div className="bg-lime/[0.07] border border-lime/20 rounded-md p-5 mb-6">
              <p className="text-[0.9rem] text-muted-foreground font-light m-0">
                Această politică descrie modul în care <strong className="text-cream font-semibold">Consiliul Județean Ilfov</strong> (denumit în continuare „Operatorul" sau „CJ Ilfov") colectează, utilizează și protejează datele dumneavoastră cu caracter personal prin subdomeniul <strong className="text-cream font-semibold">zerowaste.cjilfov.ro</strong>, în contextul proiectului <strong className="text-cream font-semibold">Parcul Natural Zer0 Waste</strong>.
              </p>
            </div>

            <SectionTitle>1. Identitatea și datele de contact ale Operatorului</SectionTitle>
            <DataTable
              headers={['Atribut', 'Detalii']}
              rows={[
                ['Operator', 'Consiliul Județean Ilfov'],
                ['Sediu', 'Șos. București–Urziceni nr. 13, Ilfov'],
                ['Email contact', <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a>],
<<<<<<< HEAD
                ['Responsabil protecția datelor (DPO)', <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a>],
=======
                ['Responsabil protecția datelor (DPO)', <a href="mailto:dpo@cjilfov.ro" className="text-lime">dpo@cjilfov.ro</a>],
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
                ['Autoritatea de supraveghere', <span>ANSPDCP – <a href="https://www.dataprotection.ro" target="_blank" rel="noopener" className="text-lime">www.dataprotection.ro</a></span>],
              ]}
            />

            <SectionTitle>2. Ce date colectăm și în ce scop</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Prin formularul de lead disponibil pe <strong className="text-cream font-semibold">zerowaste.cjilfov.ro</strong>, colectăm exclusiv datele necesare pentru a vă contacta în legătură cu proiectul Parcul Natural Zer0 Waste:</p>
            <DataTable
              headers={['Categorie date', 'Câmpuri', 'Scop', 'Temei legal (GDPR)']}
              rows={[
                ['Date de identificare', 'Nume, prenume, organizație, rol', 'Personalizarea comunicării și identificarea tipului de colaborare potrivit', 'Art. 6(1)(a) – consimțământ'],
                ['Date de contact', 'Adresă email, număr telefon', 'Follow-up în legătură cu proiectul, transmiterea de informații și prezentări', 'Art. 6(1)(a) – consimțământ'],
                ['Date de interes', 'Tipul de interes bifat (replicare, sponsorizare etc.), preferința de contact', 'Direcționarea către echipa potrivită din CJ Ilfov', 'Art. 6(1)(a) – consimțământ'],
                ['Date tehnice', 'Parametri UTM (sursă, medium, campanie) din URL-ul de acces', 'Măsurarea eficienței comunicărilor (stand Romexpo vs. online)', 'Art. 6(1)(f) – interes legitim'],
              ]}
            />
            <p className="text-muted-foreground font-light mb-3"><strong className="text-cream font-semibold">Nu colectăm</strong> date din categorii speciale (art. 9 GDPR), nu efectuăm profilare automată și nu luăm decizii automate cu efect juridic.</p>

            <SectionTitle>3. Perioada de stocare</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Datele dumneavoastră vor fi stocate pentru o perioadă de <strong className="text-cream font-semibold">maximum 12 luni</strong> de la data completării formularului, sau până la retragerea consimțământului, oricare survine mai devreme. La expirarea termenului, datele sunt șterse sau anonimizate.</p>
            <p className="text-muted-foreground font-light mb-3">Dacă din completarea formularului rezultă o relație contractuală sau instituțională (ex. protocol de colaborare), datele pot fi stocate pe durata relației și ulterior conform obligațiilor legale de arhivare (Legea nr. 16/1996).</p>

            <SectionTitle>4. Cui transmitem datele</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">CJ Ilfov nu vinde și nu comercializează datele dumneavoastră. Datele pot fi accesate de:</p>
            <ul className="text-muted-foreground font-light pl-5 mb-3 list-disc space-y-1.5">
              <li><strong className="text-cream font-semibold">Personalul CJ Ilfov</strong> responsabil cu proiectul (echipa Parcul Natural Zer0 Waste), strict pentru scopul declarat.</li>
              <li><strong className="text-cream font-semibold">Furnizori de servicii tehnice</strong> (ex. hosting, serviciu email, CRM) care acționează ca împuterniciți ai operatorului pe baza unor contracte ce includ clauze de protecția datelor.</li>
              <li><strong className="text-cream font-semibold">Autorități publice</strong>, dacă există o obligație legală.</li>
            </ul>
            <p className="text-muted-foreground font-light mb-3">Nu transferăm date în afara Spațiului Economic European (SEE) fără a asigura garanții adecvate.</p>

            <SectionTitle>5. Drepturile dumneavoastră</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Conform GDPR (Regulamentul UE 679/2016), aveți următoarele drepturi:</p>
            <ul className="text-muted-foreground font-light pl-5 mb-3 list-disc space-y-1.5">
              <li><strong className="text-cream font-semibold">Dreptul de acces</strong> – să solicitați o copie a datelor pe care le deținem despre dumneavoastră.</li>
              <li><strong className="text-cream font-semibold">Dreptul la rectificare</strong> – să corectați datele inexacte sau incomplete.</li>
              <li><strong className="text-cream font-semibold">Dreptul la ștergere</strong> – să solicitați ștergerea datelor, în limitele prevăzute de lege.</li>
              <li><strong className="text-cream font-semibold">Dreptul la restricționarea prelucrării</strong> – în anumite condiții, să limitați modul în care prelucrăm datele dumneavoastră.</li>
              <li><strong className="text-cream font-semibold">Dreptul la portabilitate</strong> – să primiți datele furnizate într-un format structurat, uzual citit automat.</li>
              <li><strong className="text-cream font-semibold">Dreptul de opoziție</strong> – să vă opuneți prelucrărilor bazate pe interes legitim.</li>
              <li><strong className="text-cream font-semibold">Dreptul de retragere a consimțământului</strong> – oricând, fără a afecta legalitatea prelucrărilor anterioare.</li>
              <li><strong className="text-cream font-semibold">Dreptul de a depune plângere</strong> la ANSPDCP (<a href="https://www.dataprotection.ro" target="_blank" rel="noopener" className="text-lime">www.dataprotection.ro</a>).</li>
            </ul>
<<<<<<< HEAD
            <p className="text-muted-foreground font-light mb-3">Pentru exercitarea oricărui drept, scrieți la: <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a>. Vom răspunde în termen de 30 de zile.</p>
=======
            <p className="text-muted-foreground font-light mb-3">Pentru exercitarea oricărui drept, scrieți la: <a href="mailto:dpo@cjilfov.ro" className="text-lime">dpo@cjilfov.ro</a> sau <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a>. Vom răspunde în termen de 30 de zile.</p>
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822

            <SectionTitle>6. Securitate</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">CJ Ilfov aplică măsuri tehnice și organizatorice adecvate pentru protejarea datelor: conexiune HTTPS, acces restricționat pe bază de rol, stocarea pe infrastructura securizată a CJ Ilfov sau a furnizorilor agreeați. În caz de incident de securitate cu risc ridicat, veți fi notificat conform prevederilor art. 34 GDPR.</p>

            <SectionTitle>7. Modificări ale politicii</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Această politică poate fi actualizată. Versiunea în vigoare este întotdeauna disponibilă la <Link to="/privacy" className="text-lime">zerowaste.cjilfov.ro/privacy</Link>. Modificările semnificative vor fi comunicate prin email dacă deținem adresa dumneavoastră.</p>

            <SectionTitle>8. Contact</SectionTitle>
<<<<<<< HEAD
            <p className="text-muted-foreground font-light mb-3">Pentru protecția datelor sau întrebări despre proiect: <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a></p>
=======
            <p className="text-muted-foreground font-light mb-3">Pentru orice întrebare legată de protecția datelor: <a href="mailto:dpo@cjilfov.ro" className="text-lime">dpo@cjilfov.ro</a><br />Pentru întrebări despre proiect: <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a></p>
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
          </div>
        )}

        {activeTab === 'cookies' && (
          <div>
            <div className="bg-lime/[0.07] border border-lime/20 rounded-md p-5 mb-6">
              <p className="text-[0.9rem] text-muted-foreground font-light m-0">
                Această politică descrie ce cookie-uri și tehnologii similare folosim pe <strong className="text-cream font-semibold">zerowaste.cjilfov.ro</strong> și cum puteți gestiona preferințele dumneavoastră.
              </p>
            </div>

            <SectionTitle>1. Ce sunt cookie-urile?</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Cookie-urile sunt fișiere text mici stocate pe dispozitivul dumneavoastră atunci când vizitați un site web. Ele permit site-ului să „memoreze" anumite informații despre vizita dumneavoastră. Nu conțin programe software și nu pot accesa alte fișiere de pe dispozitivul dumneavoastră.</p>

            <SectionTitle>2. Ce cookie-uri folosim</SectionTitle>
            <DataTable
              headers={['Tip cookie', 'Nume / Furnizor', 'Scop', 'Durată', 'Obligatoriu?']}
              rows={[
                ['Strict necesare', 'session_id (intern)', 'Funcționarea formularului, protecție CSRF', 'Sesiune', '✅ Da'],
                ['Analiză & statistici', 'Google Analytics 4 (_ga, _ga_*) sau Matomo (_pk_id, _pk_ses)', 'Măsurarea traficului, conversii, surse (UTM QR vs. online)', 'GA4: 2 ani / Matomo: 13 luni', '❌ Opțional'],
                ['Preferințe', 'zw_lang (intern)', 'Salvarea preferinței de limbă (RO / EN)', '1 an', '❌ Opțional'],
              ]}
            />
            <p className="text-muted-foreground font-light mb-3"><strong className="text-cream font-semibold">Nu folosim</strong> cookie-uri de marketing, retargeting sau rețele sociale de la terți.</p>

            <SectionTitle>3. Parametri UTM (nu sunt cookie-uri)</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Linkurile QR de la standul Green Energy Expo / Romexpo conțin parametri UTM în URL (<code className="text-lime/80 text-[0.85em]">utm_source=romexpo&utm_medium=qr&utm_campaign=zerowaste_stand_2026</code>). Aceștia sunt citiți din URL la accesarea paginii și nu stochează date pe dispozitivul dumneavoastră.</p>

            <SectionTitle>4. Cum puteți gestiona preferințele</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Puteți gestiona cookie-urile opționale prin widgetul de mai jos, din setările browser-ului sau prin instrumentele specifice furnizorilor de analiză:</p>
            <ul className="text-muted-foreground font-light pl-5 mb-3 list-disc space-y-1.5">
              <li><strong className="text-cream font-semibold">Google Analytics opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-lime">tools.google.com/dlpage/gaoptout</a></li>
              <li><strong className="text-cream font-semibold">Setări browser:</strong> Majoritatea browserelor permit blocarea sau ștergerea cookie-urilor din Settings → Privacy.</li>
            </ul>

            <h3 className="text-base font-semibold text-cream mt-6 mb-2">Preferințele tale cookie</h3>

            {/* Cookie toggles */}
            <CookieToggle label="Cookie-uri strict necesare" sub="Esențiale pentru funcționarea formularului. Nu pot fi dezactivate." checked disabled />
            <CookieToggle label="Cookie-uri de analiză" sub="Google Analytics 4 sau Matomo — măsurarea traficului și a conversiilor." checked={analyticsConsent} onChange={setAnalyticsConsent} />
            <CookieToggle label="Cookie-uri de preferințe" sub="Salvarea limbii selectate (RO / EN)." checked={prefsConsent} onChange={setPrefsConsent} />

            <button onClick={savePrefs} className="inline-block bg-lime text-forest font-body text-[0.9rem] font-bold py-3 px-7 rounded-md border-none cursor-pointer mt-4 hover:brightness-110 transition-all">
              {saved ? '✓ Preferințe salvate' : 'Salvează preferințele'}
            </button>

            <SectionTitle>5. Temei legal</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Cookie-urile strict necesare sunt utilizate în temeiul <strong className="text-cream font-semibold">art. 6(1)(f) GDPR</strong> (interes legitim – funcționarea site-ului). Cookie-urile opționale sunt utilizate pe baza <strong className="text-cream font-semibold">consimțământului dumneavoastră (art. 6(1)(a) GDPR)</strong>, exprimat prin widgetul de mai sus sau prin cookie notice-ul de la prima vizită. Consimțământul poate fi retras oricând.</p>

            <SectionTitle>6. Modificări</SectionTitle>
            <p className="text-muted-foreground font-light mb-3">Această politică poate fi actualizată pentru a reflecta schimbări în tehnologiile utilizate sau în cerințele legale. Verificați periodic pagina <Link to="/cookies" className="text-lime">zerowaste.cjilfov.ro/cookies</Link>.</p>

            <SectionTitle>7. Contact</SectionTitle>
<<<<<<< HEAD
            <p className="text-muted-foreground font-light mb-3">Întrebări despre cookie-uri: <a href="mailto:zerowaste@cjilfov.ro" className="text-lime">zerowaste@cjilfov.ro</a></p>
=======
            <p className="text-muted-foreground font-light mb-3">Întrebări despre cookie-uri: <a href="mailto:dpo@cjilfov.ro" className="text-lime">dpo@cjilfov.ro</a></p>
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-[820px] mx-auto px-6 py-8 text-center" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.1)' }}>
        <Link to="/" className="inline-flex items-center gap-2 text-lime text-[0.88rem] font-medium mb-4">← Înapoi la zerowaste.cjilfov.ro</Link>
        <p className="text-[0.82rem] font-light" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>
          © 2026 Consiliul Județean Ilfov &nbsp;·&nbsp; Toate drepturile rezervate &nbsp;·&nbsp; <Link to="/privacy" className="text-lime">Confidențialitate</Link> &nbsp;·&nbsp; <Link to="/cookies" className="text-lime">Cookies</Link>
        </p>
      </footer>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[1.3rem] font-semibold text-lime mt-10 mb-3 pb-2" style={{ borderBottom: '1px solid hsl(77 69% 58% / 0.15)' }}>
    {children}
  </h2>
);

const DataTable = ({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) => (
  <div className="overflow-x-auto mb-6">
    <table className="w-full border-collapse text-[0.9rem] my-4">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="bg-forest text-lime font-semibold text-left p-2.5 px-3.5 text-[0.8rem] tracking-[0.06em] uppercase">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-lime/[0.03]">
            {row.map((cell, j) => (
              <td key={j} className="p-2.5 px-3.5 text-muted-foreground font-light align-top" style={{ borderBottom: '1px solid hsl(40 33% 93% / 0.05)' }}>
                {typeof cell === 'string' && j === 0 ? <strong className="text-cream font-semibold">{cell}</strong> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CookieToggle = ({ label, sub, checked, disabled, onChange }: { label: string; sub: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) => (
  <div className="flex justify-between items-center py-3.5" style={{ borderBottom: '1px solid hsl(40 33% 93% / 0.06)' }}>
    <div>
      <div className="text-[0.92rem] font-medium text-cream">{label}</div>
      <div className="text-[0.8rem] text-muted-foreground font-light mt-0.5">{sub}</div>
    </div>
    <label className="relative inline-block w-11 h-6 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        className="sr-only peer"
      />
      <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} peer-checked:bg-lime bg-cream/15`} />
      <span className="absolute left-[3px] bottom-[3px] w-[18px] h-[18px] rounded-full transition-transform duration-300 peer-checked:translate-x-5 peer-checked:bg-forest bg-cream" />
    </label>
  </div>
);

export default Privacy;
