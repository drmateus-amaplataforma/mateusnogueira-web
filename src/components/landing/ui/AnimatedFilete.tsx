'use client';

import { m as Motion, useReducedMotion } from 'framer-motion';

type AnimatedFileteProps = {
  className?: string;
  width?: number;
  align?: 'left' | 'center';
};

/**
 * Linha decorativa fina (2px) que cresce on scroll. Cor: gold
 * canônico do Dr. Mateus pessoal (#B08538). Respeita
 * prefers-reduced-motion: estado final renderizado direto.
 *
 * Portado de vae-handson-landing/src/components/landing/AnimatedFilete.tsx
 */
export function AnimatedFilete({
  className = '',
  width = 80,
  align = 'left',
}: AnimatedFileteProps) {
  const reducedMotion = useReducedMotion();
  const baseStyle = {
    height: '2px',
    background: 'var(--mateus-gold)',
    marginLeft: align === 'center' ? 'auto' : undefined,
    marginRight: align === 'center' ? 'auto' : undefined,
  };

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className={className}
        style={{ ...baseStyle, width, opacity: 1 }}
      />
    );
  }

  return (
    <Motion.div
      aria-hidden
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, ease: [0.3, 0, 0, 1.1] }}
      style={baseStyle}
      className={className}
    />
  );
}
