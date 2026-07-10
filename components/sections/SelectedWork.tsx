import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/lib/projects';
import FadeIn from '@/components/animations/FadeIn';
import ProjectPreview from '@/components/ProjectPreview';

export default function SelectedWork() {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <span className="font-mono text-sm text-emerald-400">
              {'// Selected Work'}
            </span>
            <h2 className="mt-2 max-w-3xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Projects I&apos;m Proud Of
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              A mix of client work, startups, AI content campaigns, and personal builds — each solving a real problem.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1}>
              <div
                className="grid overflow-hidden rounded-lg border border-customBorder bg-bg-card shadow-lg shadow-black/5 lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                  <ProjectPreview
                    title={project.title}
                    previewImage={project.previewImage}
                    category={project.category}
                  />
                </div>

                <div
                  className={`flex flex-col justify-center gap-4 p-5 sm:p-7 lg:p-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <span className="font-mono text-xs text-emerald-400">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold leading-tight text-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-text-secondary sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-customBorder bg-bg px-2.5 py-1 font-mono text-xs text-text-muted"
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
                        className="group/link inline-flex min-h-10 items-center gap-1 rounded-lg text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
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
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-customBorder px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-emerald-500/30 hover:bg-bg-hover"
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
