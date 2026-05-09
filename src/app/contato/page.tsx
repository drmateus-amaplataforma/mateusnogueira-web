import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';
import { Section } from '@/components/landing/ui/Section';
import { Reveal } from '@/components/landing/ui/Reveal';
import { DotGrid } from '@/components/landing/ui/DotGrid';
import { AnimatedFilete } from '@/components/landing/ui/AnimatedFilete';
import { LeadForm } from '@/components/landing/ui/LeadForm';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com Dr. Mateus Antunes Nogueira: palestras, livros, mídia, demais demandas. Retorno em 24-48h úteis.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato · Dr. Mateus Antunes Nogueira',
    description:
      'Fale com Dr. Mateus Antunes Nogueira: palestras, livros, mídia, demais demandas. Retorno em 24-48h úteis.',
    url: '/contato',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato · Dr. Mateus Antunes Nogueira',
    description:
      'Fale com Dr. Mateus Antunes Nogueira: palestras, livros, mídia, demais demandas.',
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header mode="institutional" />
      <main>
        <HeroSection />
        <FormCanaisSection />
        <InstitucionalSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  );
}

// =====================================================================
// 1. Hero (~40vh) — eyebrow + H1 + filete + subhead
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
            Fale com
          </Reveal>

          <Reveal as="h1" delay={0.08}>
            <span className="block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-mateus-primary leading-[1.05] tracking-tight">
              Contato
            </span>
          </Reveal>

          <Reveal delay={0.14}>
            <AnimatedFilete width={96} className="my-4" />
          </Reveal>

          <Reveal as="p" delay={0.2} className="text-lg sm:text-xl text-mateus-muted leading-relaxed max-w-2xl">
            Para palestras, livros, mídia ou demais demandas — escreva
            diretamente ao escritório do Dr. Mateus.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. Grid 2-col — LeadForm origem="contato" + Canais diretos
// =====================================================================
// Telefone WhatsApp palestras CANÔNICO: (11) 99891-1235 →
// https://wa.me/5511998911235. NÃO usar (11) 93712-1234 (esse é
// WhatsApp interno equipe — não público).
// TODO Doutor: confirmar slug LinkedIn (placeholder
// dr-mateus-antunes-nogueira) e e-mail institucional.

type CanalIcon = 'whatsapp' | 'email' | 'linkedin' | 'instagram';

type CanalItem = {
  icon: CanalIcon;
  label: string;
  value: string;
  href: string;
  external: boolean;
  note?: string;
};

const CANAIS: readonly CanalItem[] = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp · palestras',
    value: '(11) 99891-1235',
    href: 'https://wa.me/5511998911235',
    external: true,
    note: 'Linha direta do escritório · solicitações de palestras e mentorias',
  },
  {
    icon: 'email',
    label: 'E-mail profissional',
    value: 'dr.mateus@amaplataforma.com.br',
    href: 'mailto:dr.mateus@amaplataforma.com.br',
    external: false,
    note: 'Para tratativas formais, propostas e parcerias institucionais',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'in/dr-mateus-antunes-nogueira',
    href: 'https://www.linkedin.com/in/dr-mateus-antunes-nogueira',
    external: true,
    note: 'TODO Doutor: confirmar slug oficial',
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: '@drmateus.nogueira',
    href: 'https://www.instagram.com/drmateus.nogueira',
    external: true,
    note: 'Conteúdo educacional · medicina do exercício e estilo de vida',
  },
];

function CanalIconSvg({ name, className }: { name: CanalIcon; className?: string }) {
  switch (name) {
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l.36.572-1.001 3.65 3.738-.981.379.222zm5.398-15.52c-.144-.319-.292-.326-.428-.331l-.366-.005c-.127 0-.333.048-.508.238-.174.191-.668.652-.668 1.589 0 .937.684 1.844.779 1.971.094.127 1.319 2.114 3.272 2.875 1.625.633 1.957.508 2.31.476.353-.032 1.139-.466 1.299-.916.16-.45.16-.835.112-.916-.048-.08-.175-.128-.366-.224-.191-.096-1.139-.563-1.314-.626-.176-.064-.305-.096-.434.096-.128.191-.494.626-.605.755-.111.128-.222.144-.413.048-.191-.096-.806-.298-1.535-.949-.567-.506-.95-1.13-1.061-1.32-.111-.191-.012-.295.084-.39.086-.085.191-.224.287-.336.094-.111.127-.191.191-.319.064-.128.032-.24-.016-.336-.048-.096-.42-1.04-.591-1.422z" />
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
  }
}

function FormCanaisSection() {
  return (
    <Section id="form" alt>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
        <Reveal className="lg:col-span-7 space-y-5">
          <div className="space-y-3">
            <p className="eyebrow text-mateus-gold">Mensagem direta</p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-mateus-primary leading-tight">
              Escreva sua mensagem
            </h2>
            <AnimatedFilete width={64} />
            <p className="text-base text-mateus-muted leading-relaxed max-w-xl">
              Receberemos sua mensagem direto no escritório do Dr. Mateus.
              Retorno em até <strong className="text-mateus-primary">24h
              úteis</strong> no e-mail informado.
            </p>
          </div>
          <LeadForm origem="contato" />
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 space-y-5">
          <div className="space-y-3">
            <p className="eyebrow text-mateus-gold">Canais diretos</p>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-mateus-primary leading-tight">
              Ou fale por outro canal
            </h2>
            <AnimatedFilete width={64} />
          </div>

          <ul className="space-y-3">
            {CANAIS.map((c, i) => (
              <Reveal as="li" key={c.label} delay={0.15 + i * 0.06}>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="group block rounded-xl bg-mateus-white border border-mateus-accent/15 p-5 transition-all duration-300 hover:border-mateus-gold/40 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-mateus-bg-alt border border-mateus-accent/15 flex items-center justify-center text-mateus-primary group-hover:text-mateus-gold group-hover:border-mateus-gold/40 transition-colors">
                      <CanalIconSvg name={c.icon} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-eyebrow text-mateus-gold font-semibold mb-1">
                        {c.label}
                      </p>
                      <p className="font-mono text-sm text-mateus-primary font-semibold break-words group-hover:underline">
                        {c.value}
                      </p>
                      {c.note && (
                        <p className="text-xs text-mateus-muted/80 leading-relaxed mt-1.5">
                          {c.note}
                        </p>
                      )}
                    </div>
                    <span
                      aria-hidden
                      className="text-mateus-gold/70 group-hover:text-mateus-gold transition-all group-hover:translate-x-0.5 flex-shrink-0"
                    >
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

// =====================================================================
// 3. Bloco institucional compacto
// =====================================================================

const PILLS = [
  'Atendimento profissional',
  'Retorno em 24-48h úteis',
  'São Paulo, Brasil',
];

function InstitucionalSection() {
  return (
    <Section id="institucional">
      <Reveal className="max-w-3xl mx-auto text-center space-y-5">
        <p className="eyebrow text-mateus-gold">Como funciona</p>
        <p className="font-serif text-xl sm:text-2xl text-mateus-primary leading-snug">
          Toda mensagem é triada pelo escritório e encaminhada à área
          responsável — palestras, livros, parcerias institucionais ou
          imprensa.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-3">
          {PILLS.map((p) => (
            <span
              key={p}
              className="text-xs uppercase tracking-eyebrow text-mateus-gold border border-mateus-gold/30 rounded-full px-3 py-1.5 bg-mateus-bg-alt/50"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

// =====================================================================
// 4. CTA final compacto — bg navy
// =====================================================================

function CtaFinalSection() {
  return (
    <section className="relative overflow-hidden bg-mateus-primary py-16 lg:py-20">
      <DotGrid className="opacity-15" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 80% 30%, rgba(176, 133, 56, 0.16), transparent 60%), radial-gradient(circle at 15% 85%, rgba(176, 133, 56, 0.10), transparent 65%)',
        }}
      />
      <div className="container-content relative">
        <Reveal className="max-w-2xl mx-auto text-center space-y-5">
          <p className="eyebrow text-mateus-gold">Atalho rápido</p>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-mateus-white leading-tight">
            Já sabe que é palestra?
          </h2>
          <p className="text-base text-mateus-white/80 leading-relaxed">
            Vá direto ao formulário com agenda, formatos e valores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <CTAButton href="/palestras#booking" variant="gold" size="lg">
              Solicitar palestra →
            </CTAButton>
            <Link
              href="/livros"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold py-4 px-8 bg-transparent text-mateus-white border border-mateus-white/30 hover:border-mateus-white/70 hover:bg-mateus-white/[0.04] transition-all duration-200"
            >
              Ver os livros
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
