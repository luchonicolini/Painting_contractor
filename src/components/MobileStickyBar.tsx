import { Phone, MessageCircle, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/company';

export const MobileStickyBar: React.FC = () => {
  const { language } = useLanguage();

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 p-3 shadow-[0_-8px_25px_rgba(15,41,66,0.12)]">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Direct Phone Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors active:scale-95"
          aria-label="Call El Palmar Painting"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-heading font-bold leading-none">
            {language === 'en' ? 'Call Us' : 'Llamar'}
          </span>
        </a>

        {/* Instant WhatsApp Chat */}
        <a
          href={BUSINESS_INFO.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors active:scale-95 shadow-sm shadow-emerald-600/30"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="text-xs font-heading font-bold leading-none">
            WhatsApp
          </span>
        </a>

        {/* Free Estimate Jump */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white transition-colors active:scale-95 shadow-sm shadow-blue-600/30"
          aria-label="Request Free Estimate"
        >
          <FileText className="w-4 h-4 text-white" />
          <span className="text-xs font-heading font-bold leading-none">
            {language === 'en' ? 'Estimate' : 'Cotizar'}
          </span>
        </a>
      </div>
    </aside>
  );
};
