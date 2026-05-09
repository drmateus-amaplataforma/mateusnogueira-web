'use client';

import { useEffect, useState } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
const CONSENT_EVENT = 'mateus:consent-change';

declare global {
  interface Window {
    __mateusGTMInitialized?: boolean;
  }
}

type ConsentDetail = { analytics: boolean; marketing: boolean };

function bootGTM(containerId: string) {
  if (typeof window === 'undefined') return;
  if (window.__mateusGTMInitialized) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(
    containerId
  )}`;
  document.head.appendChild(script);
  window.__mateusGTMInitialized = true;
}

export function GoogleTagManager() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!GTM_ID) return;
    if (typeof window === 'undefined') return;
    if (window.__mateusConsent?.analytics) {
      setEnabled(true);
    }
    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentDetail>).detail;
      setEnabled(Boolean(detail?.analytics));
    };
    window.addEventListener(CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentChange);
  }, []);

  useEffect(() => {
    if (enabled && GTM_ID) bootGTM(GTM_ID);
  }, [enabled]);

  // LGPD: sem JS, sem banner, sem consent — não disparamos noscript fallback.
  return null;
}
