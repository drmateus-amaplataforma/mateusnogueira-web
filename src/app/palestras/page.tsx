import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { CTAButton } from '@/components/landing/ui/CTAButton';

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
