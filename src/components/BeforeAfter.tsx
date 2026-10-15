import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BEFORE_AFTER_CASES } from '../data/company';

export const BeforeAfter: React.FC = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal();

  const activeCase = BEFORE_AFTER_CASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onStopDrag = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onStopDrag);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onStopDrag);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onStopDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onStopDrag);
    };
  }, [isDragging, handleMove]);

  return (
    <section ref={revealRef} className="scroll-reveal max-w-[1240px] mx-auto px-4 sm:px-6 py-20 border-t border-slate-100" id="before-after">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-blue block mb-2">
          {language === 'en' ? 'REAL TRANSFORMATIONS' : 'TRANSFORMACIONES REALES'}
        </span>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {language === 'en' ? 'The El Palmar Difference' : 'El Antes y Después de Nuestro Trabajo'}
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          {language === 'en'
            ? 'Drag the slider below to see how weathered stucco and faded exteriors are restored to architectural elegance.'
            : 'Arrastra el divisor central para comparar cómo un estuco desgastado por el sol recobra vida con nuestro acabado profesional.'}
        </p>
      </div>

      {/* Main Comparison Component */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          onMouseDown={handleStartDrag}
          onTouchStart={handleStartDrag}
          className="relative h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-200/80 bg-slate-950"
        >
          {/* AFTER IMAGE (Background base layer) */}
          <img
            src={activeCase.afterImage}
            alt="After finish"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />

          {/* AFTER BADGE */}
          <div className="absolute top-5 right-5 z-20 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 font-heading text-xs font-bold uppercase tracking-wider border border-emerald-500/30 shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'en' ? 'After (Restored)' : 'Después (Restaurado)'}</span>
            </span>
          </div>

          {/* BEFORE IMAGE (Clipped overlay layer with clip-path for 1:1 pixel alignment) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <img
              src={activeCase.beforeImage}
              alt="Before finish"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Subtle contrast tint on before layer */}
            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

            {/* BEFORE BADGE */}
            <div className="absolute top-5 left-5 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 font-heading text-xs font-bold uppercase tracking-wider border border-amber-500/30 shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{language === 'en' ? 'Before (Weathered)' : 'Antes (Deteriorado)'}</span>
              </span>
            </div>
          </div>

          {/* SLIDER DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Vertical hairline divider line */}
            <div className="absolute top-0 bottom-0 w-0.5 -ml-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

            {/* Center Floating Handle Circle */}
            <div
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-slate-900 shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border-2 border-brand-blue hover:scale-110 active:scale-95 transition-transform"
              aria-label="Drag to compare before and after"
            >
              <ChevronsLeftRight className="w-5 h-5 text-brand-navy" />
            </div>
          </div>

          {/* Accessibility Hidden Range Slider for Keyboard & Screen Readers */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={e => setSliderPosition(Number(e.target.value))}
            aria-label="Before and after image comparison slider"
            className="sr-only"
          />
        </div>

        {/* Case Study Details Box */}
        <div className="mt-8 p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-slate-900 text-lg">
                {activeCase.title[language]}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                <MapPin className="w-3 h-3 text-brand-blue" />
                <span>{activeCase.location}</span>
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
              {activeCase.description[language]}
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-emerald-700 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {language === 'en' ? 'Elastomeric Weather Seal' : 'Sellador Elastomérico UV'}
              </span>
              <span>•</span>
              <span>{language === 'en' ? 'Satin Long-Life Acrylic' : 'Acrílico Satinado de Larga Vida'}</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-heading text-xs font-bold shadow-md shadow-slate-900/10 hover:shadow-lg transition-all whitespace-nowrap active:scale-95"
          >
            <span>{language === 'en' ? 'Get Quote For Your Home' : 'Cotizar Para Tu Casa'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
