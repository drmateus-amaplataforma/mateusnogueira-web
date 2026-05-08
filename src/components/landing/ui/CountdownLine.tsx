import { daysUntil } from '@/lib/utils';
import { book } from '@/lib/design-tokens';

export function CountdownLine() {
  const days = daysUntil(book.preSaleEndDate);

  if (days === 0) {
    return (
      <span className="text-mateus-bg">
        Disponível na Editora Atheneu · capa dura · 2026
      </span>
    );
  }

  return (
    <span className="text-mateus-bg/80">
      Pré-venda Editora Atheneu · até 24 de maio ·{' '}
      <span className="text-mateus-gold font-semibold">
        {days} {days === 1 ? 'dia restante' : 'dias restantes'}
      </span>
    </span>
  );
}
