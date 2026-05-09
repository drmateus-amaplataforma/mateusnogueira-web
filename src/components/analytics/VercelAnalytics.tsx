'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const CONSENT_EVENT = 'mateus:consent-change';

type ConsentDetail = { analytics: boolean; marketing: boolean };

export function VercelAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
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

  if (!enabled) return null;
  return <Analytics />;
}
