import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { Section, SectionHeader } from '@/components/landing/ui/Section';
import { GlowCard } from '@/components/landing/ui/GlowCard';
import { LeadForm } from '@/components/landing/ui/LeadForm';
import { author, book, bookMev } from '@/lib/design-tokens';

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
        <CredenciaisSection />
        <GaleriaSection />
        <BookingSection />
        <FaqSection />
        <CtaFinalSection />
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

// =====================================================================
// 5. Credenciais — autoridade do palestrante
// =====================================================================
// Reusa author{} de design-tokens.ts + book/bookMev para links Atheneu.
// Dados clínicos canônicos — NUNCA inventar credenciais aqui.

const CARGOS = [
  {
    role: 'CEO',
    org: 'Plataforma AMA',
    desc: 'SaaS médico para Calorimetria Indireta + TCPE (lançamento maio/2026).',
  },
  {
    role: 'Diretor científico',
    org: 'Vida Ativa Ensino e Pesquisa',
    desc: 'Educação continuada para profissionais de saúde em medicina do exercício.',
  },
  {
    role: 'Founder',
    org: 'Oxy Recovery',
    desc: 'Clínica de medicina do estilo de vida e recovery em São Paulo.',
  },
] as const;

function CredenciaisSection() {
  return (
    <Section id="credenciais">
      <SectionHeader
        eyebrow="Quem fala"
        heading={author.name}
        subheading="Cirurgião que escreveu o livro · fundador da plataforma que aplica o método em tempo real."
        align="center"
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-mateus-white border border-mateus-accent/15 p-6 shadow-card-soft">
            <p className="eyebrow text-mateus-gold mb-3">Formação clínica</p>
            <ul className="space-y-2.5">
              {author.specialties.map((s) => (
                <li
                  key={s}
                  className="text-sm text-mateus-text/85 flex items-start gap-3"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mateus-gold flex-shrink-0"
                  />
                  <span>{s}</span>
                </li>
              ))}
              <li className="text-sm text-mateus-text/85 flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mateus-gold flex-shrink-0"
                />
                <span>Doutor pela {author.doctorate}</span>
              </li>
              <li className="text-sm text-mateus-text/85 flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mateus-gold flex-shrink-0"
                />
                <span className="font-semibold">{author.crm}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-mateus-white border border-mateus-accent/15 p-6 shadow-card-soft">
            <p className="eyebrow text-mateus-gold mb-3">Liderança executiva</p>
            <ul className="space-y-3">
              {CARGOS.map((c) => (
                <li key={c.org} className="text-sm">
                  <p className="font-semibold text-mateus-primary">
                    {c.role} · <span className="font-normal">{c.org}</span>
                  </p>
                  <p className="text-mateus-muted text-xs mt-0.5 leading-relaxed">
                    {c.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div>
            <p className="eyebrow text-mateus-gold mb-3">Bio</p>
            <p className="text-base lg:text-lg text-mateus-text/90 leading-relaxed">
              {author.bio}
            </p>
            <p className="mt-3 text-base text-mateus-text/80 italic leading-relaxed">
              &ldquo;{author.bridge}&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-eyebrow text-mateus-gold/80">
              + de {author.professionalsTrained.toLocaleString('pt-BR')}{' '}
              profissionais formados
            </p>
          </div>

          <div className="rounded-2xl bg-mateus-bg-alt border border-mateus-accent/15 p-6">
            <p className="eyebrow text-mateus-gold mb-4">
              Autor · Editora Atheneu
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={`/livros/${book.slug}`}
                className="group block rounded-lg border border-mateus-accent/20 bg-mateus-white p-4 hover:border-mateus-gold/50 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted">
                  Livro 1
                </p>
                <p className="font-serif font-bold text-mateus-primary text-sm leading-tight mt-1">
                  Avaliação Metabólica Avançada
                </p>
                <p className="text-xs text-mateus-muted mt-1">
                  Calorimetria + TCPE · {book.totalChapters} capítulos
                </p>
                <p className="text-xs font-semibold text-mateus-gold mt-2 group-hover:underline">
                  Ver landing page →
                </p>
              </Link>
              <Link
                href={`/livros/${bookMev.slug}`}
                className="group block rounded-lg border border-mateus-accent/20 bg-mateus-white p-4 hover:border-mateus-gold/50 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-muted">
                  Livro 2
                </p>
                <p className="font-serif font-bold text-mateus-primary text-sm leading-tight mt-1">
                  Nova Medicina do Estilo de Vida
                </p>
                <p className="text-xs text-mateus-muted mt-1">
                  Prevenção · Tratamento · Longevidade
                </p>
                <p className="text-xs font-semibold text-mateus-gold mt-2 group-hover:underline">
                  Ver landing page →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// =====================================================================
// 6. Vídeos / fotos de palco — placeholder grid 2x2
// =====================================================================
// TODO Doutor: enviar 4 fotos/vídeos de eventos passados (palestras,
// painéis, gravações). Quando preencher, adicionar JSON-LD VideoObject
// para cada vídeo (schema.org/VideoObject — feature flag pendente).

const GALERIA_PLACEHOLDERS = [
  {
    label: 'Keynote · Congresso médico',
    hint: 'Foto de palco em close (autor com microfone, plateia ao fundo)',
  },
  {
    label: 'Workshop · Sessão prática',
    hint: 'Foto de bastidor (autor demonstrando equipamento ou laudo)',
  },
  {
    label: 'Mídia · Entrevista',
    hint: 'Frame de podcast ou entrevista em estúdio',
  },
  {
    label: 'Mentoria · Sala de board',
    hint: 'Foto institucional com C-level (composição minimalista)',
  },
] as const;

function GaleriaSection() {
  return (
    <Section id="galeria" alt>
      <SectionHeader
        eyebrow="No palco"
        heading="Eventos passados, mídia e bastidores."
        subheading="Em curadoria. Em breve, registros recentes de keynotes, workshops e aparições em mídia."
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {GALERIA_PLACEHOLDERS.map((g, i) => (
          <div
            key={g.label}
            className="group relative aspect-video rounded-2xl overflow-hidden border border-dashed border-mateus-accent/40 bg-mateus-white flex items-center justify-center text-center p-6 transition-colors hover:border-mateus-gold/50"
            data-stagger-index={i}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 50% 100%, rgba(176, 133, 56, 0.15), transparent 70%)',
              }}
            />
            <div className="relative space-y-2">
              <p className="text-xs uppercase tracking-eyebrow text-mateus-gold font-semibold">
                {g.label}
              </p>
              <p className="text-xs text-mateus-muted/80 italic max-w-[260px] mx-auto">
                {g.hint}
              </p>
              <p className="text-[10px] uppercase tracking-eyebrow text-mateus-accent/60 pt-2">
                TODO Doutor: enviar mídia
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 7. Booking — formulário de solicitação (#booking)
// =====================================================================
// Reusa LeadForm com origem='palestra' (config canônica em LeadForm.tsx:
// successHeading 'Solicitação registrada.', submit 'Solicitar palestra').

function BookingSection() {
  return (
    <Section id="booking">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="eyebrow">Próximo passo</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-mateus-primary leading-tight">
            Vamos conversar sobre seu evento.
          </h2>
          <p className="text-lg text-mateus-muted leading-relaxed">
            Conte sobre formato, plateia e expectativa. Retorno em{' '}
            <strong className="text-mateus-primary">48h úteis</strong> com
            agenda, formatos sugeridos e valores.
          </p>

          <ul className="space-y-3 text-sm text-mateus-text/85 pt-4">
            {[
              'Disponível para Brasil e exterior',
              'Equipe de produção pode ajudar com slides, abstract e vídeos',
              'Materiais pós-evento (gravação, citações, posts) sob acordo',
              'Política de antecedência mínima recomendada: 60 dias',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mateus-gold flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-lg bg-mateus-bg-alt border border-mateus-accent/15 p-4 mt-2">
            <p className="text-xs uppercase tracking-eyebrow text-mateus-gold mb-1">
              Imprensa e mídia
            </p>
            <p className="text-sm text-mateus-text/85 leading-relaxed">
              Pautas urgentes (TV/jornal/podcast com prazo &lt; 7 dias) — use
              também este formulário e marque{' '}
              <em className="text-mateus-primary">&ldquo;mídia&rdquo;</em> em{' '}
              <em>especialidade</em>. Triagem prioritária.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:sticky lg:top-24">
          <div className="rounded-2xl bg-mateus-white border border-mateus-accent/15 shadow-card-soft p-6 sm:p-8">
            <LeadForm origem="palestra" />
          </div>
        </div>
      </div>
    </Section>
  );
}

// =====================================================================
// 8. FAQ — accordion nativo <details>
// =====================================================================
// TODO Doutor: revisar respostas. Adicionar mais perguntas se quiser
// (ex.: dress code, exclusividade regional, contrato padrão).

const FAQ_ITENS = [
  {
    q: 'Qual é a antecedência mínima para agendar?',
    a: 'Recomendado 60 dias para keynotes em congressos e 90 dias para workshops e mentorias. Pautas de mídia com prazo curto (TV, podcast) são tratadas em regime prioritário e podem ser confirmadas em 48-72h dependendo da agenda clínica.',
  },
  {
    q: 'Atende eventos no exterior?',
    a: 'Sim. Já atuou em eventos no Brasil inteiro e disponível para América Latina, Europa e EUA. Custos de passagem internacional, hospedagem e diárias são tratados separadamente do fee de palestra.',
  },
  {
    q: 'Como funciona o investimento?',
    a: 'Valores são fechados caso a caso conforme formato (keynote, workshop, mentoria), duração, tamanho de plateia, deslocamento e exclusividade regional. Solicite via formulário acima — retorno em 48h úteis com proposta detalhada. TODO Doutor: definir tabela pública ou manter sob consulta.',
  },
  {
    q: 'Posso gravar a palestra?',
    a: 'Sim, na maioria dos formatos. Uso interno (treinamento corporativo, biblioteca de congresso) costuma ser autorizado sem custo adicional. Distribuição pública (YouTube, mídia paga, cursos pagos) é negociada à parte com cláusula de uso de imagem.',
  },
  {
    q: 'Recebo materiais de apoio antes do evento?',
    a: 'Sim. Slides em alta resolução, abstract científico para o programa, bio resumida e bio expandida, fotos profissionais de divulgação e roteiro técnico são entregues em até 30 dias antes do evento. Em alguns formatos, pré-leitura para a plateia também é disponibilizada.',
  },
  {
    q: 'Há cláusula de exclusividade?',
    a: 'Para eventos corporativos, é possível negociar exclusividade temporária (não-concorrência regional ou setorial) em contrato à parte, mediante fee adicional. Para congressos médicos, em geral não se aplica.',
  },
] as const;

function FaqSection() {
  return (
    <Section id="faq" alt>
      <SectionHeader
        eyebrow="Perguntas frequentes"
        heading="Tudo que você precisa saber antes de fechar."
        align="center"
      />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {FAQ_ITENS.map((item, i) => (
          <details
            key={item.q}
            className="group rounded-xl bg-mateus-white border border-mateus-accent/15 overflow-hidden transition-colors hover:border-mateus-accent/35 open:border-mateus-gold/40 open:shadow-card-soft"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 select-none">
              <span className="flex items-baseline gap-3 flex-1">
                <span className="font-serif font-bold text-mateus-gold text-sm leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-mateus-primary text-base sm:text-lg leading-snug">
                  {item.q}
                </span>
              </span>
              <span
                aria-hidden
                className="flex-shrink-0 text-mateus-gold text-xl font-light transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-6 pb-5 pt-0 -mt-1">
              <p className="text-sm text-mateus-text/85 leading-relaxed pl-7">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}

// =====================================================================
// 9. CTA final
// =====================================================================

function CtaFinalSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-primary py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(176, 133, 56, 0.18), transparent 60%), radial-gradient(circle at 15% 85%, rgba(176, 133, 56, 0.10), transparent 65%)',
        }}
      />
      <div className="container-content relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="eyebrow text-mateus-gold">Próximo evento</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-mateus-white leading-tight">
            Pronto para trazer Dr. Mateus ao seu evento?
          </h2>
          <p className="text-lg text-mateus-white/80 leading-relaxed max-w-2xl mx-auto">
            Solicite proposta detalhada em 48h úteis. Conteúdo científico
            denso, traduzido em recomendações concretas — como na clínica,
            como no livro.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <CTAButton href="#booking" variant="gold" size="lg">
              Solicitar palestra →
            </CTAButton>
            <Link
              href="#topicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold py-4 px-8 bg-transparent text-mateus-white border border-mateus-white/30 hover:border-mateus-white/70 hover:bg-mateus-white/[0.04] transition-all duration-200"
            >
              Ver temas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
