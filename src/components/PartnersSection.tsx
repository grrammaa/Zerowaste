import { useLang } from '@/contexts/LangContext';
import logoCjIlfov from '@/assets/logo_cj_ilfov_text_alb.png';
import logoCernica from '@/assets/logo_cernica_fundal_transparent_text_alb.png';
import logoUAUIM from '@/assets/UAUIM.png';
import logoRUD from '@/assets/RUD.png';
import logoIlfovImpreuna from '@/assets/logo_ilfov_impreuna_text_alb.png';
import logoReplastic from '@/assets/logo_replast_text_alb.png';

const PartnersSection = () => {
  const { t } = useLang();

  const types = [
    { icon: '🏛️', titleRo: 'Replicare UAT / CJ', titleEn: 'Replication UAT / County Councils', descRo: 'Autorități locale și județene care doresc să replice modelul Zer0 Waste în comunitatea lor. Oferim know-how, metodologie și suport în implementare.', descEn: 'Local and county authorities who want to replicate the Zer0 Waste model in their community. We offer know-how, methodology and implementation support.' },
    { icon: '🤝', titleRo: 'Sponsorizare & materiale', titleEn: 'Sponsorship & materials', descRo: 'Companii care doresc să contribuie cu materiale reciclate, finanțare sau echipamente. Vizibilitate în parc, la stand și în toate comunicările CJ Ilfov.', descEn: 'Companies wishing to contribute recycled materials, funding or equipment. Visibility in the park, at the booth and in all Ilfov County Council communications.' },
    { icon: '⚙️', titleRo: 'Tehnologie & Educație', titleEn: 'Technology & Education', descRo: 'Furnizori de soluții smart, energie regenerabilă, monitorizare IoT sau programe educaționale de mediu. Integrare directă în proiect.', descEn: 'Providers of smart solutions, renewable energy, IoT monitoring or environmental education programs. Direct integration into the project.' },
  ];

  const institutionalPartners = [
    { src: logoCjIlfov, alt: 'Consiliul Județean Ilfov', bg: 'transparent', filter: '', h: '115px', href: 'https://www.cjilfov.ro' },
    { src: logoCernica, alt: 'Comuna Cernica', bg: 'transparent', filter: '', h: '110px', href: 'https://cernica.informare.ro/' },
    { src: logoIlfovImpreuna, alt: 'Ilfov Împreună', bg: 'transparent', filter: '', h: '125px', href: 'https://www.ilfovimpreuna.ro' },
    { src: logoUAUIM, alt: 'UAUIM – Universitatea de Arhitectură și Urbanism Ion Mincu', bg: 'transparent', filter: 'invert(1)', h: '100px', href: 'https://www.uauim.ro' },
  ];

  const exhibitionPartners = [
    { src: logoReplastic, alt: 'Replastic', bg: 'transparent', filter: '', h: '65px', href: 'https://replastic.ro' },
    { src: logoRUD, alt: 'RUD', bg: 'transparent', filter: '', h: '60px', href: 'https://www.mobilierurbanmodern.ro' },
  ];

  return (
    <section id="partners" className="py-[100px] max-md:py-[72px] bg-dark">
      <div className="container">
        <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
          {t('06 · Ce căutăm acum', "06 · What we're looking for")}
        </p>
        <h2
          className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{
            __html: t(
              'Construim <em class="italic text-lime">împreună</em> parcul.',
              "We're building the park <em class=\"italic text-lime\">together</em>."
            ),
          }}
        />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mt-14">
          {types.map((pt, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} p-9 px-7 rounded-lg transition-all duration-300 cursor-default`}
              style={{ border: '1px solid hsl(77 69% 58% / 0.15)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(77 69% 58% / 0.5)'; e.currentTarget.style.background = 'hsl(77 69% 58% / 0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(77 69% 58% / 0.15)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <div className="text-[1.8rem] mb-4">{pt.icon}</div>
              <h3 className="font-head text-lg font-bold mb-2.5" style={{ color: 'white' }}>{t(pt.titleRo, pt.titleEn)}</h3>
              <p className="text-[0.88rem] text-muted-foreground font-light">{t(pt.descRo, pt.descEn)}</p>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="reveal mt-16 pt-10" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.12)' }}>
          <div className="mb-12">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-8" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>
              {t('Parteneri instituționali', 'Institutional partners')}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
              {institutionalPartners.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: logo.bg,
                    padding: logo.bg === 'transparent' ? '0' : '15px 28px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: logo.h || '56px', width: 'auto', objectFit: 'contain', filter: logo.filter || 'none' }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-8" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>
              {t('Parteneri expoziție', 'Exhibition partners')}
            </p>
            <div className="flex flex-wrap gap-14 items-center max-md:justify-center">
              {exhibitionPartners.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: logo.bg,
                    padding: logo.bg === 'transparent' ? '0' : '15px 28px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: logo.h || '56px', width: 'auto', objectFit: 'contain', filter: logo.filter || 'none' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
