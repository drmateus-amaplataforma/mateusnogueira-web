'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { roteiroMev } from '@/lib/design-tokens';

export function MevS7b_RoteiroSemana() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow={roteiroMev.eyebrow}
        heading={roteiroMev.heading}
        subheading={roteiroMev.intro}
      />

      <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {roteiroMev.dias.map((dia, i) => (
          <motion.li
            key={dia.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-xl border border-mateus-accent/15 bg-mateus-white p-5 shadow-card-soft hover:border-mateus-lilas/35 transition-colors h-full flex flex-col"
          >
            <div className="flex items-center gap-2.5 pb-3 border-b border-mateus-accent/15 mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mateus-lilas text-mateus-white text-sm font-extrabold">
                {dia.n}
              </span>
              <span className="text-xs uppercase tracking-eyebrow text-mateus-muted">
                Dia {dia.n}
              </span>
            </div>
            <h3 className="font-extrabold text-mateus-primary text-base leading-tight mb-2">
              {dia.titulo}
            </h3>
            <p className="text-sm text-mateus-muted leading-relaxed flex-1">
              {dia.acao}
            </p>
          </motion.li>
        ))}
      </ol>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-serif italic text-mateus-primary/85 text-lg sm:text-xl leading-relaxed text-center max-w-2xl mx-auto mt-12 px-4"
      >
        {roteiroMev.closing}
      </motion.p>
    </Section>
  );
}
