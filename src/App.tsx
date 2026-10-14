import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';

function PageContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutUs />
      </main>
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
