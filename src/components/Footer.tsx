import { Phone, Mail, Instagram, Truck, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Truck size={22} className="text-white" />
              </div>
              <div>
                <span className="font-black text-white text-lg leading-none block">KETCHUM</span>
                <span className="text-green-400 text-xs font-bold tracking-wider uppercase leading-none">Junk Removal</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              All Junk Removal and Demolition Services. There is no job too small or too big for us.
            </p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={14} className="text-green-600 flex-shrink-0" />
              Serving the Inland Empire, CA
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-green-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</p>
            <div className="space-y-4">
              <a
                href="tel:9512932666"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Phone size={15} className="text-green-600 flex-shrink-0" />
                <span className="text-sm">(951) 293-2666</span>
              </a>
              <a
                href="mailto:ketchumjunkremoval@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Mail size={15} className="text-green-600 flex-shrink-0" />
                <span className="text-sm break-all">ketchumjunkremoval@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/ketchumjunkremoval"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
              >
                <Instagram size={15} className="text-green-600 flex-shrink-0" />
                <span className="text-sm">@ketchumjunkremoval</span>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-900">
              <a
                href="tel:9512932666"
                className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-3 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone size={14} />
                Call for a Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Ketchum Junk Removal. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Inland Empire, California
          </p>
        </div>
      </div>
    </footer>
  );
}
