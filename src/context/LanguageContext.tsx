import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, LocalizedString } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: LocalizedString | string) => string;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setIsChanging(true);
    setLanguageState(newLang);
    setTimeout(() => {
      setIsChanging(false);
    }, 150);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = (content: LocalizedString | string): string => {
    if (typeof content === 'string') return content;
    return content[language] || content.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isChanging }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
