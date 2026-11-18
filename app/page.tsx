import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import SelectedWork from '@/components/sections/SelectedWork';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import { DOMAIN, NAME, ROLE } from '@/lib/constants';

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <section id="contact" className="py-20 sm:py-28 lg:py-36" />,
});

export const metadata: Metadata = {
  title: `${NAME} - Full-Stack Developer Portfolio`,
  description: `${ROLE}. Explore selected web apps, mobile apps, AI content work, digital solutions services, and contact Muhammad Ismail for production-ready development.`,
  alternates: { canonical: DOMAIN },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SelectedWork />
      <Skills />
      <About />
      <Services />
      <Contact />
    </>
  );
}
