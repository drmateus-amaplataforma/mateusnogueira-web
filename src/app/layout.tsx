import type { Metadata } from 'next';
import { DM_Sans, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { MotionProvider } from '@/components/landing/ui/MotionProvider';
import { CookieConsent } from '@/components/analytics/CookieConsent';
import { MetaPixel } from '@/components/analytics/MetaPixel';
import { VercelAnalytics } from '@/components/analytics/VercelAnalytics';
import { GoogleTagManager } from '@/components/analytics/GoogleTagManager';
import {
  getPersonSchema,
  getWebSiteSchema,
  jsonLdScriptProps,
} from '@/lib/seo/jsonld';

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

// Stub Consent Mode v2 — DEVE rodar antes de qualquer Pixel/GA/GTM.
// Default `denied` para todas as categorias passíveis de consentimento.
// Reaplica `consent update` se o usuário já decidiu em visita anterior
// (lê localStorage `mateusnogueira_consent_v1`). Sem dependência externa
// e gtag stub ficam disponíveis para o restante do app.
const CONSENT_MODE_STUB = `
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  try {
    var raw = localStorage.getItem('mateusnogueira_consent_v1');
    if (raw) {
      var c = JSON.parse(raw);
      if (c && c.version === 1) {
        gtag('consent', 'update', {
          analytics_storage: c.analytics ? 'granted' : 'denied',
          ad_storage: c.marketing ? 'granted' : 'denied',
          ad_user_data: c.marketing ? 'granted' : 'denied',
          ad_personalization: c.marketing ? 'granted' : 'denied'
        });
        window.__mateusConsent = { analytics: !!c.analytics, marketing: !!c.marketing };
      }
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${crimsonPro.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_STUB }} />
        <script {...jsonLdScriptProps(getPersonSchema())} />
        <script {...jsonLdScriptProps(getWebSiteSchema())} />
      </head>
      <body className="min-h-screen bg-mateus-bg text-mateus-text antialiased">
        <GoogleTagManager />
        <MetaPixel />
        <VercelAnalytics />
        <MotionProvider>{children}</MotionProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
