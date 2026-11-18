'use client';

import { useRef } from 'react';
import { m, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface ScrubTextProps {
  text: string;
  className?: string;
  /** words that get the serif accent style */
  accent?: string[];
}

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <m.span style={{ opacity }} className={accent ? 'serif-accent' : undefined}>
      {children}{' '}
    </m.span>
  );
}

/** Statement text that "lights up" word by word as the reader scrolls through it. */
export default function ScrubText({ text, className = '', accent = [] }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  });
  const words = text.split(' ');
  const clean = (w: string) => w.replace(/[^\p{L}\p{N}+]/gu, '').toLowerCase();
  const accents = accent.map((a) => a.toLowerCase());

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}
          accent={accents.includes(clean(word))}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}
