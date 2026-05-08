'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { LeadForm } from '@/components/landing/ui/LeadForm';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { book } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

const FAQ = [
  {
    q: 'Quando recebo o livro?',
    a: 'A partir de 24 de maio de 2026, durante a janela de pré-venda. Após o lançamento, segue disponível para envio direto pela Editora Atheneu.',
  },
  {
    q: 'Qual a forma de pagamento?',
    a: 'Diretamente no site da Atheneu: cartão de crédito (até 5× sem juros), Pix ou boleto. Durante a pré-venda, R$ 219 (5× de R$ 43,80 sem juros).',
  },
  {
    q: 'Existe versão digital (e-book)?',
    a: 'A pré-venda atual é da edição impressa em capa dura. Versões digitais futuras seguem cronograma editorial da Atheneu.',
  },
  {
    q: 'O livro substitui a Plataforma AMA?',
    a: 'Não — eles são complementares. O livro descreve o método MEV 3.0 e o SVDL. A Plataforma AMA aplica esse método em produção, com IA validando limiares em tempo real e gerando laudo. O livro forma o raciocínio; a Plataforma operacionaliza.',
  },
  {
    q: 'Para quem ainda não realiza ergoespirometria, o livro vale?',
    a: 'Vale. A primeira metade trata de fundamentos fisiológicos e calorimetria indireta — aplicáveis em qualquer prática clínica. TCPE é a segunda metade, e fica como referência para quando o profissional optar por adicionar o exame.',
  },
  {
    q: 'Posso comprar para minha equipe ou clínica?',
    a: 'Sim. A Atheneu atende pedidos institucionais. Entre em contato pelo formulário ao lado para indicação direta.',
  },
];

export function S8_FaqCta() {
  return (
    <Section id="faq" alt>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* FAQ */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-primary leading-[1.1] tracking-tight">
              Esclarecimentos práticos.
            </h2>
          </div>

          <ul className="space-y-3 mt-8">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </ul>
        </div>

        {/* Lead form + CTA primário */}
        <div id="receber" className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-3">
            <p className="eyebrow">Receba a amostra oficial Atheneu</p>
            <h3 className="font-serif font-bold text-2xl text-mateus-primary leading-tight">
              Quer ler antes de comprar?
            </h3>
            <p className="text-sm text-mateus-muted leading-relaxed">
              Inscreva-se e receba a <strong className="text-mateus-primary">amostra oficial em PDF</strong> + avisos do autor sobre o lançamento, eventos científicos e materiais complementares.
            </p>
          </div>

          <LeadForm livro="avaliacao-metabolica" />

          <div className="pt-6 border-t border-mateus-accent/20 space-y-4">
            <div>
              <p className="font-extrabold text-mateus-primary text-base">
                Já decidiu? Compre direto na Atheneu.
              </p>
              <p className="text-sm text-mateus-muted mt-1">
                5× de R$ 43,80 sem juros · pré-venda até 24/05/2026
              </p>
            </div>
            <CTAButton
              href={book.ctaUrl('faq_final')}
              variant="primary"
              size="lg"
              external
              className="w-full"
            >
              Comprar na Atheneu →
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={cn(
        'border rounded-xl bg-mateus-white overflow-hidden transition-colors',
        open ? 'border-mateus-primary/30' : 'border-mateus-accent/15'
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-mateus-bg/40 transition-colors"
      >
        <h4 className="font-extrabold text-mateus-primary text-base leading-snug flex-1">
          {q}
        </h4>
        <span
          aria-hidden
          className={cn(
            'text-mateus-muted text-xl leading-none mt-0.5 flex-shrink-0 transition-transform',
            open && 'rotate-45'
          )}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-mateus-text/85 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
