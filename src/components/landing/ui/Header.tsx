'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { book, bookMev } from '@/lib/design-tokens';

export type HeaderMode = 'institutional' | 'lp1' | 'lp2';

interface HeaderProps {
  mode?: HeaderMode;
}

interface MenuItem {
  href: string;
  label: string;
}

interface CtaConfig {
  href: string;
  labelDesktop: string;
  labelMobile: string;
  external: boolean;
  data: string;
}

const MENU_INSTITUTIONAL: MenuItem[] = [
  { href: '/palestras', label: 'Palestras' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/livros', label: 'Livros' },
  { href: '/midia', label: 'Mídia' },
  { href: '/contato', label: 'Contato' },
];

const MENU_LP_BOOK: MenuItem[] = [
  { href: '#metodo', label: 'O método' },
  { href: '#conteudo', label: 'Sumário' },
  { href: '#autor', label: 'Autor' },
  { href: '#faq', label: 'Perguntas frequentes' },
];

function ctaFor(mode: HeaderMode): CtaConfig {
  switch (mode) {
    case 'lp1':
      return {
        href: book.ctaUrl('header'),
        labelDesktop: 'Comprar na Atheneu',
        labelMobile: 'Comprar',
        external: true,
        data: 'header-lp1',
      };
    case 'lp2':
      return {
        href: bookMev.ctaUrl('header'),
        labelDesktop: 'Comprar na Atheneu',
        labelMobile: 'Comprar',
        external: true,
        data: 'header-lp2',
      };
    case 'institutional':
    default:
      return {
        href: '/palestras#contato',
        labelDesktop: 'Solicitar palestra',
        labelMobile: 'Palestra',
        external: false,
        data: 'header-institutional',
      };
  }
}

function menuFor(mode: HeaderMode): MenuItem[] {
  return mode === 'institutional' ? MENU_INSTITUTIONAL : MENU_LP_BOOK;
}

export function Header({ mode = 'institutional' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menu = menuFor(mode);
  const cta = ctaFor(mode);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-mateus-bg/85 backdrop-blur-xl border-b border-mateus-accent/15 shadow-sm'
          : 'bg-mateus-bg/0 border-b border-transparent'
      )}
    >
      <div className="container-content flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Dr. Mateus Antunes Nogueira — início"
        >
          <Image
            src="/brand/monograma-man-d2.png"
            alt="Monograma MAN D2 — Dr. Mateus Antunes Nogueira"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-mateus-primary font-extrabold tracking-tight text-sm sm:text-base">
              Dr. Mateus Antunes Nogueira
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-eyebrow text-mateus-muted">
              CRM-SP 97.070
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {menu.map((item) =>
            item.href.startsWith('#') ? (
              <a
                key={item.href}
                href={item.href}
                className="hidden md:inline-flex text-sm text-mateus-muted hover:text-mateus-primary transition-colors px-3 py-2"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hidden md:inline-flex text-sm text-mateus-muted hover:text-mateus-primary transition-colors px-3 py-2"
              >
                {item.label}
              </Link>
            )
          )}
          <CtaLink {...cta} />
        </nav>
      </div>
    </header>
  );
}

function CtaLink({ href, labelDesktop, labelMobile, external, data }: CtaConfig) {
  const className = cn(
    'inline-flex items-center gap-1.5 text-sm font-semibold text-mateus-bg',
    'bg-mateus-primary hover:bg-mateus-primary-deep px-4 py-2 rounded-lg',
    'shadow-cta-primary transition-all duration-200'
  );
  const inner = (
    <>
      <span className="hidden sm:inline">{labelDesktop}</span>
      <span className="sm:hidden">{labelMobile}</span>
      <span aria-hidden>→</span>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cta={data}
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} data-cta={data} className={className}>
      {inner}
    </Link>
  );
}
