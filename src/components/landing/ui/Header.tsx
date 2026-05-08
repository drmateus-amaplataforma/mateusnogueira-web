'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { book } from '@/lib/design-tokens';

const MENU = [
  { href: '#metodo', label: 'O método' },
  { href: '#conteudo', label: 'Sumário' },
  { href: '#autor', label: 'Autor' },
  { href: '#faq', label: 'Perguntas frequentes' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          href="/livros/avaliacao-metabolica"
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
          {MENU.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden md:inline-flex text-sm text-mateus-muted hover:text-mateus-primary transition-colors px-3 py-2"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={book.ctaUrl('header')}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-mateus-bg bg-mateus-primary hover:bg-mateus-primary-deep px-4 py-2 rounded-lg shadow-cta-primary transition-all duration-200"
          >
            <span className="hidden sm:inline">Comprar na Atheneu</span>
            <span className="sm:hidden">Comprar</span>
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
