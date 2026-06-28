'use client';

import CountUp from '@/components/animations/CountUp';

const stats = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
];

export default function Stats() {
  return (
    <section className="border-y border-border-DEFAULT py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-heading text-3xl font-bold text-emerald-400">
                <CountUp end={stat.value} suffix={stat.suffix} duration={1.5} />
              </span>
              <span className="mt-1 text-sm text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
