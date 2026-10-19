import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="scroll-reveal max-w-[1240px] mx-auto px-4 sm:px-6 py-16 md:py-24 border-t border-slate-100" id="services">
      {/* Editorial Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
        <div className="md:col-span-7">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
            {language === 'en' ? 'What We Offer' : 'Nuestros Servicios'}
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08] text-balance">
            {language === 'en'
              ? 'Architectural Painting & Surface Protection'
              : 'Pintura Especializada y Protección de Superficies'}
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base text-pretty">
            {language === 'en'
              ? 'As South Florida’s dedicated family-owned architectural painting specialists, we design and execute finish coatings that protect and elevate your residence. From full exterior weatherproofing to luxury interior smooth skimming.'
              : 'Como especialistas familiares de pintura y acabados arquitectónicos en el sur de la Florida, aplicamos recubrimientos que protegen y elevan tu propiedad. Desde impermeabilización exterior hasta alisado de techos y pintura interior de alta gama.'}
          </p>
        </div>
      </div>

      {/* Chapter 01: Total Makeovers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-7">
              <div className="rounded-[1.75rem] overflow-hidden bg-slate-100 border border-slate-200/80 aspect-[3/4] sm:aspect-[4/5] group">
                <img
                  src="/images/project-interior-smooth.webp"
                  alt="Living room smooth Level 5 ceiling and painted interior in Florida"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
            </div>
            <div className="col-span-5 pb-6">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-200/80 aspect-[3/4] group">
                <img
                  src="/images/project-trim-accent.webp"
                  alt="Accent wall and trim craftsmanship"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col items-start gap-5 lg:pl-2">
          <span className="font-heading text-6xl text-brand-navy/15 leading-none -mb-2">01</span>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {language === 'en' ? 'Total Makeovers' : 'Transformaciones Completas'}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'By working with you from the initial color consultation and sample testing, we create a structured plan and execute with zero dust and surgical cleanliness.'
              : 'Trabajando contigo desde la consulta inicial de color y pruebas en pared, diseñamos un plan estructurado que ejecutamos con pulcritud y limpieza quirúrgica.'}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'We project manage your home transformation from start to finish. You deal directly with owners Yalila and Rodolfo—which means no sales reps, no pushy middle-men, and absolute accountability.'
              : 'Supervisamos cada etapa de tu renovación. Tratas directamente con los dueños, Yalila y Rodolfo, lo que garantiza comunicación transparente, sin intermediarios y con total responsabilidad.'}
          </p>
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 pt-2 font-sans font-semibold text-sm text-brand-sapphire hover:text-brand-sapphire-hover transition-all"
          >
            <span>{language === 'en' ? 'Explore Completed Projects' : 'Ver Proyectos Realizados'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Chapter 02: Living Rooms & Popcorn Removal (reversed) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
        <div className="lg:col-span-5 flex flex-col items-start gap-5 order-2 lg:order-1">
          <span className="font-heading text-6xl text-brand-navy/15 leading-none -mb-2">02</span>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {language === 'en' ? 'Living Rooms & Popcorn Removal' : 'Salas de Estar y Retiro de Popcorn'}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'Color is making its way back into our living spaces and open architectures. You can elevate your property using contrasting trim lines, architectural casing, or smooth Level 5 ceiling conversions.'
              : 'El color y la luz son el alma de los espacios modernos. Puedes modernizar tu propiedad eliminando texturas pesadas y aplicando molduras nítidas y techos lisos Nivel 5.'}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'The secret to timeless interiors is in substrate preparation. We scrape dated textured popcorn ceilings under full containment, skim smooth, and finish with non-reflective matte coatings that bounce Florida natural light effortlessly.'
              : 'El secreto de un acabado impecable está en la preparación del fondo. Raspamos techos con textura popcorn bajo aislamiento hermético, aplicamos pasta niveladora y terminamos con pintura mate que refleja la luz natural de Florida.'}
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'en'
              ? 'We use strictly premium low/zero-VOC formulations so you can enjoy your transformed sanctuary immediately without lingering chemical odors.'
              : 'Usamos pinturas de bajísimo olor (Zero-VOC) para que disfrutes de tu hogar transformado de inmediato sin olores molestos ni químicos nocivos.'}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 pt-2 font-sans font-semibold text-sm text-brand-sapphire hover:text-brand-sapphire-hover transition-all"
          >
            <span>{language === 'en' ? 'Schedule a Free Color Consultation' : 'Agenda una Asesoría de Color en Tu Hogar'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7">
              <div className="rounded-[1.75rem] overflow-hidden bg-slate-100 border border-slate-200/80 aspect-[4/5] group">
                <img
                  src="/images/project-popcorn-smooth.webp"
                  alt="Flawless ceiling and interior drywall finishing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
            </div>
            <div className="col-span-5 space-y-4">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-200/80 aspect-square group">
                <img
                  src="/images/project-living-room-white.webp"
                  alt="Exterior detail and facade painting"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-100 border border-slate-200/80 aspect-square group">
                <img
                  src="/images/project-exterior-weatherproof.webp"
                  alt="Exterior weatherproofing and entrance finish"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MINI SERVICE CARDS ROW (What Do We Do?) */}
      <div className="mt-8 pt-12 border-t border-slate-100">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
            {language === 'en' ? 'SPECIALIZED SCOPE' : 'ESPECIALIDADES PRINCIPALES'}
          </span>
          <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {language === 'en' ? 'Core Painting Specialties' : 'Nuestras Especialidades Principales'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
              <img
                src="/images/service-exterior.webp"
                alt="Exterior weatherproofing"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="font-heading font-bold text-slate-900 text-lg">
              {language === 'en' ? 'Exterior Weatherproofing' : 'Impermeabilización Exterior'}
            </span>
            <span className="text-slate-500 text-sm mt-1">
              {language === 'en'
                ? 'Stucco sealing, elastomeric shield & trim'
                : 'Sellado de estuco, escudo elastomérico y molduras'}
            </span>
          </div>

          <div className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
              <img
                src="/images/service-drywall.webp"
                alt="Interior ceilings and walls"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="font-heading font-bold text-slate-900 text-lg">
              {language === 'en' ? 'Smooth Ceilings & Walls' : 'Techos Lisos y Paredes'}
            </span>
            <span className="text-slate-500 text-sm mt-1">
              {language === 'en'
                ? 'Dust-free acoustic scraping & Level 5 skim'
                : 'Eliminación limpia de popcorn y alisado Nivel 5'}
            </span>
          </div>

          <div className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
              <img
                src="/images/service-pressure-washing.webp"
                alt="Roof and pressure washing"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="font-heading font-bold text-slate-900 text-lg">
              {language === 'en' ? 'Roof & Flatwork Sealing' : 'Sellado de Techos y Entradas'}
            </span>
            <span className="text-slate-500 text-sm mt-1">
              {language === 'en'
                ? 'Thermal coatings, tile sealing & pressure wash'
                : 'Pintura térmica, sellado de tejas y lavado a presión'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
