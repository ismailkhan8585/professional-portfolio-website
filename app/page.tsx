import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import SelectedWork from '@/components/sections/SelectedWork';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';

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
