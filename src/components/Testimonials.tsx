import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/company';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const revealRef = useScrollReveal();

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section ref={revealRef} className="scroll-reveal w-full py-16 md:py-24" id="reviews">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-10 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
          {language === 'en' ? 'VERIFIED EXPERIENCES' : 'TESTIMONIOS REALES'}
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {language === 'en' ? 'What Our Customers are Saying' : 'Lo Que Dicen Quienes Ya Nos Eligieron'}
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[540px] flex items-center bg-slate-900 shadow-2xl border border-slate-800">
          {/* Authentic Craftsman Backdrop Image */}
          <img
            src="/images/testimonials-new-interior.webp"
            alt="South Florida renovated luxury interior residential property"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.02] transition-transform duration-1000"
          />
          {/* Directional scrim: high contrast for text on the left, clear view of the residence on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Big Bold Impact Message on Left */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-xl flex flex-col gap-4">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
              {language === 'en'
                ? 'We helped over 500 Florida families get their perfect home finish'
                : 'Hemos ayudado a más de 500 familias en Florida a renovar su hogar'}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'en'
                ? 'From single condos to sprawling estates, our reputation in Broward and Dade is built on personal accountability and spotless cleanups.'
                : 'Desde condominios hasta grandes propiedades, nuestra reputación en Broward y Miami-Dade se basa en la seriedad personal y la limpieza absoluta.'}
            </p>
          </div>

          {/* Solid White Floating Testimonial Card with 100% High Contrast */}
          <div className="relative z-20 m-6 sm:m-8 sm:ml-auto w-full sm:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-7 border border-slate-100 flex flex-col gap-4">
            {/* Header: Stars & Carousel Controls */}
            <div className="flex items-center justify-between pb-1">
              <a
                href={BUSINESS_INFO.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:opacity-85 transition-opacity group cursor-pointer"
                title="Ver reseñas oficiales en Google"
              >
                <span className="text-amber-400 text-base tracking-widest font-bold" aria-label="5 de 5 estrellas">★★★★★</span>
                <span className="text-slate-900 text-xs font-bold ml-0.5">5.0</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 group-hover:bg-slate-200 px-2 py-0.5 rounded-full ml-1.5 transition-colors">
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  Google
                </span>
              </a>

              {/* Next / Prev Controls */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Review Quote with Clear Contrast */}
            <div className="relative">
              <Quote className="w-8 h-8 text-amber-100 absolute -top-2 -left-2 -z-10 opacity-70" />
              <p className="text-slate-800 text-sm leading-relaxed italic font-normal">
                “{current.comment[language]}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-white font-heading font-bold text-xs flex items-center justify-center shadow-sm">
                  {current.author
                    .split(' ')
                    .map(n => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-slate-900 text-sm leading-tight">
                    {current.author}
                  </span>
                  <span className="text-slate-500 text-xs mt-0.5">
                    {current.location || 'South Florida'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
