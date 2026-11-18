import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import SectionHeading from '@/components/SectionHeading';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'tRPC'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'iOS/Android deployment'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'AWS basics'],
  },
  {
    title: 'Design & Collaboration',
    skills: ['Figma', 'Notion', 'Linear', 'Agile/Scrum'],
  },
  {
    title: 'AI Content & Social Media',
    skills: [
      'Gemini AI',
      'Grok AI',
      'InVideo AI',
      'ChatGPT/GPT-4',
      'Runway ML',
      'ElevenLabs',
      'Canva AI',
      'CapCut',
      'Midjourney',
    ],
  },
];

const learning = ['GraphQL', 'Rust', 'AI/LLM integrations'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills &"
          accent="tech stack"
          aside="The tools I reach for every day — from database schema to the last pixel of the interface."
        />

        <StaggerContainer as="ul" className="border-t border-customBorder" staggerDelay={0.07}>
          {skillCategories.map((category, i) => (
            <StaggerItem
              as="li"
              key={category.title}
              className="group relative grid gap-4 border-b border-customBorder py-7 transition-colors duration-500 hover:bg-bg-card sm:py-9 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-6"
            >
              {/* accent bar that grows on hover */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-[2px] origin-top scale-y-0 bg-brand-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 lg:block"
              />
              <div className="flex items-baseline gap-4 lg:col-span-5">
                <span className="font-mono text-[11px] text-text-muted transition-colors duration-300 group-hover:text-brand-ink">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-3xl lg:text-4xl lg:group-hover:translate-x-2">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 lg:col-span-7 lg:justify-end">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-customBorder bg-bg px-3.5 py-1.5 text-sm text-text-secondary transition-colors duration-300 hover:border-brand-ink/60 hover:text-text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-10">
            <span className="eyebrow">Currently learning</span>
            <ul className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-brand-ink/10 px-3.5 py-1.5 font-mono text-xs text-brand-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
