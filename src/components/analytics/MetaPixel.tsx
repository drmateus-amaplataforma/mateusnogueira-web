'use client';

import { useEffect } from 'react';
import { trackPixel, trackDataLayer } from '@/lib/track';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CONSENT_EVENT = 'mateus:consent-change';

declare global {
  interface Window {
    __mateusMetaPixelInitialized?: boolean;
    __mateusScrollDepthFired?: boolean;
  }
}

type ConsentDetail = { analytics: boolean; marketing: boolean };

function hasMarketingConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.__mateusConsent?.marketing);
}

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean(window.__mateusConsent?.analytics);
}

function bootPixel() {
  if (!PIXEL_ID || typeof window === 'undefined') return;
  if (window.__mateusMetaPixelInitialized) return;
  if (window.fbq) return;

  type FbqFn = {
    (...args: unknown[]): void;
    callMethod?: (...args: unknown[]) => void;
    queue?: unknown[];
    push?: FbqFn;
    loaded?: boolean;
    version?: string;
  };
  const fbq = function (...args: unknown[]) {
    fbq.callMethod
      ? fbq.callMethod.apply(fbq, args)
      : fbq.queue!.push(args);
  } as FbqFn;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  window.__mateusMetaPixelInitialized = true;
}

const OUTBOUND_PATTERNS: ReadonlyArray<{ pattern: RegExp; channel: string }> = [
  { pattern: /atheneu\.com\.br/i, channel: 'atheneu' },
  { pattern: /amaplataforma\.com\.br/i, channel: 'ama_plataforma' },
  { pattern: /vidaativaensino\.com\.br/i, channel: 'vae_ensino' },
  { pattern: /wa\.me\//i, channel: 'whatsapp' },
  { pattern: /whatsapp\.com\//i, channel: 'whatsapp' },
];

function classifyOutbound(href: string): string | null {
  for (const { pattern, channel } of OUTBOUND_PATTERNS) {
    if (pattern.test(href)) return channel;
  }
  return null;
}

export function MetaPixel() {
  useEffect(() => {
    const onScroll = () => {
      if (!hasMarketingConsent() && !hasAnalyticsConsent()) return;
      if (window.__mateusScrollDepthFired) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total <= 0) return;
      if (scrolled / total >= 0.5) {
        window.__mateusScrollDepthFired = true;
        trackPixel('ViewContent', { content_name: 'scroll_50' });
        trackDataLayer('scroll_50', { event_category: 'engagement' });
      }
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href || '';
      if (!href) return;

      const channel = classifyOutbound(href);
      if (!channel) return;

      if (channel === 'atheneu') {
        trackPixel('InitiateCheckout', {
          content_name: 'atheneu_book',
          content_ids: [link.pathname || href],
          currency: 'BRL',
        });
        trackDataLayer('outbound_click', {
          channel,
          destination: href,
        });
        return;
      }

      trackDataLayer('outbound_click', {
        channel,
        destination: href,
      });
    };

    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentDetail>).detail;
      if (detail?.marketing) bootPixel();
    };

    if (PIXEL_ID && hasMarketingConsent()) bootPixel();

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    window.addEventListener(CONSENT_EVENT, onConsentChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      window.removeEventListener(CONSENT_EVENT, onConsentChange);
    };
  }, []);

  // LGPD: sem JS, não há banner nem consent — não disparamos noscript
  // fallback do Pixel. Trade-off correto.
  return null;
}
