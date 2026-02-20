import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <a
      href="tel:9512932666"
      aria-label="Call Ketchum Junk Removal"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2.5 bg-green-600 hover:bg-green-500 active:scale-95 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl shadow-green-900/60 transition-all duration-200 hover:scale-105"
    >
      <Phone size={18} className="flex-shrink-0" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
