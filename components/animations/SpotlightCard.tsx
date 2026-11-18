'use client';

import type { ReactNode, PointerEvent } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/** Card with a soft glow that follows the cursor (styles live in globals.css → .spotlight). */
export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div onPointerMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
