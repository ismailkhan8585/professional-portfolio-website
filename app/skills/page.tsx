import type { Metadata } from 'next';
import Skills from '@/components/sections/Skills';
import { NAME, DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Skills — ${NAME}`,
  description: `Skills and tech stack of ${NAME}: frontend, backend, mobile, tools, and AI content.`,
  alternates: { canonical: `${DOMAIN}/skills` },
};

export default function SkillsPage() {
  // same section the homepage shows, with room for the fixed navbar
  return (
    <div className="pt-10 sm:pt-6 lg:pt-0">
      <Skills />
    </div>
  );
}
