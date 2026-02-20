import { Phone, ClipboardList, ChevronDown } from 'lucide-react';
import crewImg from '../assets/image0_(1).png';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${crewImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
        role="img"
        aria-label="Ketchum Junk Removal crew hauling furniture, appliances, and junk in the Inland Empire"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-gray-900/85 to-gray-950/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/40 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Serving the Inland Empire
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none text-white mb-4">
          KETCHUM
          <span className="block text-green-400">JUNK REMOVAL</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl font-medium mb-2">
          All Junk Removal and Demolition Services
        </p>
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
          There is no job too small or too big for us
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9512932666" className="btn-primary text-base">
            <Phone size={18} />
            Call Now — (951) 293-2666
          </a>
          <button onClick={scrollToContact} className="btn-secondary text-base">
            <ClipboardList size={18} />
            Get a Free Quote
          </button>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
          <div>
            <p className="text-3xl font-black text-green-400">100%</p>
            <p className="text-gray-400 text-xs mt-1">Satisfaction Guarantee</p>
          </div>
          <div className="border-x border-gray-700">
            <p className="text-3xl font-black text-green-400">Fast</p>
            <p className="text-gray-400 text-xs mt-1">Same Day Available</p>
          </div>
          <div>
            <p className="text-3xl font-black text-green-400">Free</p>
            <p className="text-gray-400 text-xs mt-1">On-Site Estimate</p>
          </div>
        </div>
      </div>

      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-green-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  );
}
