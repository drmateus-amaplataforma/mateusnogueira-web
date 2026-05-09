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
  formatType?: 'comma' | 'crm';
  className?: string;
  ariaLabel?: string;
  suffix?: string;
  prefix?: string;
};

const FORMATTERS: Record<'comma' | 'crm', (n: number) => string> = {
  comma: (n) => Math.round(n).toLocaleString('pt-BR'),
  crm: (n) => {
    const padded = String(Math.round(n)).padStart(5, '0');
    return `${padded.slice(0, 2)}.${padded.slice(2)}`;
  },
};

/**
 * Counter animado de 0 → `to` quando entra na viewport. Respeita
 * prefers-reduced-motion: renderiza valor final estático sem
 * animação. Usa Framer Motion useInView + animate (motion value)
 * para otimizar — sem re-renders por frame.
 *
 * formatType é discriminator string (não função) para permitir uso a
 * partir de Server Components — funções não atravessam a barreira RSC.
 */
export function NumberCounter({
  to,
  duration = 1.6,
  formatType = 'comma',
  className,
  ariaLabel,
  suffix = '',
  prefix = '',
}: NumberCounterProps) {
  const format = FORMATTERS[formatType];
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
