import { Star, Quote } from 'lucide-react';
import crewImg from '../assets/image0_(1).png';

const reviews = [
  {
    name: 'Marcus T.',
    location: 'Riverside, CA',
    rating: 5,
    text: 'Ketchum Junk Removal came out the same day I called. They cleared out my entire garage in under two hours. Professional, fast, and the price was more than fair. Will definitely use them again.',
    service: 'Garage Cleanout',
  },
  {
    name: 'Sandra M.',
    location: 'Fontana, CA',
    rating: 5,
    text: 'Had an old shed in the backyard that needed to come down. These guys demolished it and hauled away every last piece. The yard looked immaculate when they were done. Highly recommend!',
    service: 'Demolition & Removal',
  },
  {
    name: 'David R.',
    location: 'Rancho Cucamonga, CA',
    rating: 5,
    text: 'We needed a full estate cleanout after a family member passed. They were respectful, efficient, and handled everything with care. Made a tough situation much easier. Thank you, Ketchum!',
    service: 'Estate Cleanout',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${crewImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 80%',
        }}
        role="img"
        aria-label="Ketchum Junk Removal crew loading junk removal truck with green waste and debris"
      />
      <div className="absolute inset-0 bg-gray-950/93" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Customer Reviews</p>
          <h2 className="section-title mb-4">
            What Our Customers
            <span className="text-green-400"> Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="text-gray-500 text-sm">— Consistently top-rated across the IE</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="card flex flex-col relative">
              <Quote size={32} className="text-green-700/40 absolute top-6 right-6" />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
                <StarRating count={review.rating} />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">"{review.text}"</p>
              <div className="pt-4 border-t border-gray-800">
                <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-medium bg-green-600/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
