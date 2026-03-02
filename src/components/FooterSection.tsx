import { useLang } from '@/contexts/LangContext';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import logoCjIlfov from '@/assets/logo_cj_ilfov_text_alb.png';
import logoCernica from '@/assets/logo_cernica_fundal_transparent_text_alb.png';
import logoUAUIM from '@/assets/UAUIM.png';
import logoRUD from '@/assets/RUD.png';
import logoIlfovImpreuna from '@/assets/logo_ilfov_impreuna_text_alb.png';
import logoReplastic from '@/assets/logo_replast_text_alb.png';
import logoMain from '@/assets/logo.png';

const institutionalPartners = [
  { src: logoCjIlfov, alt: 'Consiliul Județean Ilfov', bg: 'transparent', filter: '', h: '98px', href: 'https://www.cjilfov.ro' },
  { src: logoCernica, alt: 'Comuna Cernica', bg: 'transparent', filter: '', h: '90px', href: 'https://cernica.informare.ro/' },
  { src: logoIlfovImpreuna, alt: 'Ilfov Împreună', bg: 'transparent', filter: '', h: '98px', href: 'https://www.ilfovimpreuna.ro' },
  { src: logoUAUIM, alt: 'UAUIM – Ion Mincu', bg: 'transparent', filter: 'invert(1)', h: '80px', href: 'https://www.uauim.ro' },
];

const exhibitionPartners = [
  { src: logoReplastic, alt: 'Replastic', bg: 'transparent', filter: '', h: '50px', href: 'https://replastic.ro' },
  { src: logoRUD, alt: 'RUD', bg: 'transparent', filter: '', h: '45px', href: 'https://www.mobilierurbanmodern.ro' },
=======
import logoCjIlfov from '@/assets/logo_cj_ilfov.png';
import logoCernica from '@/assets/logo_cernica.jpeg';

const partnerLogos = [
  { src: logoCjIlfov, alt: 'Consiliul Județean Ilfov' },
  { src: logoCernica, alt: 'Comuna Cernica' },
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
];

const FooterSection = () => {
  const { t } = useLang();

  return (
    <footer className="bg-dark pt-14 pb-8" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.1)' }}>
      <div className="container">
        <div className="flex justify-between items-start gap-12 flex-wrap mb-12 max-md:flex-col">
          <div className="max-w-[280px]">
<<<<<<< HEAD
            <img src={logoMain} alt="Zer0 Waste Natural Park" style={{ height: '64px', width: 'auto', objectFit: 'contain', marginBottom: '10px' }} />
=======
            <div className="font-head text-lg font-bold mb-2" style={{ color: 'white' }}>Parcul Natural Zer0 Waste</div>
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
            <div className="text-[0.83rem] text-muted-foreground font-light" dangerouslySetInnerHTML={{
              __html: t(
                'Pădurea Căldăraru, Cernica, județul Ilfov<br/>Proiect inițiat și organizat de Consiliul Județean Ilfov',
                'Căldăraru Forest, Cernica, Ilfov County<br/>Project initiated and organized by Ilfov County Council'
              ),
            }} />
          </div>
          <div className="max-md:text-left text-right">
            <p className="text-[0.8rem] tracking-[0.1em] uppercase mb-3" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>{t('Contact', 'Contact')}</p>
            <a href="tel:+40212125693" className="block text-[0.88rem] text-muted-foreground mb-1 hover:text-lime transition-colors">021 212 5693</a>
            <a href="mailto:zerowaste@cjilfov.ro" className="block text-[0.88rem] text-lime mb-1">zerowaste@cjilfov.ro</a>
            <span className="block text-[0.82rem] mt-1.5" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>Str. Dr. Ernest Juvara 3, București</span>
          </div>
        </div>

        {/* Partners logos */}
        <div className="py-8 mb-6" style={{ borderTop: '1px solid hsl(40 33% 93% / 0.06)', borderBottom: '1px solid hsl(40 33% 93% / 0.06)' }}>
<<<<<<< HEAD
          <div className="mb-10">
            <p className="text-[0.75rem] tracking-[0.1em] uppercase mb-6 flex-shrink-0" style={{ color: 'hsl(40 33% 93% / 0.25)' }}>
              {t('Parteneri instituționali', 'Institutional partners')}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              {institutionalPartners.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: logo.bg,
                    padding: logo.bg === 'transparent' ? '0' : '10px 20px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: logo.h || '52px', width: 'auto', objectFit: 'contain', filter: logo.filter || 'none' }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.75rem] tracking-[0.1em] uppercase mb-6 flex-shrink-0" style={{ color: 'hsl(40 33% 93% / 0.25)' }}>
              {t('Parteneri expoziție', 'Exhibition partners')}
            </p>
            <div className="flex flex-wrap gap-12 items-center max-md:justify-center">
              {exhibitionPartners.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: logo.bg,
                    padding: logo.bg === 'transparent' ? '0' : '10px 20px',
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: logo.h || '52px', width: 'auto', objectFit: 'contain', filter: logo.filter || 'none' }}
                  />
                </a>
              ))}
            </div>
=======
          <p className="text-[0.75rem] tracking-[0.1em] uppercase mb-6 flex-shrink-0" style={{ color: 'hsl(40 33% 93% / 0.25)' }}>
            {t('Parteneri', 'Partners')}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {partnerLogos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-4 py-2 rounded-lg"
                style={{ background: 'white' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            ))}
            {/* Text-only partners without logos */}
            {['UAUIM – Ion Mincu', 'Ilfov Împreună'].map((name) => (
              <span key={name} className="text-[0.8rem] font-medium tracking-[0.04em] px-3 py-1.5 rounded-sm" style={{ color: 'hsl(40 33% 93% / 0.35)', border: '1px solid hsl(40 33% 93% / 0.08)' }}>
                {name}
              </span>
            ))}
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-3 pt-6 max-sm:flex-col max-sm:items-start" style={{ borderTop: '1px solid hsl(40 33% 93% / 0.05)' }}>
          <p className="text-[0.78rem]" style={{ color: 'hsl(40 33% 93% / 0.25)' }}>
            © 2026 Consiliul Județean Ilfov. {t('Toate drepturile rezervate.', 'All rights reserved.')}
          </p>
          <nav className="flex gap-5">
            <Link to="/privacy" className="text-[0.78rem] hover:text-lime transition-colors" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>{t('Politica de confidențialitate', 'Privacy Policy')}</Link>
            <Link to="/cookies" className="text-[0.78rem] hover:text-lime transition-colors" style={{ color: 'hsl(40 33% 93% / 0.3)' }}>{t('Politica cookies', 'Cookies Policy')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
