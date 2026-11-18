import type { Metadata } from 'next';
import Services from '@/components/sections/Services';
import { NAME, DOMAIN } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Services — ${NAME}`,
  description: `Services offered by ${NAME}: web apps, mobile apps, MVPs, consulting, and AI video.`,
  alternates: { canonical: `${DOMAIN}/services` },
};

export default function ServicesPage() {
  // same section the homepage shows, with room for the fixed navbar
  return (
    <div className="pt-10 sm:pt-6 lg:pt-0">
      <Services />
    </div>
  );
}
