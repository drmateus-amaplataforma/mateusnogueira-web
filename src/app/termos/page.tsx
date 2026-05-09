import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de Uso do site mateusnogueira.com.br — condições de acesso, uso de conteúdo, propriedade intelectual e responsabilidades.',
  alternates: { canonical: '/termos' },
  robots: { index: true, follow: true },
};

const SECOES: ReadonlyArray<{
  n: number;
  titulo: string;
  paragrafos: ReadonlyArray<string | { tipo: 'lista'; itens: string[] }>;
}> = [
  {
    n: 1,
    titulo: 'Aceitação dos Termos',
    paragrafos: [
      'Ao acessar ou utilizar o site mateusnogueira.com.br ("Site"), você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso ("Termos") e com a Política de Privacidade.',
      'Se você não concordar com qualquer parte destes Termos, não utilize o Site.',
    ],
  },
  {
    n: 2,
    titulo: 'Sobre o conteúdo do Site',
    paragrafos: [
      'O Site apresenta conteúdo informacional e institucional sobre as atividades editoriais, científicas e profissionais de Mateus Antunes Nogueira (CRM-SP 97.070), incluindo:',
      {
        tipo: 'lista',
        itens: [
          'Páginas das obras publicadas pela Editora Atheneu',
          'Informações sobre palestras, workshops e mentorias',
          'Materiais de imprensa e mídia',
          'Canais de contato institucional',
        ],
      },
      'O conteúdo possui finalidade educativa e informativa e não substitui consulta médica, diagnóstico ou tratamento individualizado. Sempre consulte um profissional habilitado antes de tomar decisões clínicas baseadas no conteúdo aqui apresentado.',
    ],
  },
  {
    n: 3,
    titulo: 'Propriedade intelectual',
    paragrafos: [
      'Todo o conteúdo do Site — textos, imagens, ilustrações, layout, logotipos, marcas, código-fonte e materiais relacionados — é protegido pelas leis de propriedade intelectual aplicáveis (Lei 9.610/1998 — Direitos Autorais, Lei 9.279/1996 — Propriedade Industrial).',
      'Os direitos sobre os livros publicados pertencem à Editora Atheneu conforme contrato editorial. As marcas associadas ao ecossistema (AMA Plataforma, Vida Ativa Ensino, Oxy Recovery) pertencem às respectivas pessoas jurídicas titulares.',
      'É vedada a reprodução, distribuição, modificação, exibição pública ou criação de obras derivadas sem autorização prévia e expressa.',
    ],
  },
  {
    n: 4,
    titulo: 'Uso permitido',
    paragrafos: [
      'Você pode:',
      {
        tipo: 'lista',
        itens: [
          'Acessar e visualizar o conteúdo para fins pessoais e não comerciais',
          'Compartilhar links para páginas do Site em redes sociais e meios de comunicação',
          'Citar trechos breves com indicação de fonte para uso jornalístico, acadêmico ou educacional',
          'Solicitar contato por meio dos formulários disponibilizados',
        ],
      },
      'Qualquer uso comercial, incluindo reprodução em cursos, materiais didáticos pagos ou conteúdo monetizado, requer autorização prévia por escrito.',
    ],
  },
  {
    n: 5,
    titulo: 'Uso vedado',
    paragrafos: [
      'Você concorda em não:',
      {
        tipo: 'lista',
        itens: [
          'Utilizar o Site para qualquer fim ilícito ou que possa causar dano ao Controlador, a outros usuários ou a terceiros',
          'Tentar obter acesso não autorizado a sistemas, contas ou áreas restritas',
          'Realizar engenharia reversa, scraping massivo, mineração de dados ou ataques de qualquer natureza',
          'Reproduzir ou redistribuir conteúdo em violação aos direitos de propriedade intelectual',
          'Transmitir conteúdo difamatório, obsceno, fraudulento ou que viole direitos de terceiros',
        ],
      },
    ],
  },
  {
    n: 6,
    titulo: 'Formulários e captação de leads',
    paragrafos: [
      'Ao preencher qualquer formulário do Site, você declara que os dados informados são verdadeiros, completos e atualizados. Você também autoriza o tratamento dos dados conforme nossa Política de Privacidade.',
      'O Controlador pode recusar atender solicitações que se mostrem fraudulentas, abusivas ou em desacordo com os Termos.',
    ],
  },
  {
    n: 7,
    titulo: 'Links externos',
    paragrafos: [
      'O Site contém links para sites de terceiros (Editora Atheneu, AMA Plataforma, Vida Ativa Ensino, redes sociais, entre outros). O Controlador não tem responsabilidade pelo conteúdo, políticas de privacidade ou práticas desses sites externos.',
      'O acesso a sites de terceiros é por conta e risco do usuário.',
    ],
  },
  {
    n: 8,
    titulo: 'Limitação de responsabilidade',
    paragrafos: [
      'Empenhamos esforços razoáveis para manter o Site disponível, atualizado e livre de erros, mas o conteúdo é fornecido "no estado em que se encontra", sem garantias de qualquer tipo.',
      'Não respondemos por:',
      {
        tipo: 'lista',
        itens: [
          'Indisponibilidades temporárias decorrentes de manutenção, falhas de provedor ou eventos de força maior',
          'Decisões que você tome com base no conteúdo informacional aqui apresentado',
          'Perdas e danos indiretos, incidentais ou consequenciais',
          'Conteúdo, condutas ou políticas de sites de terceiros vinculados',
        ],
      },
    ],
  },
  {
    n: 9,
    titulo: 'Alterações nos Termos',
    paragrafos: [
      'Estes Termos podem ser atualizados a qualquer momento para refletir mudanças regulatórias, operacionais ou de produto. A versão vigente é sempre a publicada nesta página, com a data de "última atualização" indicada ao final.',
      'O uso continuado do Site após a publicação de Termos atualizados constitui aceitação tácita das novas condições.',
    ],
  },
  {
    n: 10,
    titulo: 'Lei aplicável e foro',
    paragrafos: [
      'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes, com renúncia a qualquer outro, por mais privilegiado que seja.',
    ],
  },
];

export default function TermosPage() {
  return (
    <>
      <Header mode="institutional" />
      <main className="bg-mateus-bg pt-12 pb-24 lg:pt-20 lg:pb-32">
        <article className="container-content max-w-3xl">
          <header className="space-y-4 mb-12">
            <p className="eyebrow">Documentos legais</p>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-mateus-primary leading-[1.05] tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-base text-mateus-muted leading-relaxed">
              Condições de acesso e uso do site mateusnogueira.com.br.
            </p>
            <p className="text-xs uppercase tracking-eyebrow text-mateus-muted/70">
              Última atualização: 09 de maio de 2026
            </p>
          </header>

          <div className="space-y-12">
            {SECOES.map((s) => (
              <section key={s.n} className="space-y-4">
                <h2 className="font-serif font-bold text-xl sm:text-2xl text-mateus-primary leading-tight">
                  <span className="text-mateus-gold mr-3">
                    {String(s.n).padStart(2, '0')}
                  </span>
                  {s.titulo}
                </h2>
                {s.paragrafos.map((p, i) => {
                  if (typeof p === 'string') {
                    return (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-mateus-text/85 leading-relaxed"
                      >
                        {p}
                      </p>
                    );
                  }
                  return (
                    <ul key={i} className="space-y-2 pl-2">
                      {p.itens.map((item) => (
                        <li
                          key={item}
                          className="text-sm sm:text-base text-mateus-text/85 leading-relaxed flex items-start gap-3"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-mateus-gold flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </section>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-mateus-accent/15 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-mateus-muted">
              Versão 1.0 · 09 de maio de 2026
            </p>
            <Link
              href="/privacidade"
              className="text-sm font-semibold text-mateus-primary hover:text-mateus-gold transition-colors"
            >
              Ver Política de Privacidade →
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
