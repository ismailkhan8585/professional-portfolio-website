'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Github, Linkedin, Twitter, Mail, Check, Loader2 } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import { EMAIL, SOCIALS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.enum(['Freelance Project', 'Job Opportunity', 'AI Video/Social Media', 'Other']),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const projectType = watch('projectType');
  const showBudget =
    projectType === 'Freelance Project' || projectType === 'AI Video/Social Media';

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // handled silently
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          <FadeIn className="flex-1">
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-mono text-sm text-emerald-400">
                  // Get In Touch
                </span>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                  Let&apos;s build something together
                </h2>
                <p className="mt-4 text-text-secondary">
                  Whether you have a project in mind or an opportunity to discuss, I&apos;d love to hear from you.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-border-DEFAULT bg-bg-card px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-emerald-500/30"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  {EMAIL}
                  {copied && <Check className="h-3.5 w-3.5 text-emerald-400" />}
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-600"
                >
                  Send Email
                </a>
              </div>

              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: SOCIALS.github, label: 'GitHub' },
                  { icon: Linkedin, href: SOCIALS.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: SOCIALS.twitter, label: 'Twitter' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-text-secondary transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Usually responds within 24 hours
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="flex-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-500/30 bg-bg-card p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <Check className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  Message sent!
                </h3>
                <p className="mt-2 text-text-secondary">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 rounded-xl border border-border-DEFAULT bg-bg-card p-6 sm:p-8"
              >
                <input
                  type="text"
                  {...register('website')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    className="w-full rounded-lg border border-border-DEFAULT bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full rounded-lg border border-border-DEFAULT bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Project Type
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full rounded-lg border border-border-DEFAULT bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="AI Video/Social Media">AI Video/Social Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {showBudget && (
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-primary">
                      Budget Range
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full rounded-lg border border-border-DEFAULT bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    >
                      <option value="">Select budget</option>
                      <option value="Under $1k">Under $1k</option>
                      <option value="$1k–$5k">$1k–$5k</option>
                      <option value="$5k–$15k">$5k–$15k</option>
                      <option value="$15k+">$15k+</option>
                    </select>
                  </div>
                )}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-primary">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full rounded-lg border border-border-DEFAULT bg-bg px-3 py-2.5 text-sm text-text-primary outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-error">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-emerald-600 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
