'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { audienceMev } from '@/lib/design-tokens';

export function MevS3_ParaQuem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Para quem é"
        heading="Para profissionais e pacientes que escolhem viver mais — e melhor."
        subheading="Da clínica preventiva ao consultório de longevidade, do paciente que já tentou tudo ao adulto que entendeu que tempo de vida não basta sem qualidade de vida."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {audienceMev.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group rounded-2xl border border-mateus-accent/15 bg-mateus-white p-6 shadow-card-soft transition-colors hover:border-mateus-lilas/35"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mateus-lilas/10 text-mateus-lilas font-extrabold text-sm">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-4 font-extrabold text-mateus-primary text-base leading-tight">
              {item.label}
            </h3>
            <p className="mt-2 text-sm text-mateus-muted leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
