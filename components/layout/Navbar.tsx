'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LocalTime from '@/components/LocalTime';
import { NAME, EMAIL, SOCIALS } from '@/lib/constants';

// every item is its own page, so navigation is a fast client-side route change
const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  // hide while reading down the page, bring back on the first scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > 320 && latest > previous);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden && !mobileOpen ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.55, ease }}
        className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border pl-2 pr-2 transition-[background-color,border-color,box-shadow] duration-500 sm:h-16 sm:pl-3 ${
            scrolled || mobileOpen
              ? 'border-customBorder bg-bg/75 shadow-xl shadow-black/10 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${NAME} — home`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-heading text-sm font-bold tracking-tight text-brand-contrast transition-transform duration-500 group-hover:rotate-[360deg]">
              MI
            </span>
            <span className="hidden truncate font-heading text-[15px] font-semibold tracking-tight text-text-primary sm:block">
              {NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-bg-hover hover:text-text-primary ${
                  isActive(link.href) ? 'bg-bg-hover text-text-primary' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="mr-2 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted xl:flex">
              Islamabad <LocalTime />
            </span>
            <ThemeToggle />
            <Link href="/resume" className="btn-ghost hidden !min-h-10 !px-5 !py-2 md:inline-flex">
              Resume
            </Link>
            <Link href="/contact" className="btn-primary hidden !min-h-10 !px-5 !py-2 sm:inline-flex">
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-customBorder text-text-primary transition-colors hover:bg-bg-hover lg:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  mobileOpen ? 'rotate-45' : '-translate-y-[4px]'
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  mobileOpen ? '-rotate-45' : 'translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            key="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-[45] flex flex-col bg-bg px-5 pb-8 pt-28 lg:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden border-b border-customBorder">
                  <m.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className={`flex items-baseline justify-between py-4 font-heading text-4xl font-semibold tracking-tight ${
                        isActive(link.href) ? 'text-brand-ink' : 'text-text-primary'
                      }`}
                    >
                      {link.label}
                      <span className="font-mono text-xs text-text-muted">0{i + 1}</span>
                    </Link>
                  </m.div>
                </div>
              ))}
            </nav>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="mt-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <Link href="/resume" onClick={() => setMobileOpen(false)} className="btn-ghost">
                  Resume
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary">
                  Let&apos;s talk
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                <a href={`mailto:${EMAIL}`} className="normal-case tracking-normal">
                  {EMAIL}
                </a>
                <span className="flex gap-4">
                  <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
