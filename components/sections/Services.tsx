import Link from 'next/link';
import { Globe, Smartphone, Rocket, Code2, Sparkles, Check, ArrowRight } from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const services = [
  {
    icon: Globe,
    title: 'Web App Development',
    description:
      'Full-stack web applications built with modern frameworks — fast, scalable, and built to last.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps with React Native that feel native and perform well on both iOS and Android.',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description:
      'Take your startup idea from concept to a working product in weeks, not months.',
  },
  {
    icon: Code2,
    title: 'Technical Consulting',
    description:
      'Code reviews, architecture planning, and hands-on support for your existing engineering team.',
  },
  {
    icon: Sparkles,
    title: 'AI Video & Social Media Marketing',
    description:
      'End-to-end AI-powered video creation and social media management — from script to published post, across all platforms.',
    checklist: [
      'AI-generated marketing videos & reels',
      'Content scripting with AI (Gemini, Grok, GPT)',
      'Full social media account management',
      'Multi-platform posting & scheduling',
      'Analytics & growth tracking',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <span className="font-mono text-sm text-emerald-400">
              {'// How I Can Help'}
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Services
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6" delay={0.08}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group flex h-full flex-col rounded-lg border border-customBorder bg-bg-card p-5 transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold leading-tight text-text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                {service.checklist && (
                  <ul className="mb-4 flex flex-col gap-2">
                    {service.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-4">
                  <Link
                    href="/#contact"
                    className="inline-flex min-h-10 items-center gap-1 rounded-lg text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
