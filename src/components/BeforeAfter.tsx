import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
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
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-500 block mb-2">
          {language === 'en' ? 'FEATURED CASE STUDY • PEMBROKE PINES, FL' : 'CASO DE ESTUDIO REAL • PEMBROKE PINES, FL'}
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {language === 'en' ? 'Exterior Stucco & Sun-Wear Restoration' : 'Restauración de Estuco y Protección Solar'}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
          {language === 'en'
            ? 'Compare the difference between faded, chalking stucco and our sealed, weather-resistant architectural finish.'
            : 'Compara la diferencia entre un estuco decolorado con micro-fisuras y nuestro sellado elastomérico de larga duración.'}
        </p>

        {/* Quick View Controls: Enables effortless toggling on mobile without awkward dragging */}
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/80 mt-6 text-xs font-semibold text-slate-600 gap-1 shadow-xs">
          <button
            onClick={() => setSliderPosition(98)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              sliderPosition > 85 ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            {language === 'en' ? 'View Before' : 'Ver Antes'}
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              sliderPosition >= 30 && sliderPosition <= 70 ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            {language === 'en' ? 'Interactive 50 / 50' : 'Comparar 50 / 50'}
          </button>
          <button
            onClick={() => setSliderPosition(2)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              sliderPosition < 15 ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            {language === 'en' ? 'View Finished' : 'Ver Terminado'}
          </button>
        </div>
      </div>

      {/* Main Comparison Component */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          onMouseDown={handleStartDrag}
          onTouchStart={handleStartDrag}
          className="relative h-[360px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-slate-200/90 bg-slate-900"
        >
          {/* AFTER IMAGE (Background base layer) */}
          <img
            src={activeCase.afterImage}
            alt="South Florida home exterior after El Palmar painting restoration"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />

          {/* Discreet Architectural Label: AFTER */}
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-950/75 backdrop-blur-md text-white font-medium text-xs tracking-wide border border-white/15 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{language === 'en' ? 'After: El Palmar Finish' : 'Después: Acabado El Palmar'}</span>
            </span>
          </div>

          {/* BEFORE IMAGE (Clipped overlay layer with 1:1 pixel alignment) */}
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

            {/* Subtle contrast tint on before layer */}
            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

            {/* Discreet Architectural Label: BEFORE */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-950/75 backdrop-blur-md text-white font-medium text-xs tracking-wide border border-white/15 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span>{language === 'en' ? 'Before: Weather-Worn' : 'Antes: Desgastado por el Clima'}</span>
              </span>
            </div>
          </div>

          {/* SLIDER DIVIDER LINE & MINIMAL TACTILE HANDLE */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none transition-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Clean hairline divider line */}
            <div className="absolute top-0 bottom-0 w-0.5 -ml-px bg-white/95 shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

            {/* Center Floating Handle Circle */}
            <div
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing border border-slate-300 hover:scale-105 active:scale-95 transition-transform"
              aria-label="Drag to compare before and after"
            >
              <ChevronsLeftRight className="w-4 h-4 text-slate-700" />
            </div>
          </div>

          {/* Accessibility Hidden Range Slider */}
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
      </div>
    </section>
  );
};
