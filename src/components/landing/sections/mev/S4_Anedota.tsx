'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { anedotaMev } from '@/lib/design-tokens';

export function MevS4_Anedota() {
  return (
    <Section alt>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-narrow mx-auto space-y-7"
      >
        <p className="eyebrow text-center">{anedotaMev.eyebrow}</p>

        <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-primary leading-[1.1] tracking-tight text-center">
          {anedotaMev.hook}
        </h2>

        <p className="text-lg sm:text-xl text-mateus-muted leading-relaxed text-center max-w-2xl mx-auto italic">
          {anedotaMev.conflict}
        </p>

        <div className="bg-mateus-white border-l-4 border-mateus-lilas rounded-r-xl p-7 sm:p-8 my-8 shadow-card-soft">
          <p className="text-base sm:text-lg text-mateus-text/85 leading-relaxed">
            {anedotaMev.paragraph}
          </p>
        </div>

        <p className="font-serif italic text-mateus-primary text-lg sm:text-xl leading-relaxed text-center max-w-2xl mx-auto">
          {anedotaMev.insight}
        </p>
      </motion.div>
    </Section>
  );
}
