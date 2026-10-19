import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, ZoomIn, X, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PORTFOLIO } from '../data/company';
import { PortfolioItem } from '../types';

const filterTabs = [
  { id: 'all', label: { en: 'All Projects', es: 'Todos los Proyectos' } },
  { id: 'exterior', label: { en: 'Exterior Painting', es: 'Pintura Exterior' } },
  { id: 'interior', label: { en: 'Interior & Ceilings', es: 'Interiores y Techos' } },
  { id: 'roof-wash', label: { en: 'Roof & Pressure Wash', es: 'Techos y Lavado' } },
  { id: 'commercial', label: { en: 'Commercial', es: 'Comercial' } },
] as const;

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [modalImageLoaded, setModalImageLoaded] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const revealRef = useScrollReveal();
  const en = language === 'en';

  const filteredItems = PORTFOLIO.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'roof-wash') return item.category === 'roof' || item.category === 'pressure-washing';
    return item.category === activeFilter;
  });
  const displayedItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    setModalImageLoaded(false);
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
      else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
        if (idx !== -1) setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, filteredItems]);

  return (
    <section ref={revealRef} className="scroll-reveal w-full bg-white py-16 md:py-24 border-t border-slate-100" id="gallery">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
              {en ? 'Our Recent Craftsmanship' : 'Trabajos Recientes'}
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08]">
              {en ? 'Work Gallery' : 'Galería de Proyectos Reales'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl">
              {en
                ? 'Curated residential and commercial transformations across Broward & Miami-Dade counties.'
                : 'Proyectos residenciales y comerciales en Pembroke Pines, Miramar, Doral, Hialeah y Miami.'}
            </p>
          </div>
          <span className="hidden md:block font-heading text-6xl text-brand-navy/15 leading-none select-none">
            {String(filteredItems.length).padStart(2, '0')}
          </span>
        </div>

        {/* Filter Tabs on Light Background */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={activeFilter === tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                setVisibleCount(12);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeFilter === tab.id
                  ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                  : 'bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label[language]}
            </button>
          ))}
        </div>

        {/* Masonry Photo Wall */}
        <div className="columns-2 md:columns-3 xl:columns-4 gap-3 sm:gap-4 [column-fill:balance]">
          {displayedItems.map((item) => {
            const isLoaded = Boolean(loadedImages[item.id]);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={item.title[language]}
                className="group relative mb-3 sm:mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden bg-slate-100 cursor-pointer text-left ring-1 ring-slate-200/80 shadow-xs hover:shadow-xl transition-all"
              >
                {/* Skeleton Screen Shimmer Card */}
                {!isLoaded && (
                  <div className="w-full aspect-[4/3] skeleton-shimmer rounded-2xl flex flex-col justify-end p-4">
                    <div className="h-4 w-3/5 bg-slate-300/80 rounded-md mb-2 animate-pulse" />
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300/70 animate-pulse" />
                      <div className="h-3 w-2/5 bg-slate-300/60 rounded-md animate-pulse" />
                    </div>
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.title[language]}
                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
                  className={`w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-[900ms] ease-out ${
                    isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-white font-heading font-semibold text-sm sm:text-base leading-tight mb-1">
                    {item.title[language]}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-brand-sapphire" />
                    <span>{item.location}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Show More Work Button */}
        {filteredItems.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-300 bg-white text-slate-800 font-sans text-xs sm:text-sm font-semibold hover:bg-slate-100 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
            >
              {en
                ? `Show More Work (${filteredItems.length - visibleCount} more)`
                : `Ver Más Trabajos (${filteredItems.length - visibleCount} más)`}
            </button>
          </div>
        )}

        {/* Direct Conversion Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-sapphire/10 text-brand-sapphire flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-heading font-semibold text-slate-900 text-base sm:text-lg block">
                {en
                  ? 'Have a specific Florida property or project in mind?'
                  : '¿Tienes un proyecto o propiedad específica en mente?'}
              </span>
              <span className="text-slate-500 text-xs sm:text-sm">
                {en
                  ? 'Owners Yalila & Rodolfo provide accurate on-site measurements and guaranteed written estimates.'
                  : 'Yalila y Rodolfo visitan personalmente tu propiedad para brindarte un presupuesto exacto y por escrito.'}
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-prestige px-6 py-3.5 rounded-full bg-brand-sapphire hover:bg-brand-sapphire-hover text-white font-sans text-xs sm:text-sm font-semibold shadow-md shadow-brand-sapphire/20 transition-all whitespace-nowrap"
          >
            {en ? 'Request Free On-Site Quote' : 'Solicitar Presupuesto en Obra'}
          </a>
        </div>
      </div>

      {/* Lightbox Modal via Portal */}
      {selectedItem &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="fixed top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
                  setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
                }}
                className="flex fixed left-2 sm:left-5 top-1/2 -translate-y-1/2 z-[110] w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 sm:bg-white/10 hover:bg-white/30 text-white items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>
            )}

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
                  setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
                }}
                className="flex fixed right-2 sm:right-5 top-1/2 -translate-y-1/2 z-[110] w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/20 sm:bg-white/10 hover:bg-white/30 text-white items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
              </button>
            )}

            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return;
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) {
                  const idx = filteredItems.findIndex((i) => i.id === selectedItem.id);
                  if (diff > 0) setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
                  else setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
                }
                setTouchStartX(null);
              }}
              style={{ maxHeight: '88vh' }}
            >
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px] max-h-[62vh]">
                {/* Modal Skeleton Screen */}
                {!modalImageLoaded && (
                  <div className="absolute inset-0 skeleton-shimmer-dark flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                  </div>
                )}
                <img
                  key={selectedItem.image}
                  src={selectedItem.image}
                  alt={selectedItem.title[language]}
                  onLoad={() => setModalImageLoaded(true)}
                  className={`max-h-[62vh] w-auto max-w-full object-contain mx-auto transition-opacity duration-300 ${
                    modalImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 flex-shrink-0">
                <div>
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-white">
                    {selectedItem.title[language]}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-sapphire" />
                    <span>{selectedItem.location}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="btn-prestige px-5 py-2.5 rounded-full bg-brand-sapphire hover:bg-brand-sapphire-hover text-white font-sans text-xs font-semibold transition-all shadow-md shadow-brand-sapphire/20 whitespace-nowrap"
                >
                  {en ? 'Get Similar Finish' : 'Cotizar Trabajo Similar'}
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};
