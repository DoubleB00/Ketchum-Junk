import { MessageSquare, Eye, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request a Quote',
    description:
      "Call us or fill out the contact form. Tell us what you need removed and where you are located in the Inland Empire.",
  },
  {
    number: '02',
    icon: Eye,
    title: 'On-Site Estimate',
    description:
      'We come to you for a free, no-obligation on-site estimate. No hidden fees, no surprises — just a fair, upfront price.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'We Haul & Clean Up',
    description:
      'Once you approve, our crew gets to work immediately. We haul everything away and leave the space clean and clear.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">The Process</p>
          <h2 className="section-title mb-4">
            Simple. Fast.
            <span className="text-green-400"> Stress-Free.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Getting rid of junk should be easy. Here's exactly how it works.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-green-700/50 via-green-600/50 to-green-700/50" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:border-green-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-950">
                      <Icon size={32} className="text-green-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full text-white text-xs font-black flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-green-600/10 border border-green-700/30 rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Ready to get started?</p>
          <p className="text-gray-400 text-sm mb-6">Most jobs can be scheduled same day or next day.</p>
          <a href="tel:9512932666" className="btn-primary">
            Call (951) 293-2666 — Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
