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
// TODO Doutor: revisar headline + subhead. Foto: C2_academico_05_camisa_mesa_computador.jpg
// (curadoria oficial). Pode trocar por outra de 06_Photography/curadoria.

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
                Cirurgia, fisiologia e medicina do estilo de vida.
              </span>
            </Reveal>

            <Reveal delay={0.16}>
              <AnimatedFilete width={96} className="my-6" />
            </Reveal>

            <Reveal as="p" delay={0.2} className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
              Doutor pela USP, autor Atheneu, fundador do ecossistema AMA +
              Vida Ativa Ensino + Oxy Recovery — traduzindo evidência
              científica em prática clínica e em palco.
              {/* TODO Doutor: revisar subhead — voz mais pessoal vs institucional */}
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
// TODO Doutor: revisar copy do parágrafo de abertura.

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
    // TODO: rota /livros (índice) chega em 6.3c — por ora, linka direto LP1
    href: '/livros/avaliacao-metabolica',
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
    available: false,
  },
  {
    icon: '✉️',
    label: 'Contato',
    desc: 'Equipe, parcerias institucionais e questões administrativas.',
    href: '/contato',
    available: false,
  },
] as const;

function QuemSouSection() {
  return (
    <Section id="quem-sou" alt>
      <SectionHeader
        eyebrow="Autoridade em avaliação metabólica"
        heading="Cirurgião que escreveu o livro. Fundador da plataforma que aplica o método."
        subheading="Cirurgia digestiva, medicina do exercício e nutrologia — três especialidades, uma única lente clínica integrada. Mais de uma década atendendo executivos, atletas e profissionais de saúde no Brasil e no exterior."
        align="center"
      />
      {/* TODO Doutor: revisar parágrafo de abertura — versão atual tira da bio padrão. */}

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
// 4. Social proof — placeholder até as outras seções (commit 2)
// 5. CTA final — placeholder até as outras seções (commit 2)
// =====================================================================

function SocialProofSection() {
  return null;
}

function CtaFinalSection() {
  return null;
}
