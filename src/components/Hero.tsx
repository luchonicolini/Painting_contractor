import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 pb-16 md:pb-20">
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[620px] flex items-center bg-slate-950 shadow-2xl shadow-slate-900/20 border border-slate-800">
        {/* Background Architectural Florida Residence */}
        <img
          src="/images/hero-new-luxury.webp"
          alt="Luxury South Florida residence finished in pristine exterior painting"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 scale-[1.02] transition-transform duration-1000"
        />

        {/* Cinematic Scrim: readable text on left, bright Florida daylight on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15 pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-2xl px-6 sm:px-12 md:px-16 py-12 md:py-16 flex flex-col items-start gap-6">
          {/* Trust Badge Pill (Linked to Real Google Reviews) */}
          <a
            href={BUSINESS_INFO.social.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 group cursor-pointer animate-fade-in"
            aria-label="Ver perfil y reseñas de El Palmar Painting en Google"
          >
            <span className="flex text-amber-400">★★★★★</span>
            <span className="text-slate-200 group-hover:text-white transition-colors">
              {language === 'en'
                ? '5.0 Google Rated • Family-Owned by Yalila & Rodolfo'
                : '5.0 Estrellas en Google • Empresa Familiar de Yalila y Rodolfo'}
            </span>
            <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-amber-300 transition-colors" />
          </a>

          {/* Main Headline */}
          <h1 className="text-white font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-[1.12]">
            {language === 'en' ? (
              <>
                Architectural Painting & <span className="text-[#93C5FD]">Flawless Finishes</span>
              </>
            ) : (
              <>
                Pintura Residencial & <span className="text-[#93C5FD]">Acabados de Precisión</span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            {language === 'en'
              ? 'South Florida’s dedicated family-owned painting contractors. Transforming homes with architectural precision, clean dust-free execution, and zero shortcuts across Miami-Dade & Broward.'
              : 'Empresa familiar de pintura en el sur de la Florida. Transformamos tu hogar con precisión arquitectónica, máxima limpieza sin polvo y cero atajos en Miami-Dade y Broward.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="#contact"
              className="btn-prestige w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-900 font-heading text-sm font-bold hover:bg-slate-50 active:scale-[0.98] transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
            >
              <span>{language === 'en' ? 'Request a Free Quote' : 'Solicitar Presupuesto Gratis'}</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/25 font-heading text-sm font-semibold hover:bg-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>{language === 'en' ? 'Explore Services' : 'Ver Servicios'}</span>
            </a>
          </div>

          {/* Editorial Trust Line (Option A) */}
          <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-300 text-xs font-medium tracking-wide">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? 'Florida Licensed & Insured' : 'Licencia y Seguro en Florida'}</span>
            </div>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? 'Full Property Protection' : 'Protección Total de Muebles y Pisos'}</span>
            </div>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? '100% Owner Supervised' : 'Supervisado por sus Dueños'}</span>
            </div>
          </div>
        </div>


        {/* Floating Social Proof Quote on Desktop */}
        <a
          href={BUSINESS_INFO.social.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-10 right-10 hidden xl:flex max-w-[340px] flex-col gap-2.5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-800 shadow-2xl shadow-slate-950/30 hover:scale-[1.01] transition-transform group cursor-pointer text-left"
          title={language === 'en' ? 'View verified Google reviews' : 'Ver reseñas verificadas en Google'}
        >
          {/* Header: 5 Stars + 5.0 Rating + Official Google G */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 text-sm tracking-wide font-bold" aria-label="5 stars rating">★★★★★</span>
              <span className="text-xs font-bold text-slate-800">5.0</span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/60 shadow-xs">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span className="text-[11px] font-semibold text-slate-600">Google</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <p className="text-xs text-slate-700 leading-relaxed italic">
            {language === 'en'
              ? '“Yalila & Rodolfo treated our home as their own. Flawless finishes, clean execution, and zero shortcuts!”'
              : '“Yalila y Rodolfo trataron nuestra casa como si fuera la suya. ¡Acabados impecables y máxima limpieza!”'}
          </p>

          {/* Real Reviewer with Initials Circle */}
          <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
            <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-[11px] font-heading font-bold flex items-center justify-center flex-shrink-0 shadow-xs">
              CM
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-slate-900 truncate">
                Carlos M. • Pembroke Pines, FL
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span>{language === 'en' ? 'Verified Google Review' : 'Reseña Verificada de Google'}</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
