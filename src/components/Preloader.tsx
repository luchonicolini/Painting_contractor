import React, { useEffect, useState } from 'react';
import { BrandLogoIcon } from './BrandLogoIcon';
import { useLanguage } from '../context/LanguageContext';

interface PreloaderProps {
  onLoaded?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const { language } = useLanguage();
  const [progress, setProgress] = useState(15);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    // Critical images to verify before dismissing loader
    const criticalImages = [
      '/images/hero-new-luxury.webp',
      '/images/before-weathered-new.webp',
    ];

    let loadedCount = 0;
    const totalToTrack = criticalImages.length;

    // Detect if connection is taking longer than 1.2s
    const slowTimer = setTimeout(() => {
      setIsSlow(true);
    }, 1200);

    // Smoothly progress simulated bar while assets stream
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        const increment = Math.max(1, Math.floor((90 - prev) * 0.2));
        return prev + increment;
      });
    }, 100);

    const finishLoading = () => {
      clearInterval(progressInterval);
      clearTimeout(slowTimer);
      setProgress(100);

      // Brief delay at 100% so user sees completion, then fade out smoothly
      setTimeout(() => {
        setIsFading(true);
        if (onLoaded) onLoaded();

        setTimeout(() => {
          setIsMounted(false);
        }, 600); // Matches transition duration
      }, 250);
    };

    // Preload critical hero and before-after assets
    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      const onDone = () => {
        loadedCount += 1;
        if (loadedCount >= totalToTrack) {
          finishLoading();
        }
      };
      if (img.complete) {
        onDone();
      } else {
        img.onload = onDone;
        img.onerror = onDone; // Proceed even if an asset fails
      }
    });

    // Hard fallback safety timeout (never block the user more than 2.8s)
    const safetyTimeout = setTimeout(() => {
      finishLoading();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slowTimer);
      clearTimeout(safetyTimeout);
    };
  }, [onLoaded]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading El Palmar Painting & Services"
      className={`fixed inset-0 z-[9999] bg-[#0B192C] text-white flex flex-col items-center justify-center p-6 transition-opacity duration-600 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center max-w-sm w-full mx-auto">
        {/* Animated Brand Emblem */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-xl backdrop-blur-sm animate-pulse">
            <BrandLogoIcon className="w-8 h-8 text-white" />
          </div>
          {/* Subtle spinning glow halo */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-500/20 via-sky-400/30 to-blue-500/20 -z-10 blur-sm animate-spin-slow" />
        </div>

        {/* Brand Name */}
        <h2 className="font-heading font-extrabold text-2xl tracking-tight text-white mb-1">
          El Palmar
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 mb-8">
          Painting & Services
        </span>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-4 border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-400 rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text that reassures slow connections */}
        <p className="text-xs font-medium text-slate-300 tracking-wide transition-opacity duration-300">
          {isSlow
            ? language === 'en'
              ? 'Optimizing high-resolution images for your connection...'
              : 'Cargando imágenes de alta resolución para tu conexión...'
            : language === 'en'
            ? 'Loading architectural gallery & craftsmanship...'
            : 'Cargando galería arquitectónica y acabados...'}
        </p>

        <span className="text-[11px] font-mono text-slate-500 mt-2">
          {progress}%
        </span>
      </div>
    </div>
  );
};
