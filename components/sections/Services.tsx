import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import ServiceList from './ServiceList';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I can help"
          title="Services built around"
          accent="your product"
          aside="From a first idea to a shipped product — and the content that gets it noticed."
        />
        <FadeIn>
          <ServiceList />
        </FadeIn>
      </div>
    </section>
  );
}
