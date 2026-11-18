import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import { NAME, DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact — ${NAME}`,
  description: `Get in touch with ${NAME} about a project or a role.`,
  alternates: { canonical: `${DOMAIN}/contact` },
};

export default function ContactPage() {
  // same section the homepage shows, with room for the fixed navbar
  return (
    <div className="pt-10 sm:pt-6 lg:pt-0 [&>section]:border-t-0">
      <Contact />
    </div>
  );
}
