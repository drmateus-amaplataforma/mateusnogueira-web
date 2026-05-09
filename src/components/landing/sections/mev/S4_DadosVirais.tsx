'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { dadosViraisMev } from '@/lib/design-tokens';

export function MevS4_DadosVirais() {
  return (
    <Section alt>
      <SectionHeader
        eyebrow="O que a ciência sabe"
        heading="A medicina mudou. Quase ninguém te contou."
        subheading="Em 2026, alguns pontos são consenso na literatura científica internacional. Eles não chegaram ao consultório padrão. Eles não chegaram à sua família. Vão chegar agora."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {dadosViraisMev.map((item, i) => (
          <motion.article
            key={item.big}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group rounded-2xl border border-mateus-accent/15 bg-mateus-white p-8 shadow-card-soft transition-colors hover:border-mateus-lilas/35"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-bold text-5xl sm:text-6xl text-mateus-lilas leading-none tracking-tight">
                {item.big}
              </span>
              <span className="text-xs uppercase tracking-eyebrow text-mateus-muted">
                {item.label}
              </span>
            </div>
            <p className="mt-5 text-base text-mateus-text/85 leading-relaxed">
              {item.detail}
            </p>
            <p className="mt-4 text-xs uppercase tracking-eyebrow text-mateus-muted/80">
              Fonte · {item.source}
            </p>
          </motion.article>
        ))}
      </div>

      <p className="mt-12 text-center text-base text-mateus-muted leading-relaxed max-w-2xl mx-auto">
        Este livro mostra exatamente o que mudou na ciência da saúde nos últimos 20 anos —
        e como aplicar agora, na sua vida, sem precisar de consultório nem de jaleco.
      </p>
    </Section>
  );
}
