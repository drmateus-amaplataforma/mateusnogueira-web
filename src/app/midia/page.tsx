import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { Reveal } from '@/components/landing/ui/Reveal';
import { DotGrid } from '@/components/landing/ui/DotGrid';
import { AnimatedFilete } from '@/components/landing/ui/AnimatedFilete';
import { LeadForm } from '@/components/landing/ui/LeadForm';

export const metadata: Metadata = {
  title: 'Mídia e Imprensa',
  description:
    'Artigos publicados, entrevistas, podcasts e palestras públicas de Dr. Mateus Antunes Nogueira. Solicite materiais para imprensa.',
  alternates: { canonical: '/midia' },
  openGraph: {
    title: 'Mídia e Imprensa · Dr. Mateus Antunes Nogueira',
    description:
      'Artigos publicados, entrevistas, podcasts e palestras públicas. Solicite materiais para imprensa.',
    url: '/midia',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mídia e Imprensa · Dr. Mateus Antunes Nogueira',
    description:
      'Artigos, entrevistas, podcasts e palestras públicas. Solicite materiais para imprensa.',
  },
};

export default function MidiaPage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <AparicoesSection />
        <PressKitSection />
        <ImprensaSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero (~40vh)
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
            Mídia e imprensa
          </Reveal>

          <Reveal as="h1" delay={0.08}>
            <span className="block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              Mídia
            </span>
          </Reveal>

          <Reveal delay={0.14}>
            <AnimatedFilete width={96} className="my-4" />
          </Reveal>

          <Reveal as="p" delay={0.2} className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
            Artigos, entrevistas, podcasts e palestras públicas. Curadoria
            das aparições mais relevantes do Dr. Mateus na imprensa
            especializada e geral.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Grid 3 colunas — cards de aparições
// =====================================================================
// 6 placeholders publicados como TODO. Doutor: enviar lista real de
// 6-12 aparições com URLs, datas e thumbs (fotos opcionais — placeholder
// mantém o gradient cinza-gold).

type AparicaoTipo = 'Artigo' | 'Entrevista' | 'Podcast' | 'Palestra';

type Aparicao = {
  tipo: AparicaoTipo;
  veiculo: string;
  data: string;
  titulo: string;
  resumo: string;
  href: string | null;
};

// APARICOES: lista é preenchida quando aparições reais (artigos,
// entrevistas, podcasts, palestras com URLs públicas) forem confirmadas.
// Tipos disponíveis: Artigo, Entrevista, Podcast, Palestra.
// Enquanto vazia, AparicoesSection renderiza estado "Em curadoria" elegante.
const APARICOES: readonly Aparicao[] = [];

const TIPO_BADGE: Record<AparicaoTipo, string> = {
  Artigo:
    'text-mateus-gold border border-mateus-gold/30 bg-mateus-gold/5',
  Entrevista:
    'text-mateus-primary border border-mateus-primary/25 bg-mateus-primary/5',
  Podcast:
    'text-mateus-accent border border-mateus-accent/30 bg-mateus-accent/5',
  Palestra:
    'text-mateus-primary border border-mateus-accent/30 bg-mateus-bg-alt',
};

function AparicoesSection() {
  if (APARICOES.length === 0) {
    return (
      <Section id="aparicoes" alt>
        <SectionHeader
          eyebrow="Aparições"
          heading="Onde Dr. Mateus aparece."
          subheading="Curadoria de artigos, entrevistas, podcasts e palestras públicas. Lista atualizada conforme novas publicações são confirmadas."
          align="center"
        />
        <Reveal delay={0.1} className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-dashed border-mateus-accent/25 bg-mateus-bg-alt/40 p-8 sm:p-10 text-center space-y-4">
            <p className="eyebrow text-mateus-gold">Em curadoria</p>
            <p className="text-base text-mateus-text/85 leading-relaxed">
              Aparições recentes em revistas médicas, podcasts, congressos e
              imprensa generalista estão sendo organizadas e serão publicadas
              em breve com links diretos.
            </p>
            <p className="text-sm text-mateus-muted leading-relaxed">
              Para solicitar entrevista, pauta ou comentário sobre avaliação
              metabólica avançada, medicina do exercício ou medicina do estilo
              de vida, escreva para{' '}
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

  return (
    <Section id="aparicoes" alt>
      <SectionHeader
        eyebrow="Aparições"
        heading="Onde Dr. Mateus aparece."
        subheading="Curadoria de artigos, entrevistas, podcasts e palestras públicas. Lista atualizada conforme novas publicações são confirmadas."
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {APARICOES.map((a, i) => {
          const isPlaceholder = a.href === null;
          const articleEl = (
            <article
              className={`h-full rounded-2xl bg-mateus-white border border-mateus-accent/15 overflow-hidden transition-all duration-300 ${
                isPlaceholder
                  ? 'opacity-90'
                  : 'group-hover:border-mateus-gold/40 group-hover:shadow-card-hover group-hover:-translate-y-1'
              }`}
            >
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-mateus-bg-alt"
                aria-hidden
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(31, 42, 68, 0.06) 0%, rgba(176, 133, 56, 0.10) 100%)',
                  }}
                />
                <div className="absolute inset-0 dot-grid-mateus opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-mateus-accent/30 italic select-none">
                    {a.tipo}
                  </span>
                </div>
                {/* TODO Doutor: substituir placeholder por thumb real
                    (capa do podcast, frame do vídeo, screenshot do
                    artigo, foto do palco) quando lista for enviada. */}
              </div>

              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span
                    className={`text-[10px] uppercase tracking-eyebrow font-semibold px-2.5 py-1 rounded-full ${TIPO_BADGE[a.tipo]}`}
                  >
                    {a.tipo}
                  </span>
                  <span className="text-xs text-mateus-muted/80">
                    {a.veiculo} · {a.data}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-mateus-primary leading-tight mb-2">
                  {a.titulo}
                </h3>
                <p className="text-sm text-mateus-text/80 leading-relaxed">
                  {a.resumo}
                </p>
                {isPlaceholder ? (
                  <p className="text-[10px] uppercase tracking-eyebrow text-mateus-accent/60 italic mt-4">
                    TODO Doutor: enviar URL
                  </p>
                ) : (
                  <p className="text-xs font-semibold text-mateus-gold mt-4 group-hover:underline inline-flex items-center gap-1">
                    Acessar <span aria-hidden>↗</span>
                  </p>
                )}
              </div>
            </article>
          );

          return (
            <Reveal key={i} delay={i * 0.06} className="h-full">
              {isPlaceholder ? (
                <div className="block h-full">{articleEl}</div>
              ) : (
                <a
                  href={a.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {articleEl}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>

    </Section>
  );
}

// =====================================================================
// 3. Press Kit estático — apresentação simples
// =====================================================================

function PressKitSection() {
  return (
    <Section id="press-kit">
      <Reveal as="header" className="text-center max-w-narrow mx-auto mb-10">
        <p className="eyebrow text-mateus-gold mb-3">Press kit</p>
        <h2 className="text-3xl sm:text-4xl text-mateus-primary">
          Materiais para imprensa
        </h2>
        <AnimatedFilete align="center" width={64} className="mt-4" />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {[
          {
            label: 'Bio oficial',
            desc: 'Versões curta, média e longa em PT-BR. Inclui credenciais, especialidades e ecossistema.',
          },
          {
            label: 'Fotos em alta',
            desc: 'Headshots em estúdio + fotos institucionais e de palco em alta resolução, prontas para impressão.',
          },
          {
            label: 'CV resumido',
            desc: 'Trajetória clínica, formação USP, livros pela Atheneu e fundações (AMA · VAE · Oxy Recovery).',
          },
        ].map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <div className="rounded-xl border border-mateus-accent/15 bg-mateus-white p-6 h-full transition-colors hover:border-mateus-gold/30 hover:shadow-card-soft">
              <p className="text-[10px] uppercase tracking-eyebrow text-mateus-gold font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-sm text-mateus-text/85 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-8 text-center">
        <p className="text-sm text-mateus-muted leading-relaxed max-w-2xl mx-auto">
          Bio + fotos em alta + CV podem ser solicitados pelo formulário
          abaixo. Envio em até 48h úteis com release oficial.
        </p>
      </Reveal>
    </Section>
  );
}

// =====================================================================
// 4. Form imprensa — LeadForm origem="midia"
// =====================================================================

function ImprensaSection() {
  return (
    <Section id="imprensa" alt>
      <div className="max-w-2xl mx-auto">
        <Reveal as="header" className="text-center mb-10 space-y-3">
          <p className="eyebrow text-mateus-gold">Solicitar materiais</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-mateus-primary leading-tight">
            Imprensa, podcasts e veículos
          </h2>
          <AnimatedFilete align="center" width={64} className="mt-3" />
          <p className="text-base text-mateus-muted leading-relaxed max-w-xl mx-auto pt-2">
            Identifique seu veículo no campo de mensagem (deixe ao lado do
            nome). Retorno em <strong className="text-mateus-primary">48h
            úteis</strong> com release oficial, fotos em alta e contato
            direto da assessoria.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <LeadForm origem="midia" />
        </Reveal>
      </div>
    </Section>
  );
}

// =====================================================================
// 5. CTA final — bg navy
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
          <p className="eyebrow text-mateus-gold">Para a sua pauta</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-white leading-tight">
            Pauta científica em medicina do estilo de vida?
          </h2>
          <div className="flex justify-center">
            <AnimatedFilete width={80} align="center" />
          </div>
          <p className="text-lg text-mateus-white/80 leading-relaxed max-w-2xl mx-auto">
            Avaliação metabólica avançada, MEV 3.0, cirurgia de precisão e
            longevidade. Conteúdo técnico denso traduzido em linguagem
            adequada ao seu público.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <CTAButton href="/contato" variant="gold" size="lg">
              Falar com a assessoria →
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
