'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { NAME, ROLE } from '@/lib/constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:flex lg:min-h-screen lg:items-center lg:pb-24 lg:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-14 lg:px-8">
        <motion.div
          className="flex max-w-2xl flex-col items-center text-center sm:items-start sm:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="mb-4 font-mono text-sm text-emerald-400"
          >
            $ whoami
          </motion.span>

          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            {NAME}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 font-heading text-xl font-semibold leading-tight text-emerald-400 sm:text-3xl"
          >
            {ROLE}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:mt-6 sm:text-lg sm:leading-8"
          >
            I build fast, reliable web and mobile applications — and create AI-powered video content and social media campaigns that grow brands. Available for freelance projects and full-time opportunities.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid w-full gap-3 sm:flex sm:flex-wrap sm:gap-4"
          >
            <Link
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-sm shadow-emerald-500/20 transition-colors hover:bg-emerald-600 active:scale-[0.98]"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/10 active:scale-[0.98]"
            >
              Hire Me
            </Link>
            <Link
              href="/resume"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-customBorder px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-customBorder-hover hover:bg-bg-hover hover:text-text-primary active:scale-[0.98] sm:border-transparent sm:px-3"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex w-full flex-col gap-3 sm:mt-12"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Tech Stack
            </span>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start md:hidden">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-customBorder bg-bg-card px-3 py-1.5 font-mono text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="relative hidden w-full overflow-hidden md:block">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="mx-2 rounded-full border border-customBorder bg-bg-card px-3 py-1.5 font-mono text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full">
          <CodeEditorMockup />
        </div>
      </div>
    </section>
  );
}

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Gemini AI',
  'InVideo AI',
  'Grok AI',
];

function CodeEditorMockup() {
  const code = `const developer = {
  name: "Muhammad Ismail",
  stack: ["React", "Next.js", "AI Video", "Social Media"],
  status: "available",
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mx-auto w-full max-w-[480px] rounded-lg border border-customBorder bg-bg-card shadow-2xl shadow-black/20 lg:animate-float lg:mx-0"
    >
      <div className="flex items-center gap-2 border-b border-customBorder px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-text-muted">
          developer.ts
        </span>
      </div>
      <div className="p-4 font-mono text-xs sm:text-sm">
        <TypingAnimation text={code} />
      </div>
    </motion.div>
  );
}

function TypingAnimation({ text }: { text: string }) {
  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="whitespace-pre-wrap leading-relaxed text-text-primary"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.02 }}
          className={
            char === '"'
              ? 'text-emerald-400'
              : /["']/.test(text[i - 1] || '') && /["']/.test(text[i + 1] || '')
              ? 'text-emerald-300'
              : ['const', 'name', 'stack', 'status', 'available'].some((w) =>
                  text.slice(i, i + w.length) === w
                )
              ? 'text-purple-400'
              : 'text-text-primary'
          }
        >
          {char}
        </motion.span>
      ))}
    </motion.pre>
  );
}
