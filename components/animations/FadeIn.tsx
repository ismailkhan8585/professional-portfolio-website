'use client';

import { LazyMotion, domAnimation, m, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  viewportAmount?: number;
  as?: keyof JSX.IntrinsicElements;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ease = [0.22, 1, 0.36, 1] as const;

const offsetByDirection: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function RevealSection({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  as = 'div',
}: RevealSectionProps) {
  const MotionTag = m[as as 'div'];
  const offset = offsetByDirection[direction];

  return (
    <LazyMotion features={domAnimation}>
      <MotionTag
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-80px', amount: 0.18 }}
        transition={{ duration, delay, ease }}
        className={className}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}

export function StaggerContainer({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.08,
  viewportAmount = 0.16,
  as = 'div',
}: StaggerProps) {
  const MotionTag = m[as as 'div'];

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <MotionTag
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px', amount: viewportAmount }}
        variants={variants}
        className={className}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}

export function StaggerItem({
  children,
  className = '',
  as = 'div',
}: StaggerItemProps) {
  const MotionTag = m[as as 'div'];

  return (
    <MotionTag
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default function FadeIn(props: RevealSectionProps) {
  return <RevealSection {...props} />;
}
