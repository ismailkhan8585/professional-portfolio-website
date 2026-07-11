import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NAME, ROLE, SOCIALS, EMAIL } from '@/lib/constants';
import { RevealSection } from '@/components/animations/FadeIn';

export default function Footer() {
  return (
    <RevealSection as="footer" className="border-t border-customBorder bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-heading text-lg font-semibold text-text-primary">
              {NAME}
            </span>
            <span className="text-sm text-text-secondary">{ROLE}</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {['Work', 'About', 'Skills', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`/#${label.toLowerCase()}`}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-customBorder bg-bg-card text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-customBorder bg-bg-card text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-customBorder bg-bg-card text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-customBorder pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm leading-6 text-text-muted">
            &copy; {new Date().getFullYear()} {NAME}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for freelance work
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
