import { useState, useEffect } from 'react';
import { Phone, Menu, X, Truck } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="bg-green-600 p-1.5 rounded-lg group-hover:bg-green-500 transition-colors">
              <Truck size={22} className="text-white" />
            </div>
            <div>
              <span className="font-black text-white text-lg leading-none block">KETCHUM</span>
              <span className="text-green-400 text-xs font-bold tracking-wider uppercase leading-none">Junk Removal</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-800/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9512932666"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
            >
              <Phone size={15} />
              (951) 293-2666
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9512932666"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-3 rounded-lg transition-colors text-sm mt-2"
            >
              <Phone size={15} />
              (951) 293-2666
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
