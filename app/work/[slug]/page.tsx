import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { allProjects } from '@/lib/projects';
import { NAME, DOMAIN } from '@/lib/constants';
import CaseStudy from './CaseStudy';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — ${NAME}`,
    description: project.description,
    alternates: { canonical: `${DOMAIN}/work/${project.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return <CaseStudy project={project} />;
}
