import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-20 border-t border-slate-100" id="services">
      {/* Editorial Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
        <div className="md:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
            {language === 'en' ? 'WHAT WE OFFER' : 'NUESTROS SERVICIOS'}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            {language === 'en'
              ? 'Want to Know More About Our Services?'
              : '¿Deseas Conocer Más Sobre Nuestros Servicios?'}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-4">
          <p className="text-slate-500 font-normal leading-relaxed text-sm sm:text-base max-w-xl">
            {language === 'en'
              ? 'As South Florida’s dedicated family-owned architectural painting specialists, we design and execute finish coatings that protect and elevate your residence. From full exterior weatherproofing to luxury interior smooth skimming.'
              : 'Como especialistas familiares de pintura y acabados arquitectónicos en el sur de la Florida, aplicamos recubrimientos que protegen y elevan tu propiedad. Desde impermeabilización exterior hasta alisado de techos y pintura interior de alta gama.'}
          </p>
        </div>
      </div>

      {/* FEATURE BLOCK 1: Total Makeovers (Asymmetric Left Collage, Right Text) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
        {/* Asymmetric 2-Photo Collage */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 h-80 sm:h-96 group">
                <img
                  src="/images/project-interior-smooth.webp"
                  alt="Living room smooth Level 5 ceiling and painted interior in Florida"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-5 pb-4">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-100 h-60 sm:h-72 group">
                <img
                  src="/images/project-trim-accent.webp"
                  alt="Accent wall and trim craftsmanship"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Floating Feature Pill */}
          <div className="absolute -bottom-4 left-6 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-xs font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{language === 'en' ? 'Dust-Free Preparation' : 'Preparación Libre de Polvo'}</span>
          </div>
        </div>

        {/* Right Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 lg:pl-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            {language === 'en' ? 'COMPLETE HOME RENOVATIONS' : 'RENOVACIONES INTEGRALES'}
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {language === 'en' ? 'Total Makeovers' : 'Transformaciones Completas'}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {language === 'en'
              ? 'By working with you from the initial color consultation and sample testing, we create a structured plan and execute with zero dust and surgical cleanliness.'
              : 'Trabajando contigo desde la consulta inicial de color y pruebas en pared, diseñamos un plan estructurado que ejecutamos con pulcritud y limpieza quirúrgica.'}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            {language === 'en'
              ? 'We project manage your home transformation from start to finish. You deal directly with owners Yalila and Rodolfo—which means no sales reps, no pushy middle-men, and absolute accountability.'
              : 'Supervisamos cada etapa de tu renovación. Tratas directamente con los dueños, Yalila y Rodolfo, lo que garantiza comunicación transparente, sin intermediarios y con total responsabilidad.'}
          </p>

          <div className="space-y-2 py-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{language === 'en' ? '100% Floor & Furniture Protective Masking' : 'Empapelado total de pisos, muebles y molduras'}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{language === 'en' ? 'Premium Sherwin-Williams & Benjamin Moore Paints' : 'Pinturas de gama alta Sherwin-Williams y Benjamin Moore'}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{language === 'en' ? 'Full Multi-Million Dollar Liability Insurance' : 'Póliza de seguro y licencia activa en Florida'}</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#gallery"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white font-heading text-xs font-semibold shadow-sm hover:shadow-md transition-all group"
            >
              <span>{language === 'en' ? 'Check our Projects to see more' : 'Ver nuestros proyectos'}</span>
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* FEATURE BLOCK 2: Living Rooms & Popcorn Removal (Reversed Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 lg:pr-6 order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
            {language === 'en' ? 'SMOOTH CEILINGS & MODERN INTERIORS' : 'TECHOS LISOS E INTERIORES MODERNOS'}
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            {language === 'en' ? 'Living Rooms & Popcorn Removal' : 'Salas de Estar y Retiro de Popcorn'}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {language === 'en'
              ? 'Color is making its way back into our living spaces and open architectures. You can elevate your property using contrasting trim lines, architectural casing, or smooth Level 5 ceiling conversions.'
              : 'El color y la luz son el alma de los espacios modernos. Puedes modernizar tu propiedad eliminando texturas pesadas y aplicando molduras nítidas y techos lisos Nivel 5.'}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            {language === 'en'
              ? 'The secret to timeless interiors is in substrate preparation. We scrape dated textured popcorn ceilings under full containment, skim smooth, and finish with non-reflective matte coatings that bounce Florida natural light effortlessly.'
              : 'El secreto de un acabado impecable está en la preparación del fondo. Raspamos techos con textura popcorn bajo aislamiento hermético, aplicamos pasta niveladora y terminamos con pintura mate que refleja la luz natural de Florida.'}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            {language === 'en'
              ? 'We use strictly premium low/zero-VOC formulations so you can enjoy your transformed sanctuary immediately without lingering chemical odors.'
              : 'Usamos pinturas de bajísimo olor (Zero-VOC) para que disfrutes de tu hogar transformado de inmediato sin olores molestos ni químicos nocivos.'}
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="text-brand-blue font-semibold text-sm hover:text-brand-blue-hover underline underline-offset-4 flex items-center gap-1.5 group"
            >
              <span>{language === 'en' ? 'Schedule an in-home sample test' : 'Agenda una prueba de color en tu hogar'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Multi-Photo Composition */}
        <div className="lg:col-span-6 relative order-1 lg:order-2">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 h-80 sm:h-96 group">
                <img
                  src="/images/project-living-room-white.webp"
                  alt="Flawless exterior and interior transition finished in pure white"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 h-36 sm:h-44 group">
                <img
                  src="/images/project-exterior-facade.webp"
                  alt="Exterior detail and facade"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 h-36 sm:h-44 group">
                <img
                  src="/images/project-roof-driveway.webp"
                  alt="Roof restoration and driveway sealing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MINI SERVICE CARDS ROW (What Do We Do?) */}
      <div className="mt-8 pt-12 border-t border-slate-100">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
            {language === 'en' ? 'SPECIALIZED SCOPE' : 'ESPECIALIDADES PRINCIPALES'}
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
            {language === 'en' ? 'What Do We Do?' : '¿Qué Hacemos en El Palmar?'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition">
              <img
                src="/images/project-exterior-weatherproof.webp"
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
                src="/images/project-interior-smooth.webp"
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
                src="/images/project-popcorn-smooth.webp"
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
