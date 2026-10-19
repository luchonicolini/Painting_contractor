import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/company';

const initialsOf = (name: string) =>
  name
    .replace(/&/g, '')
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const revealRef = useScrollReveal();
  const reviewsUrl = BUSINESS_INFO.social.googleReviews;

  return (
    <section ref={revealRef} className="scroll-reveal w-full py-20 md:py-28" id="reviews">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left rail: heading + rating summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
              {language === 'en' ? 'Verified Experiences' : 'Testimonios Reales'}
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08] text-balance">
              {language === 'en' ? 'What Our Customers Are Saying' : 'Lo Que Dicen Quienes Ya Nos Eligieron'}
            </h2>

            <div className="mt-7 rounded-3xl bg-slate-50 border border-slate-200/80 p-6">
              <div className="flex items-end gap-3">
                <span className="font-heading font-semibold text-5xl text-brand-navy leading-none">
                  {BUSINESS_INFO.stats.rating.toFixed(1)}
                </span>
                <div className="flex flex-col pb-1">
                  <span className="text-amber-400 text-base leading-none tracking-wide" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    {BUSINESS_INFO.stats.reviewCount}{' '}
                    {language === 'en' ? 'Google reviews' : 'reseñas en Google'}
                  </span>
                </div>
              </div>
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-sapphire hover:text-brand-sapphire-hover transition-colors group"
              >
                <span>{language === 'en' ? 'Read verified reviews on Google' : 'Leer reseñas verificadas en Google'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: editorial wall of real reviews */}
          <div className="lg:col-span-8">
            <div className="columns-1 sm:columns-2 gap-4 [column-fill:balance]">
              {TESTIMONIALS.map((rev) => (
                <figure
                  key={rev.id || rev.author}
                  className="mb-4 break-inside-avoid rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <Quote className="w-6 h-6 text-brand-sapphire/20" />
                  <div className="flex items-center gap-1.5 mt-3 mb-2">
                    <span className="text-amber-400 text-sm tracking-wide" aria-hidden="true">
                      ★★★★★
                    </span>
                    {rev.serviceMentioned && (
                      <span className="ml-auto text-[10px] uppercase tracking-wider font-semibold text-slate-500 border border-slate-200 rounded-full px-2 py-0.5">
                        {typeof rev.serviceMentioned === 'string'
                          ? rev.serviceMentioned
                          : rev.serviceMentioned[language]}
                      </span>
                    )}
                  </div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed">
                    “{rev.comment[language]}”
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-brand-navy text-white font-heading font-semibold text-xs flex items-center justify-center flex-shrink-0">
                      {initialsOf(rev.author)}
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="font-heading font-semibold text-slate-900 text-sm leading-tight truncate">
                        {rev.author}
                      </span>
                      <span className="text-slate-500 text-xs mt-0.5 truncate">{rev.location}</span>
                    </span>
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 ml-auto flex-shrink-0" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
