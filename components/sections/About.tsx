import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <FadeIn className="flex-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-customBorder bg-bg-card p-3 sm:max-w-sm lg:mx-0">
              <Image
                src="/ismail.webp"
                alt="Muhammad Ismail portrait"
                width={640}
                height={960}
                loading="lazy"
                sizes="(min-width: 1024px) 360px, 320px"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </FadeIn>

          <div className="flex-1">
            <FadeIn>
              <span className="font-mono text-sm text-emerald-400">
                {'// About'}
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                A bit about me
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-6 flex max-w-2xl flex-col gap-4 text-base leading-7 text-text-secondary">
                <p>
                  I&apos;m Muhammad Ismail, a full-stack developer with 5+ years
                  of experience building web and mobile applications for
                  startups, agencies, and small businesses. I specialize in
                  React, Next.js, and Node.js, with a strong focus on clean
                  architecture and shipping fast without cutting corners.
                </p>
                <p>
                  Alongside development, I also create AI-generated video
                  content and manage social media accounts for brands — using
                  tools like Gemini AI, Grok AI, and InVideo AI to produce
                  marketing videos and posts that drive real engagement.
                </p>
                <p>
                  Outside of code, I&apos;m usually exploring new tech, reading,
                  or gaming. Currently based in Islamabad, Pakistan, and open to
                  remote work worldwide.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href="/resume"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-customBorder px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-emerald-500/30 hover:bg-bg-hover sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download Full Resume
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
