import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { ContactEstimate } from './components/ContactEstimate';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { NotFound } from './components/NotFound';

function isNotFoundPath(pathname: string): boolean {
  const clean = pathname.replace(/\/+$/, '') || '/';
  // Allowed root paths: / or /index.html
  return clean !== '/' && clean !== '/index.html';
}

function PageContent() {
  const { isChanging } = useLanguage();
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (isNotFoundPath(currentPath)) {
    return (
      <NotFound
        onNavigateHome={(targetLang) => {
          const nextUrl = targetLang === 'es' ? '/?lang=es' : '/';
          window.history.pushState({}, '', nextUrl);
          setCurrentPath('/');
        }}
      />
    );
  }

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
