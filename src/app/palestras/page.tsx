import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { GlowCard } from '@/components/landing/ui/GlowCard';

export const metadata: Metadata = {
  title: 'Palestras',
  description:
    'Solicitação de palestras com Dr. Mateus Antunes Nogueira: avaliação metabólica avançada, medicina do exercício e estilo de vida. Keynotes, workshops e mentorias para empresas, eventos médicos e mídia.',
  alternates: { canonical: '/palestras' },
  openGraph: {
    title: 'Palestras com Dr. Mateus Antunes Nogueira',
    description:
      'Keynotes, workshops e mentorias sobre avaliação metabólica avançada, medicina do exercício e medicina do estilo de vida.',
    url: '/palestras',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palestras com Dr. Mateus Antunes Nogueira',
    description:
      'Keynotes, workshops e mentorias sobre avaliação metabólica avançada, medicina do exercício e medicina do estilo de vida.',
  },
};

export default function PalestrasPage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <PropostaSection />
        <FormatosSection />
        <TopicosSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero
// =====================================================================
// TODO Doutor: revisar copy da headline e da subhead. Foto atual:
// C1_executivo_05_terno_fisiologia_sorriso.jpg (curadoria oficial).
// Substituir por outra de 06_Photography/curadoria se preferir.

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg pt-12 pb-20 lg:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 80% 25%, rgba(176, 133, 56, 0.14), transparent 60%), radial-gradient(circle at 10% 90%, rgba(31, 42, 68, 0.10), transparent 65%)',
        }}
      />

      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            <p className="eyebrow">
              <span className="text-mateus-gold">Palco · Empresas · Mídia</span>
            </p>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              Avaliação metabólica avançada e medicina do estilo de vida em palco.
            </h1>

            <p className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
              Keynotes, workshops e mentorias para empresas, congressos médicos e
              veículos de imprensa. Conteúdo científico denso traduzido em
              recomendações concretas — como na clínica, como no livro.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <CTAButton href="#booking" variant="primary" size="lg">
                Solicitar palestra →
              </CTAButton>
              <CTAButton href="#topicos" variant="secondary" size="lg">
                Ver temas e formatos
              </CTAButton>
            </div>

            <p className="text-xs text-mateus-muted/80 pt-2">
              Retorno em 48h úteis · disponível para Brasil e exterior.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(176, 133, 56, 0.35), transparent 70%)',
                }}
              />
              <div className="relative aspect-[3/4] w-[280px] sm:w-[340px] lg:w-[400px] rounded-2xl overflow-hidden shadow-card-soft ring-1 ring-mateus-accent/15">
                <Image
                  src="/palestrante/dr-mateus-hero.jpg"
                  alt="Dr. Mateus Antunes Nogueira — palestrante"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Proposta de valor — 3 cards por segmento
// =====================================================================
// TODO Doutor: revisar 3 segmentos. Pode haver 4º (ex.: instituições de
// ensino, sociedades médicas) — adicionar card adicional se necessário.

const PROPOSTA = [
  {
    eyebrow: 'Para empresas',
    heading: 'Saúde corporativa e performance executiva',
    body: 'Programas para C-levels, gestores e times de alta exigência. Foco em longevidade funcional, recuperação cognitiva, desempenho sob pressão e prevenção de doenças metabólicas — com linguagem direta e ROI claro de bem-estar corporativo.',
  },
  {
    eyebrow: 'Para eventos médicos',
    heading: 'Congressos, simpósios e residências',
    body: 'Sessões científicas sobre Calorimetria Indireta, Teste Cardiopulmonar (TCPE), Sistema de Validação Dialógica de Limiares (SVDL) e Medicina do Estilo de Vida 3.0. Densidade técnica compatível com plateia médica especializada.',
  },
  {
    eyebrow: 'Para mídia',
    heading: 'Entrevistas, podcasts e painéis',
    body: 'Aparições em programas de saúde, podcasts e mesas-redondas para público leigo qualificado. Tradução de evidência científica em recomendações concretas — sem hype, sem promessa milagrosa, sem termo técnico solto.',
    href: '/midia',
  },
] as const;

function PropostaSection() {
  return (
    <Section id="proposta" alt>
      <SectionHeader
        eyebrow="Para quem"
        heading="Três contextos onde Dr. Mateus entrega valor."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROPOSTA.map((card, i) => (
          <GlowCard key={card.heading} delay={i * 0.1} className="group h-full">
            <div className="space-y-3">
              <p className="eyebrow text-mateus-gold">{card.eyebrow}</p>
              <h3 className="font-serif font-bold text-xl text-mateus-primary leading-tight">
                {card.heading}
              </h3>
              <p className="text-sm text-mateus-text/85 leading-relaxed">
                {card.body}
              </p>
              {card.href && (
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-mateus-primary hover:text-mateus-primary-deep transition-colors pt-2"
                >
                  Materiais de imprensa <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 3. Formatos
// =====================================================================
// TODO Doutor: confirmar formatos abaixo. Valores ficam "sob consulta"
// até decisão pública sobre fee — substituir 'precoLabel' quando definir.

const FORMATOS = [
  {
    label: 'Keynote',
    duration: '60 min',
    audience: 'Plateias de 50 a 1.500 pessoas',
    body: 'Palestra de abertura ou encerramento com narrativa científica e visual marcante. Ideal para congressos, convenções de empresa, summits e galas. Inclui Q&A de 15 min e foto institucional após o palco.',
    precoLabel: 'Sob consulta',
  },
  {
    label: 'Workshop',
    duration: '4 horas',
    audience: 'Grupos de até 80 participantes',
    body: 'Imersão prática com casos clínicos reais, leitura de laudos e exercícios em grupo. Ideal para times médicos, pós-graduações e equipes corporativas que precisam aplicar o método imediatamente.',
    precoLabel: 'Sob consulta',
  },
  {
    label: 'Mentoria executiva',
    duration: '1-a-1, sessões mensais',
    audience: 'C-levels e líderes individuais',
    body: 'Acompanhamento personalizado para executivos que querem aplicar Medicina do Estilo de Vida 3.0 na própria rotina e na cultura da organização. Avaliação metabólica completa + plano em ciclos de 3 meses.',
    precoLabel: 'Sob consulta',
  },
] as const;

function FormatosSection() {
  return (
    <Section id="formatos">
      <SectionHeader
        eyebrow="Formatos disponíveis"
        heading="Do palco à sala de board, três modos de entregar."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {FORMATOS.map((f, i) => (
          <GlowCard key={f.label} delay={i * 0.1} className="group h-full">
            <div className="flex flex-col h-full space-y-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif font-bold text-2xl text-mateus-primary leading-none">
                  {f.label}
                </h3>
                <span className="text-xs uppercase tracking-eyebrow text-mateus-gold font-medium">
                  {f.duration}
                </span>
              </div>
              <p className="text-xs text-mateus-muted uppercase tracking-eyebrow">
                {f.audience}
              </p>
              <p className="text-sm text-mateus-text/85 leading-relaxed flex-1">
                {f.body}
              </p>
              <div className="pt-4 border-t border-mateus-accent/15">
                <p className="text-xs uppercase tracking-eyebrow text-mateus-muted">
                  Investimento
                </p>
                <p className="font-extrabold text-mateus-primary text-base mt-1">
                  {f.precoLabel}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 4. Tópicos canônicos
// =====================================================================
// TODO Doutor: revisar lista. Mover ordem por preferência de relevância
// para cada perfil de evento. Adicionar/remover livremente.

const TOPICOS = [
  {
    title: 'Avaliação metabólica avançada',
    body: 'Calorimetria Indireta + Teste Cardiopulmonar de Exercício (TCPE) + Sistema de Validação Dialógica de Limiares (SVDL) na prática clínica.',
  },
  {
    title: 'Medicina do estilo de vida 3.0',
    body: 'Os 6 pilares MEV (movimento, alimentação, sono, estresse, conexões, sem tóxicos) e como traduzi-los em prescrição prática individualizada.',
  },
  {
    title: 'Performance executiva e longevidade',
    body: 'Como C-levels podem manter clareza cognitiva, recuperação acelerada e resiliência metabólica em rotinas de alta exigência. Casos reais de executivos atendidos.',
  },
  {
    title: 'Nutrição esportiva e de precisão',
    body: 'Macronutrientes, nutrient timing, suplementação estratégica, microbiota e flexibilidade metabólica — abordagem qualitativa antes da quantitativa.',
  },
  {
    title: 'Câmara hiperbárica e protocolos de recovery',
    body: 'Indicações clínicas reais (lesões, recuperação cirúrgica, performance) e o que a evidência sustenta versus o que está virando moda.',
    todo: true,
  },
  {
    title: 'A relação médico-paciente na medicina 3.0',
    body: 'Por que o "tá tudo normal" do exame de rotina engana, e como reconfigurar a consulta para sair da medicina reativa.',
  },
] as const;

function TopicosSection() {
  return (
    <Section id="topicos" alt>
      <SectionHeader
        eyebrow="Tópicos canônicos"
        heading="Temas que Dr. Mateus apresenta com profundidade."
        subheading="Cada tópico é adaptável em duração e densidade técnica conforme o público — de plateia médica especializada a executivos não-clínicos."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOPICOS.map((t, i) => (
          <GlowCard key={t.title} delay={i * 0.08} className="group h-full">
            <div className="space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-serif font-bold text-mateus-gold text-lg leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif font-bold text-lg text-mateus-primary leading-tight flex-1">
                  {t.title}
                </h3>
              </div>
              <p className="text-sm text-mateus-text/85 leading-relaxed">
                {t.body}
              </p>
              {t.todo && (
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-gold/70 italic pt-1">
                  TODO Doutor: confirmar manter
                </p>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
