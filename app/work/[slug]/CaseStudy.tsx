import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { allProjects } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import ProjectPreview from '@/components/ProjectPreview';

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = allProjects[currentIndex - 1];
  const nextProject = allProjects[currentIndex + 1];
  const caseStudy = project.caseStudy ?? {
    client: 'Confidential',
    role: 'Full-Stack Developer',
    timeline: '8 weeks',
    challenge:
      'The client needed a robust, scalable solution to address a growing user base and complex operational requirements. Existing tools were fragmented, slow, and difficult to maintain.',
    solution: `I architected and built a modern full-stack application using ${project.stack.join(
      ', '
    )}. Key decisions included adopting a component-driven UI, strict TypeScript for type safety, and a scalable database schema designed for future growth.`,
    features: [
      'Responsive, accessible UI with smooth animations',
      'Real-time data synchronization and state management',
      'Secure authentication and role-based access control',
      'Optimized performance with caching and lazy loading',
    ],
    results:
      'The platform launched on schedule and significantly improved operational efficiency. The system is structured to scale with future product requirements and new user workflows.',
  };

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <Link
          href="/work"
          className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-lg text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>
      </FadeIn>

      <FadeIn>
        <div className="mb-8">
          <span className="eyebrow">{project.category}</span>
          <h1 className="display mt-5 text-4xl sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            {project.description}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <ProjectPreview
          title={project.title}
          previewImage={project.previewImage}
          category={project.category}
          variant="wide"
          className="mb-10 rounded-lg border border-customBorder sm:mb-12"
        />
      </FadeIn>

      <StaggerContainer className="mb-10 grid gap-3 sm:mb-12 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          <StaggerItem className="rounded-lg border border-customBorder bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Client</span>
            <span className="mt-1 block font-medium text-text-primary">
              {caseStudy.client}
            </span>
          </StaggerItem>
          <StaggerItem className="rounded-lg border border-customBorder bg-bg-card p-4">
            <span className="block text-xs text-text-muted">My Role</span>
            <span className="mt-1 block font-medium text-text-primary">
              {caseStudy.role}
            </span>
          </StaggerItem>
          <StaggerItem className="rounded-lg border border-customBorder bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Timeline</span>
            <span className="mt-1 block font-medium text-text-primary">
              {caseStudy.timeline}
            </span>
          </StaggerItem>
          <StaggerItem className="rounded-lg border border-customBorder bg-bg-card p-4">
            <span className="block text-xs text-text-muted">Stack</span>
            <span className="mt-1 block font-medium text-text-primary">
              {project.stack.slice(0, 2).join(', ')}
            </span>
          </StaggerItem>
      </StaggerContainer>

      <FadeIn delay={0.2}>
        <div className="mb-10 grid gap-3 sm:mb-12 sm:flex sm:flex-wrap">
          {project.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </FadeIn>

      <StaggerContainer className="flex flex-col gap-10 sm:gap-12" delay={0.08}>
          <StaggerItem>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              The Challenge
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              {caseStudy.challenge}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              The Solution
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              {caseStudy.solution}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Key Features
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-7 text-text-secondary">
              {caseStudy.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Results
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              {caseStudy.results}
            </p>
          </StaggerItem>
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="mt-14 grid gap-4 border-t border-customBorder pt-8 sm:mt-16 sm:grid-cols-2">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex min-h-12 items-center gap-2 rounded-lg border border-customBorder px-3 text-sm text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="truncate">{prevProject.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex min-h-12 items-center justify-end gap-2 rounded-lg border border-customBorder px-3 text-right text-sm text-text-secondary transition-colors hover:bg-bg-hover hover:text-text-primary"
            >
              <span className="truncate">{nextProject.title}</span>
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
