'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import FadeIn from '@/components/animations/FadeIn';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = allProjects[currentIndex - 1];
  const nextProject = allProjects[currentIndex + 1];

  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <Link
          href="/work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
      </FadeIn>

      <FadeIn>
        <div className="mb-8">
          <span className="font-mono text-sm text-emerald-400">
            {project.category}
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            {project.description}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-12 aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-800">
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-sm text-text-muted">
              {project.title} — Screenshot
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-border-DEFAULT bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Client</span>
            <span className="mt-1 block font-medium text-text-primary">Confidential</span>
          </div>
          <div className="rounded-xl border border-border-DEFAULT bg-bg-card p-4">
            <span className="block text-xs text-text-muted">My Role</span>
            <span className="mt-1 block font-medium text-text-primary">Full-Stack Developer</span>
          </div>
          <div className="rounded-xl border border-border-DEFAULT bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Timeline</span>
            <span className="mt-1 block font-medium text-text-primary">8 weeks</span>
          </div>
          <div className="rounded-xl border border-border-DEFAULT bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Stack</span>
            <span className="mt-1 block font-medium text-text-primary">
              {project.stack.slice(0, 2).join(', ')}
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mb-12 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-emerald-600"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              The Challenge
            </h2>
            <p className="mt-4 text-text-secondary">
              The client needed a robust, scalable solution to address a growing user base and complex operational requirements. Existing tools were fragmented, slow, and difficult to maintain.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              The Solution
            </h2>
            <p className="mt-4 text-text-secondary">
              I architected and built a modern full-stack application using {project.stack.join(', ')}. Key decisions included adopting a component-driven UI, strict TypeScript for type safety, and a scalable database schema designed for future growth.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Key Features
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-text-secondary">
              <li>Responsive, accessible UI with smooth animations</li>
              <li>Real-time data synchronization and state management</li>
              <li>Secure authentication and role-based access control</li>
              <li>Optimized performance with caching and lazy loading</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Results
            </h2>
            <p className="mt-4 text-text-secondary">
              The platform launched on schedule and significantly improved operational efficiency. Page load times were reduced by 60%, and the system scaled to handle 500+ active users within the first three months.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-16 flex items-center justify-between border-t border-border-DEFAULT pt-8">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {nextProject.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </FadeIn>
    </div>
  );
}
