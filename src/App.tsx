import { LanguageProvider } from './context/LanguageContext';
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

function PageContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <Gallery />
        <BeforeAfter />
        <ContactEstimate />
      </main>
      <Footer />
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
