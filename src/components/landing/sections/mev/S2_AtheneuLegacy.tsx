import { daysUntil } from '@/lib/utils';
import { bookMev } from '@/lib/design-tokens';

export function MevS2_AtheneuLegacy() {
  const days = daysUntil(bookMev.preSaleEndDate);
  const showPreSale = days > 0;

  return (
    <section className="bg-mateus-primary text-mateus-bg">
      <div className="container-content py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 text-center md:text-left">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="font-extrabold tracking-tight">
              Editora Atheneu, desde 1928,
            </span>{' '}
            <span className="text-mateus-bg/75">
              publicando conhecimento que forma gerações na saúde.
            </span>
          </p>

          <div className="flex items-center justify-center md:justify-end gap-2 text-sm">
            {showPreSale ? (
              <>
                <span className="text-mateus-bg/70">Pré-venda · até 24 de maio · </span>
                <span className="text-mateus-lilas-light font-semibold whitespace-nowrap">
                  {days} {days === 1 ? 'dia restante' : 'dias restantes'}
                </span>
              </>
            ) : (
              <span className="text-mateus-bg/85">
                Disponível na Editora Atheneu · {bookMev.publicationYear}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
