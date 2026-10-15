import { Award, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { BUSINESS_INFO } from '../data/company';

export const AboutUs: React.FC = () => {
  const { language } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="scroll-reveal max-w-[1240px] mx-auto px-4 sm:px-6 py-20 md:py-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Structured Story */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
              {language === 'en' ? 'ABOUT EL PALMAR' : 'SOBRE EL PALMAR'}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight">
              {language === 'en'
                ? 'A Family Promise of Honest Craft & Flawless Care'
                : 'Una Promesa Familiar de Honestidad y Acabados Impecables'}
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-brand-teal" />
                <span>{language === 'en' ? 'Our Team' : 'Nuestro Equipo'}</span>
              </h3>
              <p>
                {language === 'en'
                  ? 'The El Palmar team is dedicated to helping homeowners preserve and elevate their most cherished asset. Through thoughtful listening, precise color consultation, and direct on-site management, we ensure every finish meets architectural quality before we declare a project complete.'
                  : 'En El Palmar nos dedicamos a ayudar a cada propietario a proteger y realzar el valor de su hogar. Mediante una escucha atenta, asesoría de color y supervisión directa en el lugar de trabajo, nos aseguramos de que cada pared y moldura cumpla con los estándares más exigentes.'}
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>{language === 'en' ? "The Founders' Promise" : 'La Promesa de los Fundadores'}</span>
              </h3>
              <p className="mb-3">
                {language === 'en'
                  ? 'With over 12 years in South Florida’s finishing industry, founders Yalila & Rodolfo built El Palmar on a foundation of honesty, respect, and immaculate craftsmanship. Starting with residential interior transformations, they expanded into full coastal weatherproofing and commercial properties.'
                  : 'Con más de 12 años de trayectoria en el sur de Florida, los fundadores Yalila y Rodolfo crearon El Palmar sobre una base de honestidad, respeto y dedicación absoluta. Comenzaron con transformaciones residenciales de interiores y hoy cubren pintura exterior de alta durabilidad y propiedades comerciales.'}
              </p>

              {/* Highlighted Quote Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 italic text-sm leading-relaxed">
                {language === 'en' ? (
                  <>
                    “When you invite someone into your home, you are placing trust in their character. We never send anonymous sub-contractors. Our family is on your property treating your landscaping, tile, and furnishings as if they were our own.”
                  </>
                ) : (
                  <>
                    “Cuando invitas a alguien a trabajar en tu casa, depositas tu confianza en su persona. Nunca enviamos cuadrillas anónimas. Nuestra propia familia está en tu propiedad, cuidando tus pisos, muebles y jardines como si fueran los nuestros.”
                  </>
                )}
                <div className="mt-2.5 not-italic font-heading font-bold text-slate-900 text-xs">
                  — Yalila & Rodolfo, {language === 'en' ? 'Founders' : 'Fundadores'}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="pt-4 flex items-center justify-between sm:justify-start gap-3 sm:gap-8 border-t border-slate-100">
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 block">
                <AnimatedCounter end={12} suffix="+" />
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                {language === 'en' ? 'Years in Florida' : 'Años en Florida'}
              </span>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <a
              href={BUSINESS_INFO.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="group block hover:opacity-90 transition-opacity"
              aria-label="Ver reseñas de 5.0 en Google"
            >
              <span className="font-heading font-extrabold text-xl sm:text-3xl text-amber-500 block group-hover:underline">
                5.0 ★
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium group-hover:text-slate-600 transition-colors">
                {language === 'en' ? 'Google ↗' : 'Google ↗'}
              </span>
            </a>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-3xl text-slate-900 block">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                {language === 'en' ? 'Supervised' : 'Supervisado'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Portrait Photo of Founders */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
            <img
              src="/images/founders-yalila-rodolfo.webp"
              alt="Yalila and Rodolfo - Founders of El Palmar Painting and Services"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] sm:h-[540px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            />

            {/* Gradient shadow overlay on bottom of photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Minimalist Name Tag on Photo Bottom */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl shadow-xl border border-white/40 flex items-center justify-between gap-3">
              <div>
                <span className="font-heading font-extrabold text-slate-900 text-base block">
                  Yalila & Rodolfo
                </span>
                <span className="text-brand-teal text-xs font-bold tracking-wide">
                  {language === 'en' ? 'Founders & Master Finishers' : 'Fundadores y Maestros de Acabados'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
