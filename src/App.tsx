import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { BeforeAfter } from './components/BeforeAfter';
import { ContactEstimate } from './components/ContactEstimate';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

function PageContent() {
  const { isChanging } = useLanguage();

  return (
    <div className="min-h-screen bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      <Navbar />
      <main className={`transition-opacity duration-150 ease-out ${isChanging ? 'opacity-75' : 'opacity-100'}`}>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <ContactEstimate />
      </main>
      <Footer />
      <MobileStickyBar />
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
