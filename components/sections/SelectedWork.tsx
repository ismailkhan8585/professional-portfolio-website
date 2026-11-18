import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, allProjects } from '@/lib/projects';
import FadeIn from '@/components/animations/FadeIn';
import Magnetic from '@/components/animations/Magnetic';
import SectionHeading from '@/components/SectionHeading';
import WorkStack from './WorkStack';

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`Selected work (${String(featuredProjects.length).padStart(2, '0')})`}
          title="Projects I'm"
          accent="proud of"
          aside="A mix of client work, startups, AI content campaigns, and personal builds — each solving a real problem."
        />

        <WorkStack projects={featuredProjects} />

        <FadeIn delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center sm:mt-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
              {allProjects.length} projects in the archive
            </p>
            <Magnetic>
              <Link href="/work" className="btn-ghost group !px-8">
                View all projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
