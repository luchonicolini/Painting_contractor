import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/company';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-16 md:py-24" id="reviews">
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
            src="/images/testimonials-bg.webp"
            alt="South Florida renovated residential property"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.02] transition-transform duration-1000"
          />
          {/* Directional scrim: high contrast for text on the left, clear view of the residence on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Big Bold Impact Message on Left */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-xl flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'en' ? '100% Real Homeowners' : '100% Reseñas Verificadas'}</span>
            </span>

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
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 text-base tracking-widest font-bold">★★★★★</span>
                <span className="text-slate-900 text-xs font-bold ml-1">5.0</span>
              </div>

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
                  className="w-8 h-8 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white flex items-center justify-center transition-colors active:scale-95 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Review Quote with Clear Contrast */}
            <div className="relative">
              <Quote className="w-8 h-8 text-blue-100 absolute -top-2 -left-2 -z-10 opacity-70" />
              <p className="text-slate-800 text-sm leading-relaxed italic font-normal">
                “{current.comment[language]}”
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-heading font-bold text-xs flex items-center justify-center shadow-sm">
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

              {current.serviceMentioned && (
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                  {current.serviceMentioned}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
