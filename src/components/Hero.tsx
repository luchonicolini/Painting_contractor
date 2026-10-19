import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const en = language === 'en';
  const reviews = BUSINESS_INFO.social.googleReviews;
  const heroRef = useRef<HTMLElement | null>(null);

  const trust = [
    en ? 'Florida Licensed & Insured' : 'Licencia y Seguro en Florida',
    en ? 'Full Property Protection' : 'Protección Total de Muebles',
    en ? '100% Owner Supervised' : 'Supervisado por sus Dueños',
  ];

  // Hero parallax motion: background layers drag behind the scroll, floating chips lead
  // ahead, creating depth. Uses the standalone `translate` CSS property so it never
  // conflicts with Tailwind's transform-based hover utilities.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-shift]'));
    let frame = 0;

    const render = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const height = hero.offsetHeight || 1;
      // 0 at the top of the page, 1 once the hero has scrolled its own height away.
      const progress = Math.min(1, Math.max(0, -rect.top / height));
      for (let i = 0; i < layers.length; i++) {
        const shift = parseFloat(layers[i].dataset.shift || '0');
        layers[i].style.translate = `0 ${(progress * shift).toFixed(2)}px`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    render();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative bg-slate-50/70 border-b border-slate-100 overflow-hidden" data-parallax>
      {/* Subtle cool ambient glow (original palette: sky / sapphire) */}
      <div
        className="pointer-events-none absolute -top-32 -right-24 w-[460px] h-[460px] rounded-full bg-brand-sky/10 blur-3xl will-change-transform"
        data-shift="40"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 w-[360px] h-[360px] rounded-full bg-brand-sapphire/5 blur-3xl will-change-transform"
        data-shift="28"
      />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 py-14 md:py-20 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Copy (Left Column) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-6 order-2 lg:order-1">
          {/* Trust Badge Pill */}
          <a
            href={reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pl-3 pr-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-medium hover:border-brand-sapphire/40 hover:shadow-sm transition-all group"
            aria-label="View El Palmar Painting's Google reviews"
          >
            <span className="text-amber-400 text-sm leading-none tracking-tight" aria-hidden="true">★★★★★</span>
            <span className="text-slate-800 font-semibold">
              {en ? '5.0 Google Rated • Family-Owned' : '5.0 en Google • Empresa Familiar'}
            </span>
          </a>

          {/* Headline */}
          <h1 className="font-heading font-semibold text-slate-900 text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-balance">
            {en ? (
              <>
                Architectural Painting & <span className="italic text-brand-sapphire">Flawless Finishes</span>
              </>
            ) : (
              <>
                Pintura Residencial & <span className="italic text-brand-sapphire">Acabados de Precisión</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl text-pretty">
            {en
              ? 'South Florida’s dedicated family-owned painting contractors. Transforming homes with architectural precision, clean dust-free execution, and zero shortcuts across Miami-Dade & Broward.'
              : 'Empresa familiar de pintura en el sur de la Florida. Transformamos tu hogar con precisión arquitectónica, máxima limpieza sin polvo y cero atajos en Miami-Dade y Broward.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
            <a
              href="#contact"
              className="btn-prestige group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-sapphire text-white font-sans font-semibold text-sm shadow-lg shadow-brand-sapphire/25 hover:bg-brand-sapphire-hover active:scale-[0.98] transition-all"
            >
              <span>{en ? 'Request a Free Quote' : 'Solicitar Presupuesto Gratis'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-sans font-semibold text-sm hover:bg-slate-100 active:scale-[0.98] transition-all"
            >
              <span>{en ? 'Explore Services' : 'Ver Servicios'}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-500 text-xs font-medium">
            {trust.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-sapphire flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image & Floating Cards (Right Column) */}
        <div className="lg:col-span-6 xl:col-span-7 relative order-1 lg:order-2">
          {/* Main Visual */}
          <div
            className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 aspect-[4/3] sm:aspect-[16/11] will-change-transform"
            data-shift="26"
          >
            <img
              src="/images/hero-new-luxury.webp"
              alt="Luxury South Florida residence finished in pristine exterior painting"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating stat chip (Top Right) */}
          <div
            className="absolute -top-3 right-4 sm:right-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 px-4 py-3 flex items-center gap-3 will-change-transform"
            data-shift="-18"
          >
            <span className="font-heading font-semibold text-2xl text-brand-navy leading-none">
              {BUSINESS_INFO.stats.yearsExperience}
            </span>
            <span className="text-[10px] font-bold text-slate-500 leading-tight uppercase tracking-wider">
              {en ? (
                <>
                  Years of<br />craft
                </>
              ) : (
                <>
                  Años de<br />oficio
                </>
              )}
            </span>
          </div>

          {/* Floating verified review (Bottom Left) */}
          <a
            href={reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-4 sm:left-6 xl:-left-10 max-w-[300px] flex-col gap-2.5 p-4 rounded-2xl bg-white border border-slate-200/80 text-slate-900 shadow-2xl shadow-slate-900/15 hover:-translate-y-0.5 transition-transform group hidden sm:flex will-change-transform"
            data-shift="-24"
            title={en ? 'View verified Google reviews' : 'Ver reseñas verificadas en Google'}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 text-sm tracking-wide font-bold" aria-label="5 stars rating">★★★★★</span>
                <span className="text-xs font-bold text-slate-900">5.0</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
                <span className="text-[11px] font-semibold text-slate-600">Google</span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed italic">
              {en
                ? '“Yalila & Rodolfo treated our home as their own. Flawless finishes, clean execution, and zero shortcuts!”'
                : '“Yalila y Rodolfo trataron nuestra casa como si fuera la suya. ¡Acabados impecables y máxima limpieza!”'}
            </p>

            <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-brand-navy text-white text-[11px] font-heading font-semibold flex items-center justify-center flex-shrink-0">
                CM
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-slate-900 truncate">Carlos M. • Pembroke Pines, FL</span>
                <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span>{en ? 'Verified Google Review' : 'Reseña Verificada de Google'}</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
