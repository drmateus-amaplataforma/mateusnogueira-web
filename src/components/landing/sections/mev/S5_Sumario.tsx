'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { bookMev, chaptersMev } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export function MevS5_Sumario() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section id="conteudo" alt>
      <SectionHeader
        eyebrow="O livro por dentro"
        heading="O que você vai descobrir."
        subheading="8 capítulos em linguagem que você entende — com casos clínicos, dados de pesquisas e a ciência por trás de cada decisão. Mais um apêndice prático: a sua primeira semana de Vida Ativa em 7 dias."
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 max-w-3xl">
        <Stat number={bookMev.totalChapters} label="capítulos + apêndice" />
        <Stat number={'6'} label="pilares do estilo de vida" />
        <Stat number={bookMev.totalReferences + '+'} label="referências científicas" />
        <Stat number={'~' + bookMev.estimatedPages} label="páginas (impressas)" />
      </div>

      <ul className="space-y-3 max-w-4xl">
        {chaptersMev.map((ch, i) => {
          const isOpen = openIdx === i;
          return (
            <li
              key={ch.n}
              className={cn(
                'border rounded-xl bg-mateus-white overflow-hidden transition-colors',
                isOpen ? 'border-mateus-lilas/30' : 'border-mateus-accent/15'
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-4 p-5 text-left hover:bg-mateus-bg/40 transition-colors"
              >
                <span className="font-serif font-semibold text-mateus-lilas text-lg leading-none mt-1 w-8 flex-shrink-0">
                  {String(ch.n).padStart(2, '0')}
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="font-extrabold text-mateus-primary text-base sm:text-lg leading-tight">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-mateus-muted">{ch.subtitle}</p>
                </div>
                <span
                  aria-hidden
                  className={cn(
                    'text-mateus-muted text-xl leading-none mt-1 transition-transform',
                    isOpen && 'rotate-45'
                  )}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="pl-16 pr-5 pb-5 space-y-2">
                      {ch.takeaways.map((t, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-mateus-text/80 leading-relaxed flex gap-2"
                        >
                          <span className="text-mateus-lilas flex-shrink-0">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Stat({ number, label }: { number: number | string; label: string }) {
  return (
    <div className="space-y-1">
      <p className="font-serif font-bold text-3xl sm:text-4xl text-mateus-primary leading-none">
        {number}
      </p>
      <p className="text-xs uppercase tracking-eyebrow text-mateus-muted">{label}</p>
    </div>
  );
}
