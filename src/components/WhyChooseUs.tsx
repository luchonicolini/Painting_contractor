import React, { useState } from 'react';
import {
  UserCheck,
  FileCheck,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { BUSINESS_INFO } from '../data/company';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const revealRef = useScrollReveal();
  const en = language === 'en';

  const yearsNum = parseInt(BUSINESS_INFO.stats.yearsExperience, 10) || 12;

  const bentoCards = [
    {
      icon: UserCheck,
      tag: en ? 'Direct Oversight' : 'Supervisión Directa',
      title: en ? 'The Owners On Every Jobsite' : 'Los Dueños en Cada Obra',
      desc: en
        ? 'Yalila and Rodolfo personally oversee prep, application, and final walkthrough. No commissioned sales reps, no anonymous sub-contractors on your property.'
        : 'Yalila y Rodolfo supervisan personalmente la preparación, pintura y entrega final. Cero intermediarios y cero cuadrillas anónimas en tu propiedad.',
      feature: en ? '100% Owner supervised daily' : 'Supervisión presencial diaria',
    },
    {
      icon: Sparkles,
      tag: en ? 'Clean Living' : 'Cuidado Total',
      title: en ? 'HEPA Dust-Free Protection' : 'Protección Sin Polvo HEPA',
      desc: en
        ? 'Comprehensive furniture masking, heavy floor runners, and continuous dust containment. We leave your residence cleaner and fresher than we found it.'
        : 'Protección exhaustiva de muebles, pisos y contención de polvo con filtro HEPA. Dejamos tu residencia más limpia de lo que la encontramos.',
      feature: en ? 'Zero airborne dust or residue' : 'Cero polvo ni residuos en el aire',
    },
    {
      icon: ShieldCheck,
      tag: en ? 'Coastal Armor' : 'Clima de Florida',
      title: en ? 'Florida Proven Formulas' : 'Fórmulas para Clima de Florida',
      desc: en
        ? 'Alkali-resistant primers, 100% acrylic elastomeric coatings, and mildewcides formulated strictly to endure South Florida intense heat, storms, and humidity.'
        : 'Selladores resistentes a los álcalis, recubrimientos elastoméricos y anti-moho diseñados para soportar el sol, tormentas y humedad del sur de Florida.',
      feature: en ? 'Guaranteed UV & peeling defense' : 'Garantía contra descascarillado y UV',
    },
    {
      icon: FileCheck,
      tag: en ? 'Zero Surprises' : 'Presupuestos Transparentes',
      title: en ? 'Itemized Estimates & HOA' : 'Presupuestos Claros y Asesoría HOA',
      desc: en
        ? 'Itemized breakdown of paint coats, prep procedures, and zero hidden fees. We also prepare color rendering packets that sail through strict HOA boards.'
        : 'Desglose detallado de manos de pintura y preparación sin costos ocultos. Elaboramos paquetes de color para aprobar comités de asociaciones (HOA).',
      feature: en ? 'Guaranteed written estimate' : 'Cotización detallada por escrito',
    },
  ];

  return (
    <section
      ref={revealRef}
      className="scroll-reveal bg-slate-50/80 py-20 md:py-28 border-y border-slate-100"
      id="why-us"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-sapphire block mb-2.5">
            {en ? 'THE EL PALMAR PROMISE' : 'LA PROMESA EL PALMAR'}
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08] text-balance">
            {en
              ? 'The Peace of Mind of Having the Owners on Your Jobsite'
              : 'La Tranquilidad de Tratar Directamente con sus Dueños'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed text-pretty">
            {en
              ? 'No sales reps, no anonymous crews. For over a decade, Yalila and Rodolfo have managed every project personally with architectural precision, clean execution, and honest communication.'
              : 'Sin intermediarios ni cuadrillas anónimas. Por más de una década, Yalila y Rodolfo han liderado cada obra personalmente con precisión arquitectónica, máxima limpieza y honestidad.'}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Anchor Card: Founders Story & Face of Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[2rem] bg-white border border-slate-200/80 p-5 sm:p-6 shadow-sm shadow-slate-900/5">
            <div>
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] sm:aspect-[4/3.8] lg:aspect-[4/4.2] shadow-sm bg-slate-100">
                {!isPhotoLoaded && (
                  <div className="absolute inset-0 skeleton-shimmer" />
                )}
                <img
                  src="/images/founders-yalila-rodolfo.webp"
                  alt={
                    en
                      ? 'Yalila and Rodolfo, founders of El Palmar'
                      : 'Yalila y Rodolfo, fundadores de El Palmar'
                  }
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setIsPhotoLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    isPhotoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Bottom Gradient Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-transparent">
                  <span className="font-heading italic text-white text-2xl leading-none block font-normal">
                    Yalila &amp; Rodolfo
                  </span>
                  <span className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold mt-1.5 block">
                    {en ? 'Founders · On Every Jobsite' : 'Fundadores · En Cada Obra'}
                  </span>
                </div>
              </div>

              {/* Personal Quote */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <p className="font-heading italic text-slate-700 text-xs sm:text-sm leading-relaxed text-pretty">
                  {en
                    ? '“When you invite someone into your home, you place trust in their character. Our family is on your property every day, treating your home as if it were our own.”'
                    : '“Cuando invitas a alguien a trabajar en tu casa, depositas tu confianza en su persona. Nuestra propia familia está en tu obra todos los días, cuidando tu hogar como el nuestro.”'}
                </p>
                <span className="block mt-2 text-[11px] font-heading font-bold uppercase tracking-wider text-slate-400 not-italic">
                  — Yalila &amp; Rodolfo
                </span>
              </div>
            </div>

            {/* Integrated Proof Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-slate-100 text-center">
              <div>
                <AnimatedCounter
                  end={yearsNum}
                  suffix="+"
                  className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 block"
                />
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">
                  {en ? 'Years in FL' : 'Años en FL'}
                </span>
              </div>
              <div className="border-x border-slate-100">
                <a
                  href={BUSINESS_INFO.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label="4.9 Google Reviews"
                >
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-amber-500 block group-hover:underline">
                    4.9 ★
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5 group-hover:text-slate-600 transition-colors">
                    {en ? 'Google Reviews' : 'Reseñas Google'}
                  </span>
                </a>
              </div>
              <div>
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 block"
                />
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">
                  {en ? 'Supervised' : 'Supervisado'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architectural Bento Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 items-stretch">
            {bentoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] bg-white border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-brand-sapphire/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-sapphire group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.16em] text-brand-sapphire bg-brand-sapphire/5 px-2.5 py-1 rounded-full group-hover:bg-brand-sapphire/10 transition-colors">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-brand-navy transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2.5">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{card.feature}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
