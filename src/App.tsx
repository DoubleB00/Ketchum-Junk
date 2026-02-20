import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ServiceAreas from './components/ServiceAreas';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <HowItWorks />
        <ServiceAreas />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
