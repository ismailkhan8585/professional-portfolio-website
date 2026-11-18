import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  Eye,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { NAME, DOMAIN, EMAIL, SOCIALS } from '@/lib/constants';

// Everything on this page mirrors the downloadable CV — update both together.
const resumePdf = '/Muhammad_Ismail_ATS_CV.pdf';
const resumeTitle = 'Full Stack JavaScript Developer';
const phone = '+92 302 9154977';

const profileHighlights = [
  '5 years designing, building, and deploying web and mobile applications for real clients.',
  'React.js, Next.js, TypeScript, Node.js, Express.js, React Native, Python, and FastAPI.',
  'Delivered live POS systems, e-commerce stores, PWAs, and bilingual platforms end to end.',
];

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'ZayvoraTech',
    period: 'Jan 2025 - Present',
    details: [
      'Develop and maintain responsive web applications and installable PWAs using Next.js, React.js, and TypeScript with a reusable component architecture.',
      'Built and deployed client projects including a multi-branch restaurant POS system, e-commerce stores, and a bilingual real estate platform.',
      'Translate product requirements into accessible, mobile-first interfaces and integrate backend REST APIs with frontend workflows.',
      'Own the full development lifecycle, including testing, debugging, deployment on Vercel, and GitHub-based team collaboration.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Techcreator',
    period: 'Aug 2021 - Jan 2025',
    details: [
      'Delivered full-stack web and mobile applications using React.js, Next.js, React Native, Node.js, and Express.js.',
      'Designed and integrated REST APIs backed by MongoDB, PostgreSQL, Firebase, and Supabase, including authentication and data management.',
      'Improved code quality, maintainability, and performance through reusable components, code reviews, and structured debugging.',
    ],
  },
];

const education = [
  {
    degree: 'BS Computer Science',
    school: 'Abdul Wali Khan University, Mardan',
    period: '2022 - 2025',
  },
  {
    degree: 'FSc Pre-Engineering',
    school: 'Swabi College of Science, Swabi',
    period: '2019 - 2021',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Progressive Web Apps (PWA)',
    ],
  },
  {
    title: 'Mobile',
    skills: ['React Native (CLI)', 'NativeWind', 'Android and iOS App Development'],
  },
  {
    title: 'Languages and Backend',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST API Development',
      'API Integration',
      'Authentication and Role-Based Access Control',
    ],
  },
  {
    title: 'Databases and Services',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Firebase', 'Supabase', 'Cloudinary'],
  },
  {
    title: 'Tools and Platforms',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Vercel',
      'Cursor',
      'OpenAI Codex',
      'Google Antigravity',
      'Bolt.new',
    ],
  },
];

interface ResumeProject {
  title: string;
  stack: string[];
  details: string[];
  link?: { label: string; href: string; external?: boolean };
}

const selectedProjects: ResumeProject[] = [
  {
    title: 'Biryani House POS',
    stack: ['Next.js', 'React.js', 'PWA', 'Vercel'],
    details: [
      'Built a multi-branch restaurant point-of-sale (POS) system to manage orders, tables, billing, payments, and sales reports.',
      'Implemented role-based access control with Cashier and Admin roles, individual staff accounts, and admin-managed password resets.',
      'Delivered it as an installable PWA for Android, iOS, Windows, and Mac, with offline reopening so cashiers keep working during internet outages.',
    ],
    link: {
      label: 'Live site',
      href: 'https://biryani-house-pos-beta.vercel.app',
      external: true,
    },
  },
  {
    title: 'Hunza Gold E-Commerce PWA',
    stack: ['PWA', 'E-Commerce', 'Chatbot'],
    details: [
      'Developed an installable bilingual English-Urdu shopping app with product catalogue, cart, order tracking, WhatsApp support, wholesale and export enquiry flows, and the Ask Hunza Gold chatbot.',
    ],
    link: { label: 'Case study', href: '/work/hunza-gold' },
  },
  {
    title: 'Saudi Property Platform',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    details: [
      'Created a bilingual Arabic-English real estate platform with RTL/LTR layouts, advanced property search, listing management, enquiry workflows, and responsive design.',
    ],
    link: { label: 'Case study', href: '/work/saudi-property-platform' },
  },
  {
    title: 'Royal Furniture E-Commerce',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Cloudinary'],
    details: [
      'Built a responsive online store with product categories, custom orders, wishlist, cart, WhatsApp support, payment workflows, and delivery options.',
    ],
    link: { label: 'Case study', href: '/work/royal-furniture-ecommerce' },
  },
  {
    title: 'TaxiRapport',
    stack: ['React Native CLI', 'NativeWind'],
    details: [
      'Developed a cross-platform mobile app for Android and iOS with native navigation, responsive screens, and consistent utility-first styling.',
    ],
    link: { label: 'Case study', href: '/work/taxirapport' },
  },
];

export const metadata: Metadata = {
  title: `Resume - ${NAME}`,
  description: `Professional resume of ${NAME}, ${resumeTitle}. Experience, selected projects, technical skills, education, and downloadable CV.`,
  alternates: { canonical: `${DOMAIN}/resume` },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <FadeIn>
        <section className="mb-8 overflow-hidden rounded-lg border border-customBorder bg-bg-card shadow-lg shadow-black/5">
          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow">Professional resume</span>
              <h1 className="display mt-4 text-4xl sm:text-6xl">{NAME}</h1>
              <p className="mt-3 text-lg leading-7 text-brand-ink">{resumeTitle}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Pakistan · Open to relocation
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Eye className="h-4 w-4" />
                View CV
              </a>
              <a href={resumePdf} download className="btn-primary">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid border-t border-customBorder sm:grid-cols-3">
            {profileHighlights.map((highlight) => (
              <div
                key={highlight}
                className="border-customBorder p-5 sm:border-r sm:last:border-r-0"
              >
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
                <Mail className="h-5 w-5 text-brand-ink" />
                Contact
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-sm text-text-secondary">
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition-colors hover:text-brand-ink"
                >
                  {EMAIL}
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-ink"
                >
                  <Phone className="h-4 w-4 text-text-muted" />
                  {phone}
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all transition-colors hover:text-brand-ink"
                >
                  {SOCIALS.linkedin.replace('https://', '')}
                </a>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all transition-colors hover:text-brand-ink"
                >
                  {SOCIALS.github.replace('https://', '')}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-text-muted" />
                  Pakistan · Open to relocation
                </span>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-text-primary">
                <Code2 className="h-5 w-5 text-brand-ink" />
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
                <GraduationCap className="h-5 w-5 text-brand-ink" />
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
        </aside>

        <main className="flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Professional Summary
              </h2>
              <p className="mt-4 leading-7 text-text-secondary">
                Full Stack JavaScript Developer with 5 years of experience designing, building,
                and deploying web and mobile applications for real clients. Skilled in React.js,
                Next.js, TypeScript, Node.js, Express.js, React Native, Python, and FastAPI, with
                strong experience in REST API development, PostgreSQL, MongoDB, and Prisma ORM.
                Delivered live point-of-sale (POS) systems, e-commerce stores, Progressive Web
                Apps (PWAs), and bilingual platforms end to end, from requirements to deployment.
                Known for clean architecture, reusable components, and fast, reliable,
                user-friendly interfaces.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.15}>
            <section className="rounded-lg border border-customBorder bg-bg-card p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-text-primary">
                <Briefcase className="h-5 w-5 text-brand-ink" />
                Professional Experience
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                {experience.map((job) => (
                  <article
                    key={job.role + job.company}
                    className="border-l border-customBorder pl-4"
                  >
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-text-primary">
                          {job.role}
                        </h3>
                        <p className="text-sm text-brand-ink">{job.company}</p>
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
                <FolderGit2 className="h-5 w-5 text-brand-ink" />
                Selected Projects
              </h2>
              <StaggerContainer className="mt-6 grid gap-4" delay={0.05}>
                {selectedProjects.map((project) => (
                  <StaggerItem key={project.title}>
                    <article className="rounded-lg border border-customBorder bg-bg p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <h3 className="font-heading text-lg font-semibold text-text-primary">
                          {project.title}
                        </h3>
                        {project.link && (
                          <Link
                            href={project.link.href}
                            target={project.link.external ? '_blank' : undefined}
                            rel={project.link.external ? 'noopener noreferrer' : undefined}
                            className="inline-flex min-h-9 shrink-0 items-center gap-1 text-sm font-medium text-brand-ink"
                          >
                            <span className="link-underline">{project.link.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-customBorder bg-bg-card px-2 py-0.5 font-mono text-xs text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm leading-6 text-text-secondary">
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
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
