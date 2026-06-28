import type { Metadata } from 'next';
import { NAME, ROLE, DOMAIN } from '@/lib/constants';
import { Download } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';

export const metadata: Metadata = {
  title: `Resume — ${NAME}`,
  description: `Download the resume of ${NAME}, ${ROLE}.`,
  alternates: { canonical: `${DOMAIN}/resume` },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-sm text-emerald-400">// Resume</span>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Resume
            </h1>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-600"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-xl border border-border-DEFAULT bg-bg-card p-6 sm:p-8">
          <div className="mb-8 border-b border-border-DEFAULT pb-8">
            <h2 className="font-heading text-2xl font-bold text-text-primary">{NAME}</h2>
            <p className="mt-1 text-emerald-400">{ROLE}</p>
            <p className="mt-2 text-sm text-text-secondary">
              hello@muhammadismail.dev &middot; muhammadismail.dev
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-lg font-semibold text-text-primary">Summary</h3>
            <p className="mt-2 text-text-secondary">
              Full-stack developer with 5+ years of experience building web and mobile applications.
              Specializes in React, Next.js, and Node.js. Also creates AI-powered video content and
              manages social media marketing for brands. Available for freelance projects and
              full-time opportunities.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-lg font-semibold text-text-primary">Experience</h3>
            <div className="mt-4 flex flex-col gap-5">
              <div>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <span className="font-medium text-text-primary">Full-Stack Developer — Freelance</span>
                  <span className="font-mono text-xs text-text-muted">2020 — Present</span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  Delivered 25+ projects for startups and agencies. Built SaaS dashboards, e-commerce
                  platforms, booking systems, and internal tools using Next.js, React Native, Node.js,
                  and PostgreSQL.
                </p>
              </div>
              <div>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <span className="font-medium text-text-primary">AI Content Specialist — OrganoCity</span>
                  <span className="font-mono text-xs text-text-muted">2023 — Present</span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  Produced AI-generated marketing videos and managed social media presence using
                  Gemini AI, InVideo AI, and Grok AI. Handled content strategy, scripting, and
                  cross-platform publishing.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-heading text-lg font-semibold text-text-primary">Skills</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <span className="text-sm font-medium text-text-primary">Frontend</span>
                <p className="text-sm text-text-secondary">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
              </div>
              <div>
                <span className="text-sm font-medium text-text-primary">Backend</span>
                <p className="text-sm text-text-secondary">Node.js, Express, PostgreSQL, Prisma, tRPC, REST APIs</p>
              </div>
              <div>
                <span className="text-sm font-medium text-text-primary">Mobile</span>
                <p className="text-sm text-text-secondary">React Native, Expo, iOS/Android deployment</p>
              </div>
              <div>
                <span className="text-sm font-medium text-text-primary">AI & Marketing</span>
                <p className="text-sm text-text-secondary">Gemini AI, Grok AI, InVideo AI, ChatGPT, Social Media Management</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-text-primary">Education</h3>
            <div className="mt-4">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <span className="font-medium text-text-primary">B.S. Computer Science</span>
                <span className="font-mono text-xs text-text-muted">2016 — 2020</span>
              </div>
              <p className="text-sm text-text-secondary">[Your University Name]</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
