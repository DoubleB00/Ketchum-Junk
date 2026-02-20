import { MapPin } from 'lucide-react';

const cities = [
  'Riverside', 'San Bernardino', 'Ontario', 'Rancho Cucamonga',
  'Fontana', 'Moreno Valley', 'Corona', 'Chino',
  'Chino Hills', 'Redlands', 'Rialto', 'Colton',
  'Upland', 'Montclair', 'Pomona', 'Perris',
  'Murrieta', 'Temecula', 'Hemet', 'Yucaipa',
  'Highland', 'Loma Linda', 'Grand Terrace', 'Bloomington',
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-subtitle">Where We Serve</p>
            <h2 className="section-title mb-6">
              Proudly Serving the
              <span className="block text-green-400">Inland Empire</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Ketchum Junk Removal covers the entire Inland Empire — from Riverside to San Bernardino and
              everywhere in between. If you're in the IE, we've got you covered.
            </p>
            <div className="flex items-center gap-3 text-green-400 mb-8">
              <MapPin size={18} />
              <span className="font-bold text-sm uppercase tracking-widest">Inland Empire, California</span>
            </div>
            <a href="tel:9512932666" className="btn-primary">
              <MapPin size={16} />
              Check If We Service Your Area
            </a>
          </div>

          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-4">Cities We Serve</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-1.5 text-gray-300 text-sm py-1.5 px-2 rounded-lg hover:bg-gray-800 hover:text-green-400 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4 pt-4 border-t border-gray-800">
                Not on the list? Call us — we may still be able to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
