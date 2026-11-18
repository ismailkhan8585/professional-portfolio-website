'use client';

import { m } from 'framer-motion';
import { ease } from './FadeIn';

interface WordsProps {
  text: string;
  className?: string;
  /** seconds before the first word starts */
  delay?: number;
  /** seconds between words */
  stagger?: number;
  /** animate on mount instead of when scrolled into view (use above the fold) */
  immediate?: boolean;
}

/**
 * Headline reveal: every word slides up out of its own mask.
 * Renders inline, so several <Words> with different styles can sit inside one heading.
 */
export default function Words({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: WordsProps) {
  const words = text.split(' ');
  const trigger = immediate
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: { once: true, margin: '-40px' } };

  return (
    <m.span initial="hidden" {...trigger} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true">
          <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
            <m.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: '115%' },
                visible: {
                  y: 0,
                  transition: { duration: 0.9, ease, delay: delay + i * stagger },
                },
              }}
            >
              {word}
            </m.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </m.span>
  );
}
