import type { ReactNode } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import Words from '@/components/animations/Words';

interface SectionHeadingProps {
  eyebrow: string;
  /** plain part of the headline */
  title: string;
  /** part rendered in the italic serif accent */
  accent?: string;
  /** optional trailing plain text after the accent */
  after?: string;
  /** supporting copy or action shown beside the headline on desktop */
  aside?: ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  after,
  aside,
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const titleWords = title.split(' ').length;
  const accentWords = accent ? accent.split(' ').length : 0;

  return (
    <div
      className={`mb-10 grid gap-6 sm:mb-14 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-8 ${className}`}
    >
      <div className="lg:col-span-8">
        <FadeIn duration={0.6}>
          <span className="eyebrow">{eyebrow}</span>
        </FadeIn>
        <Tag className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl">
          <Words text={title} />
          {accent && (
            <>
              {' '}
              <Words text={accent} className="serif-accent text-[1.08em]" delay={titleWords * 0.06} />
            </>
          )}
          {after && (
            <>
              {' '}
              <Words text={after} delay={(titleWords + accentWords) * 0.06} />
            </>
          )}
        </Tag>
      </div>
      {aside && (
        <FadeIn delay={0.15} className="lg:col-span-4 lg:pb-2">
          {typeof aside === 'string' ? (
            <p className="max-w-md text-base leading-7 text-text-secondary">{aside}</p>
          ) : (
            aside
          )}
        </FadeIn>
      )}
    </div>
  );
}
