import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Eye,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Wrench,
} from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { NAME, ROLE, DOMAIN, EMAIL, SOCIALS } from '@/lib/constants';
import { allProjects } from '@/lib/projects';

const resumePdf = '/Muhammad_Ismail_ATS_CV.pdf';

const profileHighlights = [
  'Full-stack JavaScript developer building production-ready web and mobile products.',
  'Strong experience with Next.js, React, React Native, Node.js, PostgreSQL, Firebase, and Cloudinary.',
  'Delivers business websites, SaaS dashboards, e-commerce platforms, mobile apps, and AI-assisted marketing workflows.',
];

const experience = [
  {
    role: 'Full-Stack Web & Mobile Developer',
    company: 'Freelance / Client Projects',
    period: '2020 - Present',
    details: [
      'Built responsive web apps, business websites, SaaS dashboards, e-commerce systems, and mobile applications for real client use cases.',
      'Worked across planning, UI development, API integration, database design, deployment, performance optimization, and client handoff.',
      'Delivered portfolio projects including IlmTrack, Royal Furniture, TaxiRapport, Zayvora Tech, TechCreator, and OrganoCity.',
    ],
  },
  {
    role: 'AI Video & Social Media Specialist',
    company: 'OrganoCity / Brand Growth Workflows',
    period: '2023 - Present',
    details: [
      'Created AI-assisted scripts, marketing videos, reels, and social content using Gemini AI, Grok AI, InVideo AI, ChatGPT, Canva, and CapCut.',
      'Managed content planning and publishing workflows for brand visibility, product education, and audience engagement.',
      'Combined development and digital marketing experience to help businesses build products and promote them effectively.',
    ],
  },
  {
    role: 'Digital Solutions Developer',
    company: 'Portfolio & Agency Websites',
    period: 'Recent Work',
    details: [
      'Built conversion-focused websites for digital service businesses with strong messaging, service sections, project proof, and contact flows.',
      'Optimized portfolio pages for speed, SEO, Core Web Vitals, responsive layouts, and professional deployment on Vercel.',
    ],
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Abdul Wali Khan University, Mardan, Pakistan',
    period: '2016 - 2020',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Prisma', 'Firebase', 'Authentication'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'CLI', 'Expo', 'Redux', 'App Store workflows'],
  },
  {
    title: 'Modern Tools',
    skills: ['Vercel', 'GitHub', 'Cloudinary', 'Docker basics', 'Performance optimization'],
  },
];

const aiTools = [
  'ChatGPT',
  'Gemini AI',
  'Grok AI',
  'InVideo AI',
  'Canva AI',
  'CapCut',
  'Runway ML',
  'ElevenLabs',
];

const certifications = [
  'Full-Stack Web Development',
  'React and Next.js Application Development',
  'AI Video Creation and Social Media Marketing',
  'SEO and Web Performance Optimization',
];

export const metadata: Metadata = {
  title: `Resume - ${NAME}`,
  description: `Professional resume of ${NAME}, ${ROLE}. Experience, projects, education, AI tools, modern development stack, and downloadable CV.`,
  alternates: { canonical: `${DOMAIN}/resume` },
};

export default function ResumePage() {
  const featuredResumeProjects = allProjects.slice(0, 7);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <section className="mb-8 overflow-hidden rounded-lg border border-customBorder bg-bg-card shadow-lg shadow-black/5">
          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="font-mono text-sm text-emerald-400">
                {'// Professional Resume'}
              </span>
              <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                {NAME}
              </h1>
              <p className="mt-2 text-lg leading-7 text-emerald-400">{ROLE}</p>
              <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
                Full-stack developer focused on building fast, polished, and
                business-ready digital products. I work across web apps, mobile
                apps, e-commerce, SaaS dashboards, agency websites, and AI-powered
                content workflows.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-customBorder px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-emerald-500/30 hover:bg-bg-hover"
              >
                <Eye className="h-4 w-4" />
                View CV
              </a>
              <a
                href={resumePdf}
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid border-t border-customBorder sm:grid-cols-3">
            {profileHighlights.map((highlight) => (
              <div key={highlight} className="border-customBorder p-5 sm:border-r sm:last:border-r-0">
                <p className="text-sm leading-6 text-text-secondary">{highlight}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <aside className="flex flex-col gap-6">
          <FadeIn delay={0.05}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Mail className="h-5 w-5 text-emerald-400" />
                Contact
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
                <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-emerald-400">
                  {EMAIL}
                </a>
                <a href={DOMAIN} target="_blank" rel="noopener noreferrer" className="break-all transition-colors hover:text-emerald-400">
                  {DOMAIN.replace('https://', '')}
                </a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="break-all transition-colors hover:text-emerald-400">
                  GitHub
                </a>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="break-all transition-colors hover:text-emerald-400">
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-text-muted" />
                  Islamabad, Pakistan - Remote worldwide
                </span>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Code2 className="h-5 w-5 text-emerald-400" />
                Technical Skills
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-medium text-text-primary">{group.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-customBorder bg-bg px-2.5 py-1 font-mono text-xs text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Sparkles className="h-5 w-5 text-emerald-400" />
                AI & Content Tools
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                Education
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h3 className="font-medium text-text-primary">{item.degree}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{item.school}</p>
                    <p className="mt-1 font-mono text-xs text-text-muted">{item.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.25}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Award className="h-5 w-5 text-emerald-400" />
                Certifications
              </h2>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-text-secondary">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </aside>

        <main className="flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Professional Summary
              </h2>
              <p className="mt-4 leading-7 text-text-secondary">
                I build modern digital products from idea to deployment, with a
                focus on clean UI, reliable architecture, responsive layouts,
                and practical business outcomes. My portfolio includes school
                management SaaS, e-commerce platforms, React Native mobile apps,
                agency websites, and AI-powered content workflows.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-text-primary">
                <Briefcase className="h-5 w-5 text-emerald-400" />
                Experience
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {experience.map((job) => (
                  <article key={job.role + job.company} className="border-l border-customBorder pl-4">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-text-primary">
                          {job.role}
                        </h3>
                        <p className="text-sm text-emerald-400">{job.company}</p>
                      </div>
                      <span className="font-mono text-xs text-text-muted">{job.period}</span>
                    </div>
                    <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-text-secondary">
                      {job.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-text-primary">
                <Wrench className="h-5 w-5 text-emerald-400" />
                Modern Development Focus
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'Production-ready Next.js and React applications',
                  'Mobile app workflows with React Native and Firebase',
                  'SEO, Core Web Vitals, image optimization, and Vercel deployment',
                  'AI-assisted content creation, automation, and social media workflows',
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-customBorder bg-bg p-4 text-sm leading-6 text-text-secondary">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.25}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-text-primary">
                <FolderGit2 className="h-5 w-5 text-emerald-400" />
                Portfolio Projects
              </h2>
              <StaggerContainer className="mt-6 grid gap-4" delay={0.05}>
                {featuredResumeProjects.map((project) => (
                  <StaggerItem key={project.slug}>
                    <article className="rounded-lg border border-customBorder bg-bg p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-text-primary">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-emerald-400">{project.category}</p>
                        </div>
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex min-h-9 items-center gap-1 rounded-lg text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          Case Study
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-text-secondary">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-customBorder bg-bg-card px-2 py-0.5 font-mono text-xs text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
