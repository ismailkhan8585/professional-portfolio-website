import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

/** Infinite horizontal ticker. Content is rendered twice so the loop is seamless. */
export default function Marquee({ children, reverse = false, className = '' }: MarqueeProps) {
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center whitespace-nowrap group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
