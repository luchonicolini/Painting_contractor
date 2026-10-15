import { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: { en: 'Services', es: 'Servicios' } },
    { href: '#gallery', label: { en: 'Work Gallery', es: 'Galería' } },
    { href: '#why-us', label: { en: 'Why Choose Us', es: 'Por Qué Elegirnos' } },
    { href: '#about', label: { en: 'About Us', es: 'Sobre Nosotros' } },
    { href: '#reviews', label: { en: 'Reviews', es: 'Reseñas' } },
    { href: '#contact', label: { en: 'Contact', es: 'Contacto' } },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-brand-navy text-white text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-[1240px] mx-auto px-6 py-2 flex items-center justify-between">
          {/* Location & Service Area */}
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-amber" />
            <span>
              {language === 'en'
                ? 'Serving Miami-Dade & Broward County | Hialeah, Pembroke Pines, Doral & Miami'
                : 'Al servicio de Miami-Dade y Broward | Hialeah, Pembroke Pines, Doral y Miami'}
            </span>
          </div>

          {/* Direct Phone, Hours & Language Switcher */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {language === 'en' ? 'Mon-Fri 8am-5pm | Sat-Sun 10am-3pm' : 'Lun-Vie 8am-5pm | Sáb-Dom 10am-3pm'}
              </span>
            </div>

            <div className="h-3 w-px bg-white/20" />

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-brand-amber transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <div className="h-3 w-px bg-white/20" />

            {/* Smooth Segmented Language Switch */}
            <div className="inline-flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-brand-amber" />
              <div
                role="radiogroup"
                aria-label="Language selector"
                className="relative inline-flex items-center p-0.5 rounded-full bg-black/30 border border-white/20 text-xs shadow-inner"
              >
                {/* Sliding indicator */}
                <span
                  aria-hidden="true"
                  className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-sm transition-all duration-200 ease-out ${
                    language === 'es' ? 'left-[calc(50%+1px)]' : 'left-[2px]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`relative z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                    language === 'en' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                  aria-checked={language === 'en'}
                  role="radio"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`relative z-10 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                    language === 'es' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
                  }`}
                  aria-checked={language === 'es'}
                  role="radio"
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-slate-100/80 py-4'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
          {/* Logo with architectural brush mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-md shadow-slate-900/15 group-hover:bg-brand-navy-light transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 leading-tight">
                El Palmar
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                Painting & Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-amber transition-colors duration-150 py-1"
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          {/* Call & Primary Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex flex-col text-right group"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {language === 'en' ? 'Direct Line' : 'Línea Directa'}
              </span>
              <span className="text-sm font-bold text-slate-800 group-hover:text-brand-amber transition-colors">
                {BUSINESS_INFO.phone}
              </span>
            </a>

            <a
              href="#contact"
              className="btn-prestige inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-amber hover:bg-brand-amber-hover text-white font-heading text-sm font-bold shadow-md shadow-brand-amber/25 hover:shadow-lg hover:shadow-brand-amber/35 active:scale-[0.98] transition-all"
            >
              <span>{language === 'en' ? 'Request Free Quote' : 'Presupuesto Gratis'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls: Segmented Language & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div
              role="radiogroup"
              aria-label="Language selector"
              className="relative inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs shadow-inner"
            >
              {/* Sliding indicator */}
              <span
                aria-hidden="true"
                className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white shadow-xs transition-all duration-200 ease-out ${
                  language === 'es' ? 'left-[calc(50%+1px)]' : 'left-[2px]'
                }`}
              />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`relative z-10 px-2 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  language === 'en' ? 'text-slate-900 font-extrabold' : 'text-slate-400'
                }`}
                aria-checked={language === 'en'}
                role="radio"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`relative z-10 px-2 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                  language === 'es' ? 'text-slate-900 font-extrabold' : 'text-slate-400'
                }`}
                aria-checked={language === 'es'}
                role="radio"
              >
                ES
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-6 py-6 shadow-xl transition-all">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-brand-amber transition-colors py-1 border-b border-slate-50"
                >
                  {t(link.label)}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 text-slate-900 font-heading text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={BUSINESS_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-heading text-sm font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-prestige w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-amber hover:bg-brand-amber-hover text-white font-heading text-sm font-bold shadow-md shadow-brand-amber/25"
                >
                  <span>{language === 'en' ? 'Request Free Quote' : 'Presupuesto Gratis'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
