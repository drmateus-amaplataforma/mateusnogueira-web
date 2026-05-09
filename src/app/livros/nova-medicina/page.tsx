import type { Metadata } from 'next';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { getBookSchema, jsonLdScriptProps } from '@/lib/seo/jsonld';
import { MevS1_Hero } from '@/components/landing/sections/mev/S1_Hero';
import { MevS2_AtheneuLegacy } from '@/components/landing/sections/mev/S2_AtheneuLegacy';
import { MevS3_ParaQuem } from '@/components/landing/sections/mev/S3_ParaQuem';
import { MevS4_Anedota } from '@/components/landing/sections/mev/S4_Anedota';
import { MevS4b_CasoPaciente } from '@/components/landing/sections/mev/S4b_CasoPaciente';
import { MevS5_Sumario } from '@/components/landing/sections/mev/S5_Sumario';
import { MevS6_Autor } from '@/components/landing/sections/mev/S6_Autor';
import { MevS7_Nelson } from '@/components/landing/sections/mev/S7_Nelson';
import { MevS7b_RoteiroSemana } from '@/components/landing/sections/mev/S7b_RoteiroSemana';
import { MevS8_FaqCta } from '@/components/landing/sections/mev/S8_FaqCta';

export const metadata: Metadata = {
  title: 'Nova Medicina do Estilo de Vida — Dr. Mateus Antunes Nogueira',
  description:
    'Não é mais um livro sobre dieta. É o convite para entender como seu corpo realmente funciona — e por que tudo o que te disseram sobre calorias e disciplina passa longe do que a ciência hoje sabe. Editora Atheneu, 2026.',
  alternates: { canonical: '/livros/nova-medicina' },
  openGraph: {
    title: 'Nova Medicina do Estilo de Vida — Prevenção, Tratamento e Longevidade',
    description:
      'O livro de saúde que faltava para o público leigo. Linguagem clara, ciência rigorosa, sem culpa e sem promessas mágicas. Editora Atheneu, 2026.',
    url: '/livros/nova-medicina',
    type: 'book',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Medicina do Estilo de Vida',
    description:
      'O convite para entender o próprio corpo. Sem dieta, sem culpa, sem jargão. Atheneu, 2026.',
  },
};

export default function NovaMedicinaPage() {
  return (
    <>
      <script {...jsonLdScriptProps(getBookSchema('nova-medicina'))} />
      <Header mode="lp2" />
      <main>
        <MevS1_Hero />
        <MevS2_AtheneuLegacy />
        <MevS3_ParaQuem />
        <MevS4_Anedota />
        <MevS5_Sumario />
        <MevS4b_CasoPaciente />
        <MevS6_Autor />
        <MevS7_Nelson />
        <MevS7b_RoteiroSemana />
        <MevS8_FaqCta />
      </main>
      <Footer />
    </>
  );
}
