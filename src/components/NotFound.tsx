import React from 'react';
import { Phone, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';
import { BrandLogoIcon } from './BrandLogoIcon';

interface NotFoundProps {
  onNavigateHome?: (lang?: 'en' | 'es') => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  const { language, setLanguage } = useLanguage();

  const handleHomeClick = (e: React.MouseEvent, targetLang: 'en' | 'es') => {
    e.preventDefault();
    setLanguage(targetLang);
    if (onNavigateHome) {
      onNavigateHome(targetLang);
    } else {
      window.history.pushState({}, '', targetLang === 'es' ? '/?lang=es' : '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50/70 px-6 py-16 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full bg-brand-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-brand-sapphire/5 blur-3xl" />

      <div className="relative max-w-lg w-full text-center flex flex-col items-center gap-6 z-10">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleHomeClick(e, language)}
          className="flex items-center gap-3 group"
          aria-label="El Palmar Painting & Services — Home"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:bg-brand-navy-light transition-colors flex-shrink-0">
            <BrandLogoIcon className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <span className="font-heading font-extrabold text-xl text-slate-900 block leading-tight">
              El Palmar
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-slate-400">
              Painting &amp; Services
            </span>
          </div>
        </a>

        {/* 404 Large Display Numeral */}
        <span
          className="font-heading text-8xl sm:text-9xl leading-none text-brand-navy/15 select-none -my-2"
          aria-hidden="true"
        >
          404
        </span>

        {/* Headline */}
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08]">
          {language === 'en' ? 'Page not found' : 'Página no encontrada'}
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
          {language === 'en' ? (
            <>
              The page you are looking for doesn’t exist or was moved.
              <br />
              <span className="text-slate-500 text-xs sm:text-sm">
                La página que buscas no existe o fue movida.
              </span>
            </>
          ) : (
            <>
              La página que buscas no existe o fue movida.
              <br />
              <span className="text-slate-500 text-xs sm:text-sm">
                The page you are looking for doesn’t exist or was moved.
              </span>
            </>
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center pt-2 w-full sm:w-auto">
          <a
            href="/"
            onClick={(e) => handleHomeClick(e, 'en')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-sapphire text-white font-sans font-semibold text-sm hover:bg-brand-sapphire-hover shadow-lg shadow-brand-sapphire/20 active:scale-[0.98] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </a>
          <a
            href="/?lang=es"
            onClick={(e) => handleHomeClick(e, 'es')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-sans font-semibold text-sm hover:bg-slate-100 active:scale-[0.98] transition-all"
          >
            <span>Ir al inicio (ES)</span>
          </a>
        </div>

        {/* Direct phone fallback */}
        <div className="pt-6 border-t border-slate-200/80 w-full flex items-center justify-center gap-2 text-xs text-slate-500">
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {language === 'en' ? 'Need immediate assistance?' : '¿Necesitas ayuda inmediata?'}{' '}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-bold text-slate-900 hover:text-brand-sapphire underline transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
          </span>
        </div>
      </div>
    </main>
  );
};
