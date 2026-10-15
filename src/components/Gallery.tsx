import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, ZoomIn, X, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PORTFOLIO } from '../data/company';
import { PortfolioItem } from '../types';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const revealRef = useScrollReveal();

  const filterTabs = [
    { id: 'all', label: { en: 'All Projects', es: 'Todos los Proyectos' } },
    { id: 'exterior', label: { en: 'Exterior Painting', es: 'Pintura Exterior' } },
    { id: 'interior', label: { en: 'Interior & Ceilings', es: 'Interiores y Techos' } },
    { id: 'roof-wash', label: { en: 'Roof & Pressure Wash', es: 'Techos y Lavado' } },
    { id: 'commercial', label: { en: 'Commercial', es: 'Comercial' } },
  ];

  const filteredItems = PORTFOLIO.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'roof-wash') return item.category === 'roof' || item.category === 'pressure-washing';
    return item.category === activeFilter;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex(i => i.id === selectedItem.id);
        if (idx !== -1) {
          setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex(i => i.id === selectedItem.id);
        if (idx !== -1) {
          setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
        }
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
    <section ref={revealRef} className="scroll-reveal max-w-[1240px] mx-auto px-4 sm:px-6 py-20 border-t border-slate-100" id="gallery">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
          {language === 'en' ? 'OUR RECENT CRAFTSMANSHIP' : 'TRABAJOS RECIENTES'}
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {language === 'en' ? 'Work Gallery' : 'Galería de Proyectos Reales'}
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          {language === 'en'
            ? 'Curated residential and commercial transformations across Broward & Miami-Dade counties.'
            : 'Proyectos residenciales y comerciales en Pembroke Pines, Miramar, Doral, Hialeah y Miami.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              setVisibleCount(12);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeFilter === tab.id
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {displayedItems.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
          >
            <img
              src={item.image}
              alt={item.title[language]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />

            {/* Hover Dark Gradient & Zoom Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-white font-heading font-bold text-sm sm:text-base leading-tight mb-1">
                {item.title[language]}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                <span>{item.location}</span>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredItems.length > visibleCount && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white font-heading text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <span>
              {language === 'en'
                ? `Load More Projects (${filteredItems.length - visibleCount} remaining)`
                : `Ver Más Proyectos (${filteredItems.length - visibleCount} restantes)`}
            </span>
          </button>
        </div>
      )}

      {/* Lightbox Modal via Portal */}
      {selectedItem && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="fixed top-4 right-4 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Previous */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = filteredItems.findIndex(i => i.id === selectedItem.id);
                setSelectedItem(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
              }}
              className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Navigation Next */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = filteredItems.findIndex(i => i.id === selectedItem.id);
                setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
              }}
              className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* Modal Card */}
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto"
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: '88vh' }}
          >
            {/* Image Box */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[260px] max-h-[62vh]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title[language]}
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 flex-shrink-0">
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  {selectedItem.title[language]}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-amber" />
                  <span>{selectedItem.location}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="btn-prestige px-5 py-2.5 rounded-xl bg-brand-amber hover:bg-brand-amber-hover text-white font-heading text-xs font-bold transition-all shadow-md shadow-brand-amber/20 whitespace-nowrap"
              >
                {language === 'en' ? 'Get Similar Finish' : 'Cotizar Trabajo Similar'}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Direct Conversion Callout Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100/70 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="font-heading font-bold text-slate-900 text-base sm:text-lg block">
              {language === 'en'
                ? 'Have a specific Florida property or project in mind?'
                : '¿Tienes un proyecto o propiedad específica en mente?'}
            </span>
            <span className="text-slate-500 text-xs sm:text-sm">
              {language === 'en'
                ? 'Owners Yalila & Rodolfo provide accurate on-site measurements and guaranteed written estimates.'
                : 'Yalila y Rodolfo visitan personalmente tu propiedad para brindarte un presupuesto exacto y por escrito.'}
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="btn-prestige px-6 py-3.5 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white font-heading text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all whitespace-nowrap"
        >
          {language === 'en' ? 'Request Free On-Site Quote' : 'Solicitar Presupuesto en Obra'}
        </a>
      </div>
    </section>
  );
};
