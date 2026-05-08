'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { passages } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export function S4_PagePractice() {
  return (
    <Section id="metodo" alt>
      <SectionHeader
        eyebrow="Da página para a prática"
        heading="O que está no livro está rodando agora."
        subheading="Cada página descreve o método. A Plataforma AMA aplica em produção, em tempo real. Quem lê o livro entende a Plataforma. Quem usa a Plataforma volta ao livro."
      />

      <div className="mt-16 space-y-20 lg:space-y-32">
        {passages.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.div
              key={p.theme}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center',
                reverse && 'lg:[&>*:first-child]:order-2'
              )}
            >
              {/* Página tipografada do livro */}
              <div className="relative">
                <p className="eyebrow mb-3">
                  <span className="text-mateus-gold">Tema {i + 1}</span> · {p.theme}
                </p>
                <article
                  className={cn(
                    'relative bg-mateus-bg rounded-lg p-8 sm:p-10 lg:p-12',
                    'border border-mateus-accent/20',
                    'shadow-[0_24px_60px_-20px_rgba(15,26,46,0.25),0_8px_20px_-8px_rgba(15,26,46,0.15)]',
                    'before:absolute before:inset-y-6 before:left-0 before:w-[2px]',
                    'before:bg-gradient-to-b before:from-mateus-gold/0 before:via-mateus-gold/40 before:to-mateus-gold/0'
                  )}
                >
                  <p className="font-serif text-lg sm:text-xl leading-relaxed text-mateus-text/95 italic">
                    “{p.text}”
                  </p>
                  <footer className="mt-6 pt-4 border-t border-mateus-accent/15 flex items-center justify-between text-xs uppercase tracking-eyebrow text-mateus-muted">
                    <span>Capítulo {p.chapter}</span>
                    <span>p. {p.page}</span>
                  </footer>
                </article>
              </div>

              {/* Plataforma AMA aplicando */}
              <div className="relative">
                <p className="eyebrow mb-3">Em produção</p>
                <div
                  className={cn(
                    'relative rounded-lg overflow-hidden bg-mateus-primary-deep',
                    'border border-mateus-primary/20',
                    'shadow-[0_24px_60px_-20px_rgba(15,26,46,0.5)]'
                  )}
                >
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-mateus-primary-deep border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="ml-3 text-[10px] uppercase tracking-eyebrow text-mateus-bg/40">
                      app.amaplataforma.com.br
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] w-full bg-black">
                    <Image
                      src={p.amaScreenshot}
                      alt={p.amaCaption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <p className="mt-3 text-sm text-mateus-muted leading-relaxed">
                  {p.amaCaption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://amaplataforma.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-mateus-primary hover:text-mateus-gold transition-colors underline-offset-4 underline"
        >
          Ver o método em produção · amaplataforma.com.br →
        </a>
      </div>
    </Section>
  );
}
