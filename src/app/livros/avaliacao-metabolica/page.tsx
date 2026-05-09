import type { Metadata } from 'next';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';
import { S1_Hero } from '@/components/landing/sections/S1_Hero';
import { S2_AtheneuLegacy } from '@/components/landing/sections/S2_AtheneuLegacy';
import { S3_Sumario } from '@/components/landing/sections/S3_Sumario';
import { S4_PagePractice } from '@/components/landing/sections/S4_PagePractice';
import { S5_InsideBook } from '@/components/landing/sections/S5_InsideBook';
import { S6_Autor } from '@/components/landing/sections/S6_Autor';
import { S7_Werutsky } from '@/components/landing/sections/S7_Werutsky';
import { S8_FaqCta } from '@/components/landing/sections/S8_FaqCta';

export const metadata: Metadata = {
  title: 'Avaliação Metabólica Avançada na Saúde e no Desempenho',
  description:
    'O método para dominar Calorimetria Indireta e Teste Cardiopulmonar na prática clínica. MEV 3.0. Editora Atheneu, 2026.',
  alternates: { canonical: '/livros/avaliacao-metabolica' },
  openGraph: {
    title: 'Avaliação Metabólica Avançada na Saúde e no Desempenho',
    description:
      'Da estimativa à medição: o método MEV 3.0 para Calorimetria Indireta e Teste Cardiopulmonar. Editora Atheneu, 2026.',
    url: '/livros/avaliacao-metabolica',
    type: 'book',
    locale: 'pt_BR',
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avaliação Metabólica Avançada na Saúde e no Desempenho',
    description:
      'Da estimativa à medição: o método MEV 3.0 para Calorimetria Indireta e Teste Cardiopulmonar. Editora Atheneu, 2026.',
  },
};

export default function AvaliacaoMetabolicaPage() {
  return (
    <>
      <Header mode="lp1" />
      <main>
        <S1_Hero />
        <S2_AtheneuLegacy />
        <S4_PagePractice />
        <S3_Sumario />
        <S5_InsideBook />
        <S6_Autor />
        <S7_Werutsky />
        <S8_FaqCta />
      </main>
      <Footer />
    </>
  );
}
