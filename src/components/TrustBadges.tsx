import { BadgeCheck, Zap, Shield } from 'lucide-react';

const badges = [
  {
    icon: BadgeCheck,
    label: 'Free Estimates',
    sub: 'No cost, no obligation',
  },
  {
    icon: Zap,
    label: 'Fast Service',
    sub: 'Same & next day available',
  },
  {
    icon: Shield,
    label: 'Licensed & Insured',
    sub: 'Fully covered on every job',
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-green-600 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left"
              >
                <div className="flex-shrink-0 bg-white/20 rounded-lg p-2">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-sm leading-tight">{badge.label}</p>
                  <p className="text-green-100 text-xs hidden sm:block">{badge.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
