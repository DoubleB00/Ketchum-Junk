import { Hammer, Leaf, Sofa, Warehouse, Phone } from 'lucide-react';
import crewImg from '../assets/image0_(1).png';

const services = [
  {
    icon: Hammer,
    title: 'Demolition Services',
    description:
      'Interior and exterior demolition done safely and efficiently. Sheds, walls, patios, fences, decks — we knock it down and haul it away.',
    highlights: ['Shed & structure demo', 'Interior demo', 'Concrete & patio removal'],
  },
  {
    icon: Leaf,
    title: 'Green Waste',
    description:
      'Tree branches, yard trimmings, shrubs, and organic debris removed fast. Keep your property clean and clear all year round.',
    highlights: ['Tree branches & trimmings', 'Yard & garden waste', 'Overgrown shrubs'],
  },
  {
    icon: Sofa,
    title: 'Household Items',
    description:
      'Old furniture, appliances, mattresses, and general junk — we haul it all. No item is too heavy or too bulky for our crew.',
    highlights: ['Furniture & appliances', 'Mattresses & couches', 'General household junk'],
  },
  {
    icon: Warehouse,
    title: 'Property / Garage / Storage Clean Outs',
    description:
      'Full property cleanouts for estates, garages, storage units, and rental turnovers. We clear the clutter quickly and professionally.',
    highlights: ['Estate & full property', 'Garage & storage units', 'Rental turnover cleanouts'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title mb-4">
            Full-Service Junk Removal
            <span className="block text-green-400">Done Right</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a single couch to a full property cleanout — we handle it all across the Inland Empire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card group flex flex-col">
                <div className="bg-green-600/15 group-hover:bg-green-600/25 border border-green-700/30 rounded-xl w-12 h-12 flex items-center justify-center mb-5 transition-colors">
                  <Icon size={22} className="text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="mt-auto space-y-1.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${crewImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 65%',
            }}
            role="img"
            aria-label="Ketchum Junk Removal crew performing a full property cleanout and hauling services"
          />
          <div className="absolute inset-0 bg-gray-950/88" />
          <div className="relative z-10 py-12 px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Not sure what you need?</p>
              <h3 className="text-2xl font-black text-white">We haul almost anything.</h3>
              <p className="text-gray-400 text-sm mt-1">If you can point to it, we can remove it. Call for a fast free quote.</p>
            </div>
            <a href="tel:9512932666" className="btn-primary flex-shrink-0">
              <Phone size={16} />
              Call (951) 293-2666
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
