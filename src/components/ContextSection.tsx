import { useLang } from '@/contexts/LangContext';

const ContextSection = () => {
  const { t } = useLang();

  return (
    <section id="context" className="py-[100px] max-md:py-[72px] bg-forest">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-10">
          <div>
            <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
              {t('01 · Contextul', '01 · Context')}
            </p>
            <h2
              className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
              style={{ color: 'white' }}
              dangerouslySetInnerHTML={{
                __html: t(
                  'De ce avem nevoie de un parc <em class="not-italic text-lime italic">altfel</em>?',
                  'Why do we need a <em class="not-italic text-lime italic">different</em> park?'
                ),
              }}
            />
            <p className="reveal reveal-d2 text-muted-foreground text-base max-w-[640px] font-light">
              {t(
                'Creșterea demografică rapidă și urbanizarea accelerată din Ilfov au dus la reducerea semnificativă a spațiilor verzi și la volume crescânde de deșeuri. Rata de reciclare a deșeurilor municipale rămâne sub țintele asumate. Parcul Natural Zer0 Waste este răspunsul concret al CJ Ilfov la aceste provocări — un model replicabil pentru orice comunitate din România.',
                "Rapid demographic growth and accelerated urbanization in Ilfov have led to significant reduction in green spaces and increasing waste volumes. Municipal waste recycling rates remain below committed targets. The Zer0 Waste Natural Park is Ilfov County Council's concrete response — a replicable model for any community in Romania."
              )}
            </p>
          </div>
          <div className="reveal reveal-d1 flex flex-col gap-8">
            {[
              { num: 'Natura\n2000', desc: t('Aliniat planului de acțiune Natura 2000', 'Aligned with the Natura 2000 action plan') },
              { num: '~600 ha', desc: t('Suprafața Pădurii Căldăraru, locul proiectului', 'Căldăraru Forest area, site of the project') },
              { num: '#1', desc: t('Primul parc zero waste din România', 'First zero waste park in Romania') },
            ].map((s, i) => (
              <div key={i} className="border-l-2 border-lime pl-5">
                <div className="font-head text-[2.6rem] font-black text-lime leading-none whitespace-pre-line">{s.num}</div>
                <div className="text-sm text-muted-foreground font-light mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
