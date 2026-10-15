import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 pb-16 md:pb-20">
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[620px] flex items-center bg-slate-950 shadow-2xl shadow-slate-900/20 border border-slate-800">
        {/* Background Architectural Florida Residence */}
        <img
          src="/images/hero-new-luxury.jpg"
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
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-sm animate-fade-in">
            <span className="flex text-amber-400">★★★★★</span>
            <span className="text-slate-200">
              {language === 'en'
                ? '5.0 Google Rated • Family-Owned by Yalila & Rodolfo'
                : '5.0 Estrellas en Google • Empresa Familiar de Yalila y Rodolfo'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-[1.12]">
            {language === 'en' ? (
              <>
                Enhance Your <span className="text-blue-200">Favorite Lifestyle</span>
              </>
            ) : (
              <>
                Renueva Tu Hogar con <span className="text-blue-200">Acabados de Lujo</span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
            {language === 'en'
              ? 'Transforming South Florida homes with architectural precision, clean dust-free execution, and generational family pride across Miami-Dade & Broward.'
              : 'Transformando residencias en el sur de la Florida con precisión arquitectónica, máxima limpieza y la dedicación de una empresa familiar de confianza.'}
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
        <div className="absolute top-12 right-12 hidden xl:flex max-w-xs flex-col gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-amber-400 text-xs">★★★★★</span>
            <span className="text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded">Verified Review</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed italic">
            {language === 'en'
              ? '“Yalila & Rodolfo treated our home as their own. Flawless finishes, clean execution, and zero shortcuts!”'
              : '“Yalila y Rodolfo trataron nuestra casa como si fuera la suya. ¡Acabados impecables y máxima limpieza!”'}
          </p>
          <span className="text-xs font-semibold text-white">
            — Homeowner in Pembroke Pines, FL
          </span>
        </div>
      </div>
    </section>
  );
};
