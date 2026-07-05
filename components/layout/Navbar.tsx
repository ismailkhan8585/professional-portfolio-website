'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NAME } from '@/lib/constants';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-300 sm:px-4 ${
          scrolled ? 'pt-2' : 'pt-3'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-lg border border-customBorder/80 bg-bg/90 px-3 shadow-lg shadow-black/10 backdrop-blur-xl transition-colors sm:h-16 sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-500 font-mono text-sm font-bold text-black shadow-sm shadow-emerald-500/20">
              MI
            </span>
            <span className="truncate font-heading text-base font-semibold text-text-primary sm:text-lg">
              {NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative rounded-md px-1 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/resume"
              className="rounded-lg border border-customBorder px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-customBorder-hover hover:bg-bg-hover"
            >
              Resume
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-customBorder text-text-primary transition-colors hover:bg-bg-hover"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[55] bg-black/45 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed left-3 right-3 top-20 z-[60] rounded-lg border border-customBorder bg-bg-card p-4 shadow-2xl shadow-black/30 md:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-text-muted">
                  Navigation
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-customBorder text-text-primary transition-colors hover:bg-bg-hover"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 font-heading text-lg font-semibold text-text-primary transition-colors hover:bg-bg-hover hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-customBorder pt-4">
                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-customBorder px-4 py-3 text-center text-sm font-medium text-text-primary transition-colors hover:border-customBorder-hover hover:bg-bg-hover"
                >
                  Resume
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-black shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
