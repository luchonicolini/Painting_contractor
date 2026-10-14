import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 pb-16 md:pb-20">
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[560px] md:min-h-[620px] flex items-center bg-slate-950 shadow-2xl shadow-slate-900/20 border border-slate-800">
        {/* Background Architectural Florida Residence */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury South Florida residence finished in pristine exterior painting"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 scale-[1.02] transition-transform duration-1000"
        />

        {/* Cinematic Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-2xl px-6 sm:px-12 md:px-16 py-12 md:py-16 flex flex-col items-start gap-6">
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[12px] font-medium border border-white/20 shadow-sm animate-fade-in">
            <span className="flex text-amber-400">★★★★★</span>
            <span className="text-slate-200">
              {language === 'en'
                ? '5.0 Google Rated • Family-Owned by Yalila & Rodolfo'
                : '5.0 Estrellas en Google • Empresa Familiar de Yalila y Rodolfo'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-heading font-extrabold text-3xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.12]">
            {language === 'en' ? (
              <>
                Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">Favorite Lifestyle</span>
              </>
            ) : (
              <>
                Renueva Tu Hogar con <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">Acabados de Lujo</span>
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-900 font-heading text-[14px] font-bold hover:bg-slate-100 active:scale-[0.98] transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2 group"
            >
              <span>{language === 'en' ? 'Request a Free Quote' : 'Solicitar Presupuesto Gratis'}</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/25 font-heading text-[14px] font-semibold hover:bg-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>{language === 'en' ? 'Explore Services' : 'Ver Servicios'}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-3.5 text-white/90 hover:text-white text-xs font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Key Quick Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-slate-300 text-xs font-medium border-t border-white/10 w-full">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>{language === 'en' ? 'Licensed & Insured' : 'Licencia y Seguro en Florida'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? 'Zero Dust Guarantee' : 'Protección Total Sin Polvo'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{language === 'en' ? 'Direct Owner Supervision' : 'Supervisión de los Dueños'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Right Floating Badge (Active Service Area) */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white text-[12px] shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-slate-200">
            Hialeah • Pembroke Pines • Doral • Miami
          </span>
        </div>

        {/* Floating Social Proof Quote on Desktop */}
        <div className="absolute top-12 right-12 hidden xl:flex max-w-xs flex-col gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-amber-400 text-xs">★★★★★</span>
            <span className="text-[10px] text-slate-300 bg-white/10 px-2 py-0.5 rounded">Verified Review</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed italic">
            {language === 'en'
              ? '“Yalila & Rodolfo treated our home as their own. Flawless finishes, clean execution, and zero shortcuts!”'
              : '“Yalila y Rodolfo trataron nuestra casa como si fuera la suya. ¡Acabados impecables y máxima limpieza!”'}
          </p>
          <span className="text-[11px] font-semibold text-white">
            — Homeowner in Pembroke Pines, FL
          </span>
        </div>
      </div>
    </section>
  );
};
