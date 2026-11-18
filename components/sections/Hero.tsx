import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { ROLE } from '@/lib/constants';
import { RevealSection } from '@/components/animations/FadeIn';
import Words from '@/components/animations/Words';
import Magnetic from '@/components/animations/Magnetic';
import Marquee from '@/components/animations/Marquee';
import HeroPortrait from './HeroPortrait';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'React Native',
  'PostgreSQL',
  'Tailwind CSS',
  'Gemini AI',
  'InVideo AI',
  'Grok AI',
];

const roles = ROLE.split('|').map((r) => r.trim());

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* backdrop: faded grid + slow glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] animate-aurora rounded-full bg-brand-ink/[0.13] blur-[120px]" />
        <div className="absolute bottom-0 left-[-15%] h-[380px] w-[380px] animate-aurora rounded-full bg-brand-ink/[0.06] blur-[110px] [animation-delay:-7s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection
          duration={0.7}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-customBorder bg-bg-card/60 py-1.5 pl-3 pr-4 text-xs font-medium text-text-secondary backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-ink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-ink" />
            </span>
            Available for new projects
          </div>
          <span className="eyebrow hidden sm:inline-flex">Portfolio — 2026</span>
        </RevealSection>

        <div className="mt-8 grid items-end gap-12 sm:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="display text-[clamp(3.5rem,15.5vw,6.5rem)] sm:text-[clamp(6.5rem,13.5vw,8rem)] lg:text-[clamp(5.5rem,9.2vw,8.75rem)]">
              <Words text="Muhammad" immediate className="block" delay={0.1} />
              <Words
                text="Ismail"
                immediate
                delay={0.22}
                className="serif-accent -mt-[0.04em] block pl-[0.06em] text-[1.12em] leading-[0.9]"
              />
            </h1>

            <RevealSection delay={0.45} className="mt-8 sm:mt-10">
              <ul className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-customBorder px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary"
                  >
                    {role}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                I build fast, reliable web and mobile applications — and create AI-powered video
                content and social media campaigns that grow brands. Available for freelance
                projects and full-time opportunities.
              </p>
            </RevealSection>

            <RevealSection
              delay={0.6}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Magnetic className="w-full sm:w-auto">
                <Link href="/#work" className="btn-primary group w-full sm:w-auto">
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Link href="/#contact" className="btn-ghost group">
                Hire me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                <Download className="h-4 w-4" />
                <span className="link-underline">Download resume</span>
              </Link>
            </RevealSection>
          </div>

          <div className="lg:col-span-4">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* tech ticker */}
      <RevealSection delay={0.8} className="mt-16 border-y border-customBorder sm:mt-20">
        <Marquee className="mask-fade-x py-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center font-heading text-lg font-medium tracking-tight text-text-secondary sm:text-xl"
            >
              <span className="px-6 sm:px-8">{tech}</span>
              <span className="text-brand-ink" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </RevealSection>
    </section>
  );
}
