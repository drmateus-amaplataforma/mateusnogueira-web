import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { Reveal } from '@/components/landing/ui/Reveal';
import { DotGrid } from '@/components/landing/ui/DotGrid';
import { AnimatedFilete } from '@/components/landing/ui/AnimatedFilete';
import { book, bookMev } from '@/lib/design-tokens';

export const metadata: Metadata = {
  title: 'Livros',
  description:
    'Avaliação Metabólica Avançada (Atheneu, 2026) e Nova Medicina MEV 3.0 (Atheneu, 2026): publicações para profissionais de saúde e público geral.',
  alternates: { canonical: '/livros' },
  openGraph: {
    title: 'Livros · Dr. Mateus Antunes Nogueira',
    description:
      'Dois títulos pela Editora Atheneu (2026) — tratado técnico e divulgação para o público leigo.',
    url: '/livros',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livros · Dr. Mateus Antunes Nogueira',
    description:
      'Dois títulos pela Editora Atheneu (2026) — tratado técnico e divulgação para o público leigo.',
  },
};

export default function LivrosPage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <CardsSection />
        <FuturasSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero (~40vh) — eyebrow + H1 + filete + subhead curta
// =====================================================================

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg pt-12 pb-16 lg:pt-20 lg:pb-20 min-h-[40vh] flex items-center">
      <DotGrid className="opacity-25" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 75% 30%, rgba(176, 133, 56, 0.14), transparent 60%), radial-gradient(circle at 15% 85%, rgba(31, 42, 68, 0.08), transparent 65%)',
        }}
      />

      <div className="container-content relative">
        <div className="max-w-3xl space-y-5">
          <Reveal as="p" className="eyebrow text-mateus-gold">
            Publicações
          </Reveal>

          <Reveal as="h1" delay={0.08}>
            <span className="block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              Livros
            </span>
          </Reveal>

          <Reveal delay={0.14}>
            <AnimatedFilete width={96} className="my-4" />
          </Reveal>

          <Reveal as="p" delay={0.2} className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
            Dois títulos pela Editora Atheneu em 2026 — um tratado técnico
            para profissionais de saúde e uma tradução acolhedora do método
            para o público leigo qualificado.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Grid 2 cards comparativos — LP1 + LP2
// =====================================================================
// Dados canônicos vêm de design-tokens.ts (book / bookMev). Capas em
// /public/livros/<slug>/capa-livro.png. Hover-lift + shadow-card-hover
// + border-gold/40, idêntico padrão Home/Sobre.

type BookCardData = {
  cover: string;
  coverAlt: string;
  tag: string;
  title: string;
  subtitle: string;
  positioning: string;
  stats: { value: string; label: string }[];
  cta: { href: string; label: string };
  badgeColor: 'gold' | 'lilas';
};

const BOOK_CARDS: readonly BookCardData[] = [
  {
    cover: '/livros/avaliacao/capa-livro.png',
    coverAlt: `Capa do livro "${book.title}" — Editora Atheneu, ${book.publicationYear}`,
    tag: 'Para profissionais de saúde',
    title: book.title,
    subtitle: book.subtitle,
    positioning:
      'O tratado técnico do método: Calorimetria Indireta + Teste Cardiopulmonar como ferramentas terapêuticas, não apenas diagnósticas.',
    stats: [
      { value: `${book.estimatedPages}pp`, label: 'páginas' },
      { value: `R$ ${book.priceFull}`, label: 'pré-venda' },
      { value: 'Hardcover', label: 'capa dura' },
    ],
    cta: { href: '/livros/avaliacao-metabolica', label: 'Ver detalhes' },
    badgeColor: 'gold',
  },
  {
    cover: '/livros/nova-medicina/capa-livro.png',
    coverAlt: `Capa do livro "${bookMev.title}" — Editora Atheneu, ${bookMev.publicationYear}`,
    tag: 'Para o público leigo',
    title: bookMev.title,
    subtitle: bookMev.subtitle,
    positioning:
      'A tradução acolhedora do método: 6 pilares da MEV 3.0 (movimento, alimentação, sono, estresse, conexões, sem tóxicos) em linguagem clara e sem culpa.',
    stats: [
      { value: `${bookMev.estimatedPages}pp`, label: 'páginas' },
      { value: `R$ ${bookMev.priceFull}`, label: 'pré-venda' },
      { value: 'Paperback', label: 'capa flexível' },
    ],
    cta: { href: '/livros/nova-medicina', label: 'Ver detalhes' },
    badgeColor: 'lilas',
  },
];

function CardsSection() {
  return (
    <Section id="cards" alt>
      <SectionHeader
        eyebrow="Atheneu · 2026"
        heading="Dois livros, dois públicos, um único método."
        subheading="Mesmo conteúdo científico em duas vozes — densa para a clínica, acessível para a vida cotidiana."
        align="center"
      />

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {BOOK_CARDS.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.12} className="h-full">
            <Link
              href={b.cta.href}
              className="group block h-full rounded-2xl bg-mateus-white border border-mateus-accent/15 p-6 sm:p-8 transition-all duration-300 hover:border-mateus-gold/40 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div
                  className="relative aspect-[3/4] w-full mb-6 rounded-lg overflow-hidden bg-mateus-bg-alt ring-1 ring-mateus-accent/10 shadow-card-soft"
                >
                  <Image
                    src={b.cover}
                    alt={b.coverAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <span
                  className={`self-start text-[10px] uppercase tracking-eyebrow font-semibold mb-4 px-3 py-1.5 rounded-full ${
                    b.badgeColor === 'gold'
                      ? 'text-mateus-gold border border-mateus-gold/30 bg-mateus-gold/5'
                      : 'text-mateus-primary border border-mateus-accent/30 bg-mateus-bg-alt'
                  }`}
                >
                  {b.tag}
                </span>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-mateus-primary leading-tight mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-mateus-muted italic leading-relaxed mb-4">
                  {b.subtitle}
                </p>

                <p className="text-sm text-mateus-text/85 leading-relaxed mb-6 flex-1">
                  {b.positioning}
                </p>

                <dl className="grid grid-cols-3 gap-2 mb-6 pt-5 border-t border-mateus-accent/15">
                  {b.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <dt className="font-serif font-bold text-lg text-mateus-primary leading-none mb-1">
                        {stat.value}
                      </dt>
                      <dd className="text-[10px] uppercase tracking-eyebrow text-mateus-muted">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="text-sm font-semibold text-mateus-primary group-hover:text-mateus-gold transition-colors inline-flex items-center gap-1.5 self-start">
                  {b.cta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 3. Futuras publicações — em curadoria
// =====================================================================
// Lista de próximos títulos (capítulos em obras coletivas, novas edições,
// adaptações para nichos específicos) será preenchida quando confirmada
// pela Editora Atheneu. Comentário inline TODO Doutor mantido para
// referência futura.

function FuturasSection() {
  return (
    <Section id="futuras">
      <Reveal as="header" className="text-center max-w-narrow mx-auto mb-12">
        <p className="eyebrow text-mateus-gold mb-3">Próximos lançamentos</p>
        <h2 className="text-3xl sm:text-4xl text-mateus-primary">
          Em curadoria.
        </h2>
        <AnimatedFilete align="center" width={64} className="mt-4" />
      </Reveal>

      <Reveal delay={0.1} className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-dashed border-mateus-accent/25 bg-mateus-bg-alt/40 p-8 sm:p-10 text-center space-y-3">
          <p className="text-base text-mateus-text/80 leading-relaxed">
            Novos lançamentos pela{' '}
            <strong className="text-mateus-primary">Editora Atheneu</strong>,
            capítulos em obras coletivas e adaptações do método para nichos
            específicos seguem em curadoria.
          </p>
          <p className="text-sm text-mateus-muted leading-relaxed">
            Para mais informações sobre próximos títulos, escreva para{' '}
            <a
              href="mailto:dr.mateus@amaplataforma.com.br"
              className="text-mateus-primary font-semibold hover:text-mateus-gold transition-colors underline-offset-4 hover:underline"
            >
              dr.mateus@amaplataforma.com.br
            </a>
            .
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

// =====================================================================
// 4. CTA final — bg navy + DotGrid + radial gold
// =====================================================================

function CtaFinalSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-primary py-20 lg:py-28">
      <DotGrid className="opacity-15" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(176, 133, 56, 0.18), transparent 60%), radial-gradient(circle at 15% 85%, rgba(176, 133, 56, 0.10), transparent 65%)',
        }}
      />
      <div className="container-content relative">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <p className="eyebrow text-mateus-gold">Para a sua turma</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-white leading-tight">
            Quer indicar para a turma?
          </h2>
          <div className="flex justify-center">
            <AnimatedFilete width={80} align="center" />
          </div>
          <p className="text-lg text-mateus-white/80 leading-relaxed max-w-2xl mx-auto">
            Compras institucionais para hospitais, clínicas, universidades e
            associações: tratamos diretamente com a editora ou com o
            escritório do autor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <CTAButton href="/contato" variant="gold" size="lg">
              Falar com a editora →
            </CTAButton>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold py-4 px-8 bg-transparent text-mateus-white border border-mateus-white/30 hover:border-mateus-white/70 hover:bg-mateus-white/[0.04] transition-all duration-200"
            >
              Conheça o autor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
