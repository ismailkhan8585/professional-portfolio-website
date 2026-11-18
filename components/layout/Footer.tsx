import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { NAME, SOCIALS, EMAIL } from '@/lib/constants';
import { RevealSection } from '@/components/animations/FadeIn';
import LocalTime from '@/components/LocalTime';

const pages = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { label: 'GitHub', href: SOCIALS.github },
  { label: 'LinkedIn', href: SOCIALS.linkedin },
  { label: 'Email', href: `mailto:${EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-customBorder bg-bg">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <RevealSection className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="max-w-xs font-heading text-2xl font-semibold leading-tight tracking-tight text-text-primary">
              Building fast, reliable products for the web and mobile.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-ink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-ink" />
              </span>
              Available for freelance &amp; full-time roles
            </div>
          </div>

          <div>
            <span className="eyebrow">Pages</span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Connect</span>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <span className="link-underline">{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow">Location</span>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Islamabad, Pakistan
              <br />
              <LocalTime className="font-mono text-xs text-text-muted" />
              <br />
              Remote worldwide
            </p>
          </div>
        </RevealSection>

        {/* oversized wordmark */}
        <div
          aria-hidden="true"
          className="mt-12 select-none whitespace-nowrap text-center font-heading text-[11.4vw] font-bold leading-[0.8] tracking-[-0.05em] text-text-primary/[0.07] sm:mt-16 xl:text-[9.6rem]"
        >
          {NAME}
        </div>
      </div>

      <div className="relative border-t border-customBorder">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
            &copy; {new Date().getFullYear()} {NAME} — Built with Next.js
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-text-primary"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-customBorder transition-colors group-hover:border-brand-ink group-hover:text-brand-ink">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
