import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import ScrubText from '@/components/animations/ScrubText';

const facts = [
  { label: 'Based in', value: 'Islamabad, Pakistan' },
  { label: 'Experience', value: '5+ years' },
  { label: 'Focus', value: 'React, Next.js, Node.js' },
  { label: 'Working with', value: 'Remote teams worldwide' },
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-customBorder bg-bg-card/40 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn duration={0.6}>
          <span className="eyebrow">A bit about me</span>
        </FadeIn>

        <h2 className="sr-only">About me</h2>
        <ScrubText
          className="display mt-6 max-w-6xl text-[1.9rem] !leading-[1.12] sm:text-5xl lg:text-[4rem]"
          accent={['clean', 'architecture', 'fast']}
          text="I'm Muhammad Ismail, a full-stack developer with 5+ years of experience building web and mobile applications for startups, agencies, and small businesses — with a strong focus on clean architecture and shipping fast without cutting corners."
        />

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-8">
          <StaggerContainer
            as="dl"
            className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-5 lg:content-start"
            staggerDelay={0.08}
          >
            {facts.map((fact) => (
              <StaggerItem key={fact.label} className="border-t border-customBorder pt-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-heading text-lg font-medium leading-snug tracking-tight text-text-primary sm:text-xl">
                  {fact.value}
                </dd>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn>
              <div className="flex flex-col gap-5 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                <p>
                  I specialize in React, Next.js, and Node.js, and work across the whole stack —
                  from database design and APIs to polished, accessible interfaces.
                </p>
                <p>
                  Alongside development, I also create AI-generated video content and manage
                  social media accounts for brands — using tools like Gemini AI, Grok AI, and
                  InVideo AI to produce marketing videos and posts that drive real engagement.
                </p>
                <p>
                  Outside of code, I&apos;m usually exploring new tech, reading, or gaming.
                  Currently based in Islamabad, Pakistan, and open to remote work worldwide.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/resume" className="btn-primary">
                  <Download className="h-4 w-4" />
                  Download full resume
                </Link>
                <Link href="/about" className="btn-ghost group">
                  More about me
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
