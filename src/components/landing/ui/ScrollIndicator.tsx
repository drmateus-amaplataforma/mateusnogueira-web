'use client';

import { m as Motion } from 'framer-motion';

/**
 * Indicador "Role para descer" no rodapé de heros full-bleed.
 * Aparece apenas em md+ (≥768px). Fade-in com delay de 1.2s para
 * ceder protagonismo ao hero antes de aparecer.
 *
 * Portado de vae-handson-landing/src/components/landing/ScrollIndicator.tsx
 * — cor adaptada para gold canônico Mateus.
 */
export function ScrollIndicator() {
  return (
    <Motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
    >
      <span
        className="text-[10px] uppercase tracking-eyebrow text-mateus-muted/80 font-light"
      >
        Role para descer
      </span>
      <div
        className="w-px h-10"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--mateus-gold))',
        }}
      />
    </Motion.div>
  );
}
