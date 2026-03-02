import { createPortal } from 'react-dom';
<<<<<<< HEAD
import logoCjIlfov from '@/assets/logo_cj_ilfov_text_alb.png';
=======
import logoCjIlfov from '@/assets/logo_cj_ilfov.png';
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
import { useLang } from '@/contexts/LangContext';

const Navbar = () => {
    const { lang, setLang } = useLang();

    const navbar = (
        <nav
<<<<<<< HEAD
            className="flex items-center justify-between px-3 md:px-8 py-4 bg-transparent relative z-[9999]"
        >
            {/* CJ Ilfov logo in a larger, premium transparent box */}
            <div className="flex items-center p-0 md:p-2">
                <img
                    src={logoCjIlfov}
                    alt="Consiliul Județean Ilfov"
                    className="h-[105px] md:h-[110px] w-auto object-contain block"
=======
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 32px',
                background: 'transparent',
                pointerEvents: 'none',
            }}
        >
            {/* CJ Ilfov logo in a larger, premium white box */}
            <div
                style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'auto',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
            >
                <img
                    src={logoCjIlfov}
                    alt="Consiliul Județean Ilfov"
                    style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
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
<<<<<<< HEAD
=======
                    pointerEvents: 'auto',
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
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

<<<<<<< HEAD
    return navbar;
=======
    // Using Portal to mount directly to document.body to ensure it stays fixed relative to the viewport
    return typeof document !== 'undefined' ? createPortal(navbar, document.body) : null;
>>>>>>> 2700d210ff8d54ea32bff9869311f673153ee822
};

export default Navbar;
