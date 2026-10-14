import { useState } from 'react';
import { MapPin, ZoomIn, X, Columns2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO } from '../data/company';
import { PortfolioItem } from '../types';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 border-t border-slate-100" id="gallery">
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
            onClick={() => setActiveFilter(tab.id)}
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
        {filteredItems.map(item => (
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
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>{item.location}</span>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            {/* Category Tag (Always visible) */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-md shadow-sm">
              {item.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] bg-slate-950 flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title[language]}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {selectedItem.title[language]}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{selectedItem.location}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-heading text-xs font-bold transition-colors shadow-sm"
              >
                {language === 'en' ? 'Get Similar Finish' : 'Cotizar Trabajo Similar'}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Before/After Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
            <Columns2 className="w-6 h-6" />
          </div>
          <div>
            <span className="font-heading font-bold text-slate-900 text-base sm:text-lg block">
              {language === 'en'
                ? 'Want to see our transformation before & afters?'
                : '¿Quieres ver la diferencia de un Antes y Después?'}
            </span>
            <span className="text-slate-500 text-xs sm:text-sm">
              {language === 'en'
                ? 'Explore how weathered stucco and faded paint are restored to brand-new condition.'
                : 'Descubre cómo estuco dañado y pintura desgastada quedan impecables como nuevos.'}
            </span>
          </div>
        </div>

        <a
          href="#before-after"
          className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 font-heading text-xs sm:text-sm font-bold hover:bg-slate-100 hover:border-slate-300 shadow-sm transition-all whitespace-nowrap"
        >
          {language === 'en' ? 'View Before & After Slider' : 'Ver Comparador Antes y Después'}
        </a>
      </div>
    </section>
  );
};
