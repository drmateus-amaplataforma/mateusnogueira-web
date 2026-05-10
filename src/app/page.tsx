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
import { ScrollIndicator } from '@/components/landing/ui/ScrollIndicator';
import { NumberCounter } from '@/components/landing/ui/NumberCounter';

export const metadata: Metadata = {
  title: {
    absolute:
      'Dr. Mateus Antunes Nogueira | Cirurgião, Medicina do Exercício e Nutrólogo',
  },
  description:
    'Cirurgião, especialista em medicina do exercício e nutrólogo. Doutor pela USP. Autor Atheneu. Solicite palestras, conheça os livros e o ecossistema AMA + Vida Ativa Ensino + Oxy Recovery.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dr. Mateus Antunes Nogueira',
    description:
      'Cirurgião, especialista em medicina do exercício e nutrólogo. Doutor pela USP. Autor Atheneu.',
    url: '/',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Mateus Antunes Nogueira',
    description:
      'Cirurgião, medicina do exercício e nutrologia. Doutor USP. Autor Atheneu.',
  },
};

export default function HomePage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <QuemSouSection />
        <EcossistemaSection />
        <SocialProofSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero (full-bleed ~80vh, DotGrid + photo + AnimatedFilete + Scroll)
// =====================================================================
// Headline + subhead alinhados à Estratégia de Marca canônica
// (Estrategia_Marca_Dr_Mateus_v1.md): executivo, denso em conteúdo,
// autoridade científica, sem storytelling motivacional.
// Foto: C2_academico_05_camisa_mesa_computador.jpg (curadoria oficial).

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg min-h-[80vh] flex items-center pt-20 pb-24 lg:pb-32">
      <DotGrid className="opacity-30" />

      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(176, 133, 56, 0.14), transparent 60%), radial-gradient(circle at 15% 85%, rgba(31, 42, 68, 0.08), transparent 65%)',
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal as="p" className="eyebrow text-mateus-gold">
              Dr. Mateus Antunes Nogueira
            </Reveal>

            <Reveal as="h1" delay={0.08}>
              <span className="block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-mateus-primary leading-[1.05] tracking-tight">
                Cirurgia, medicina do exercício e medicina do estilo de vida.
              </span>
            </Reveal>

            <Reveal delay={0.16}>
              <AnimatedFilete width={96} className="my-6" />
            </Reveal>

            <Reveal as="p" delay={0.2} className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
              Doutor pela USP, autor pela Editora Atheneu, fundador da
              Plataforma AMA, da Vida Ativa Ensino e Pesquisa, e da Oxy
              Recovery — três frentes que aplicam, em produto, em ensino e
              em clínica, a mesma metodologia em avaliação metabólica
              avançada.
            </Reveal>

            <Reveal delay={0.28} className="flex flex-col sm:flex-row gap-3 pt-4">
              <CTAButton href="/palestras#booking" variant="primary" size="lg">
                Solicitar palestra →
              </CTAButton>
              <CTAButton href="/livros/avaliacao-metabolica" variant="secondary" size="lg">
                Conheça os livros
              </CTAButton>
            </Reveal>

            <Reveal as="p" delay={0.36} className="text-xs text-mateus-muted/80 pt-2">
              CRM-SP 97.070 · Cirurgia · Esporte · Nutrologia
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.12} className="relative">
              <div
                aria-hidden
                className="absolute -inset-10 -z-10 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(176, 133, 56, 0.30), transparent 70%)',
                }}
              />
              <div className="relative aspect-[3/4] w-[280px] sm:w-[340px] lg:w-[420px] rounded-2xl overflow-hidden shadow-screenshot ring-1 ring-mateus-accent/15">
                <Image
                  src="/home/dr-mateus-hero.jpg"
                  alt="Dr. Mateus Antunes Nogueira — cirurgião, medicina do exercício e nutrologia"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

// =====================================================================
// 2. Quem sou — eyebrow + 1 frase resumo + grid 5 cards das frentes
// =====================================================================
// Subhead derivado de Bio_e_Credenciais/Biografia_Padrao.md (versão média).

const FRENTES = [
  {
    icon: '🎤',
    label: 'Palestras',
    desc: 'Keynotes, workshops e mentorias para empresas, eventos médicos e mídia.',
    href: '/palestras',
    available: true,
  },
  {
    icon: '📚',
    label: 'Livros',
    desc: 'Dois títulos pela Editora Atheneu (2026) — técnico e divulgação.',
    href: '/livros',
    available: true,
  },
  {
    icon: '👤',
    label: 'Sobre',
    desc: 'Trajetória clínica, formação USP e os endossos que fundamentam o método.',
    href: '/sobre',
    available: true,
  },
  {
    icon: '📰',
    label: 'Mídia',
    desc: 'Entrevistas, podcasts e materiais para imprensa.',
    href: '/midia',
    available: true,
  },
  {
    icon: '✉️',
    label: 'Contato',
    desc: 'Equipe, parcerias institucionais e questões administrativas.',
    href: '/contato',
    available: true,
  },
] as const;

function QuemSouSection() {
  return (
    <Section id="quem-sou" alt>
      <SectionHeader
        eyebrow="Autoridade em avaliação metabólica"
        heading="Cirurgião que escreveu o livro. Fundador da plataforma que aplica o método."
        subheading="Médico cirurgião do aparelho digestivo, médico do exercício e do esporte e nutrólogo. Maior autoridade nacional em avaliação metabólica avançada por calorimetria indireta e ergoespirometria. Mais de uma década atendendo executivos, atletas e profissionais de saúde."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
        {FRENTES.map((f, i) => (
          <Reveal key={f.label} delay={i * 0.06} className="h-full">
            <Link
              href={f.available ? f.href : '#'}
              aria-disabled={!f.available}
              tabIndex={f.available ? 0 : -1}
              className={`group block h-full rounded-2xl bg-mateus-white border border-mateus-accent/15 p-6 transition-all duration-300 ${
                f.available
                  ? 'hover:border-mateus-gold/40 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer'
                  : 'opacity-60 cursor-default pointer-events-none'
              }`}
            >
              <div className="text-2xl mb-3" aria-hidden>
                {f.icon}
              </div>
              <h3 className="font-serif font-bold text-base text-mateus-primary leading-tight mb-2">
                {f.label}
              </h3>
              <p className="text-xs text-mateus-text/75 leading-relaxed">
                {f.desc}
              </p>
              {f.available ? (
                <p className="text-xs font-semibold text-mateus-gold mt-3 group-hover:underline">
                  Acessar →
                </p>
              ) : (
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-accent/60 mt-3 italic">
                  Em breve
                </p>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 3. Ecossistema — 3 frentes em cards horizontais
// =====================================================================

const ECOSSISTEMA = [
  {
    label: 'AMA Plataforma',
    tagline: 'B2B SaaS clínico',
    desc: 'Software de avaliação metabólica avançada (Calorimetria + TCPE) para profissionais de saúde. Lançamento maio/2026.',
    href: 'https://amaplataforma.com.br',
    external: true,
  },
  {
    label: 'Vida Ativa Ensino',
    tagline: 'Cursos B2C profissionais',
    desc: 'Educação continuada em medicina do exercício e fisiologia integrativa. Mais de 1.000 profissionais formados.',
    href: 'https://vidaativaensino.com.br',
    external: true,
  },
  {
    label: 'Oxy Recovery',
    tagline: 'Clínica B2C premium · São Paulo',
    desc: 'Atendimento clínico em medicina do estilo de vida e protocolos de recovery — câmara hiperbárica, terapias integradas.',
    // TODO Doutor: site Oxy quando publicado
    href: '#',
    external: false,
  },
] as const;

function EcossistemaSection() {
  return (
    <Section id="ecossistema">
      <SectionHeader
        eyebrow="Ecossistema"
        heading="Três marcas. Uma única tese clínica."
        subheading="Plataforma, escola e clínica trabalhando em conjunto para transformar avaliação metabólica avançada em prática acessível, baseada em evidência."
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ECOSSISTEMA.map((eco, i) => {
          const inner = (
            <div className="group h-full rounded-2xl bg-mateus-white border border-mateus-accent/15 p-8 transition-all duration-300 hover:border-mateus-gold/40 hover:shadow-card-hover hover:-translate-y-1">
              <p className="text-[10px] uppercase tracking-eyebrow text-mateus-gold font-semibold mb-3">
                {eco.tagline}
              </p>
              <h3 className="font-serif font-bold text-2xl text-mateus-primary leading-tight mb-3">
                {eco.label}
              </h3>
              <p className="text-sm text-mateus-text/85 leading-relaxed">
                {eco.desc}
              </p>
              {eco.external ? (
                <p className="text-xs font-semibold text-mateus-gold mt-5 group-hover:underline inline-flex items-center gap-1">
                  Visitar site <span aria-hidden>↗</span>
                </p>
              ) : (
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-accent/60 mt-5 italic">
                  Site em breve
                </p>
              )}
            </div>
          );

          return (
            <Reveal key={eco.label} delay={i * 0.1}>
              {eco.external ? (
                <a
                  href={eco.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div className="block h-full opacity-90">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

// =====================================================================
// 4. Social proof — 4 stats com number-up animation (useInView)
// =====================================================================
// Stats canônicos: 1000+ profissionais formados (VAE oficial · ver
// ECOSSISTEMA section + brand strategy v1) · 2 livros Atheneu 2026 ·
// CRM-SP 97070 USP · 10+ anos prática clínica (Estratégia de Marca v1
// "Mais de uma década atendendo executivos, atletas e profissionais").

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  formatType?: 'comma' | 'crm';
};

const STATS: readonly StatItem[] = [
  {
    value: 1000,
    suffix: '+',
    label: 'profissionais formados pela Vida Ativa Ensino',
  },
  {
    value: 2,
    label: 'livros pela Editora Atheneu (2026)',
  },
  {
    value: 97070,
    label: 'CRM-SP · Doutor pela USP',
    formatType: 'crm',
  },
  {
    value: 10,
    suffix: '+',
    label: 'anos de prática clínica integrada',
  },
];

function SocialProofSection() {
  return (
    <Section id="numeros" alt>
      <Reveal as="header" className="text-center max-w-narrow mx-auto mb-12 lg:mb-16">
        <p className="eyebrow text-mateus-gold mb-3">Em números</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-mateus-primary">
          A escala de quem aplica o método.
        </h2>
        <AnimatedFilete align="center" width={64} className="mt-4" />
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="text-center px-2"
          >
            <p className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-none mb-3">
              <NumberCounter
                to={stat.value}
                suffix={stat.suffix ?? ''}
                formatType={stat.formatType}
              />
            </p>
            <p className="text-xs sm:text-sm text-mateus-text/85 leading-relaxed">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 5. CTA final — bg navy + radial gold
// =====================================================================
// Headline alinhada à voz canônica: direto, executivo, sem motivação.

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
          <p className="eyebrow text-mateus-gold">Próximo passo</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-white leading-tight">
            Para palestras, congressos médicos e mentorias.
          </h2>
          <div className="flex justify-center">
            <AnimatedFilete width={80} align="center" />
          </div>
          <p className="text-lg text-mateus-white/80 leading-relaxed max-w-2xl mx-auto">
            Solicite proposta detalhada com agenda, formatos sugeridos e
            valores. Retorno em 48h úteis · disponível para Brasil e exterior.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <CTAButton href="/palestras#booking" variant="gold" size="lg">
              Solicitar palestra →
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
