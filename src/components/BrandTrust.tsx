import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const BrandTrust: React.FC = () => {
  const { language } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section
      ref={revealRef}
      className="scroll-reveal max-w-[1240px] mx-auto px-4 sm:px-6 pt-2 pb-14 md:pb-16"
      aria-label="Certified paint brands and licensing"
    >
      <div className="rounded-2xl bg-slate-50/70 border border-slate-200/70 p-6 sm:p-8">
        {/* Subtle Architectural Label */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-slate-200/60 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              {language === 'en'
                ? 'Certified Premium Architectural Coatings & Equipment'
                : 'Pinturas Arquitectónicas Certificadas y Equipamiento Pro'}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {language === 'en'
              ? 'Zero cheap builder-grade paints. 100% genuine formulation.'
              : 'Sin pinturas genéricas de baja calidad. 100% fórmulas originales.'}
          </span>
        </div>

        {/* Brand Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center pt-6 opacity-85">
          {/* 1. SHERWIN-WILLIAMS */}
          <div
            className="flex flex-col items-center justify-center gap-1.5 group cursor-default transition-all duration-300 hover:opacity-100"
            title="Sherwin-Williams Emerald & Duration Coatings"
          >
            <div className="flex items-center gap-2 text-slate-800 group-hover:text-brand-navy transition-colors">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <div className="flex flex-col text-left leading-none">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  SHERWIN
                </span>
                <span className="font-heading font-extrabold text-[10px] sm:text-xs tracking-wider text-slate-600">
                  WILLIAMS.
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Emerald & Duration
            </span>
          </div>

          {/* 2. BENJAMIN MOORE */}
          <div
            className="flex flex-col items-center justify-center gap-1.5 group cursor-default transition-all duration-300 hover:opacity-100"
            title="Benjamin Moore Aura & Regal Select"
          >
            <div className="flex items-center gap-2 text-slate-800 group-hover:text-brand-navy transition-colors">
              {/* Benjamin Moore triangle M symbol */}
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-6 h-6 fill-red-600" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 6l5.5 11h-11L12 8z" />
                </svg>
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-red-700 transition-colors">
                  Benjamin
                </span>
                <span className="font-heading font-bold text-xs tracking-wide text-slate-700">
                  Moore
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Aura & Regal Select
            </span>
          </div>

          {/* 3. PPG PAINTS */}
          <div
            className="flex flex-col items-center justify-center gap-1.5 group cursor-default transition-all duration-300 hover:opacity-100"
            title="PPG Architectural Coatings"
          >
            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 rounded bg-slate-800 text-white font-heading font-black text-sm tracking-wider group-hover:bg-blue-900 transition-colors shadow-xs">
                PPG
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-slate-900">
                PAINTS
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              {language === 'en' ? 'Coastal Formulations' : 'Fórmulas Costeras'}
            </span>
          </div>

          {/* 4. GRACO AIRLESS SYSTEMS */}
          <div
            className="flex flex-col items-center justify-center gap-1.5 group cursor-default transition-all duration-300 hover:opacity-100"
            title="Graco Professional Fine Finish Sprayers"
          >
            <div className="flex items-center gap-2 text-slate-800">
              <Award className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
              <div className="flex flex-col text-left leading-none">
                <span className="font-heading font-extrabold text-sm tracking-tight text-slate-900">
                  GRACO
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Airless Pro
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              {language === 'en' ? 'Flawless Spray Finish' : 'Acabado Airless Nivel 5'}
            </span>
          </div>

          {/* 5. FLORIDA LICENSED & INSURED */}
          <div
            className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center gap-1.5 group cursor-default transition-all duration-300 hover:opacity-100"
            title="Florida State Licensed and Fully Insured Contractor"
          >
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50/80 px-3 py-1.5 rounded-xl border border-emerald-200/80 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="flex flex-col text-left leading-none">
                <span className="font-heading font-extrabold text-xs tracking-tight text-emerald-950">
                  FL LICENSED
                </span>
                <span className="text-[10px] font-semibold text-emerald-700">
                  & $2M INSURED
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              DBPR Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
