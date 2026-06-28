'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import FadeIn from '@/components/animations/FadeIn';

const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Video & Marketing', 'Freelance', 'Personal'];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.filters.includes(activeFilter));

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mb-12">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            A complete collection of web apps, mobile apps, AI content campaigns, and personal builds.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-black'
                  : 'border border-border-DEFAULT bg-bg-card text-text-secondary hover:border-emerald-500/30 hover:text-text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.08}>
            <div className="group flex h-full flex-col rounded-xl border border-border-DEFAULT bg-bg-card transition-all hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl bg-zinc-800">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-mono text-xs text-text-muted">
                    {project.title}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 font-mono text-xs text-emerald-400">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-900 px-2 py-0.5 font-mono text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
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
    </div>
  );
}
