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
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
        <motion.div
          className="flex max-w-2xl flex-col items-start"
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
            className="font-heading text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            {NAME}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-2 font-heading text-2xl font-semibold text-emerald-400 sm:text-3xl"
          >
            {ROLE}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary"
          >
            I build fast, reliable web and mobile applications — and create AI-powered video content and social media campaigns that grow brands. Available for freelance projects and full-time opportunities.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-600 active:scale-[0.97]"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-500/40 px-6 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/10 active:scale-[0.97]"
            >
              Hire Me
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-text-muted transition-colors hover:text-text-primary active:scale-[0.97]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex w-full flex-col gap-3"
          >
            <span className="font-mono text-xs text-text-muted">
              Tech Stack
            </span>
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="mx-2 rounded-full bg-zinc-900 px-3 py-1 font-mono text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
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
      className="animate-float w-[480px] rounded-xl border border-border-DEFAULT bg-bg-card shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-border-DEFAULT px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-text-muted">
          developer.ts
        </span>
      </div>
      <div className="p-4 font-mono text-sm">
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
