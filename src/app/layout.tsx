import type { Metadata } from 'next';
import { DM_Sans, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { MotionProvider } from '@/components/landing/ui/MotionProvider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mateusnogueira.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dr. Mateus Antunes Nogueira',
    template: '%s · Dr. Mateus Antunes Nogueira',
  },
  description:
    'Cirurgião do aparelho digestivo, médico do esporte e nutrólogo. Doutor pela USP. Autor de Avaliação Metabólica Avançada na Saúde e no Desempenho (Atheneu, 2026).',
  authors: [{ name: 'Dr. Mateus Antunes Nogueira' }],
  creator: 'Dr. Mateus Antunes Nogueira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Dr. Mateus Antunes Nogueira',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${crimsonPro.variable}`}>
      <body className="min-h-screen bg-mateus-bg text-mateus-text antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
