'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { m, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import ProjectPreview from '@/components/ProjectPreview';
import SpotlightCard from '@/components/animations/SpotlightCard';

// must match the .stack-card media query in globals.css
const STACK_QUERY = '(min-width: 1024px) and (min-height: 760px)';

function Card({
  project,
  index,
  total,
  progress,
  stacked,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  // each card shrinks a little as the following ones slide over it
  const target = 1 - (total - 1 - index) * 0.022;
  const scale = useTransform(progress, [index / total, 1], [1, target]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="stack-card" style={{ '--i': index } as React.CSSProperties}>
      <m.article
        style={stacked ? { scale } : undefined}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="origin-top will-change-transform"
      >
        <SpotlightCard className="stack-card-inner grid overflow-hidden rounded-[28px] border border-customBorder bg-bg-card shadow-2xl shadow-black/20 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-between gap-6 p-6 sm:p-8 lg:order-1 lg:p-10">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              <span>
                <span className="text-brand-ink">{number}</span> / {String(total).padStart(2, '0')}
              </span>
              <span className="truncate pl-4">{project.category}</span>
            </div>

            <div>
              <h3 className="font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.03em] text-text-primary sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 line-clamp-4 text-sm leading-7 text-text-secondary sm:text-base lg:line-clamp-3">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-customBorder px-3 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {project.links.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={
                    i === 0
                      ? 'btn-primary group/link !min-h-10 !px-5 !py-2'
                      : 'group/link inline-flex min-h-10 items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary'
                  }
                >
                  <span className={i === 0 ? undefined : 'link-underline'}>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="order-1 border-b border-customBorder lg:order-2 lg:border-b-0 lg:border-l">
            <ProjectPreview
              title={project.title}
              previewImage={project.previewImage}
              category={project.category}
            />
          </div>
        </SpotlightCard>
      </m.article>
    </div>
  );
}

/** Featured projects as a deck: on desktop each card pins and the next one slides over it. */
export default function WorkStack({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stacked, setStacked] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY);
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-6 sm:gap-8">
      {projects.map((project, i) => (
        <Card
          key={project.slug}
          project={project}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
          stacked={stacked}
        />
      ))}
    </div>
  );
}
