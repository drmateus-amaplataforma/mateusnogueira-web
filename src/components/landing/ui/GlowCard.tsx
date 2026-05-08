'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'gold';
}

export function GlowCard({
  children,
  className,
  delay = 0,
  variant = 'default',
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-mateus-white p-8',
        'border border-mateus-accent/15 shadow-card-soft',
        'transition-colors duration-300 hover:border-mateus-accent/35',
        className
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500',
          variant === 'gold'
            ? 'bg-gradient-to-br from-mateus-gold/[0.06] to-transparent'
            : 'bg-gradient-to-br from-mateus-primary/[0.04] to-transparent',
          'group-hover:opacity-100'
        )}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
