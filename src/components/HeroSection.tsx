import { useLang } from '@/contexts/LangContext';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';
import Navbar from '@/components/Navbar';
import prezentareRomana from '@/assets/prezentareRomana.pdf?url';
import prezentareEngleza from '@/assets/prezentareEngleza.pdf?url';

const HeroSection = () => {
  const { t, lang } = useLang();

  const prezentarePdf = lang === 'ro' ? prezentareRomana : prezentareEngleza;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-20">
      {/* Navbar overlaid on hero */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 60% 30%, rgba(45,90,63,.35) 0%, transparent 70%),
            linear-gradient(180deg, rgba(13,32,21,.2) 0%, rgba(13,32,21,.7) 60%, hsl(140 18% 8%) 100%),
            url('${heroBg}') center/cover no-repeat
          `,
        }}
      >
        {/* grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-[2]">

        {/* Logo instead of text title */}
        <div className="reveal reveal-d1 mb-6">
          <h1 className="sr-only">{t('Parcul Natural Zer0 Waste', 'Zer0 Waste Natural Park')}</h1>
          <img
            src={logo}
            alt="Zer0 Waste Natural Park logo"
            className="max-w-[420px] max-md:max-w-[280px] w-full"
            style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }}
          />
        </div>

        <p className="reveal reveal-d2 text-[clamp(1rem,2vw,1.15rem)] text-muted-foreground max-w-[560px] mb-11 font-light">
          {t(
            'Primul parc-model de economie circulară din România — construit pe trei piloni: Reciclare, Educație și Inovație, în inima Pădurii Căldăraru.',
            "Romania's first circular-economy model park — built on three pillars: Recycling, Education and Innovation, in the heart of Căldăraru Forest."
          )}
        </p>
        <div className="reveal reveal-d3 flex gap-4 flex-wrap items-center max-sm:flex-col max-sm:items-stretch">
          <a
            href="#form-section"
            className="inline-flex items-center gap-2.5 bg-lime text-forest font-body text-[15px] font-semibold px-8 py-[15px] rounded-lg border-none cursor-pointer transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 no-underline max-sm:justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            {t('Vreau să discutăm', "Let's talk")}
          </a>
          <a
            href={prezentarePdf}
            download
            className="inline-flex items-center gap-2 bg-transparent text-cream font-body text-[15px] font-medium px-7 py-3.5 rounded-lg cursor-pointer transition-all duration-200 no-underline max-sm:justify-center"
            style={{ border: '1px solid hsl(40 33% 93% / 0.25)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsl(77 69% 58%)'; e.currentTarget.style.color = 'hsl(77 69% 58%)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsl(40 33% 93% / 0.25)'; e.currentTarget.style.color = 'hsl(40 33% 93%)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            {t('Descarcă prezentarea PDF', 'Download PDF Presentation')}
          </a>
          <a
            href="#survey"
            className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md text-lime font-body text-[15px] font-semibold px-7 py-3.5 rounded-lg border border-lime/30 cursor-pointer transition-all duration-200 hover:bg-lime/10 hover:border-lime/60 no-underline max-sm:justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h11" /><polyline points="9 11 12 14 22 4" /><path d="M17 18h5" /><path d="M17 22h5" /></svg>
            {t('Chestionar - Consultare publică', 'Public Consultation Survey')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
