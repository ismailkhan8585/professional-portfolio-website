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
} from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { NAME, ROLE, DOMAIN, EMAIL, SOCIALS } from '@/lib/constants';
import { featuredProjects } from '@/lib/projects';

const resumePdf = '/Muhammad_Ismail_ATS_CV.pdf';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js',"React native", 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs', 'tRPC'],
  },
  {
    title: 'Mobile',
    skills: ['React Native',"CLI", 'Expo', 'Cross-platform app development'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Vercel', 'Cloudinary', 'GitHub Actions'],
  },
  {
    title: 'AI & Marketing',
    skills: ['Gemini AI', 'Grok AI', 'InVideo AI', 'ChatGPT', 'Canva AI', 'CapCut'],
  },
];

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 ',
    details: [
      'Build responsive web and mobile applications for startups, small businesses, and client brands.',
      'Deliver SaaS dashboards, e-commerce platforms, booking systems, internal tools, and marketing websites.',
      'Work across product planning, database design, API development, UI implementation, deployment, and client handoff.',
    ],
  },
  {
    role: 'AI Content Specialist',
    company: 'OrganoCity',
    period: 'Present',
    details: [
      'Manage social media content workflows for brand visibility and audience growth.',
      'Create AI-assisted scripts, visuals, reels, and marketing videos using modern generative tools.',
      'Plan and publish cross-platform content while keeping messaging consistent with business goals.',
    ],
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Computer Science Graduate',
    period: '2016 - 2020',
  },
];

const certifications = [
  'Full-Stack Web Development',
  'React and Next.js Application Development',
  'AI Video Creation and Social Media Marketing',
];

export const metadata: Metadata = {
  title: `Resume - ${NAME}`,
  description: `View or download the CV of ${NAME}, ${ROLE}.`,
  alternates: { canonical: `${DOMAIN}/resume` },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <div className="mb-8 grid gap-6 rounded-lg border border-customBorder bg-bg-card p-5 shadow-lg shadow-black/5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="font-mono text-sm text-emerald-400">{'// Resume'}</span>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {NAME}
            </h1>
            <p className="mt-2 text-lg text-emerald-400">{ROLE}</p>
            <p className="mt-4 max-w-3xl leading-7 text-text-secondary">
              Full-stack developer building polished web and mobile products with
              React, Next.js, Node.js, PostgreSQL, and modern AI tooling. I help
              clients turn ideas into production-ready platforms with clean UI,
              reliable architecture, and practical business focus.
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
              View Resume
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
                  Open to remote work
                </span>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Code2 className="h-5 w-5 text-emerald-400" />
                Skills
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

          <FadeIn delay={0.2}>
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
              <h2 className="font-heading text-2xl font-bold text-text-primary">Professional Summary</h2>
              <p className="mt-4 leading-7 text-text-secondary">
                I am a full-stack developer with 5+ years of experience building
                web applications, mobile applications, SaaS products, e-commerce
                systems, and internal tools. My work combines front-end polish,
                back-end structure, database design, and deployment experience.
                I also support brands with AI-assisted video creation and social
                media content workflows, giving me a strong balance of technical
                delivery and digital marketing awareness.
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
                <FolderGit2 className="h-5 w-5 text-emerald-400" />
                Selected Projects
              </h2>
              <div className="mt-6 grid gap-4">
                {featuredProjects.slice(0, 4).map((project) => (
                  <article key={project.slug} className="rounded-lg border border-customBorder bg-bg p-4">
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
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-customBorder bg-bg-card px-2 py-0.5 font-mono text-xs text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
