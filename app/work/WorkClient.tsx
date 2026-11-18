'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import ProjectPreview from '@/components/ProjectPreview';

const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Video & Marketing', 'Freelance', 'Personal'] as const;

type ProjectFilter = (typeof filters)[number];

export default function WorkClient() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const filtered =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((p) => p.filters.includes(activeFilter));

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <div className="mb-10 sm:mb-12">
          <span className="eyebrow">Archive ({String(allProjects.length).padStart(2, '0')})</span>
          <h1 className="display mt-5 text-5xl sm:text-7xl">
            All <span className="serif-accent text-[1.08em]">projects</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            A complete collection of web apps, mobile apps, AI content campaigns, and personal builds.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-10 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`min-h-10 shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-black'
                  : 'border border-customBorder bg-bg-card text-text-secondary hover:border-emerald-500/30 hover:text-text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <StaggerContainer
        className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6"
        delay={0.05}
        viewportAmount={0.01}
      >
        {filtered.map((project) => (
          <StaggerItem key={project.slug} className="min-w-0">
            <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-customBorder bg-bg-card transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg">
              <ProjectPreview
                title={project.title}
                previewImage={project.previewImage}
                category={project.category}
                variant="compact"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="mb-2 font-mono text-xs text-emerald-400">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-semibold leading-tight text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-customBorder bg-bg px-2.5 py-1 font-mono text-xs text-text-muted"
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
                      className="group/link inline-flex min-h-10 items-center gap-1 rounded-lg text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {filtered.length === 0 && (
        <p className="rounded-lg border border-customBorder bg-bg-card px-5 py-10 text-center text-text-secondary">
          No projects found in {activeFilter} yet.
        </p>
      )}
    </div>
  );
}
