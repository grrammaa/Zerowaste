import { useState, FormEvent } from 'react';
import { useLang } from '@/contexts/LangContext';

const FormSection = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
<<<<<<< HEAD
  const [gdprChecked, setGdprChecked] = useState(false);
=======
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    if (honeypot) return;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const org = (form.elements.namedItem('organization') as HTMLInputElement).value.trim();
    const role = (form.elements.namedItem('role') as HTMLSelectElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const checks = form.querySelectorAll<HTMLInputElement>('input[name=interest]:checked');
    const gdpr = (form.elements.namedItem('gdpr') as HTMLInputElement).checked;
    const contact_when = (form.elements.namedItem('contact_when') as HTMLInputElement)?.value ?? '';

    setValidationError(null);

    if (!name || !org || !role || !email || !phone || checks.length === 0 || !gdpr) {
      setValidationError(
        lang === 'ro'
          ? 'Te rugăm completează toate câmpurile obligatorii și bifează cel puțin un interes.'
          : 'Please fill in all required fields and select at least one interest.'
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError(
        lang === 'ro' ? 'Adresa de email nu este validă.' : 'Please enter a valid email address.'
      );
      return;
    }

    const interests = Array.from(checks).map((cb) => cb.value);

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, org, role, email, phone, interests, contact_when }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Server error');
      setSubmitted(true);
    } catch (err) {
      console.error('[FormSection] submit error', err);
      setError(
        lang === 'ro'
          ? 'A apărut o eroare. Te rugăm încearcă din nou.'
          : 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form-section" className="py-[100px] max-md:py-[72px] bg-forest relative overflow-hidden">
      <div className="absolute -bottom-[300px] -left-[200px] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(77 69% 58% / 0.05), transparent 70%)' }} />
      <div className="container">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 items-start">
          {/* Left intro */}
          <div className="max-md:static md:sticky md:top-[100px]">
            <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
              {t('08 · Contact', '08 · Contact')}
            </p>
            <h2
              className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-4"
              style={{ color: 'white' }}
              dangerouslySetInnerHTML={{
                __html: t(
                  'Lasă-ți datele.<br/><em class="italic text-lime">Te contactăm în 24h.</em>',
                  'Leave your details.<br/><em class="italic text-lime">We\'ll reach out in 24h.</em>'
                ),
              }}
            />
            <p className="reveal reveal-d2 text-[0.95rem] text-muted-foreground font-light mb-8">
              {t(
                'Formularul durează sub 60 de secunde. Nicio birocrație — doar o conversație despre cum putem colabora.',
                'The form takes under 60 seconds. No bureaucracy — just a conversation about how we can collaborate.'
              )}
            </p>
            <span className="reveal reveal-d3 inline-flex items-center gap-2 text-lime text-[0.82rem] font-semibold tracking-[0.05em] px-4 py-2 rounded-full" style={{ background: 'hsl(77 69% 58% / 0.1)', border: '1px solid hsl(77 69% 58% / 0.25)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {t('Completezi în ~15 secunde', 'Complete in ~15 seconds')}
            </span>
          </div>

          {/* Right form */}
          <div>
            {!submitted ? (
              <form className="reveal flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
                {/* Honeypot */}
                <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                      {t('Nume și prenume', 'Full name')}<span className="text-lime ml-0.5">*</span>
                    </label>
                    <input name="name" type="text" required autoComplete="name" placeholder={lang === 'ro' ? 'Ion Popescu' : 'John Smith'}
                      className="field-input rounded-lg text-[0.95rem] p-3.5 px-4 w-full outline-none font-body text-cream transition-colors duration-200 focus:border-lime"
                      style={{ background: 'hsl(150 36% 9% / 0.7)', border: '1px solid hsl(40 33% 93% / 0.12)' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                      {t('Organizație / Instituție', 'Organization / Institution')}<span className="text-lime ml-0.5">*</span>
                    </label>
                    <input name="organization" type="text" required placeholder={lang === 'ro' ? 'Primăria Voluntari' : 'City Hall Voluntari'}
                      className="rounded-lg text-[0.95rem] p-3.5 px-4 w-full outline-none font-body text-cream transition-colors duration-200 focus:border-lime"
                      style={{ background: 'hsl(150 36% 9% / 0.7)', border: '1px solid hsl(40 33% 93% / 0.12)' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                      {t('Rol', 'Role')}<span className="text-lime ml-0.5">*</span>
                    </label>
                    <select name="role" required defaultValue="" className="rounded-lg text-[0.95rem] p-3.5 px-4 w-full outline-none font-body text-cream cursor-pointer transition-colors duration-200 focus:border-lime appearance-none"
                      style={{ background: 'hsl(150 36% 9% / 0.7)', border: '1px solid hsl(40 33% 93% / 0.12)' }}>
                      <option value="" disabled>{t('Selectează...', 'Select...')}</option>
                      <option value="uat">{t('CJ / Primărie / UAT', 'County Council / Municipality / UAT')}</option>
                      <option value="company">{t('Companie', 'Company')}</option>
                      <option value="ngo">{t('ONG', 'NGO')}</option>
                      <option value="press">{t('Presă / Media', 'Press / Media')}</option>
                      <option value="consultant">{t('Consultant', 'Consultant')}</option>
                      <option value="other">{t('Altul', 'Other')}</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                      Email<span className="text-lime ml-0.5">*</span>
                    </label>
                    <input name="email" type="email" required placeholder="ion.popescu@primarie.ro" autoComplete="email"
                      className="rounded-lg text-[0.95rem] p-3.5 px-4 w-full outline-none font-body text-cream transition-colors duration-200 focus:border-lime"
                      style={{ background: 'hsl(150 36% 9% / 0.7)', border: '1px solid hsl(40 33% 93% / 0.12)' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                    {t('Telefon', 'Phone')}<span className="text-lime ml-0.5">*</span>
                  </label>
                  <input name="phone" type="tel" required placeholder="+40 7XX XXX XXX" autoComplete="tel"
                    className="rounded-lg text-[0.95rem] p-3.5 px-4 w-full outline-none font-body text-cream transition-colors duration-200 focus:border-lime"
                    style={{ background: 'hsl(150 36% 9% / 0.7)', border: '1px solid hsl(40 33% 93% / 0.12)' }}
                  />
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                    {t('Sunt interesat de', "I'm interested in")}<span className="text-lime ml-0.5">*</span>
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { v: 'replicare', ro: 'Replicare în UAT', en: 'Replication in a municipality' },
                      { v: 'sponsorizare', ro: 'Sponsorizare / materiale', en: 'Sponsorship / materials' },
                      { v: 'tehnologie', ro: 'Tehnologie (energie / senzori / monitorizare)', en: 'Technology (energy / sensors / monitoring)' },
                      { v: 'educatie', ro: 'Educație / programe', en: 'Education / programs' },
                      { v: 'media', ro: 'Media / comunicare', en: 'Media / communication' },
                    ].map((item) => (
                      <label key={item.v} className="flex items-center gap-3 cursor-pointer text-[0.93rem] text-muted-foreground">
                        <input type="checkbox" name="interest" value={item.v} className="custom-checkbox" />
                        {t(item.ro, item.en)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact preference */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase" style={{ color: 'hsl(40 33% 93% / 0.5)' }}>
                    {t('Preferință contact (opțional)', 'Contact preference (optional)')}
                  </p>
                  <div className="flex flex-wrap gap-2.5 max-sm:flex-col">
                    {[
                      { v: 'today', ro: 'Astăzi', en: 'Today' },
                      { v: 'tomorrow', ro: 'Mâine', en: 'Tomorrow' },
                      { v: 'next_week', ro: 'Săptămâna viitoare', en: 'Next week' },
                    ].map((item) => (
                      <label key={item.v} className="flex items-center gap-2 cursor-pointer text-[0.88rem] text-muted-foreground px-3.5 py-2 rounded-full transition-colors duration-200 has-[input:checked]:border-lime has-[input:checked]:text-lime"
                        style={{ background: 'hsl(150 36% 9% / 0.6)', border: '1px solid hsl(40 33% 93% / 0.12)' }}
                      >
                        <input type="radio" name="contact_when" value={item.v} className="hidden" />
                        {t(item.ro, item.en)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* GDPR */}
                <div className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'hsl(150 36% 9% / 0.5)', border: '1px solid hsl(40 33% 93% / 0.08)' }}>
<<<<<<< HEAD
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    required
                    className="gdpr-checkbox"
                    checked={gdprChecked}
                    onChange={(e) => setGdprChecked(e.target.checked)}
                  />
                  <label htmlFor="gdpr" className="text-[0.82rem] leading-relaxed cursor-pointer" style={{ color: 'hsl(40 33% 93% / 0.45)' }}>
=======
                  <input type="checkbox" name="gdpr" required className="gdpr-checkbox" />
                  <label className="text-[0.82rem] leading-relaxed" style={{ color: 'hsl(40 33% 93% / 0.45)' }}>
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
                    {t(
                      'Sunt de acord cu prelucrarea datelor cu caracter personal de către Consiliul Județean Ilfov, în scopul de a fi contactat în legătură cu proiectul Parcul Natural Zer0 Waste. Datele vor fi stocate timp de 12 luni. Am citit și accept',
                      'I agree to the processing of my personal data by Ilfov County Council for the purpose of being contacted regarding the Zer0 Waste Natural Park project. Data will be stored for 12 months. I have read and accept the'
                    )}
<<<<<<< HEAD
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-lime text-[0.82rem]"
                      onClick={(e) => e.stopPropagation()}
                    >
=======
                    <a href="/privacy" target="_blank" className="text-lime text-[0.82rem]">
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
                      {t(' Politica de confidențialitate.', ' Privacy Policy.')}
                    </a>
                  </label>
                </div>

                {/* Validation / API error messages */}
                {validationError && (
                  <p className="text-red-400 text-[0.85rem] px-1">{validationError}</p>
                )}
                {error && (
                  <p className="text-red-400 text-[0.85rem] text-center">{error}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-lime text-forest font-body text-base font-bold py-[18px] px-8 border-none rounded-lg cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.3" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                        {t('Se trimite...', 'Sending...')}
                      </>
                    ) : (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        {t('Trimite — te contactăm în 24h', "Send — we'll reach out in 24h")}
                      </>
                    )}
                  </button>
                  <p className="text-[0.78rem] text-center mt-3" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>
                    {t('Niciun spam. Date procesate conform GDPR. Contact: zerowaste@cjilfov.ro', 'No spam. Data processed in accordance with GDPR. Contact: zerowaste@cjilfov.ro')}
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-[3rem] mb-4">🌿</div>
                <h3 className="font-head text-[1.8rem] mb-2.5" style={{ color: 'white' }}>{t('Mulțumim! Te sunăm în 24h.', "Thank you! We'll call you in 24h.")}</h3>
                <p className="text-muted-foreground mb-7">{t('Echipa Parcului Natural Zer0 Waste va lua legătura cu tine foarte curând.', 'The Zer0 Waste Natural Park team will be in touch with you very soon.')}</p>
                <div className="flex flex-col gap-3 items-center">
                  <a href="#" className="inline-flex items-center gap-2.5 text-lime text-[0.93rem] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:opacity-80" style={{ background: 'hsl(77 69% 58% / 0.1)', border: '1px solid hsl(77 69% 58% / 0.3)' }}>
                    ↓ {t('Descarcă prezentarea (PDF)', 'Download presentation (PDF)')}
                  </a>
                  <a href="#" className="inline-flex items-center gap-2.5 text-lime text-[0.93rem] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 hover:opacity-80" style={{ background: 'hsl(77 69% 58% / 0.1)', border: '1px solid hsl(77 69% 58% / 0.3)' }}>
                    ↓ {t('Descarcă one-pager A4 (PDF)', 'Download one-pager A4 (PDF)')}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
