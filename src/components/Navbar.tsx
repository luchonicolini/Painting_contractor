import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';
import { BrandLogoIcon } from './BrandLogoIcon';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const en = language === 'en';
  const area = en ? 'Serving Miami-Dade & Broward' : 'Al servicio de Miami-Dade y Broward';
  const hours = en ? 'Mon–Fri 8–5 · Sat–Sun 10–3' : 'Lun–Vie 8–5 · Sáb–Dom 10–3';

  const navLinks = [
    { href: '#services', label: { en: 'Services', es: 'Servicios' } },
    { href: '#gallery', label: { en: 'Work Gallery', es: 'Galería' } },
    { href: '#why-us', label: { en: 'Why Choose Us', es: 'Por Qué Elegirnos' } },
    { href: '#reviews', label: { en: 'Reviews', es: 'Reseñas' } },
    { href: '#contact', label: { en: 'Contact', es: 'Contacto' } },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        setIsScrolled(window.scrollY > 8);

        const sectionIds = ['services', 'gallery', 'why-us', 'reviews', 'contact'];
        const probe = window.scrollY + 180;
        let currentId = '';

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= probe) {
            currentId = id;
          }
        }
        setActiveSection(currentId);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Utility bar — scrolls away with the page, keeps only the essentials */}
      <div className="hidden md:block bg-brand-navy text-white/70 text-[11px]">
        <div className="max-w-[1240px] mx-auto px-6 h-9 flex items-center justify-between">
          <p className="flex items-center gap-2 tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-brand-sky" />
            <span className="text-white/90 font-semibold">Hialeah, FL</span>
            <span className="text-white/25" aria-hidden="true">·</span>
            <span>{area}</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden lg:flex items-center gap-1.5 tracking-wide">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              <span>{hours}</span>
            </p>
            <span className="hidden lg:block w-px h-3.5 bg-white/15" aria-hidden="true" />
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold tracking-wide hover:text-brand-sky transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="w-px h-3.5 bg-white/15" aria-hidden="true" />
            <div
              className="flex items-center text-xs font-heading font-medium tracking-wider"
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-current={language === 'en' ? 'true' : undefined}
                className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'text-brand-navy font-bold bg-white shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ENG
              </button>
              <span className="text-white/25 select-none px-1">/</span>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                aria-current={language === 'es' ? 'true' : undefined}
                className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                  language === 'es'
                    ? 'text-brand-navy font-bold bg-white shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ESP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav — sticky across the whole page, with elevation on scroll */}
      <header
        id="site-nav"
        className={`sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200/70 transition-shadow duration-300 ${
          isScrolled ? 'is-scrolled' : ''
        }`}
      >
        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 h-16 lg:h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group z-10 flex items-center gap-2.5 shrink-0">
            <span className="relative w-9 h-9 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-sm shadow-slate-900/20 ring-1 ring-inset ring-white/10 group-hover:bg-brand-navy-light transition-colors">
              <BrandLogoIcon className="w-5 h-5 text-white" />
              <span
                className="absolute -bottom-0.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-sapphire ring-2 ring-white"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-[1.05rem] tracking-tight text-slate-900">
                El Palmar
              </span>
              <span className="mt-0.5 text-[9px] uppercase tracking-[0.22em] font-semibold text-slate-400">
                Painting &amp; Services
              </span>
            </span>
          </a>

          {/* Links — truly centered in the bar */}
          <nav
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-6 xl:gap-x-8"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`nav-link text-sm font-medium py-1 transition-colors ${
                    isActive ? 'text-brand-navy font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {en ? link.label.en : link.label.es}
                </a>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="group/phone hidden xl:flex flex-col items-end leading-tight"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {en ? 'Direct Line' : 'Línea Directa'}
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-brand-sapphire transition-colors">
                {BUSINESS_INFO.phone}
              </span>
            </a>

            <a
              href="#contact"
              className="btn-prestige hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-sapphire hover:bg-brand-sapphire-hover text-white font-heading text-sm font-bold shadow-md shadow-brand-sapphire/25 hover:shadow-lg hover:shadow-brand-sapphire/35 active:scale-[0.98] transition-all"
            >
              <span>{en ? 'Get an Estimate' : 'Cotizar Proyecto'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile: language switcher + hamburger */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <div
                className="flex items-center text-xs font-heading font-medium tracking-wider rounded-lg bg-slate-100 p-0.5 border border-slate-200/80"
                role="group"
                aria-label="Language"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                    language === 'en'
                      ? 'text-brand-navy font-bold bg-white shadow-xs'
                      : 'text-slate-500 hover:text-brand-navy'
                  }`}
                >
                  ENG
                </button>
                <span className="text-slate-300 select-none px-0.5">/</span>
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-0.5 rounded transition-all duration-200 cursor-pointer ${
                    language === 'es'
                      ? 'text-brand-navy font-bold bg-white shadow-xs'
                      : 'text-slate-500 hover:text-brand-navy'
                  }`}
                >
                  ESP
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile popover dropdown sheet */}
          {isMobileMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xs lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />
              <div
                className="absolute right-4 sm:right-6 top-[calc(100%+0.5rem)] w-[min(88vw,20rem)] bg-white rounded-2xl shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200/80 p-3 flex flex-col z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-3 text-base font-semibold rounded-xl transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-slate-50 text-brand-sapphire font-bold'
                        : 'text-slate-800 hover:bg-slate-50 hover:text-brand-sapphire'
                    }`}
                  >
                    {en ? link.label.en : link.label.es}
                  </a>
                ))}

                <div className="h-px bg-slate-100 my-2" aria-hidden="true" />

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-slate-50 text-slate-900 font-heading text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-heading text-sm font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-prestige mt-1 flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl bg-brand-sapphire hover:bg-brand-sapphire-hover text-white font-heading text-sm font-bold shadow-md shadow-brand-sapphire/25 transition-all"
                >
                  <span>{en ? 'Get an Estimate' : 'Cotizar Proyecto'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};
