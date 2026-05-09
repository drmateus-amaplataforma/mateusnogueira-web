'use client';

import { m as Motion, useReducedMotion } from 'framer-motion';
import { createElement, type CSSProperties, type ReactNode } from 'react';

type RevealAs =
  | 'div'
  | 'section'
  | 'header'
  | 'li'
  | 'ul'
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'figure';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: RevealAs;
  id?: string;
};

const MATEUS_EASING = [0.2, 0, 0, 1] as const;

/**
 * Fade-up on scroll usando whileInView. Respeita
 * `prefers-reduced-motion` short-circuitando para o estado final
 * (sem animação). Sem o short-circuit, iOS em Low Power Mode
 * mantém os elementos travados em opacity:0 e somem da página.
 *
 * Portado de vae-handson-landing/src/components/landing/Reveal.tsx
 * (idêntico em comportamento; adaptado para easing canônico do
 * design system Dr. Mateus pessoal).
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  className,
  style,
  as = 'div',
  id,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) {
    return createElement(as, { id, className, style }, children);
  }

  // motion[as] tipa estritamente cada tag — `as any` evita conflito
  // de generics (HTMLMotionProps<'li'> vs <'div'>) ao reaproveitar
  // os mesmos props para tags diferentes.
  const MotionTag = (Motion as any)[as];
  return (
    <MotionTag
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: MATEUS_EASING }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
