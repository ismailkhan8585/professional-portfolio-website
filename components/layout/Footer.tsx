'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { NAME, ROLE, SOCIALS, EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-border-DEFAULT bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-heading text-lg font-semibold text-text-primary">
              {NAME}
            </span>
            <span className="text-sm text-text-secondary">{ROLE}</span>
          </div>

          <nav className="flex items-center gap-6">
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
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={SOCIALS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border-DEFAULT pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
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
    </footer>
  );
}
