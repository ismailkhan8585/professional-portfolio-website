'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/lib/projects';
import FadeIn from '@/components/animations/FadeIn';

export default function SelectedWork() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-16">
            <span className="font-mono text-sm text-emerald-400">
              // Selected Work
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Projects I&apos;m Proud Of
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              A mix of client work, startups, AI content campaigns, and personal builds — each solving a real problem.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-20">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1}>
              <div
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="group relative flex-1 overflow-hidden rounded-xl border border-border-DEFAULT bg-bg-card">
                  <div className="aspect-[16/10] w-full bg-zinc-800" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-sm text-text-muted">
                      {project.title} — Screenshot
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <span className="font-mono text-xs text-emerald-400">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-900 px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="group/link inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-border-DEFAULT px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-emerald-500/30 hover:bg-bg-hover"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
