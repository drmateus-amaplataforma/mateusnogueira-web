'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/landing/ui/Section';
import { LeadForm } from '@/components/landing/ui/LeadForm';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { bookMev } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

const FAQ = [
  {
    q: 'Quando recebo o livro?',
    a: 'A partir de 24 de maio de 2026, durante a janela de pré-venda. Após o lançamento, segue disponível para envio direto pela Editora Atheneu.',
  },
  {
    q: 'Qual a forma de pagamento?',
    a: 'Diretamente no site da Atheneu: cartão de crédito (até 3× sem juros), Pix ou boleto. Durante a pré-venda, R$ 139 (3× de R$ 46,33 sem juros).',
  },
  {
    q: 'Existe versão digital (e-book)?',
    a: 'A pré-venda atual é da edição impressa. Versões digitais futuras seguem cronograma editorial da Atheneu.',
  },
  {
    q: 'Preciso ser profissional de saúde para ler?',
    a: 'Não. O livro foi escrito com rigor científico mas em linguagem acessível. Profissionais (médicos, nutrólogos, geriatras, educadores físicos) encontrarão protocolos aplicáveis. Pacientes e adultos interessados em longevidade encontrarão o método para reorganizar o próprio estilo de vida — sem culpa e sem promessas mágicas.',
  },
  {
    q: 'Esse livro substitui o "Avaliação Metabólica Avançada"?',
    a: 'Não — eles são complementares. "Avaliação Metabólica Avançada" detalha as ferramentas técnicas (TCPE, calorimetria indireta, SVDL). "Nova Medicina do Estilo de Vida" detalha a filosofia, os 6 pilares e a aplicação clínica do método MEV 3.0. Recomendado lê-los na ordem em que foram escritos: este primeiro, o técnico depois.',
  },
  {
    q: 'O método é o mesmo aplicado na Plataforma AMA?',
    a: 'Sim. A Plataforma AMA (amaplataforma.com.br) é a operacionalização clínica do método descrito neste livro. Quem lê o livro entende a Plataforma; quem usa a Plataforma volta ao livro para aprofundar a fundamentação.',
  },
];

export function MevS8_FaqCta() {
  return (
    <Section id="faq" alt>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
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

        <div id="receber" className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-3">
            <p className="eyebrow">Acompanhe o lançamento</p>
            <h3 className="font-serif font-bold text-2xl text-mateus-primary leading-tight">
              Quer receber novidades?
            </h3>
            <p className="text-sm text-mateus-muted leading-relaxed">
              Inscreva-se e receba <strong className="text-mateus-primary">avisos do autor</strong> sobre o lançamento, eventos científicos e materiais complementares.
            </p>
          </div>

          <LeadForm livro="nova-medicina" />

          <div className="pt-6 border-t border-mateus-accent/20 space-y-4">
            <div>
              <p className="font-extrabold text-mateus-primary text-base">
                Já decidiu? Compre direto na Atheneu.
              </p>
              <p className="text-sm text-mateus-muted mt-1">
                3× de R$ 46,33 sem juros · pré-venda até 24/05/2026
              </p>
            </div>
            <CTAButton
              href={bookMev.ctaUrl('faq_final')}
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
        open ? 'border-mateus-lilas/30' : 'border-mateus-accent/15'
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
