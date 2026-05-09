/**
 * Tracking helpers — gated por consent (LGPD).
 *
 * `trackPixel` dispara para Meta Pixel (consent.marketing).
 * `trackDataLayer` empilha em GTM/GA dataLayer (consent.analytics).
 * `trackBoth` faz os dois — útil para eventos transversais (Lead, scroll, click).
 *
 * Sempre seguro chamar: se o usuário não consentiu, vira no-op silencioso.
 * Sempre seguro chamar de Server Components também (no-op em SSR).
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: unknown;
    __mateusConsent?: { analytics: boolean; marketing: boolean };
  }
}

function hasMarketing(): boolean {
  return (
    typeof window !== 'undefined' && Boolean(window.__mateusConsent?.marketing)
  );
}

function hasAnalytics(): boolean {
  return (
    typeof window !== 'undefined' && Boolean(window.__mateusConsent?.analytics)
  );
}

export function trackPixel(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (!hasMarketing()) return;
  window.fbq?.('track', eventName, params);
}

export function trackDataLayer(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window === 'undefined') return;
  if (!hasAnalytics()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackBoth(
  pixelEventName: string,
  dataLayerEventName: string,
  params?: Record<string, unknown>
) {
  trackPixel(pixelEventName, params);
  trackDataLayer(dataLayerEventName, params);
}
