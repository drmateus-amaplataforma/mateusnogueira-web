'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { book } from '@/lib/design-tokens';

const FIGURES = [
  { src: '/livros/avaliacao/figuras/cap2-fisiologia.png', label: 'Cap. 2 · Fisiologia integrada', alt: 'Diagrama de fisiologia metabólica integrada' },
  { src: '/livros/avaliacao/figuras/cap4-calorimetria.png', label: 'Cap. 4 · Calorimetria Indireta', alt: 'Curvas de calorimetria indireta com TMR e QR' },
  { src: '/livros/avaliacao/figuras/cap5-ergoespirometria.png', label: 'Cap. 5 · Ergoespirometria', alt: 'Curvas ventilatórias com limiares LV1 e LV2' },
  { src: '/livros/avaliacao/figuras/cap6-genomica.png', label: 'Cap. 6 · Genômica', alt: 'Visualização de dados de genômica e metabolômica' },
  { src: '/livros/avaliacao/figuras/cap8-treino.png', label: 'Cap. 8 · Treino', alt: 'Adaptação metabólica ao treino periodizado' },
];

export function S5_InsideBook() {
  return (
    <Section>
      <SectionHeader
        eyebrow="O livro por dentro"
        heading="Veja antes de comprar."
        subheading="Edição revisada por pares · referências atualizadas até 2026 · capa dura · Editora Atheneu. A amostra abaixo é oficial da Atheneu."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* PDF embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-2xl overflow-hidden border border-mateus-accent/20 bg-mateus-bg-alt shadow-card-soft">
            <div className="flex items-center justify-between px-4 py-3 bg-mateus-primary text-mateus-bg/80">
              <p className="text-xs uppercase tracking-eyebrow">
                Amostra oficial · Editora Atheneu
              </p>
              <a
                href="/livros/avaliacao/amostra-livro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:text-mateus-gold"
              >
                Abrir em nova aba ↗
              </a>
            </div>
            <object
              data="/livros/avaliacao/amostra-livro.pdf#toolbar=0&navpanes=0&view=FitH"
              type="application/pdf"
              className="w-full h-[600px] sm:h-[720px]"
              aria-label="Amostra oficial do livro fornecida pela Editora Atheneu"
            >
              <div className="p-12 text-center space-y-4">
                <p className="text-mateus-muted">
                  Seu navegador não exibe PDFs embutidos.
                </p>
                <a
                  href="/livros/avaliacao/amostra-livro.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-mateus-primary underline"
                >
                  Baixar amostra em PDF →
                </a>
              </div>
            </object>
          </div>
        </motion.div>

        {/* Stats + figuras */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <Stat label="Editora" value="Atheneu" sub="desde 1929" />
            <Stat label="Capa" value="Dura" sub="impressão 2026" />
            <Stat label="Páginas" value={'~' + book.estimatedPages} sub="capa dura" />
            <Stat label="Figuras" value={book.totalFigures + '+'} sub="científicas" />
          </div>

          <div className="space-y-3">
            <p className="eyebrow">Algumas figuras do livro</p>
            <div className="grid grid-cols-3 gap-2">
              {FIGURES.slice(0, 6).map((f) => (
                <FigureThumb key={f.src} src={f.src} alt={f.alt} label={f.label} />
              ))}
            </div>
          </div>

          <CTAButton href={book.ctaUrl('inside_book')} variant="primary" external>
            Comprar na Atheneu →
          </CTAButton>
        </motion.div>
      </div>
    </Section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted mb-1">{label}</p>
      <p className="font-serif font-bold text-2xl text-mateus-primary leading-none">{value}</p>
      {sub && <p className="text-xs text-mateus-muted mt-1">{sub}</p>}
    </div>
  );
}

function FigureThumb({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="group">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-mateus-white border border-mateus-accent/15 hover:border-mateus-gold/40 transition-colors">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain p-2"
        />
      </div>
      <p className="mt-1.5 text-[10px] text-mateus-muted leading-tight">{label}</p>
    </div>
  );
}
