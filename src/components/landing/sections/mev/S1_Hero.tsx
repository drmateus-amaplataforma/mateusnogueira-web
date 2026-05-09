'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { bookMev } from '@/lib/design-tokens';

export function MevS1_Hero() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(107, 91, 149, 0.14), transparent 60%)',
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
              <span className="text-mateus-lilas">Pré-venda</span> · Editora Atheneu · 2026
            </p>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              {bookMev.title}
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-mateus-primary/85 leading-snug italic">
              {bookMev.subtitle}
            </p>

            <p className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
              {bookMev.promise}
            </p>

            <p className="font-serif italic text-mateus-primary/80 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-mateus-lilas/40 pl-5">
              "Permita-me ser seu guia nesta jornada."
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-eyebrow text-mateus-muted">
                  Editora Atheneu · 2026
                </p>
                <p className="font-extrabold text-mateus-primary text-2xl sm:text-3xl leading-none">
                  3× de <span className="text-mateus-lilas">R$ 46,33</span>
                  <span className="text-base font-normal text-mateus-muted ml-2">sem juros</span>
                </p>
                <p className="text-sm text-mateus-muted">
                  R$ 139 à vista · pré-venda até 24/05
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CTAButton href={bookMev.ctaUrl('hero')} variant="primary" size="lg" external>
                Comprar na Atheneu →
              </CTAButton>
              <CTAButton href="#receber" variant="secondary" size="lg">
                Receber novidades
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
                    'radial-gradient(circle at 50% 50%, rgba(107, 91, 149, 0.4), transparent 70%)',
                }}
              />
              <div className="relative aspect-[2/3] w-[280px] sm:w-[340px] lg:w-[380px]">
                <Image
                  src="/livros/nova-medicina/capa-livro.png"
                  alt="Capa do livro Nova Medicina do Estilo de Vida"
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
