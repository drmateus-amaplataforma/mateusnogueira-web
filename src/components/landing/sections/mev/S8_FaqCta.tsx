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
    q: 'Eu não sou da área da saúde — vou conseguir entender?',
    a: 'Sim. O livro foi escrito em linguagem acessível, com profundidade científica. Não tem fórmulas químicas indecifráveis nem jargão hospitalar. Tem ciência de verdade traduzida — com casos clínicos reais, gráficos claros e o método na ordem certa para você aplicar.',
  },
  {
    q: 'É só mais um livro de "vida saudável"?',
    a: 'Não. A maioria dos livros do gênero é achismo travestido de ciência ou ciência rasa travestida de motivação. Este é um cirurgião e doutor pela USP fazendo o oposto: ciência rigorosa em linguagem clara, sem promessas mágicas e sem culpabilizar o leitor.',
  },
  {
    q: 'Quando recebo o livro?',
    a: 'A partir de 24 de maio de 2026. A Editora Atheneu envia direto do estoque conforme o cronograma de pré-venda. Após o lançamento, segue disponível para envio direto.',
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
    q: 'Tenho médico de confiança. Vou trocar de médico depois de ler?',
    a: 'Não — esse não é o objetivo. O livro te dá o vocabulário e o conhecimento para conversar com seu médico de igual para igual. Você vai fazer perguntas melhores, entender melhor as recomendações e tomar decisões mais informadas — junto com seu médico, não contra.',
  },
  {
    q: 'Posso comprar para presentear?',
    a: 'Sim, e é uma das melhores razões para comprar. Pais, filhos, amigos que estão num momento de virada — o livro tem a clareza necessária para ser presente útil. Linguagem acolhedora, evidência sólida, zero culpa.',
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
              Inscreva-se e receba <strong className="text-mateus-primary">avisos do autor</strong> sobre o lançamento, eventos e materiais complementares.
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
