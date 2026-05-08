'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { book } from '@/lib/design-tokens';

export function S1_Hero() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(176, 133, 56, 0.12), transparent 60%)',
        }}
      />

      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="eyebrow">
              <span className="text-mateus-gold">Pré-venda</span> · Editora Atheneu · 2026
            </p>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              {book.title}.
            </h1>

            <p className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
              {book.promise}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-eyebrow text-mateus-muted">
                  Capa dura · Editora Atheneu · 2026
                </p>
                <p className="font-extrabold text-mateus-primary text-2xl sm:text-3xl leading-none">
                  5× de <span className="text-mateus-gold">R$ 43,80</span>
                  <span className="text-base font-normal text-mateus-muted ml-2">sem juros</span>
                </p>
                <p className="text-sm text-mateus-muted">
                  R$ 219 à vista · pré-venda até 24/05
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CTAButton href={book.ctaUrl('hero')} variant="primary" size="lg" external>
                Comprar na Atheneu →
              </CTAButton>
              <CTAButton href="#receber" variant="secondary" size="lg">
                Receber amostra + novidades
              </CTAButton>
            </div>

            <p className="text-xs text-mateus-muted/80 pt-2">
              Compra direta no site da Editora Atheneu · Envio a partir de 24/05/2026.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
            style={{ perspective: '1400px' }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-12 -z-10 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(176, 133, 56, 0.4), transparent 70%)',
                }}
              />
              <div className="relative aspect-[2/3] w-[280px] sm:w-[340px] lg:w-[380px]">
                <Image
                  src="/livros/avaliacao/capa-livro.png"
                  alt="Capa do livro Avaliação Metabólica Avançada na Saúde e no Desempenho"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                  className="object-contain drop-shadow-[0_24px_48px_rgba(15,26,46,0.4)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
