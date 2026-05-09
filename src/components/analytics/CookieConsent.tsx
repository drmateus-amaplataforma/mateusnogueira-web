'use client';

import { useEffect, useState, useCallback } from 'react';

type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentCategories & {
  version: 1;
  timestamp: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = 'mateusnogueira_consent_v1';
const EVENT_NAME = 'mateus:consent-change';

function readStored(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

function persist(categories: ConsentCategories) {
  const payload: StoredConsent = {
    version: 1,
    analytics: categories.analytics,
    marketing: categories.marketing,
    timestamp: Date.now(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.__mateusConsent = {
    analytics: categories.analytics,
    marketing: categories.marketing,
  };

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: categories.analytics ? 'granted' : 'denied',
      ad_storage: categories.marketing ? 'granted' : 'denied',
      ad_user_data: categories.marketing ? 'granted' : 'denied',
      ad_personalization: categories.marketing ? 'granted' : 'denied',
    });
  }

  window.dispatchEvent(
    new CustomEvent<ConsentCategories>(EVENT_NAME, { detail: categories })
  );
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (!stored) {
      setOpen(true);
      return;
    }
    setAnalytics(stored.analytics);
    setMarketing(stored.marketing);
  }, []);

  const handleAcceptAll = useCallback(() => {
    persist({ analytics: true, marketing: true });
    setAnalytics(true);
    setMarketing(true);
    setOpen(false);
    setShowCustom(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    persist({ analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setOpen(false);
    setShowCustom(false);
  }, []);

  const handleSaveCustom = useCallback(() => {
    persist({ analytics, marketing });
    setOpen(false);
    setShowCustom(false);
  }, [analytics, marketing]);

  if (!open) return null;

  return (
    <>
      {showCustom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center"
        >
          <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-mateus-bg p-6 shadow-2xl md:rounded-2xl md:p-8">
            <h2
              id="cookie-modal-title"
              className="font-serif font-bold text-2xl text-mateus-primary"
            >
              Preferências de cookies
            </h2>
            <div className="mt-2 h-[2px] w-16 bg-mateus-gold" />
            <p className="mt-4 text-sm leading-relaxed text-mateus-text/85">
              Usamos cookies para operar o site, entender o uso e mensurar
              campanhas. Você decide quais categorias autorizar. Cookies
              estritamente necessários são essenciais ao funcionamento e não
              podem ser desativados.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-mateus-accent/20 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-mateus-primary">
                      Estritamente necessários
                    </h3>
                    <p className="mt-1 text-xs text-mateus-muted leading-relaxed">
                      Garantem o funcionamento básico do site e a segurança.
                      Não podem ser desativados.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-mateus-primary px-3 py-1 text-xs font-medium text-mateus-bg">
                    Sempre ativo
                  </span>
                </div>
              </div>

              <label className="block cursor-pointer rounded-lg border border-mateus-accent/20 p-4 transition-colors hover:bg-mateus-bg-alt">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-mateus-primary">
                      Analytics
                    </h3>
                    <p className="mt-1 text-xs text-mateus-muted leading-relaxed">
                      Medições agregadas e anônimas de uso (Vercel Analytics,
                      Google Analytics 4) para entender quais conteúdos
                      funcionam.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-mateus-gold"
                    aria-label="Permitir cookies de analytics"
                  />
                </div>
              </label>

              <label className="block cursor-pointer rounded-lg border border-mateus-accent/20 p-4 transition-colors hover:bg-mateus-bg-alt">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-mateus-primary">
                      Marketing
                    </h3>
                    <p className="mt-1 text-xs text-mateus-muted leading-relaxed">
                      Pixel Meta e remarketing — mensuram conversões e
                      permitem campanhas mais relevantes para profissionais
                      interessados em avaliação metabólica e medicina do
                      estilo de vida.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-mateus-gold"
                    aria-label="Permitir cookies de marketing"
                  />
                </div>
              </label>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-mateus-muted">
              Você pode rever ou alterar estas preferências a qualquer momento
              na nossa{' '}
              <a
                href="/privacidade"
                className="underline hover:text-mateus-gold"
              >
                Política de Privacidade
              </a>
              .
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCustom(false)}
                className="inline-flex items-center justify-center rounded-md border border-mateus-accent/30 px-4 py-2 text-sm font-medium text-mateus-text transition-colors hover:bg-mateus-bg-alt"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="inline-flex items-center justify-center rounded-md bg-mateus-primary px-4 py-2 text-sm font-medium text-mateus-bg transition-colors hover:bg-mateus-primary-deep"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        role="dialog"
        aria-live="polite"
        aria-label="Aviso de cookies"
        className="fixed inset-x-0 bottom-0 z-[9999] border-t-2 border-mateus-gold bg-mateus-primary-deep text-mateus-bg shadow-2xl"
      >
        <div className="container-content py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-3xl">
              <p className="text-sm leading-relaxed">
                Usamos cookies para operar o site, medir o uso e personalizar
                campanhas. Cookies estritamente necessários são sempre
                ativados; analytics e marketing dependem do seu consentimento.
                Conheça os detalhes na nossa{' '}
                <a
                  href="/privacidade"
                  className="underline decoration-mateus-gold underline-offset-2 hover:text-mateus-gold"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:shrink-0">
              <button
                type="button"
                onClick={() => setShowCustom(true)}
                className="inline-flex items-center justify-center rounded-md border border-mateus-bg/40 px-4 py-2 text-sm font-medium text-mateus-bg transition-colors hover:bg-mateus-bg/10"
              >
                Personalizar
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="inline-flex items-center justify-center rounded-md border border-mateus-bg/40 px-4 py-2 text-sm font-medium text-mateus-bg transition-colors hover:bg-mateus-bg/10"
              >
                Rejeitar todos
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-md bg-mateus-gold px-4 py-2 text-sm font-semibold text-mateus-primary-deep transition-colors hover:brightness-110"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
