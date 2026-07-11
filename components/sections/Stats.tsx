import CountUp from '@/components/animations/CountUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const stats = [
  { value: 25, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
];

export default function Stats() {
  return (
    <section className="border-y border-customBorder bg-bg-card/35 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4" staggerDelay={0.06}>
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-customBorder bg-bg px-3 py-5 text-center sm:min-h-32"
            >
              <span className="font-heading text-3xl font-bold text-emerald-400 sm:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} duration={1.5} />
              </span>
              <span className="mt-2 text-sm leading-snug text-text-muted">{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
