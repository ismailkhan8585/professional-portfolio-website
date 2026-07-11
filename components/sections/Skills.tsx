import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  Palette,
  Sparkles,
} from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'tRPC'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'iOS/Android deployment'],
  },
  {
    icon: Wrench,
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'AWS basics'],
  },
  {
    icon: Palette,
    title: 'Design & Collaboration',
    skills: ['Figma', 'Notion', 'Linear', 'Agile/Scrum'],
  },
  {
    icon: Sparkles,
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

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <span className="font-mono text-sm text-emerald-400">
              {'// What I Work With'}
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Skills &amp; Tech Stack
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6" delay={0.08}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group h-full rounded-lg border border-customBorder bg-bg-card p-5 transition-colors hover:border-emerald-500/30 sm:p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold leading-tight text-text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-customBorder bg-bg px-2.5 py-1 font-mono text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-8 rounded-lg border border-dashed border-customBorder bg-bg-card p-5 sm:mt-12 sm:p-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Currently Learning
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {['GraphQL', 'Rust', 'AI/LLM integrations'].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-400 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
