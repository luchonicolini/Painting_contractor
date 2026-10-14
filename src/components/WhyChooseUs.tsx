import {
  Building2,
  Users,
  ShieldCheck,
  FileText,
  Paintbrush,
  Sparkles,
  Clock,
  Sun,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const reasons = [
    {
      icon: Building2,
      title: { en: '500+ Homes Perfected', es: 'Más de 500 Casas Pintadas' },
      desc: {
        en: 'Over 12 years perfecting luxury residences and commercial properties across South Florida.',
        es: 'Más de 12 años perfeccionando residencias y comercios en todo el sur de Florida.'
      }
    },
    {
      icon: Users,
      title: { en: 'Our Difference', es: 'Nuestra Gran Diferencia' },
      desc: {
        en: 'Owners Yalila and Rodolfo work directly on every jobsite. Zero anonymous sub-contractors.',
        es: 'Los dueños, Yalila y Rodolfo, trabajan directamente en cada obra. Cero subcontratistas anónimos.'
      }
    },
    {
      icon: ShieldCheck,
      title: { en: 'Written Guarantee', es: 'Garantía por Escrito' },
      desc: {
        en: 'Guaranteed protection against peeling, flaking, and Florida UV fading on exterior coatings.',
        es: 'Protección garantizada contra descascarillado, grietas y desgaste solar por los rayos UV.'
      }
    },
    {
      icon: FileText,
      title: { en: 'Transparent Estimates', es: 'Presupuestos Transparentes' },
      desc: {
        en: 'Itemized breakdown of paint quantities, prep procedures, and zero hidden surprise fees.',
        es: 'Desglose detallado de cantidades de pintura, preparación y sin costos sorpresa ocultos.'
      }
    },
    {
      icon: Paintbrush,
      title: { en: 'Color & HOA Guidance', es: 'Asesoría de Color y HOA' },
      desc: {
        en: 'We help prepare color rendering packets that sail through strict South Florida HOA approval boards.',
        es: 'Te ayudamos a preparar las muestras para aprobar los estrictos comités de asociaciones (HOA).'
      }
    },
    {
      icon: Sparkles,
      title: { en: 'HEPA Dust-Free Clean', es: 'Limpieza Total Sin Polvo' },
      desc: {
        en: 'Comprehensive furniture masking and floor runners. We leave your residence cleaner than we found it.',
        es: 'Protección exhaustiva de muebles y pisos. Dejamos tu residencia más limpia de lo que la encontramos.'
      }
    },
    {
      icon: Clock,
      title: { en: 'Project Management', es: 'Gestión Puntual' },
      desc: {
        en: 'Punctual daily arrivals, consistent WhatsApp progress photos, and dedicated direct contact.',
        es: 'Llegada puntual diaria, fotos de avance por WhatsApp y contacto directo y permanente.'
      }
    },
    {
      icon: Sun,
      title: { en: 'Florida Proven Formulas', es: 'Fórmulas para Clima de Florida' },
      desc: {
        en: 'Alkali-resistant primers and mildewcides formulated strictly for high-humidity coastal climates.',
        es: 'Selladores resistentes a los álcalis y anti-moho formulados especialmente para la alta humedad.'
      }
    }
  ];

  return (
    <section className="bg-slate-50/80 py-20 border-y border-slate-100" id="why-us">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2">
            {language === 'en' ? 'WHY CHOOSE US?' : '¿POR QUÉ ELEGIRNOS?'}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'en'
              ? 'Why You Should Start Working with Us Right Away'
              : 'La Tranquilidad de Trabajar con Verdaderos Profesionales'}
          </h2>
        </div>

        {/* Clean 2-Row Icon Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-13 h-13 p-3.5 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center text-brand-blue mb-4 group-hover:scale-105 group-hover:border-blue-200 group-hover:shadow-md transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-heading font-bold text-slate-900 text-base block">
                  {item.title[language]}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed mt-2 max-w-xs">
                  {item.desc[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
