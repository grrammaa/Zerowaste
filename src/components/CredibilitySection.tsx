import { useLang } from '@/contexts/LangContext';
import loc1Pdf from '@/assets/loc1.pdf?url';
import loc2Pdf from '@/assets/loc2.pdf?url';
import loc3Pdf from '@/assets/loc3.pdf?url';

const CredibilitySection = () => {
  const { t, lang } = useLang();

  const projects = [
    {
      place: '🥇 Locul 1',
      titleRo: 'Pădurea în Cercul Vieții',
      titleEn: 'The Forest in the Circle of Life',
      descRo: 'Viziune circulară pentru sustenabilitate — integrat în planul oficial al parcului. Echipa 3, UAUIM.',
      descEn: 'Circular vision for sustainability — integrated into the official park plan. Team 3, UAUIM.',
      pdf: loc1Pdf,
      filename: 'Proiect_Loc_1_Zer0Waste.pdf'
    },
    {
      place: '🥈 Locul 2',
      titleRo: 'Miraza Naturii',
      titleEn: 'The Mirror of Nature',
      descRo: 'Design ce reflectă biodiversitatea și conexiunea om–natură — selectat pentru implementare. Echipa 6, UAUIM.',
      descEn: 'Design reflecting biodiversity and human–nature connection — selected for implementation. Team 6, UAUIM.',
      pdf: loc2Pdf,
      filename: 'Proiect_Loc_2_Zer0Waste.pdf'
    },
    {
      place: '🥉 Locul 3',
      titleRo: 'Shape of Woods',
      titleEn: 'Shape of Woods',
      descRo: 'Arhitectură organică inspirată din formele pădurii — concept de amenajare integrat. Echipa 5, UAUIM.',
      descEn: 'Organic architecture inspired by forest forms — integrated design concept. Team 5, UAUIM.',
      pdf: loc3Pdf,
      filename: 'Proiect_Loc_3_Zer0Waste.pdf'
    },
  ];

  return (
    <section id="credibility" className="py-[100px] max-md:py-[72px] bg-forest">
      <div className="container">
        <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
          {t('05 · Credibilitate', '05 · Credibility')}
        </p>
        <h2
          className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{
            __html: t(
              'Proiecte selectate de <em class="italic text-lime">UAUIM</em>',
              'Projects selected by <em class="italic text-lime">UAUIM</em>'
            ),
          }}
        />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mt-14">
          {projects.map((p, i) => (
            <div key={i} className={`reveal reveal-d${i + 1} p-8 rounded-xl flex flex-col`} style={{ background: 'hsl(150 36% 9% / 0.4)', border: '1px solid hsl(77 69% 58% / 0.15)' }}>
              <p className="text-[10px] tracking-[0.15em] uppercase text-lime font-bold mb-3">{p.place}</p>
              <h3 className="font-head text-[1.25rem] font-bold mb-3" style={{ color: 'white' }}>{t(p.titleRo, p.titleEn)}</h3>
              <p className="text-[0.88rem] text-muted-foreground font-light mb-8 flex-1">{t(p.descRo, p.descEn)}</p>

              <a
                href={p.pdf}
                download={p.filename}
                className="flex items-center gap-2.5 text-[0.8rem] font-bold tracking-wider uppercase text-lime hover:text-white transition-colors group"
                style={{ width: 'fit-content' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-0.5 transition-transform">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t('Descarcă Proiectul', 'Download Project')}
              </a>
            </div>
          ))}
        </div>

        {/* Workshop block */}
        <div className="reveal mt-14 flex max-md:flex-col gap-12 max-md:gap-7 items-center p-10 max-md:p-6 rounded-lg" style={{ background: 'hsl(77 69% 58% / 0.07)', border: '1px solid hsl(77 69% 58% / 0.2)' }}>
          <div className="flex-1">
            <h3 className="font-head text-[1.4rem] font-bold mb-2.5" style={{ color: 'white' }}>
              {t('Workshop UAUIM × CJ Ilfov', 'UAUIM × CJ Ilfov Workshop')}
            </h3>
            <p className="text-[0.93rem] text-muted-foreground font-light">
              {t(
                'Vizita de teren și primul workshop dedicat parcului s-au desfășurat în colaborare cu Universitatea de Arhitectură și Urbanism \u201cIon Mincu\u201d. Studenții Facultății de Urbanism au analizat amplasamentul împreună cu Arhitectul Șef al CJ Ilfov, Urb. Olivia Oprescu-Ciobanu.',
                'The site visit and first workshop dedicated to the park took place in collaboration with the \u201cIon Mincu\u201d University of Architecture and Urbanism. Faculty of Urbanism students analyzed the site together with the Chief Architect of Ilfov County Council, Urb. Olivia Oprescu-Ciobanu.'
              )}
            </p>
          </div>
          <div className="flex-shrink-0 text-center max-md:border-t max-md:pt-7 max-md:border-l-0 md:border-l md:pl-12" style={{ borderColor: 'hsl(77 69% 58% / 0.2)' }}>
            <div className="font-head text-[3.5rem] font-black text-lime leading-none">3</div>
            <div className="text-[0.8rem] text-muted-foreground tracking-[0.05em] mt-1">{t('proiecte selectate', 'projects selected')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
