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

        <div className="mt-16 pt-8 border-t border-mateus-bg/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mateus-bg/50">
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
