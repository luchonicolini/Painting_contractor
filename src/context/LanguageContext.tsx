import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LocalizedString } from '../types';
import { SITE_META } from '../data/company';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: LocalizedString | string) => string;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const CANONICAL_URL = 'https://painting-contractor-demo1.vercel.app/';

/** Read the initial language from ?lang=, localStorage or browser language, falling back to English. */
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  // 1. Explicit URL parameter (?lang=es or ?lang=en)
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'es' || param === 'en') return param;

  // 2. Remembered user preference from localStorage
  try {
    const saved = localStorage.getItem('elpalmar_preferred_lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch (_) {}

  // 3. Browser system language (South Florida bilingual audience)
  if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
    return 'es';
  }

  return 'en';
};

/** Create or update a <meta> tag in the document head. */
const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/** Create or update a <link rel="..."> tag in the document head. */
const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  // Synchronize browser history navigation (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const param = new URLSearchParams(window.location.search).get('lang');
      const langFromUrl: Language = param === 'es' ? 'es' : 'en';
      setLanguageState(langFromUrl);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keep the document head (lang, title, meta, OG) and URL in sync with the active language.
  useEffect(() => {
    const meta = SITE_META[language];
    const langUrl = language === 'es' ? `${CANONICAL_URL}?lang=es` : CANONICAL_URL;

    document.documentElement.lang = language;
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', langUrl);
    setMeta('property', 'og:locale', language === 'es' ? 'es_US' : 'en_US');
    setLink('canonical', langUrl);

    // Reflect the language in the address bar so links are shareable and match the
    // self-referential hreflang alternates declared in index.html.
    const url = new URL(window.location.href);
    if (language === 'es') {
      url.searchParams.set('lang', 'es');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url);
  }, [language]);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    try {
      localStorage.setItem('elpalmar_preferred_lang', newLang);
    } catch (_) {}

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
