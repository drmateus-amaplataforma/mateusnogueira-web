'use client';

import {
  m as Motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type NumberCounterProps = {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
  ariaLabel?: string;
  suffix?: string;
  prefix?: string;
};

/**
 * Counter animado de 0 → `to` quando entra na viewport. Respeita
 * prefers-reduced-motion: renderiza valor final estático sem
 * animação. Usa Framer Motion useInView + animate (motion value)
 * para otimizar — sem re-renders por frame.
 */
export function NumberCounter({
  to,
  duration = 1.6,
  format = (n) => Math.round(n).toLocaleString('pt-BR'),
  className,
  ariaLabel,
  suffix = '',
  prefix = '',
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reducedMotion = useReducedMotion();
  const motionValue = useMotionValue(reducedMotion ? to : 0);
  const display = useTransform(motionValue, (v) => `${prefix}${format(v)}${suffix}`);

  useEffect(() => {
    if (!inView || reducedMotion) return;
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.2, 0, 0, 1],
    });
    return controls.stop;
  }, [inView, to, duration, reducedMotion, motionValue]);

  return (
    <Motion.span ref={ref} className={className} aria-label={ariaLabel ?? `${prefix}${to}${suffix}`}>
      {reducedMotion ? `${prefix}${format(to)}${suffix}` : display}
    </Motion.span>
  );
}
