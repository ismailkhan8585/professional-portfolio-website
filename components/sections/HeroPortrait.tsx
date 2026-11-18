'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { NAME } from '@/lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;
const badgeText = 'Available for work • Open to remote • ';

export default function HeroPortrait() {
  // pointer position inside the card, -0.5 … 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 140, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), spring);
  const imgX = useSpring(useTransform(px, [-0.5, 0.5], [10, -10]), spring);
  const imgY = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:ml-auto lg:mr-0 lg:max-w-[380px]"
      style={{ perspective: 1100 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <m.div style={{ rotateX, rotateY }} className="relative will-change-transform">
        <m.div
          initial={{ clipPath: 'inset(100% 0% 0% 0% round 28px)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
          transition={{ duration: 1.2, ease, delay: 0.35 }}
          className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-bg-card"
        >
          <m.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 1.6, ease, delay: 0.35 }}
            style={{ x: imgX, y: imgY }}
            className="h-full w-full"
          >
            <Image
              src="/ismail.webp"
              alt={`${NAME} portrait`}
              width={640}
              height={960}
              priority
              sizes="(min-width: 1024px) 380px, 340px"
              className="h-full w-full object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </m.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-20">
            <div>
              <p className="font-heading text-lg font-semibold leading-tight tracking-tight text-white">
                {NAME}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Islamabad, Pakistan
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              5+ yrs
            </span>
          </div>
        </m.div>
      </m.div>

      {/* rotating availability seal */}
      <m.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease, delay: 1.1 }}
        className="absolute -left-6 -top-6 h-24 w-24 sm:-left-10 sm:-top-10 sm:h-28 sm:w-28"
      >
        <div className="relative h-full w-full rounded-full border border-customBorder bg-bg/80 backdrop-blur-md">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow" aria-hidden="true">
            <defs>
              <path id="seal" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-text-secondary font-mono text-[8.6px] uppercase" letterSpacing="1.6">
              <textPath href="#seal">{badgeText}</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-contrast sm:h-11 sm:w-11">
            <ArrowDownRight className="h-5 w-5" />
          </span>
        </div>
      </m.div>
    </div>
  );
}
