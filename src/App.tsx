import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function PageContent() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
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
