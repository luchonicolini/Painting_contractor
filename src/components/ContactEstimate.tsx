import { useState } from 'react';
import { Phone, CheckCircle2, Send, ArrowUpRight, PhoneCall, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BUSINESS_INFO } from '../data/company';
import { WhatsAppIcon, GoogleMapsIcon, GmailIcon } from './BrandIcons';

export const ContactEstimate: React.FC = () => {
  const { language } = useLanguage();
  const revealRef = useScrollReveal();
  const [selectedServices, setSelectedServices] = useState<string[]>(['exterior']);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    comments: '',
  });

  const servicesList = [
    { id: 'exterior', label: { en: 'Exterior Painting', es: 'Pintura Exterior' } },
    { id: 'interior', label: { en: 'Interior Painting', es: 'Pintura Interior' } },
    { id: 'popcorn', label: { en: 'Popcorn Removal', es: 'Retiro de Popcorn' } },
    { id: 'roof', label: { en: 'Roof Painting', es: 'Pintura de Techos' } },
    { id: 'pressure', label: { en: 'Pressure Wash', es: 'Lavado a Presión' } },
    { id: 'commercial', label: { en: 'Commercial', es: 'Comercial' } },
  ];

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section ref={revealRef} className="scroll-reveal bg-slate-50 text-slate-900 py-20 md:py-28 border-t border-slate-200/70" id="contact">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-2.5">
              {language === 'en' ? 'GET IN TOUCH' : 'CONTACTO DIRECTO'}
            </span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.08]">
              {language === 'en'
                ? 'Schedule Your Free On-Site Estimate'
                : 'Agenda Tu Presupuesto Gratis en Obra'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'en'
                ? 'Owners Yalila and Rodolfo personally visit your property to measure square footage, inspect substrate conditions, and provide an accurate, guaranteed quote.'
                : 'Los dueños, Yalila y Rodolfo, visitan personalmente tu propiedad para medir, revisar las condiciones de las paredes y brindarte un presupuesto exacto y por escrito.'}
            </p>

            {/* Interactive Contact Channels Hub */}
            <div className="space-y-3 pt-4 border-t border-slate-200/80">
              {/* WhatsApp Card */}
              <a
                href={BUSINESS_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="WhatsApp (786) 370-6098"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-[#25D366] shadow-xs group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                      WhatsApp (786) 370-6098
                    </span>
                    <span className="text-xs text-slate-500 block truncate">
                      {language === 'en'
                        ? 'Send project photos for a fast quote'
                        : 'Envía fotos de tu proyecto para cotizar'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white px-2.5 py-1.5 rounded-full transition-colors flex-shrink-0 ml-2">
                  <span>{language === 'en' ? 'Chat' : 'Chatear'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Direct Phone Line */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-sapphire/40 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Direct Phone Line (786) 370-6098"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-brand-sapphire-light border border-brand-sapphire/20 flex items-center justify-center flex-shrink-0 text-brand-sapphire shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-brand-sapphire" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-sapphire transition-colors truncate block">
                      {BUSINESS_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-500 block truncate">
                      {language === 'en'
                        ? 'Personal consultation with owners Yalila & Rodolfo'
                        : 'Atención personalizada por sus dueños'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-brand-sapphire bg-blue-50 group-hover:bg-brand-sapphire group-hover:text-white px-2.5 py-1.5 rounded-full transition-colors flex-shrink-0 ml-2">
                  <span>{language === 'en' ? 'Call' : 'Llamar'}</span>
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Google Maps / Service Area Card */}
              <a
                href={BUSINESS_INFO.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Google Maps Profile and Service Areas"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center flex-shrink-0 p-2 shadow-xs group-hover:scale-105 transition-transform">
                    <GoogleMapsIcon className="w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-navy transition-colors truncate block">
                      Hialeah, Miami-Dade & Broward
                    </span>
                    <span className="text-xs text-slate-500 block truncate">
                      {language === 'en'
                        ? 'Open in Google Maps to view location & verified reviews (4.9 ★)'
                        : 'Abrir en Google Maps para ver cobertura y opiniones (4.9 ★)'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white px-2.5 py-1.5 rounded-full transition-colors flex-shrink-0 ml-2">
                  <span>{language === 'en' ? 'Map' : 'Mapa'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Direct Email (Gmail) */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-red-200 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Send direct email"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100/80 flex items-center justify-center flex-shrink-0 p-2.5 text-[#EA4335] shadow-xs group-hover:scale-105 transition-transform">
                    <GmailIcon className="w-full h-full text-[#EA4335]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#EA4335] transition-colors truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                    <span className="text-xs text-slate-500 block truncate">
                      {language === 'en'
                        ? 'Send blueprints, specs & RFP documentation'
                        : 'Para planos, detalles y proyectos comerciales'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white px-2.5 py-1.5 rounded-full transition-colors flex-shrink-0 ml-2">
                  <span>{language === 'en' ? 'Email' : 'Email'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Modern High-Converting Estimate Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/80">
            <h3 className="font-heading font-semibold text-xl sm:text-2xl text-slate-900 mb-1">
              {language === 'en' ? 'Tell Us About Your Project' : 'Cuéntanos Sobre Tu Proyecto'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-5 sm:mb-6">
              {language === 'en'
                ? 'Fill in the quick details below and Yalila & Rodolfo will get back to you promptly.'
                : 'Completa los datos y Yalila y Rodolfo se comunicarán contigo a la brevedad.'}
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-xl text-emerald-900">
                  {language === 'en' ? 'Estimate Request Received!' : '¡Solicitud Recibida con Éxito!'}
                </h4>
                <p className="text-emerald-800 text-sm max-w-md leading-relaxed">
                  {language === 'en'
                    ? 'Thank you! Yalila & Rodolfo will review your project details and contact you within 2 business hours to schedule your free estimate.'
                    : '¡Muchas gracias! Yalila y Rodolfo revisarán tu solicitud y te contactarán en menos de 2 horas hábiles para coordinar la visita de presupuesto gratuito.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white font-heading text-xs font-semibold hover:bg-emerald-700 transition"
                >
                  {language === 'en' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Checkboxes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                    {language === 'en' ? 'Service(s) Needed' : 'Servicio(s) Requerido(s)'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {servicesList.map(srv => {
                      const isChecked = selectedServices.includes(srv.id);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          aria-pressed={isChecked}
                          onClick={() => toggleService(srv.id)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                            isChecked
                              ? 'bg-brand-sapphire-light border-brand-sapphire text-brand-sapphire shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-md flex items-center justify-center border text-xs ${
                              isChecked
                                ? 'bg-brand-sapphire border-brand-sapphire text-white'
                                : 'bg-white border-slate-300'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                          <span>{srv.label[language]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {language === 'en' ? 'Your Name *' : 'Tu Nombre *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'en' ? 'e.g. John Smith' : 'Ej. Carlos Gómez'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {language === 'en' ? 'Phone Number *' : 'Teléfono de Contacto *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(786) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {language === 'en' ? 'Email Address' : 'Correo Electrónico'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      {language === 'en' ? 'City or Zip Code' : 'Ciudad o Código Postal'}
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      placeholder={language === 'en' ? 'e.g. Pembroke Pines, 33028' : 'Ej. Hialeah, 33012'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    {language === 'en' ? 'Project Details (Optional)' : 'Detalles del Proyecto (Opcional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.comments}
                    onChange={e => setFormData({ ...formData, comments: e.target.value })}
                    placeholder={
                      language === 'en'
                        ? 'Briefly describe your home, approximate rooms, or any specific timeline...'
                        : 'Describe brevemente tu casa, cantidad de habitaciones o fechas estimadas...'
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-slate-50/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-prestige w-full py-4 rounded-xl bg-brand-sapphire hover:bg-brand-sapphire-hover text-white font-heading font-extrabold text-sm shadow-lg shadow-brand-sapphire/25 hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Request Free On-Site Estimate' : 'Solicitar Presupuesto Gratuito'}</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
