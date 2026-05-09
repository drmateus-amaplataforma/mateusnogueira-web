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
import { GlowCard } from '@/components/landing/ui/GlowCard';
import { author, werutsky, nelson } from '@/lib/design-tokens';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Cirurgião, médico do exercício e nutrólogo. Doutor pela USP, autor Atheneu, fundador do ecossistema AMA + Vida Ativa Ensino + Oxy Recovery.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre · Dr. Mateus Antunes Nogueira',
    description:
      'Trajetória clínica, formação USP e os endossos que fundamentam o método.',
    url: '/sobre',
    type: 'profile',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre · Dr. Mateus Antunes Nogueira',
    description:
      'Trajetória clínica, formação USP e os endossos que fundamentam o método.',
  },
};

export default function SobrePage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <BioSection />
        <TimelineSection />
        <EndossosSection />
        <CtaDualSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero — foto + eyebrow + H1 + subhead com especialidades
// =====================================================================
// Foto: C6_headshot_05_profile_janela.jpg (perfil junto a janela —
// luz natural, postura institucional). Substituir por
// C6_headshot_03_camisa_close.jpg se quiser close mais frontal.

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-bg pt-12 pb-16 lg:pt-20 lg:pb-24">
      <DotGrid className="opacity-25" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(176, 133, 56, 0.12), transparent 60%)',
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal delay={0.05} className="lg:col-span-5 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(176, 133, 56, 0.30), transparent 70%)',
                }}
              />
              <div className="relative aspect-[3/4] w-[260px] sm:w-[320px] lg:w-[380px] rounded-2xl overflow-hidden shadow-screenshot ring-1 ring-mateus-accent/15">
                <Image
                  src="/sobre/dr-mateus-portrait.jpg"
                  alt="Dr. Mateus Antunes Nogueira — retrato institucional"
                  fill
                  priority
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:order-2 space-y-5">
            <Reveal as="p" className="eyebrow text-mateus-gold">
              Quem é
            </Reveal>

            <Reveal as="h1" delay={0.08}>
              <span className="block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
                Mateus Antunes Nogueira
              </span>
            </Reveal>

            <Reveal delay={0.14}>
              <AnimatedFilete width={80} className="my-4" />
            </Reveal>

            <Reveal as="p" delay={0.18} className="text-lg sm:text-xl text-mateus-text/90 leading-relaxed max-w-2xl font-serif italic">
              Cirurgião do aparelho digestivo · médico do exercício · nutrólogo.
            </Reveal>

            <Reveal as="p" delay={0.24} className="text-base text-mateus-muted leading-relaxed max-w-2xl">
              Doutor pela Universidade de São Paulo. Autor pela Editora
              Atheneu. Fundador da Plataforma AMA, da Vida Ativa Ensino e
              Pesquisa, e da Oxy Recovery.
            </Reveal>

            <Reveal delay={0.3} className="flex flex-wrap gap-2 pt-3">
              {[author.crm, 'Cirurgia digestiva', 'Esporte', 'Nutrologia'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-eyebrow text-mateus-gold border border-mateus-gold/30 rounded-full px-3 py-1.5 bg-mateus-white/50"
                >
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Bio expandida — versão "média" da bio padrão
// =====================================================================
// Conteúdo curado de:
// 06_MOTOR-MARKETING/00_MARCA_E_IDENTIDADE/Dr_Mateus_Pessoal/
//   Bio_e_Credenciais/Biografia_Padrao.md (versão média 300-500 palavras
//   expandida com contexto de origem do método). Tipografia Crimson Pro
//   (font-serif) 18-20px com leading generoso.
// TODO Doutor: revisar — versão atual amplia a bio padrão, mas alguns
// trechos podem precisar de tom mais pessoal vs institucional.

const BIO_PARAGRAFOS = [
  'Dr. Mateus Antunes Nogueira é médico cirurgião do aparelho digestivo, médico do exercício e do esporte, e nutrólogo. Forma uma trajetória rara: três especialidades clínicas que, na maioria dos consultórios, vivem separadas. No dia a dia, trabalham como uma única lente integrada.',
  'É reconhecido como uma das maiores autoridades nacionais em avaliação metabólica avançada — Calorimetria Indireta e Teste Cardiopulmonar de Exercício (TCPE) aplicados como ferramentas terapêuticas, não apenas diagnósticas. Doutor pela Universidade de São Paulo, mais de uma década atendendo executivos, atletas e pacientes em estados clínicos complexos.',
  'Atende clinicamente na Oxy Recovery Vida Ativa, onde o método é aplicado com toda a infraestrutura — câmara hiperbárica, ergoespirometria, calorimetria, biomarcadores ômicos. É professor e fundador da Vida Ativa Ensino e Pesquisa, instituição que já formou mais de mil profissionais de saúde no Brasil em medicina do exercício, fisiologia integrativa e Medicina do Estilo de Vida 3.0.',
  'É também fundador da Plataforma AMA — software SaaS de avaliação metabólica que traduz o método clínico em ferramenta operacional para profissionais de saúde em qualquer consultório do país. A AMA é a aplicação técnica daquilo que ele ensina como professor, opera como cirurgião, prescreve como médico do esporte e do estilo de vida.',
  'Em 2026, lança dois livros pela Editora Atheneu — uma editora com 97 anos de tradição em literatura médica brasileira. O primeiro, Avaliação Metabólica Avançada na Saúde e no Desempenho, é o tratado técnico do método. O segundo, Nova Medicina do Estilo de Vida, é a tradução acolhedora do mesmo conteúdo para o público leigo qualificado — pacientes, familiares, profissionais que querem viver e ensinar o que praticam.',
  'A síntese: cirurgião que escreveu o livro, fundador da plataforma que aplica o método em tempo real. Cada papel reforça os outros — a clínica alimenta a escola, a escola alimenta a plataforma, a plataforma realimenta a clínica.',
];

function BioSection() {
  return (
    <Section id="bio" alt>
      <SectionHeader
        eyebrow="Trajetória"
        heading="Cirurgião que escreveu o livro."
        align="center"
      />
      <div className="mt-12 max-w-narrow mx-auto space-y-6">
        {BIO_PARAGRAFOS.map((p, i) => (
          <Reveal key={i} delay={i * 0.05} as="p" className="font-serif text-lg lg:text-xl text-mateus-text leading-[1.75]">
            {p}
          </Reveal>
        ))}
        <Reveal delay={BIO_PARAGRAFOS.length * 0.05}>
          <AnimatedFilete align="center" width={64} className="mt-8" />
        </Reveal>
      </div>
    </Section>
  );
}

// =====================================================================
// 3. Linha do tempo / formação
// =====================================================================
// TODO Doutor: confirmar/preencher anos. Items marcados com `year: null`
// estao aguardando informacao do Curriculo Lattes (path em CLAUDE.md).

type TimelineItem = {
  year: string | null;
  category: 'Formação' | 'Especialização' | 'Liderança' | 'Publicação';
  label: string;
  desc?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: null,
    category: 'Formação',
    label: 'Graduação em Medicina · USP',
    desc: 'Universidade de São Paulo — Faculdade de Medicina.',
  },
  {
    year: null,
    category: 'Especialização',
    label: 'Cirurgia do aparelho digestivo',
    desc: 'Residência médica + título de especialista. Atuação em hospitais de referência em SP.',
  },
  {
    year: null,
    category: 'Especialização',
    label: 'Medicina do exercício e do esporte',
    desc: 'Especialização clínica focada em fisiologia integrativa e prescrição de exercício terapêutico.',
  },
  {
    year: null,
    category: 'Especialização',
    label: 'Nutrologia',
    desc: 'Terceira especialidade clínica — completa o tripé que sustenta o método integrado.',
  },
  {
    year: null,
    category: 'Formação',
    label: 'Doutorado · Universidade de São Paulo',
    desc: 'Tese em fisiologia / medicina do exercício.', // TODO Doutor: tema preciso da tese
  },
  {
    year: null,
    category: 'Liderança',
    label: 'Fundação · Vida Ativa Ensino e Pesquisa',
    desc: 'Instituição de ensino para profissionais de saúde — mais de 1.000 alunos formados.',
  },
  {
    year: null,
    category: 'Liderança',
    label: 'Fundação · Plataforma AMA',
    desc: 'Software SaaS de avaliação metabólica avançada para profissionais de saúde.',
  },
  {
    year: null,
    category: 'Liderança',
    label: 'Oxy Recovery Vida Ativa',
    desc: 'Clínica de medicina do estilo de vida e recovery em São Paulo.',
  },
  {
    year: '2026',
    category: 'Publicação',
    label: 'Avaliação Metabólica Avançada · Atheneu',
    desc: 'Tratado técnico do método. 11 capítulos, 235 figuras, 100 referências.',
  },
  {
    year: '2026',
    category: 'Publicação',
    label: 'Nova Medicina do Estilo de Vida · Atheneu',
    desc: 'Tradução do método para público leigo qualificado.',
  },
];

function TimelineSection() {
  return (
    <Section id="trajetoria">
      <SectionHeader
        eyebrow="Marcos"
        heading="Formação, especialização e liderança."
        subheading="Cronologia da trajetória clínica e empresarial. Itens com data pendente serão completados em revisão final junto ao Currículo Lattes."
        align="center"
      />
      <ol className="mt-12 max-w-3xl mx-auto relative pl-8 lg:pl-12 border-l-2 border-mateus-accent/20 space-y-8">
        {TIMELINE.map((item, i) => (
          <Reveal key={i} as="li" delay={i * 0.05} className="relative">
            <span
              aria-hidden
              className="absolute -left-[35px] lg:-left-[51px] top-1.5 w-3 h-3 rounded-full bg-mateus-gold ring-4 ring-mateus-bg"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-[10px] uppercase tracking-eyebrow text-mateus-gold font-semibold">
                {item.category}
              </span>
              <span className="font-mono text-sm font-semibold text-mateus-primary">
                {item.year ?? <em className="text-mateus-muted/70 italic">TODO Doutor</em>}
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg lg:text-xl text-mateus-primary leading-tight">
              {item.label}
            </h3>
            {item.desc && (
              <p className="text-sm text-mateus-text/80 leading-relaxed mt-1">
                {item.desc}
              </p>
            )}
          </Reveal>
        ))}
      </ol>
      <Reveal delay={0.6} className="mt-8 max-w-3xl mx-auto pl-8 lg:pl-12">
        <p className="text-xs text-mateus-muted/80 italic">
          TODO Doutor: confirmar anos de formação, residência, doutorado
          (tema da tese), fundações e abertura da clínica. Currículo
          Lattes em <code className="not-italic font-mono text-[11px]">05_PESSOAL-FAMILIA/_Documentos/</code>.
        </p>
      </Reveal>
    </Section>
  );
}

// =====================================================================
// 4. Endossos — Werutsky (LP1) + Nelson (LP2)
// =====================================================================
// Reusa estrutura GlowCard das LPs e os dados canonicos de
// design-tokens.ts (werutsky{}, nelson{}). TODO Doutor: enviar fotos
// dos endossadores para enriquecer os cards (atualmente sao iniciais
// em badge gold).

const ENDOSSOS = [
  {
    person: werutsky,
    contexto:
      'Endosso ao livro Avaliação Metabólica Avançada (Atheneu, 2026).',
  },
  {
    person: nelson,
    contexto:
      'Endosso ao livro Nova Medicina do Estilo de Vida (Atheneu, 2026).',
  },
] as const;

function EndossosSection() {
  return (
    <Section id="endossos" alt>
      <SectionHeader
        eyebrow="Endossos"
        heading="Vozes que sustentam o método."
        subheading="Especialistas reconhecidos no campo da nutrologia, medicina do esporte e geriatria endossaram os dois livros publicados pela Atheneu."
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ENDOSSOS.map((e, i) => {
          const initials = e.person.name
            .replace('Prof. ', '')
            .replace('Dr. ', '')
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0])
            .join('');

          return (
            <Reveal key={e.person.name} delay={i * 0.12} className="h-full">
              <GlowCard variant="gold" className="group h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-mateus-gold/30 to-mateus-accent/15 border border-mateus-gold/30 flex items-center justify-center"
                      aria-hidden
                    >
                      <span className="font-serif font-bold text-mateus-primary text-lg">
                        {initials}
                      </span>
                      {/* TODO Doutor: enviar foto do endossador para substituir badge de iniciais */}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif font-bold text-lg text-mateus-primary leading-tight">
                        {e.person.name}
                      </h3>
                      <p className="text-xs text-mateus-muted mt-1.5 leading-relaxed">
                        {e.person.credentials}
                      </p>
                    </div>
                  </div>
                  <blockquote className="flex-1 text-sm lg:text-base text-mateus-text/85 leading-relaxed italic font-serif border-l-2 border-mateus-gold/30 pl-4">
                    &ldquo;{e.person.quote}&rdquo;
                  </blockquote>
                  <p className="text-[11px] uppercase tracking-eyebrow text-mateus-gold/80 font-semibold mt-5">
                    {e.contexto}
                  </p>
                </div>
              </GlowCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

// =====================================================================
// 5. CTA dual — Solicitar palestra + Falar com a equipe
// =====================================================================
// Rota /contato ainda nao existe (vem em 6.3c). Por ora, link
// secundario aponta para mailto: como fallback.
// TODO Doutor: confirmar email institucional (atualmente
// contato@mateusnogueira.com.br — placeholder).

function CtaDualSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-primary py-20 lg:py-28">
      <DotGrid className="opacity-15" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(176, 133, 56, 0.18), transparent 60%), radial-gradient(circle at 85% 85%, rgba(176, 133, 56, 0.10), transparent 65%)',
        }}
      />
      <div className="container-content relative">
        <Reveal className="max-w-3xl mx-auto text-center space-y-6">
          <p className="eyebrow text-mateus-gold">Próximo passo</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-white leading-tight">
            Convide Dr. Mateus para o seu próximo evento.
          </h2>
          <div className="flex justify-center">
            <AnimatedFilete width={80} align="center" />
          </div>
          <p className="text-lg text-mateus-white/80 leading-relaxed max-w-2xl mx-auto">
            Palestras, workshops e mentorias para empresas, congressos
            médicos e mídia. Para outras conversas, fale com a equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <CTAButton href="/palestras#booking" variant="gold" size="lg">
              Solicitar palestra →
            </CTAButton>
            <Link
              href="mailto:contato@mateusnogueira.com.br"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold py-4 px-8 bg-transparent text-mateus-white border border-mateus-white/30 hover:border-mateus-white/70 hover:bg-mateus-white/[0.04] transition-all duration-200"
            >
              Falar com a equipe
            </Link>
          </div>
          <p className="text-xs text-mateus-white/50 italic pt-2">
            TODO Doutor: confirmar email institucional. Página /contato
            chega em 6.3c.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
