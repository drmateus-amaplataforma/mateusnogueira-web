import Image from 'next/image';
import Link from 'next/link';
import { author } from '@/lib/design-tokens';

const ECOSYSTEM = [
  {
    label: 'Plataforma AMA',
    href: 'https://amaplataforma.com.br',
    note: 'Sistema clínico médico',
  },
  {
    label: 'Vida Ativa Ensino',
    href: 'https://vidaativaensino.com.br',
    note: 'Formação em avaliação metabólica',
  },
  {
    label: 'Oxy Recovery',
    href: '#',
    note: 'Em breve',
  },
];

const BOOKS = [
  {
    label: 'Avaliação Metabólica Avançada',
    href: '/livros/avaliacao-metabolica',
    note: 'Editora Atheneu, 2026',
  },
  {
    label: 'Nova Medicina do Estilo de Vida',
    href: '/livros/nova-medicina',
    note: 'Editora Atheneu, 2026',
  },
];

// TODO Doutor: confirmar URL do LinkedIn pessoal
// (slug abaixo é placeholder até validação)
const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dr-mateus-antunes-nogueira',
    icon: 'linkedin' as const,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/drmateus.nogueira',
    icon: 'instagram' as const,
  },
];

function SocialIcon({ name, className }: { name: 'linkedin' | 'instagram'; className?: string }) {
  if (name === 'linkedin') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.778 13.019H3.555V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-mateus-primary-deep text-mateus-bg/80">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/monograma-man-d2-dark.png"
                alt="Monograma MAN D2"
                width={40}
                height={40}
                className="h-10 w-10 opacity-90"
              />
              <div className="space-y-0.5">
                <p className="font-extrabold text-mateus-bg text-base leading-tight">
                  {author.name}
                </p>
                <p className="text-[10px] uppercase tracking-eyebrow text-mateus-bg/50">
                  CRM-SP 97.070
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-mateus-bg/70">
              {author.specialties.join(' · ')}
              <br />
              Doutor pela Universidade de São Paulo
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-eyebrow text-mateus-bg/50">
              Ecossistema
            </p>
            <ul className="space-y-3">
              {ECOSYSTEM.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-sm text-mateus-bg group-hover:text-mateus-gold transition-colors">
                      {item.label} <span aria-hidden>→</span>
                    </span>
                    <span className="text-xs text-mateus-bg/50">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-eyebrow text-mateus-bg/50">
              Editora Atheneu
            </p>
            <ul className="space-y-3">
              {BOOKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group flex flex-col gap-0.5">
                    <span className="text-sm text-mateus-bg group-hover:text-mateus-gold transition-colors">
                      {item.label} <span aria-hidden>→</span>
                    </span>
                    <span className="text-xs text-mateus-bg/50">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mateus-bg/10">
          <a
            href="https://amaplataforma.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left transition-opacity"
          >
            <Image
              src="/brand/ama-simbolo.svg"
              alt=""
              width={32}
              height={32}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <p className="text-sm text-mateus-bg/70 leading-relaxed group-hover:text-mateus-bg transition-colors">
              O método descrito neste livro está em produção, em tempo real, na{' '}
              <span className="font-semibold text-mateus-bg group-hover:text-mateus-gold transition-colors">
                Plataforma AMA
              </span>
              <span className="hidden sm:inline"> · amaplataforma.com.br</span>
              <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-mateus-bg/10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <p className="text-xs uppercase tracking-eyebrow text-mateus-bg/50">
            Acompanhe Dr. Mateus
          </p>
          <ul className="flex items-center gap-3">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} de Dr. Mateus Antunes Nogueira`}
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-lg border border-mateus-bg/15 text-mateus-bg/60 hover:text-mateus-gold hover:border-mateus-gold/40 transition-colors"
                >
                  <SocialIcon name={item.icon} className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-mateus-bg/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mateus-bg/50">
          <p>
            © {new Date().getFullYear()} {author.name} · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-mateus-bg/80 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-mateus-bg/80 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
