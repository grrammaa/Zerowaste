import { createPortal } from 'react-dom';
import logoCjIlfov from '@/assets/logo_cj_ilfov_text_alb.png';
import { useLang } from '@/contexts/LangContext';

const Navbar = () => {
    const { lang, setLang } = useLang();

    const navbar = (
        <nav
            className="flex items-center justify-between px-3 md:px-8 py-4 bg-transparent relative z-[9999]"
        >
            {/* CJ Ilfov logo in a larger, premium transparent box */}
            <div className="flex items-center p-0 md:p-2">
                <img
                    src={logoCjIlfov}
                    alt="Consiliul Județean Ilfov"
                    className="h-[105px] md:h-[110px] w-auto object-contain block"
                />
            </div>

            {/* Language toggle with refined styling */}
            <div
                style={{
                    display: 'flex',
                    background: 'rgba(13, 32, 21, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(159, 214, 83, 0.3)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
                role="navigation"
                aria-label="Selector limbă"
            >
                <button
                    onClick={() => setLang('ro')}
                    style={{
                        border: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: lang === 'ro' ? 'hsl(77, 69%, 58%)' : 'transparent',
                        color: lang === 'ro' ? 'hsl(150, 36%, 9%)' : 'rgba(236, 224, 196, 0.6)',
                    }}
                >
                    RO
                </button>
                <button
                    onClick={() => setLang('en')}
                    style={{
                        border: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: lang === 'en' ? 'hsl(77, 69%, 58%)' : 'transparent',
                        color: lang === 'en' ? 'hsl(150, 36%, 9%)' : 'rgba(236, 224, 196, 0.6)',
                    }}
                >
                    EN
                </button>
            </div>
        </nav>
    );

    return navbar;
};

export default Navbar;
