import { useLang } from '@/contexts/LangContext';

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <div
      className="fixed top-4 right-6 z-[100] flex border rounded-[4px] overflow-hidden"
      style={{ borderColor: 'hsl(77 69% 58% / 0.35)' }}
      role="navigation"
      aria-label="Selector limbă"
    >
      <button
        onClick={() => setLang('ro')}
        className={`border-none font-body text-xs font-semibold tracking-[0.1em] px-3.5 py-1.5 cursor-pointer transition-colors duration-200 ${
          lang === 'ro'
            ? 'bg-lime text-forest'
            : 'text-muted-foreground hover:text-lime'
        }`}
        style={lang !== 'ro' ? { background: 'hsl(150 36% 9% / 0.85)', backdropFilter: 'blur(8px)' } : {}}
      >
        RO
      </button>
      <button
        onClick={() => setLang('en')}
        className={`border-none font-body text-xs font-semibold tracking-[0.1em] px-3.5 py-1.5 cursor-pointer transition-colors duration-200 ${
          lang === 'en'
            ? 'bg-lime text-forest'
            : 'text-muted-foreground hover:text-lime'
        }`}
        style={lang !== 'en' ? { background: 'hsl(150 36% 9% / 0.85)', backdropFilter: 'blur(8px)' } : {}}
      >
        EN
      </button>
    </div>
  );
};

export default LangToggle;
