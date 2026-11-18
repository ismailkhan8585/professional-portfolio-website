'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Plus,
  Globe,
  Smartphone,
  Rocket,
  Code2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  checklist?: string[];
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Web App Development',
    description:
      'Full-stack web applications built with modern frameworks — fast, scalable, and built to last.',
    checklist: [
      'Next.js, React & TypeScript front ends',
      'Node.js APIs with PostgreSQL & Prisma',
      'SaaS dashboards, e-commerce & business sites',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps with React Native that feel native and perform well on both iOS and Android.',
    checklist: [
      'React Native & Expo',
      'One codebase for iOS and Android',
      'App Store & Play Store deployment',
    ],
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
    title: 'AI Video & Social Media',
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

const ease = [0.22, 1, 0.36, 1] as const;

/** Accordion of services: one row open at a time. */
export default function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <ul className="border-t border-customBorder">
      {services.map((service, i) => {
        const open = active === i;
        const panelId = `service-panel-${i}`;
        return (
          <li
            key={service.title}
            className={`border-b border-customBorder transition-colors duration-500 ${
              open ? 'bg-bg-card' : ''
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8 lg:px-6"
            >
              <span
                className={`font-mono text-[11px] transition-colors duration-300 ${
                  open ? 'text-brand-ink' : 'text-text-muted'
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`flex-1 font-heading text-2xl font-semibold tracking-[-0.03em] transition-[color,transform] duration-500 sm:text-4xl lg:text-5xl ${
                  open
                    ? 'text-text-primary lg:translate-x-2'
                    : 'text-text-muted group-hover:text-text-primary lg:group-hover:translate-x-2'
                }`}
              >
                {service.title}
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 sm:h-12 sm:w-12 ${
                  open
                    ? 'rotate-45 border-brand bg-brand text-brand-contrast'
                    : 'border-customBorder text-text-secondary'
                }`}
              >
                <Plus className="h-5 w-5" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <m.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 sm:pl-[3.1rem] lg:grid-cols-12 lg:gap-8 lg:pl-[4.6rem] lg:pr-6">
                    <div className="lg:col-span-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-ink/10 text-brand-ink">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <p className="max-w-lg text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="group mt-5 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-brand-ink"
                      >
                        <span className="link-underline">Start a project</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                    {service.checklist && (
                      <ul className="flex flex-col gap-2.5 lg:col-span-6">
                        {service.checklist.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary"
                          >
                            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-ink" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
