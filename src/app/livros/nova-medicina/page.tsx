import type { Metadata } from 'next';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { MevS1_Hero } from '@/components/landing/sections/mev/S1_Hero';
import { MevS2_AtheneuLegacy } from '@/components/landing/sections/mev/S2_AtheneuLegacy';
import { MevS4_DadosVirais } from '@/components/landing/sections/mev/S4_DadosVirais';
import { MevS4b_Casos } from '@/components/landing/sections/mev/S4b_Casos';
import { MevS5_Sumario } from '@/components/landing/sections/mev/S5_Sumario';
import { MevS6_Autor } from '@/components/landing/sections/mev/S6_Autor';
import { MevS7_Nelson } from '@/components/landing/sections/mev/S7_Nelson';
import { MevS3_ParaQuem } from '@/components/landing/sections/mev/S3_ParaQuem';
import { MevS8_FaqCta } from '@/components/landing/sections/mev/S8_FaqCta';

export const metadata: Metadata = {
  title: 'Nova Medicina do Estilo de Vida',
  description:
    'Os 6 pilares que decidem como você vai viver os próximos 30, 50 ou 70 anos. Sem dieta da moda, sem promessas vazias — só a ciência que mudou tudo. Editora Atheneu, 2026.',
  alternates: { canonical: '/livros/nova-medicina' },
  openGraph: {
    title: 'Nova Medicina do Estilo de Vida',
    description:
      'Os 6 pilares para viver mais — e melhor. A ciência que mudou tudo, em linguagem que você entende. Editora Atheneu, 2026.',
    url: '/livros/nova-medicina',
    type: 'book',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Medicina do Estilo de Vida',
    description:
      'Os 6 pilares para viver mais — e melhor. A ciência que mudou tudo, em linguagem que você entende.',
  },
};

export default function NovaMedicinaPage() {
  return (
    <>
      <Header />
      <main>
        <MevS1_Hero />
        <MevS2_AtheneuLegacy />
        <MevS4_DadosVirais />
        <MevS4b_Casos />
        <MevS5_Sumario />
        <MevS6_Autor />
        <MevS7_Nelson />
        <MevS3_ParaQuem />
        <MevS8_FaqCta />
      </main>
      <Footer />
    </>
  );
}
