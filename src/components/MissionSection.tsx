import { useLang } from '@/contexts/LangContext';

const MissionSection = () => {
  const { t } = useLang();

  return (
    <section id="mission" className="py-[100px] max-md:py-[72px] bg-dark">
      <div className="container">
        <div className="grid max-md:grid-cols-1 max-md:gap-10 gap-20 items-start" style={{ gridTemplateColumns: '5fr 4fr' }}>
          <div>
            <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
              {t('02 · Misiunea', '02 · Mission')}
            </p>
            <h2
              className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
              style={{ color: 'white' }}
              dangerouslySetInnerHTML={{
                __html: t(
                  'Un sanctuar în natură, <em class="italic text-lime">construit din deșeuri.</em>',
                  'A sanctuary in nature, <em class="italic text-lime">built from waste.</em>'
                ),
              }}
            />
            <p className="reveal reveal-d2 text-muted-foreground text-base max-w-[640px] font-light">
              {t(
                'Obiectivul nostru este să transformăm Pădurea Căldăraru într-un parc urban inovator în care fiecare element este reciclabil și sustenabil. Vizitatorii se pot cufunda în frumusețea ecosistemului forestier și, simultan, sunt educați despre importanța protejării mediului și adoptarea comportamentelor responsabile.',
                'Our objective is to transform Căldăraru Forest into an innovative urban park where every element is recyclable and sustainable. Visitors can immerse themselves in the beauty of the forest ecosystem while simultaneously being educated about the importance of environmental protection and responsible behaviors.'
              )}
            </p>
          </div>
          <div className="reveal reveal-d2">
            <p className="font-head text-[clamp(1.3rem,2.5vw,1.9rem)] italic text-lime leading-[1.4] pt-7" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.3)' }}>
              {t(
                '\u201cGunoiul unuia devine confortul, terenul de joacă și pista de alergare a celuilalt.\u201d',
                '\u201cOne person\u2019s trash becomes another\u2019s comfort, playground and running track.\u201d'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
