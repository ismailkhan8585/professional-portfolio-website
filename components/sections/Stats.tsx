import CountUp from '@/components/animations/CountUp';
import { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import Marquee from '@/components/animations/Marquee';

const stats = [
  { value: 25, suffix: '+', label: 'Projects delivered' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 20, suffix: '+', label: 'Happy clients' },
  { value: 100, suffix: '%', label: 'On-time delivery' },
];

const disciplines = ['Web apps', 'Mobile apps', 'SaaS dashboards', 'E-commerce', 'AI automation'];

export default function Stats() {
  return (
    <section aria-label="Key numbers">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
          viewportAmount={0.3}
        >
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`flex flex-col gap-3 border-customBorder py-10 sm:py-14 ${
                i % 2 === 1 ? 'border-l pl-5 sm:pl-8' : 'pr-5 sm:pr-8'
              } ${i > 1 ? 'border-t lg:border-t-0' : ''} ${
                i === 2 ? 'lg:border-l lg:pl-8' : ''
              }`}
            >
              <span className="font-mono text-[11px] text-text-muted">0{i + 1}</span>
              <span className="display text-5xl sm:text-6xl lg:text-7xl">
                <CountUp end={stat.value} duration={1.8} />
                <span className="text-brand-ink">{stat.suffix}</span>
              </span>
              <span className="text-sm text-text-secondary">{stat.label}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* oversized outlined ticker */}
      <div className="border-y border-customBorder py-6 sm:py-8">
        <Marquee reverse>
          {disciplines.map((item, i) => (
            <span
              key={item}
              className="flex items-center font-heading text-5xl font-bold uppercase tracking-[-0.03em] sm:text-7xl lg:text-8xl"
            >
              <span className={`px-6 sm:px-10 ${i % 2 === 0 ? 'text-stroke' : 'text-text-primary'}`}>
                {item}
              </span>
              <span className="text-3xl text-brand-ink sm:text-5xl" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
