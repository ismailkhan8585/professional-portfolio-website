'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      {/* reducedMotion="user" turns off movement for visitors who ask their OS for less motion */}
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
