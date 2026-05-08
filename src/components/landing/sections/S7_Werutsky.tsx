'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { werutsky } from '@/lib/design-tokens';

export function S7_Werutsky() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-narrow mx-auto text-center space-y-8"
      >
        <p className="eyebrow">Prefácio · Endosso editorial</p>

        <svg
          aria-hidden
          width="44"
          height="36"
          viewBox="0 0 44 36"
          className="mx-auto text-mateus-gold"
          fill="currentColor"
          opacity="0.9"
        >
          <path d="M0 36V20.4C0 14.4533 1.46667 9.66667 4.4 6C7.33333 2.33333 11.4667 0.4 16.8 0V8.4C12.5333 9.46667 10.4 12.5333 10.4 17.6H16V36H0ZM27.2 36V20.4C27.2 14.4533 28.6667 9.66667 31.6 6C34.5333 2.33333 38.6667 0.4 44 0V8.4C39.7333 9.46667 37.6 12.5333 37.6 17.6H43.2V36H27.2Z" />
        </svg>

        <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-mateus-primary leading-[1.4] italic">
          {werutsky.quote}
        </blockquote>

        <footer className="space-y-2 pt-4">
          <p className="font-extrabold text-mateus-primary text-base sm:text-lg">
            {werutsky.name}
          </p>
          <p className="text-xs sm:text-sm text-mateus-muted leading-relaxed max-w-2xl mx-auto">
            {werutsky.credentials}
          </p>
        </footer>
      </motion.div>
    </Section>
  );
}
