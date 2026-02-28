import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'ro' | 'en';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (ro: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'ro',
  setLang: () => {},
  t: (ro) => ro,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ro');
  const t = useCallback((ro: string, en: string) => lang === 'ro' ? ro : en, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
