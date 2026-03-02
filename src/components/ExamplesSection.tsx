import { useLang } from '@/contexts/LangContext';

const zones = [
  {
    id: 1,
    tagRo: 'Zona 1 · Reciclare',
    tagEn: 'Zone 1 · Recycling',
    titleRo: 'Centrul de Reciclare',
    titleEn: 'Recycling Center',
    descRo: 'Prima zonă a parcului dedicată colectării și procesării materialelor reciclabile — pistă sport din adidași, mobilier din PET reciclat.',
    descEn: 'The first park zone dedicated to collecting and processing recyclable materials — sports track from sneakers, furniture from recycled PET.',
    color: 'hsl(77 69% 58%)',
    gradient: 'linear-gradient(135deg, hsl(150 36% 12%) 0%, hsl(77 40% 10%) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="1 4 1 10 7 10" /><polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
      </svg>
    ),
  },
  {
    id: 2,
    tagRo: 'Zona 2 · Educație',
    tagEn: 'Zone 2 · Education',
    titleRo: 'Centrul Educațional',
    titleEn: 'Educational Center',
    descRo: 'Spații de learning outdoor, ateliere de economie circulară, expoziții interactive despre mediu și sustenabilitate pentru toate vârstele.',
    descEn: 'Outdoor learning spaces, circular economy workshops, interactive environmental exhibitions for all ages.',
    color: 'hsl(200 80% 60%)',
    gradient: 'linear-gradient(135deg, hsl(150 36% 12%) 0%, hsl(200 40% 10%) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 3,
    tagRo: 'Zona 3 · Inovație',
    tagEn: 'Zone 3 · Innovation',
    titleRo: 'Hub de Inovație Verde',
    titleEn: 'Green Innovation Hub',
    descRo: 'Fermă hidroponică, stații de compost, filtrare apă din lac, panouri fotovoltaice și monitorizare IoT — viitorul economiei circulare.',
    descEn: 'Hydroponic farm, composting stations, lake water filtration, photovoltaic panels and IoT monitoring — the future of circular economy.',
    color: 'hsl(280 70% 65%)',
    gradient: 'linear-gradient(135deg, hsl(150 36% 12%) 0%, hsl(280 30% 10%) 100%)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
];

const ExamplesSection = () => {
  const { t } = useLang();

  return (
    <section id="examples" className="py-[100px] max-md:py-[72px] bg-dark">
      <div className="container">
        <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
          {t('04 · Zonele parcului', '04 · Park Zones')}
        </p>
        <h2
          className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-4"
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{
            __html: t(
              'Trei zone, <em class="italic text-lime">un singur parc</em>.',
              'Three zones, <em class="italic text-lime">one park</em>.'
            ),
          }}
        />
        <p className="reveal reveal-d2 text-[0.97rem] text-muted-foreground max-w-[560px] mb-14 font-light">
          {t(
            'Fiecare zonă a Parcului Natural Zer0 Waste are un rol distinct, contribuind la un ecosistem sustenabil și regenerativ.',
            'Each zone of the Zer0 Waste Natural Park has a distinct role, contributing to a sustainable and regenerative ecosystem.'
          )}
        </p>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
          {zones.map((zone, i) => (
            <div
              key={zone.id}
              className={`reveal reveal-d${i + 1} group relative rounded-2xl overflow-hidden flex flex-col`}
              style={{
                background: zone.gradient,
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '360px',
              }}
            >
              {/* Top accent bar */}
              <div style={{ height: '3px', background: zone.color, opacity: 0.8 }} />

              {/* Card content */}
              <div className="flex flex-col flex-1 p-8">
                {/* Icon + Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl"
                    style={{ background: `${zone.color}18`, border: `1px solid ${zone.color}30`, color: zone.color }}
                  >
                    {zone.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1.5 rounded-full"
                    style={{ background: `${zone.color}15`, color: zone.color, border: `1px solid ${zone.color}25` }}
                  >
                    {t(zone.tagRo, zone.tagEn)}
                  </span>
                </div>

                {/* Title & description */}
                <h3
                  className="font-head text-[1.45rem] font-bold mb-3 leading-tight"
                  style={{ color: 'white' }}
                >
                  {t(zone.titleRo, zone.titleEn)}
                </h3>
                <p className="text-[0.88rem] font-light leading-relaxed" style={{ color: 'rgba(236,224,196,0.58)' }}>
                  {t(zone.descRo, zone.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
