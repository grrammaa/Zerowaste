import { useState } from 'react';
import { useLang } from '@/contexts/LangContext';

const surveyItems = [
  { id: 1, titleRo: 'Să mă plimb prin natură pe trasee ecvestre', titleEn: 'To explore nature on equestrian trails', descRo: 'și înseamnă: <em>Traseu ecvestru, parcare vizitatori, acces dinspre Centura Bucureștiului.</em>', descEn: 'meaning: <em>Equestrian trail, visitor parking, access from Bucharest ring road.</em>', imgA: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=400&q=70' },
  { id: 2, titleRo: 'Să am activități pentru toată familia, la orice vârstă', titleEn: 'To have activities for the whole family, at any age', descRo: 'și înseamnă: <em>Cercul vieții — alei cu activități de la copii la adulți, pavilion, canal de apă, ponton pe lac.</em>', descEn: 'meaning: <em>Circle of life — paths with activities from children to adults, pavilion, water channel, lake pontoon.</em>', imgA: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1597524678053-5e6fef05e7bf?w=400&q=70' },
  { id: 3, titleRo: 'Să merg pe jos sau cu bicicleta deasupra pădurii', titleEn: 'To walk or cycle above the forest', descRo: 'și înseamnă: <em>Traseu circular suspendat dedicat pietonilor și bicicliștilor, cu decupaje pentru copaci.</em>', descEn: 'meaning: <em>Circular elevated trail for pedestrians and cyclists, with tree cutouts.</em>', imgA: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=70' },
  { id: 4, titleRo: 'Să simt natura prin toate simțurile, pe alei din materiale reciclate', titleEn: 'To feel nature through all senses on paths made from recycled materials', descRo: 'și înseamnă: <em>Traseu senzorial — paviment din materiale reciclate cu texturi diferite, vegetație cu parfum și culoare alternante.</em>', descEn: 'meaning: <em>Sensory trail — recycled material paving with different textures, alternating fragrant and colorful vegetation.</em>', imgA: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1432405972618-c6b0cfba81dc?w=400&q=70' },
  { id: 5, titleRo: 'Să închiriez o bicicletă și să explorez pădurea liber', titleEn: 'To rent a bike and freely explore the forest', descRo: 'și înseamnă: <em>Centru de închiriere biciclete, trasee la diferite înălțimi, legătură cu traseul circular suspendat.</em>', descEn: 'meaning: <em>Bike rental center, trails at various heights, connection to the elevated circular trail.</em>', imgA: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&q=70' },
  { id: 6, titleRo: 'Să văd cum funcționează sustenabilitatea la propriu', titleEn: 'To see sustainability in action first-hand', descRo: 'și înseamnă: <em>Fermă hidroponică, stații de compost, filtrare apă din lac, materiale reciclabile (plastic, sticlă, cărămizi din mycelium).</em>', descEn: 'meaning: <em>Hydroponic farm, composting stations, lake water filtration, recyclable materials (plastic, glass, mycelium bricks).</em>', imgA: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=70' },
  { id: 7, titleRo: 'Să învăț despre reciclare și economie circulară în mod interactiv', titleEn: 'To learn about recycling and circular economy in an interactive way', descRo: 'și înseamnă: <em>Ateliere educative, expoziții despre zero waste, programe pentru copii și adulți, vizite ghidate în parc.</em>', descEn: 'meaning: <em>Educational workshops, zero waste exhibitions, programs for children and adults, guided park tours.</em>', imgA: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=70', imgB: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=70' },
];

const SurveySection = () => {
  const { t } = useLang();
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleSubmit = async () => {
    if (checked.size === 0 || !name.trim() || !email.trim()) return;

    const selected_needs = Array.from(checked).map((id) => {
      const item = surveyItems.find((s) => s.id === id);
      return item ? item.titleRo : String(id);
    });

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), selected_needs }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Server error');
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('[SurveySection] submit error', err);
      setError(
        t(
          'A apărut o eroare. Te rugăm încearcă din nou.',
          'An error occurred. Please try again.'
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="survey" className="py-[100px] max-md:py-[72px] bg-mid">
      <div className="container">
        <p className="reveal text-[11px] font-semibold tracking-[0.18em] uppercase text-lime mb-4">
          {t('07 · Consultare publică', '07 · Public consultation')}
        </p>
        <h2
          className="reveal reveal-d1 font-head text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.15] mb-6"
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{
            __html: t(
              'Ce îți dorești în <em class="italic text-lime">Parcul Zer0 Waste</em>?',
              'What do you want in <em class="italic text-lime">Zer0 Waste Park</em>?'
            ),
          }}
        />
        <p className="reveal reveal-d2 text-muted-foreground text-base max-w-[640px] font-light">
          {t(
            'Proiectul câștigător UAUIM — \u201cPădurea în Cercul Vieții\u201d — propune 5 zone distincte. Bifează ce ți se potrivește și alege varianta estetică preferată. Opinia ta contează pentru conturarea finală a parcului.',
            'The winning UAUIM project — \u201cThe Forest in the Circle of Life\u201d — proposes 5 distinct zones. Check what appeals to you and choose your preferred aesthetic. Your opinion shapes the final park design.'
          )}
        </p>

        {/* Instructions */}
        <div className="reveal flex gap-6 flex-wrap my-7 p-5 rounded-lg" style={{ background: 'hsl(150 36% 9% / 0.6)', border: '1px solid hsl(77 69% 58% / 0.15)' }}>
          {[
            t('Bifează nevoile care ți se potrivesc', 'Check the needs that apply to you'),
            t('Adaugă o idee proprie (opțional)', 'Add your own idea (optional)'),
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[0.88rem] text-muted-foreground font-light">
              <span className="w-6 h-6 rounded-full bg-lime text-forest text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              {step}
            </div>
          ))}
        </div>

        {!submitted ? (
          <>
            <div className="reveal grid grid-cols-2 max-md:grid-cols-1 gap-0.5">
              {surveyItems.map((item) => {
                const isActive = checked.has(item.id);
                return (
                  <div
                    key={item.id}
                    className="p-7 px-6 transition-colors duration-200"
                    style={{
                      background: isActive ? 'hsl(150 36% 9% / 0.8)' : 'hsl(150 36% 9% / 0.5)',
                      borderTop: isActive ? '2px solid hsl(77 69% 58%)' : '2px solid transparent',
                    }}
                  >
                    <div className="flex gap-4 items-start">
                      <label className="cursor-pointer flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          className="survey-chk hidden"
                          checked={isActive}
                          onChange={() => toggle(item.id)}
                        />
                        <span className="survey-chk-box" />
                      </label>
                      <div>
                        <div className="text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-lime mb-1">
                          {t('nevoia mea este:', 'my need is:')}
                        </div>
                        <div className="font-head text-base font-bold mb-1.5 leading-tight" style={{ color: 'white' }}>
                          {t(item.titleRo, item.titleEn)}
                        </div>
                        <div
                          className="text-[0.82rem] text-muted-foreground font-light leading-relaxed [&_em]:not-italic [&_em]:text-lime/80"
                          dangerouslySetInnerHTML={{ __html: t(item.descRo, item.descEn) }}
                        />
                      </div>
                    </div>

                    {isActive && (
                      <div className="mt-4 pt-3" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.15)' }}>
                        <input
                          type="text"
                          className="w-full text-[0.82rem] p-2 px-3 rounded font-body text-cream outline-none transition-colors duration-200 focus:border-lime"
                          style={{ background: 'hsl(150 36% 9% / 0.8)', border: '1px solid hsl(40 33% 93% / 0.1)' }}
                          placeholder={t('altă idee pentru această zonă...', 'another idea for this zone...')}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact fields */}
            <div className="reveal flex flex-col gap-4 mt-8 pt-6" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.15)' }}>
              <p className="text-[0.88rem] text-muted-foreground font-light">
                {t('Completează datele de contact pentru a trimite opinia:', 'Fill in your contact details to submit your opinion:')}
              </p>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-w-[600px]">
                <div>
                  <label className="text-[0.75rem] tracking-[0.08em] uppercase text-muted-foreground mb-1.5 block">
                    {t('Nume *', 'Name *')}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-[0.88rem] p-3 px-4 rounded-lg font-body text-cream outline-none transition-colors duration-200 focus:border-lime"
                    style={{ background: 'hsl(150 36% 9% / 0.8)', border: '1px solid hsl(40 33% 93% / 0.1)' }}
                    placeholder={t('Numele tău', 'Your name')}
                    required
                  />
                </div>
                <div>
                  <label className="text-[0.75rem] tracking-[0.08em] uppercase text-muted-foreground mb-1.5 block">
                    {t('Email *', 'Email *')}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-[0.88rem] p-3 px-4 rounded-lg font-body text-cream outline-none transition-colors duration-200 focus:border-lime"
                    style={{ background: 'hsl(150 36% 9% / 0.8)', border: '1px solid hsl(40 33% 93% / 0.1)' }}
                    placeholder={t('email@exemplu.ro', 'email@example.com')}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-400 text-[0.85rem] mt-3">{error}</p>
            )}

            {/* Submit */}
            <div className="reveal flex items-center gap-6 mt-6 pt-6 flex-wrap" style={{ borderTop: '1px solid hsl(77 69% 58% / 0.15)' }}>
              <div className="text-[0.88rem] text-muted-foreground">
                <span className="font-head text-[1.4rem] font-black text-lime">{checked.size}</span>
                {t(' nevoi selectate', ' needs selected')}
              </div>
              <button
                onClick={handleSubmit}
                disabled={checked.size === 0 || !name.trim() || !email.trim() || loading}
                className="inline-flex items-center gap-2.5 bg-lime text-forest font-body text-[15px] font-semibold px-8 py-[15px] rounded-lg border-none cursor-pointer transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.3" /><path d="M12 2a10 10 0 0 1 10 10" /></svg>
                    {t('Se trimite...', 'Sending...')}
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    {t('Trimite opinia mea', 'Submit my opinion')}
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-[2rem] mb-3">🌿</div>
            <p className="font-head text-[1.3rem] mb-2" style={{ color: 'white' }}>{t('Mulțumim pentru opinie!', 'Thank you for your input!')}</p>
            <p className="text-muted-foreground text-[0.9rem]">{t('Răspunsurile tale contribuie la conturarea Parcului Natural Zer0 Waste.', 'Your answers contribute to shaping the Zer0 Waste Natural Park.')}</p>
          </div>
        )}

        <div className="reveal text-[0.78rem] italic pt-4 mt-5" style={{ color: 'hsl(40 33% 93% / 0.3)', borderTop: '1px solid hsl(40 33% 93% / 0.05)' }}>
          {t(
            'Proiect câștigător UAUIM: \u201cPădurea în Cercul Vieții\u201d — Echipa 3: Irina Benchescu, Octavian Pocriște, Andreea Roman, Raluca Voicu. Coordonare: Dr. Arh. Simona Butnariu.',
            'Winning UAUIM project: \u201cThe Forest in the Circle of Life\u201d — Team 3: Irina Benchescu, Octavian Pocriște, Andreea Roman, Raluca Voicu. Coordination: Dr. Arch. Simona Butnariu.'
          )}
          &nbsp;·&nbsp;
          <a href="https://www.uauim.ro/evenimente/workshop-parcul-natural-zer0-waste/" target="_blank" rel="noopener" className="text-lime hover:opacity-75">
            {t('Mai multe detalii →', 'More details →')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;
