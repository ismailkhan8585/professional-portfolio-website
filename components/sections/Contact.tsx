'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { ArrowUpRight, Check, Copy, Loader2 } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import Words from '@/components/animations/Words';
import Magnetic from '@/components/animations/Magnetic';
import LocalTime from '@/components/LocalTime';
import { EMAIL, SOCIALS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  projectType: z.enum(
    ['Freelance Project', 'Job Opportunity', 'AI Video/Social Media', 'Other'],
    {
      required_error: 'Project type is required',
    }
  ),
  budget: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  website: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const socials = [
  { href: SOCIALS.github, label: 'GitHub' },
  { href: SOCIALS.linkedin, label: 'LinkedIn' },
];

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
        toast.success('Message sent successfully. I will contact you soon.');
        setSubmitted(true);
        reset();
        return;
      }
      toast.error('Something went wrong. Please try again.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the address is still visible to copy by hand
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-customBorder py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-brand-ink/[0.1] blur-[130px]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn duration={0.6}>
          <span className="eyebrow">Get in touch</span>
        </FadeIn>
        <h2 className="display mt-5 text-[3rem] sm:text-7xl lg:text-[7.5rem]">
          <Words text="Let's build something" />{' '}
          <Words text="together." className="serif-accent text-[1.08em]" delay={0.18} />
        </h2>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-5">
            <div className="flex flex-col gap-8">
              <p className="max-w-md text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
                Whether you have a project in mind or an opportunity to discuss, I&apos;d love to
                hear from you.
              </p>

              <div>
                <span className="field-label">Email</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={`Copy email address ${EMAIL}`}
                  className="group flex max-w-full items-center gap-3 text-left font-heading text-xl font-medium tracking-tight text-text-primary transition-colors hover:text-brand-ink sm:text-2xl"
                >
                  <span className="link-underline truncate">{EMAIL}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-customBorder text-text-secondary transition-colors group-hover:border-brand-ink group-hover:text-brand-ink">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </span>
                </button>
                <span
                  className="mt-2 block h-4 font-mono text-[11px] text-brand-ink"
                  aria-live="polite"
                >
                  {copied ? 'Copied to clipboard' : ''}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a href={`mailto:${EMAIL}`} className="btn-primary">
                    Send email
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost group"
                  >
                    {social.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-6 border-t border-customBorder pt-6">
                <div>
                  <dt className="field-label">Response time</dt>
                  <dd className="flex items-center gap-2 text-sm text-text-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-ink opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-ink" />
                    </span>
                    Within 24 hours
                  </dd>
                </div>
                <div>
                  <dt className="field-label">Local time</dt>
                  <dd className="text-sm text-text-primary">
                    <LocalTime /> · Islamabad
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-brand-ink/30 bg-bg-card p-8 text-center sm:p-12">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-contrast">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-3xl font-semibold tracking-tight text-text-primary">
                  Message sent!
                </h3>
                <p className="mt-3 text-text-secondary">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5 rounded-[28px] border border-customBorder bg-bg-card p-5 shadow-2xl shadow-black/10 sm:p-9"
              >
                <input
                  type="text"
                  {...register('website')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="field-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      {...register('name')}
                      autoComplete="name"
                      className="field"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-error">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="field-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      {...register('email')}
                      type="email"
                      autoComplete="email"
                      className="field"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-error">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-type" className="field-label">
                    Project type
                  </label>
                  <select id="contact-type" {...register('projectType')} className="field">
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="AI Video/Social Media">AI Video/Social Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {showBudget && (
                  <div>
                    <label htmlFor="contact-budget" className="field-label">
                      Budget range
                    </label>
                    <select id="contact-budget" {...register('budget')} className="field">
                      <option value="">Select budget</option>
                      <option value="Under $1k">Under $1k</option>
                      <option value="$1k–$5k">$1k–$5k</option>
                      <option value="$5k–$15k">$5k–$15k</option>
                      <option value="$15k+">$15k+</option>
                    </select>
                  </div>
                )}
                <div>
                  <label htmlFor="contact-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    {...register('message')}
                    rows={5}
                    className="field resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-error">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary group mt-1 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </>
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
