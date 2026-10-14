import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { BUSINESS_INFO } from './data/company';

function PageContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Temporary Hero Placeholder for Stage 1 Review */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="p-8 md:p-12 rounded-2xl bg-slate-50 border border-slate-100 text-center max-w-3xl mx-auto shadow-subtle">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-semibold mb-4">
            {language === 'en' ? 'Etapa 1: Header & Navegación' : 'Stage 1: Header & Navigation'}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {language === 'en'
              ? 'Header & Bilingual Navigation Active'
              : 'Cabecera y Navegación Bilingüe Activa'}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            {language === 'en'
              ? 'Try clicking the language button [Español / English] in the header to see how the top bar, links, and buttons switch dynamically.'
              : 'Prueba hacer clic en el botón [Español / English] en la cabecera para ver cómo cambia dinámicamente toda la barra y botones.'}
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 font-medium">
            <span>📞 {BUSINESS_INFO.phone}</span>
            <span>•</span>
            <span>📍 {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
