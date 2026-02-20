import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import crewImg from '../assets/image0_(1).png';

const panels = [
  {
    col: 0,
    row: 0,
    caption: 'Sofa & Furniture Hauling',
    alt: 'Ketchum Junk Removal crew carrying a large couch to the removal truck — fast furniture hauling in the Inland Empire',
  },
  {
    col: 1,
    row: 0,
    caption: 'Demolition · Clean Outs · Hauling',
    alt: 'Ketchum Junk Removal branded truck at a residential property — demolition, cleanouts, and hauling services, free estimates (951) 293-2666',
  },
  {
    col: 2,
    row: 0,
    caption: 'Appliance & Debris Removal',
    alt: 'Ketchum crew loading a refrigerator and cardboard boxes onto the junk removal truck — appliance and debris hauling',
  },
  {
    col: 0,
    row: 1,
    caption: 'Interior Demolition',
    alt: 'Ketchum Junk Removal crew swinging a sledgehammer during interior demolition — wall and structure demo service, Inland Empire',
  },
  {
    col: 1,
    row: 1,
    caption: 'Full Property Cleanout',
    alt: 'Ketchum crew hauling boxes, tools, and household items down a truck ramp during a full property cleanout',
  },
  {
    col: 2,
    row: 1,
    caption: 'Green Waste & Junk Removal',
    alt: 'Ketchum Junk Removal truck loaded with green waste, yard debris, and junk bags — free estimates (951) 293-2666',
  },
];

function getPanelStyle(col: number, row: number): React.CSSProperties {
  const xMap = ['0%', '50%', '100%'];
  const yMap = ['0%', '100%'];
  return {
    backgroundImage: `url(${crewImg})`,
    backgroundSize: '300% 200%',
    backgroundPosition: `${xMap[col]} ${yMap[row]}`,
    backgroundRepeat: 'no-repeat',
  };
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + panels.length) % panels.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % panels.length));

  useEffect(() => {
    if (lightbox === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Work</p>
          <h2 className="section-title mb-4">
            See the
            <span className="text-green-400"> Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real jobs, real results. Our crew shows up, gets to work, and leaves your space clean.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {panels.map((panel, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-zoom-in shadow-lg hover:shadow-2xl hover:shadow-black/60 transition-shadow duration-300"
              aria-label={`View: ${panel.caption}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110"
                style={getPanelStyle(panel.col, panel.row)}
                role="img"
                aria-label={panel.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-green-600/50 rounded-xl transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <p className="text-white text-sm font-bold drop-shadow-lg">{panel.caption}</p>
              </div>
              <div className="absolute top-3 right-3 bg-gray-950/70 backdrop-blur-sm p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={14} className="text-green-400" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/ketchumjunkremoval"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-bold text-sm transition-colors underline underline-offset-4"
          >
            Follow @ketchumjunkremoval on Instagram for more
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/96 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors bg-gray-900/80 backdrop-blur-sm p-2.5 rounded-lg z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white hover:text-green-400 transition-colors bg-gray-900/80 backdrop-blur-sm p-2.5 rounded-lg z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
              style={getPanelStyle(panels[lightbox].col, panels[lightbox].row)}
              role="img"
              aria-label={panels[lightbox].alt}
            />
            <div className="mt-4 text-center">
              <p className="text-white font-bold">{panels[lightbox].caption}</p>
              <p className="text-gray-500 text-xs mt-1.5 flex items-center justify-center gap-3">
                <span>{lightbox + 1} / {panels.length}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <span>Ketchum Junk Removal — Inland Empire, CA</span>
              </p>
              <p className="text-gray-600 text-xs mt-2 md:hidden">Swipe left or right to navigate</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              {panels.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === lightbox ? 'bg-green-400 w-5' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
