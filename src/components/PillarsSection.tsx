import { useLang } from '@/contexts/LangContext';

const pillars = [
  {
    num: '01',
    icon: '♻️',
    titleRo: 'Reciclare',
    titleEn: 'Recycling',
    items: [
      { ro: 'Mobilier urban din materiale 100% reciclate (PET, cauciuc)', en: 'Urban furniture from 100% recycled materials (PET, rubber)' },
      { ro: 'Pistă de alergare din 20.000 perechi de adidași reciclați', en: 'Running track from 20,000 pairs of recycled sneakers' },
      { ro: 'Sistem de colectare selectivă accesibil în tot parcul', en: 'Accessible selective waste collection throughout the park' },
    ],
  },
  {
    num: '02',
    icon: '📚',
    titleRo: 'Educație',
    titleEn: 'Education',
    items: [
      { ro: 'Centru educațional pentru vizitatori de toate vârstele', en: 'Educational center for visitors of all ages' },
      { ro: 'Workshop-uri interactive, expoziții tematice, programe școlare', en: 'Interactive workshops, themed exhibitions, school programs' },
      { ro: 'Parteneriate cu universități și instituții de cercetare', en: 'Partnerships with universities and research institutions' },
    ],
  },
  {
    num: '03',
    icon: '⚡',
    titleRo: 'Inovație',
    titleEn: 'Innovation',
    items: [
      { ro: 'Energie regenerabilă: panouri solare + turbine eoliene', en: 'Renewable energy: solar panels + wind turbines' },
      { ro: 'Senzori smart pentru monitorizarea consumului de energie și apă', en: 'Smart sensors for energy and water consumption monitoring' },
      { ro: 'Digitalizare și raportare în timp real a impactului de mediu', en: 'Digitalization and real-time environmental impact reporting' },
    ],
  },
];

const PillarsSection = () => {
  const { t } = useLang();

  return (
    <section id="pillars" className="py-[100px] max-md:py-[72px] bg-mid relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(77 69% 58% / 0.06), transparent 70%)' }} />
      <div className="container">
        <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
          {t('03 · Cei trei piloni', '03 · Three pillars')}
        </p>
        <h2
          className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{
            __html: t(
              'Cum funcționează <em class="italic text-lime">Zer0 Waste</em>?',
              'How does <em class="italic text-lime">Zer0 Waste</em> work?'
            ),
          }}
        />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0.5 mt-14">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1} group relative overflow-hidden p-12 max-md:p-8 transition-colors duration-300`}
              style={{ background: 'hsl(150 36% 9% / 0.5)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'hsl(150 36% 9% / 0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'hsl(150 36% 9% / 0.5)'; }}
            >
              {/* bottom line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" style={{ transitionTimingFunction: 'cubic-bezier(.23,1,.32,1)' }} />
              <div className="font-head text-[4rem] font-black leading-none -mb-2.5" style={{ color: 'hsl(77 69% 58% / 0.1)' }}>{p.num}</div>
              <div className="text-[2rem] mb-4">{p.icon}</div>
              <h3 className="font-head text-2xl font-bold mb-5" style={{ color: 'white' }}>{t(p.titleRo, p.titleEn)}</h3>
              <ul className="flex flex-col gap-3 list-none">
                {p.items.map((item, j) => (
                  <li key={j} className="text-[0.93rem] text-muted-foreground font-light pl-5 relative">
                    <span className="absolute left-0 text-lime text-[0.8rem]">→</span>
                    {t(item.ro, item.en)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
