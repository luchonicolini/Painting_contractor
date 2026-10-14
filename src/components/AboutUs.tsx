import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 md:py-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Structured Story */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
              {language === 'en' ? 'ABOUT EL PALMAR' : 'SOBRE EL PALMAR'}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight">
              {language === 'en'
                ? 'A Family Promise of Honest Craft & Flawless Care'
                : 'Una Promesa Familiar de Honestidad y Acabados Impecables'}
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-1.5 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-brand-blue" />
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
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-brand-blue text-slate-700 italic text-sm leading-relaxed">
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
          <div className="pt-4 flex items-center gap-6 sm:gap-8 border-t border-slate-100">
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 block">
                12+
              </span>
              <span className="text-[12px] text-slate-400 font-medium">
                {language === 'en' ? 'Years in Florida' : 'Años en Florida'}
              </span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-blue block">
                5.0 ★
              </span>
              <span className="text-[12px] text-slate-400 font-medium">
                {language === 'en' ? 'Google Rating' : 'Calificación Google'}
              </span>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 block">
                100%
              </span>
              <span className="text-[12px] text-slate-400 font-medium">
                {language === 'en' ? 'Owner Supervised' : 'Supervisado por Dueños'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Portrait Photo of Founders */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv_2BTOv8Vtl_-zNeREKkAu9CSJg4qhDzbN-R6VQCEb7Y7znEHyD9KB5FojLwqzpuuAjP8Cbe_yAecL8MGp4QS_5CUQ_MtXn5sLEtJfLS08jcJ07pa--S9xt1C1gfM4G8NklDPQzYT0dhulPZeth0vvNNPdWVvhB87PIDNETPAmFC6bZgZq8s_POJI9bAuZ9nWOFJSLOTNaiMmAABmljSYdkvE1-kPttTi2y5VGSWaQwR7rWDpUWQ"
              alt="Yalila and Rodolfo - Founders of El Palmar Painting and Services"
              className="w-full h-[480px] sm:h-[540px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
            />

            {/* Gradient shadow overlay on bottom of photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Minimalist Name Tag on Photo Bottom */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="font-heading font-extrabold text-slate-900 text-base block">
                  Yalila & Rodolfo
                </span>
                <span className="text-brand-blue text-xs font-bold tracking-wide">
                  {language === 'en' ? 'Founders & Master Finishers' : 'Fundadores y Maestros de Acabados'}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'en' ? 'FL Licensed & Insured' : 'Licencia y Seguro en Florida'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
