import { Phone, Mail, Clock, ArrowUp, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-16 text-slate-500 text-sm">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Logo & Bio */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-navy flex items-center justify-center text-white shadow-sm shadow-slate-900/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-slate-900 text-lg leading-none">
                  El Palmar
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400">
                  Painting & Services
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'South Florida’s dedicated family-owned architectural painting and finish contractors. Founded by Yalila & Rodolfo with an uncompromising commitment to zero shortcuts and immaculate cleanups.'
                : 'Empresa familiar de pintura y acabados arquitectónicos en el sur de la Florida. Fundada por Yalila y Rodolfo con el compromiso de cero atajos y máxima limpieza.'}
            </p>

            <div className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{language === 'en' ? 'Licensed & Insured Florida Painting Contractor' : 'Contratista con Licencia y Seguro Activo'}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BUSINESS_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs">
            <span className="font-heading font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
              {language === 'en' ? 'Services' : 'Servicios'}
            </span>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Exterior Weatherproofing' : 'Pintura Exterior y Estuco'}
            </a>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Interior Painting & Drywall' : 'Pintura Interior y Drywall'}
            </a>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Popcorn Ceiling Removal' : 'Retiro de Techo Popcorn'}
            </a>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Roof Restoration & Sealing' : 'Sellado y Pintura de Techos'}
            </a>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Pressure Washing & Driveways' : 'Lavado a Presión de Entradas'}
            </a>
            <a href="#services" className="hover:text-brand-amber transition-colors">
              {language === 'en' ? 'Commercial & Rental Turnover' : 'Pintura Comercial y Renta'}
            </a>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs">
            <span className="font-heading font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
              {language === 'en' ? 'Service Areas' : 'Áreas de Servicio'}
            </span>
            <span>Hialeah & Miami Lakes</span>
            <span>Pembroke Pines & Miramar</span>
            <span>Miami, Doral & Coral Gables</span>
            <span>Hollywood & Fort Lauderdale</span>
            <span>Weston & Southwest Ranches</span>
          </div>

          {/* Direct Contact & Hours */}
          <div className="md:col-span-2 flex flex-col gap-2 text-xs">
            <span className="font-heading font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
              {language === 'en' ? 'Direct Contact' : 'Contacto Directo'}
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-bold text-slate-900 text-sm hover:text-brand-amber transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-slate-600 hover:text-brand-amber transition-colors break-all flex items-center gap-1.5 mt-1"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="text-xs">{BUSINESS_INFO.email}</span>
            </a>

            <div className="flex items-start gap-1.5 text-slate-500 mt-2">
              <Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs leading-tight">
                <span>Mon-Fri 8am–5pm</span>
                <br />
                <span>Sat-Sun 10am–3pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Real Family Identity and Licensure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left leading-relaxed">
            <span className="font-medium text-slate-700">© 2026 El Palmar Painting & Services.</span>{' '}
            <span>
              {language === 'en'
                ? 'Dedicated family-owned painting contractors serving Hialeah, Pembroke Pines, Miramar, Doral, Miami & Broward County. Fully Licensed & Insured in Florida.'
                : 'Empresa familiar de pintura al servicio de Hialeah, Pembroke Pines, Miramar, Doral, Miami y Broward. Contratista con Licencia y Seguro Activo en Florida.'}
            </span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={BUSINESS_INFO.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-amber transition-colors flex items-center gap-1 font-semibold"
            >
              <span>{language === 'en' ? 'Google Reviews (5.0 ★)' : 'Reseñas en Google (5.0 ★)'}</span>
            </a>
            <span className="text-slate-300">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-brand-navy transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>{language === 'en' ? 'Back to top' : 'Volver arriba'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
