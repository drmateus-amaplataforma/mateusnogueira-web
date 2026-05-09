'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { casoMev } from '@/lib/design-tokens';

export function MevS4b_CasoPaciente() {
  return (
    <Section>
      <div className="max-w-narrow mx-auto space-y-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 text-center"
        >
          <p className="eyebrow">{casoMev.eyebrow}</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-primary leading-[1.1] tracking-tight">
            {casoMev.heading}
          </h2>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-mateus-accent/15 bg-mateus-white p-7 sm:p-9 shadow-card-soft space-y-5"
        >
          <p className="text-xs uppercase tracking-eyebrow text-mateus-lilas font-semibold">
            {casoMev.fase1.label}
          </p>
          <p className="text-base sm:text-lg text-mateus-text/85 leading-relaxed">
            {casoMev.fase1.text}
          </p>
        </motion.article>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif italic text-mateus-primary/85 text-lg leading-relaxed text-center px-4"
        >
          {casoMev.ponte}
        </motion.p>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-mateus-lilas/30 bg-mateus-bg-alt p-7 sm:p-9 shadow-card-soft space-y-5"
        >
          <p className="text-xs uppercase tracking-eyebrow text-mateus-lilas font-semibold">
            {casoMev.fase2.label}
          </p>
          <p className="text-base sm:text-lg text-mateus-text/85 leading-relaxed">
            {casoMev.fase2.text}
          </p>
        </motion.article>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-mateus-text/85 leading-relaxed px-2"
        >
          {casoMev.resolucao}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-serif italic text-mateus-primary text-lg sm:text-xl leading-relaxed text-center max-w-xl mx-auto pt-4"
        >
          {casoMev.closing}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold text-mateus-lilas text-2xl sm:text-3xl leading-snug text-center pt-2"
        >
          {casoMev.question}
        </motion.p>
      </div>
    </Section>
  );
}
