import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Hand, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BEFORE_AFTER_CASES } from '../data/company';

export const BeforeAfter: React.FC = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAfterLoaded, setIsAfterLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useScrollReveal();

  const activeCase = BEFORE_AFTER_CASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
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
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
          {language === 'en' ? 'FEATURED CASE STUDY • PEMBROKE PINES, FL' : 'CASO DE ESTUDIO REAL • PEMBROKE PINES, FL'}
        </span>
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08]">
          {language === 'en' ? 'Exterior Stucco & Sun-Wear Restoration' : 'Restauración de Estuco y Protección Solar'}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
          {language === 'en'
            ? 'Compare the difference between faded, chalking stucco and our sealed, weather-resistant architectural finish.'
            : 'Compara la diferencia entre un estuco decolorado con micro-fisuras y nuestro sellado elastomérico de larga duración.'}
        </p>
      </div>

      {/* Main Comparison Component matching reference design */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          onMouseDown={handleStartDrag}
          onTouchStart={handleStartDrag}
          className="relative aspect-[4/3] sm:aspect-[16/10] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-200/90 bg-slate-900 group"
        >
          {/* Loading Indicator for slow connection */}
          {!isAfterLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10">
              <Loader2 className="w-8 h-8 text-brand-sapphire animate-spin mb-3" />
              <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                {language === 'en' ? 'Loading restoration comparison...' : 'Cargando comparación de restauración...'}
              </span>
            </div>
          )}

          {/* AFTER IMAGE (Base layer) */}
          <img
            src={activeCase.afterImage}
            alt="South Florida home exterior after El Palmar painting restoration"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsAfterLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${
              isAfterLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            draggable={false}
          />

          {/* Minimalist Pill: AFTER (Top-Right) */}
          <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 pointer-events-none">
            <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-sans text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              {language === 'en' ? 'After' : 'Después'}
            </span>
          </div>

          {/* BEFORE IMAGE (Clipped Layer) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <img
              src={activeCase.beforeImage}
              alt="South Florida home exterior before restoration"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Minimalist Pill: BEFORE (Top-Left) */}
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 pointer-events-none">
              <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-sans text-xs sm:text-sm font-medium tracking-wide shadow-sm">
                {language === 'en' ? 'Before' : 'Antes'}
              </span>
            </div>
          </div>

          {/* SLIDER DIVIDER LINE & CIRCULAR HAND KNOB */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none transition-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* White divider line */}
            <div className="absolute top-0 bottom-0 w-0.5 -ml-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

            {/* Center Circular White Handle with Hand Icon */}
            <div
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-slate-800 shadow-2xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border border-black/5 hover:scale-105 active:scale-95 transition-transform"
              aria-label="Drag to compare before and after"
            >
              <Hand className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" strokeWidth={1.8} />
            </div>
          </div>

          {/* Accessibility Hidden Range Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Before and after image comparison slider"
            className="sr-only"
          />
        </div>
      </div>
    </section>
  );
};
