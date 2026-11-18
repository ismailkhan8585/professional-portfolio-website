import type { Metadata } from 'next';
import Image from 'next/image';
import { NAME, ROLE, DOMAIN, SOCIALS, EMAIL } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: `About — ${NAME}`,
  description: `Learn more about ${NAME}, a ${ROLE} with 5+ years of experience building web and mobile applications and AI-powered content.`,
  alternates: { canonical: `${DOMAIN}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <div className="mb-10 sm:mb-12">
          <span className="eyebrow">About</span>
          <h1 className="display mt-5 text-5xl sm:text-7xl">
            About <span className="serif-accent text-[1.08em]">me</span>
          </h1>
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-14">
        <FadeIn className="flex-shrink-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border border-customBorder bg-bg-card p-3 lg:mx-0">
            <Image
              src="/ismail.webp"
              alt="Muhammad Ismail portrait"
              width={640}
              height={960}
              sizes="(min-width: 1024px) 280px, 320px"
              className="h-full w-full rounded-md object-cover"
              priority
            />
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-5 text-base leading-7 text-text-secondary">
              <p>
                I&apos;m Muhammad Ismail, a full-stack developer with 5+ years of experience
                building web and mobile applications for startups, agencies, and small businesses.
                I specialize in React, Next.js, and Node.js, with a strong focus on clean
                architecture and shipping fast without cutting corners.
              </p>
              <p>
                My journey started with curiosity about how websites work and quickly grew into
                a career building production-grade applications. Over the years, I&apos;ve worked
                across the entire stack — from designing database schemas and REST APIs to crafting
                polished, accessible user interfaces.
              </p>
              <p>
                Alongside development, I also create AI-generated video content and manage social
                media accounts for brands — using tools like Gemini AI, Grok AI, and InVideo AI
                to produce marketing videos and posts that drive real engagement. This dual skill
                set lets me help clients not just build products, but also grow their audience.
              </p>
              <p>
                Outside of code, I&apos;m usually exploring new tech, reading, or gaming. Currently
                based in Islamabad, Pakistan, and open to remote work worldwide.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-text-primary">Experience</h2>
              <div className="mt-6 flex flex-col gap-6">
                {[
                  {
                    role: 'Full Stack Developer',
                    company: 'ZayvoraTech',
                    period: 'Jan 2025 — Present',
                    desc: 'Building responsive web applications and installable PWAs with Next.js, React.js, and TypeScript — including a multi-branch restaurant POS system, e-commerce stores, and a bilingual real estate platform.',
                  },
                  {
                    role: 'Full Stack Developer',
                    company: 'Techcreator',
                    period: 'Aug 2021 — Jan 2025',
                    desc: 'Delivered full-stack web and mobile applications using React.js, Next.js, React Native, Node.js, and Express.js, with REST APIs backed by MongoDB, PostgreSQL, Firebase, and Supabase.',
                  },
                ].map((job) => (
                  <div
                    key={job.role + job.company}
                    className="rounded-lg border border-customBorder bg-bg-card p-5"
                  >
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="font-heading text-lg font-semibold text-text-primary">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-text-muted">{job.period}</span>
                    </div>
                    <span className="mt-1 block text-sm text-emerald-400">{job.company}</span>
                    <p className="mt-2 text-sm text-text-secondary">{job.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-text-primary">Education</h2>
              <div className="mt-4 flex flex-col gap-4">
                {[
                  {
                    degree: 'BS Computer Science',
                    school: 'Abdul Wali Khan University, Mardan',
                    period: '2022 — 2025',
                  },
                  {
                    degree: 'FSc Pre-Engineering',
                    school: 'Swabi College of Science, Swabi',
                    period: '2019 — 2021',
                  },
                ].map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-lg border border-customBorder bg-bg-card p-5"
                  >
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <h3 className="font-heading text-lg font-semibold text-text-primary">
                        {item.degree}
                      </h3>
                      <span className="font-mono text-xs text-text-muted">{item.period}</span>
                    </div>
                    <span className="mt-1 block text-sm text-text-secondary">{item.school}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-text-primary">Fun Facts</h2>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-text-secondary">
                <li>I learned to code by building a clone of my favorite website.</li>
                <li>I&apos;ve shipped a project in under 48 hours during a hackathon.</li>
                <li>I can spend hours tweaking animations until they feel just right.</li>
                <li>I believe dark mode should be the default everywhere.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-customBorder px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-emerald-500/30 hover:bg-bg-hover sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
              {[
                { icon: Github, href: SOCIALS.github, label: 'GitHub' },
                { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-customBorder bg-bg-card text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
