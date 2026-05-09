'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { casosMev } from '@/lib/design-tokens';

export function MevS4b_Casos() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Transformações reais"
        heading="Não é teoria. Foram pessoas."
        subheading="Casos clínicos do livro — com nomes preservados, números medidos e tempo cravado. Porque medicina baseada em ciência não pode ser baseada em promessa."
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {casosMev.map((caso, i) => (
          <motion.article
            key={caso.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-mateus-accent/15 bg-mateus-white p-7 shadow-card-soft flex flex-col"
          >
            <header className="space-y-2 pb-5 border-b border-mateus-accent/15">
              <p className="text-xs uppercase tracking-eyebrow text-mateus-lilas font-semibold">
                {caso.duration}
              </p>
              <h3 className="font-extrabold text-mateus-primary text-lg leading-tight">
                {caso.name}
              </h3>
            </header>

            <div className="space-y-5 mt-5 flex-1">
              <div>
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted mb-1.5">
                  Antes
                </p>
                <p className="text-sm text-mateus-text/80 leading-relaxed">
                  {caso.before}
                </p>
              </div>

              <div className="flex items-center gap-2 text-mateus-lilas/60">
                <span className="h-px flex-1 bg-mateus-lilas/20" />
                <span className="text-xs">↓</span>
                <span className="h-px flex-1 bg-mateus-lilas/20" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted mb-1.5">
                  Depois
                </p>
                <p className="text-sm text-mateus-text leading-relaxed font-medium">
                  {caso.after}
                </p>
              </div>
            </div>

            <p className="font-serif italic text-sm text-mateus-primary/85 leading-relaxed mt-6 pt-5 border-t border-mateus-accent/15">
              “{caso.insight}”
            </p>
          </motion.article>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-mateus-muted leading-relaxed max-w-2xl mx-auto">
        Os casos completos — com avaliações laboratoriais, gráficos de evolução e
        método aplicado — estão no Capítulo 8 do livro.
      </p>
    </Section>
  );
}
