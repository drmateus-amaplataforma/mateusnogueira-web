'use client';

import { useState, useRef, type FormEvent } from 'react';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  livro: 'avaliacao-metabolica' | 'nova-medicina';
}

const inputCls = cn(
  'w-full bg-mateus-white border border-mateus-accent/20 rounded-lg',
  'px-4 py-3 text-sm text-mateus-text placeholder:text-mateus-muted/60',
  'focus:outline-none focus:border-mateus-primary/50 focus:ring-1 focus:ring-mateus-primary/20',
  'transition-colors'
);

const labelCls = 'text-xs font-medium text-mateus-muted uppercase tracking-eyebrow';

export function LeadForm({ livro }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('Não foi possível registrar sua inscrição agora.');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.lgpd !== 'on') {
      setErrorMsg('É necessário concordar com o uso dos dados para se inscrever.');
      setStatus('error');
      return;
    }

    const params =
      typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const payload = {
      ...data,
      livro,
      utm_source: params?.get('utm_source') ?? '',
      utm_medium: params?.get('utm_medium') ?? '',
      utm_campaign: params?.get('utm_campaign') ?? '',
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setErrorMsg('Não foi possível registrar agora. Tente novamente em instantes.');
        setStatus('error');
        return;
      }
      setStatus('success');
      formRef.current?.reset();
    } catch {
      setErrorMsg('Não foi possível registrar agora. Verifique sua conexão.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-mateus-accent/20 bg-mateus-white p-8 text-center space-y-4 shadow-card-soft">
        <div className="mx-auto w-12 h-12 rounded-full bg-mateus-gold/10 border border-mateus-gold/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-mateus-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-mateus-primary">Inscrição registrada.</h3>
        <p className="text-sm text-mateus-muted leading-relaxed">
          Você receberá em seu e-mail a{' '}
          <strong className="text-mateus-primary">amostra oficial Atheneu</strong> e novidades
          sobre o lançamento, eventos científicos e materiais complementares.
        </p>
        <a
          href="/livros/avaliacao/amostra-livro.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-mateus-primary underline hover:text-mateus-primary-deep"
        >
          Baixar amostra agora →
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-mateus-accent/15 bg-mateus-white p-8 space-y-5 shadow-card-soft"
    >
      <div className="space-y-1.5">
        <label htmlFor="lead-nome" className={labelCls}>
          Nome completo
        </label>
        <input
          id="lead-nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-email" className={labelCls}>
          E-mail
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="nome@exemplo.com"
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="lead-whatsapp" className={cn(labelCls, 'flex items-center gap-2')}>
          <span>WhatsApp</span>
          <span className="text-[10px] normal-case tracking-normal text-mateus-muted/60">
            (opcional)
          </span>
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="(11) 99999-9999"
          pattern="\(?\d{2}\)?\s?9?\d{4}-?\d{4}"
          title="Formato: (11) 99999-9999"
          className={inputCls}
        />
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer group pt-1">
        <input
          type="checkbox"
          name="lgpd"
          required
          className="mt-0.5 flex-shrink-0 accent-mateus-primary w-4 h-4 cursor-pointer"
        />
        <span className="text-xs text-mateus-muted leading-snug group-hover:text-mateus-primary transition-colors">
          Autorizo o uso dos meus dados conforme a{' '}
          <a href="/privacidade" className="underline hover:text-mateus-primary">
            Política de Privacidade
          </a>{' '}
          e a Lei Geral de Proteção de Dados (LGPD).
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'w-full rounded-lg bg-mateus-primary text-mateus-bg font-semibold py-4',
          'hover:bg-mateus-primary-deep transition-all duration-200',
          'shadow-cta-primary disabled:opacity-60 disabled:cursor-not-allowed'
        )}
      >
        {status === 'loading' ? 'Enviando…' : 'Receber amostra + novidades →'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600 text-center" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="text-xs text-mateus-muted text-center leading-relaxed">
        Você receberá a amostra oficial Atheneu em PDF + avisos do autor. Sem spam. Pode descadastrar a qualquer momento.
      </p>
    </form>
  );
}
