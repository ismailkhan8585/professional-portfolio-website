'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className = '',
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const directions = {
    up: { y: shouldReduceMotion ? 0 : 16, x: 0 },
    down: { y: shouldReduceMotion ? 0 : -16, x: 0 },
    left: { y: 0, x: shouldReduceMotion ? 0 : 16 },
    right: { y: 0, x: shouldReduceMotion ? 0 : -16 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px', amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
