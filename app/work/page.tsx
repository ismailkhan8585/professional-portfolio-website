import type { Metadata } from 'next';
import { NAME, ROLE, DOMAIN } from '@/lib/constants';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: `All Projects — ${NAME}`,
  description: `Browse all projects by ${NAME}: ${ROLE}. Web apps, mobile apps, AI video & marketing campaigns.`,
  alternates: { canonical: `${DOMAIN}/work` },
};

export default function WorkPage() {
  return <WorkClient />;
}
