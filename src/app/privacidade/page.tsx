import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/landing/ui/Header';
import { Footer } from '@/components/landing/ui/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade e tratamento de dados pessoais conforme LGPD (Lei 13.709/2018) — site mateusnogueira.com.br.',
  alternates: { canonical: '/privacidade' },
  robots: { index: true, follow: true },
};

const SECOES: ReadonlyArray<{
  n: number;
  titulo: string;
  paragrafos: ReadonlyArray<string | { tipo: 'lista'; itens: string[] }>;
}> = [
  {
    n: 1,
    titulo: 'Quem somos e a quem se aplica esta política',
    paragrafos: [
      'Esta Política de Privacidade descreve como Mateus Antunes Nogueira (CRM-SP 97.070) — pessoa física, doravante "o Controlador" — coleta, utiliza, armazena e compartilha dados pessoais coletados por meio do site mateusnogueira.com.br ("Site").',
      'Aplica-se a todos os visitantes do Site e a quem se inscreve em formulários de captura de leads, solicita palestras, contata a equipe ou interage com qualquer ferramenta de comunicação aqui hospedada.',
      'O tratamento segue a Lei Geral de Proteção de Dados (Lei 13.709/2018 — LGPD) e melhores práticas internacionais (GDPR onde aplicável).',
    ],
  },
  {
    n: 2,
    titulo: 'Dados pessoais coletados',
    paragrafos: [
      'Coletamos dados que você nos fornece voluntariamente em formulários do Site:',
      {
        tipo: 'lista',
        itens: [
          'Nome completo (obrigatório)',
          'E-mail (obrigatório)',
          'Telefone/WhatsApp (opcional)',
          'Especialidade médica ou área de atuação (opcional)',
          'Cidade/estado e empresa/instituição (opcional, em formulários de palestra)',
          'Mensagens de texto livre que você decidir enviar',
        ],
      },
      'Coletamos automaticamente, mediante consentimento, dados técnicos de navegação: endereço IP, tipo e versão de navegador, sistema operacional, páginas visitadas, parâmetros UTM da campanha de origem, data/hora de acesso e identificadores de dispositivo agregados.',
    ],
  },
  {
    n: 3,
    titulo: 'Finalidades do tratamento',
    paragrafos: [
      'Seus dados são utilizados exclusivamente para:',
      {
        tipo: 'lista',
        itens: [
          'Responder solicitações enviadas (palestras, mídia, contato institucional, materiais de imprensa)',
          'Enviar materiais editoriais e atualizações sobre os livros publicados pela Editora Atheneu, eventos científicos e produções relacionadas ao Dr. Mateus',
          'Mensurar audiência e desempenho de conteúdo (analytics agregado e anônimo)',
          'Otimizar campanhas de divulgação (apenas se você consentir com cookies de marketing)',
          'Cumprir obrigações legais e regulatórias',
        ],
      },
      'Não utilizamos os dados para decisões automatizadas que produzam efeitos jurídicos relevantes nem para perfilamento sensível.',
    ],
  },
  {
    n: 4,
    titulo: 'Bases legais (Art. 7º LGPD)',
    paragrafos: [
      'O tratamento se ampara nas seguintes bases legais:',
      {
        tipo: 'lista',
        itens: [
          'Consentimento (Art. 7º, I) — para envio de comunicação editorial e cookies de analytics/marketing',
          'Execução de contrato ou procedimentos preliminares (Art. 7º, V) — quando você solicita palestra, mídia ou contato comercial',
          'Legítimo interesse (Art. 7º, IX) — para mensuração agregada de audiência e prevenção de fraudes, sempre respeitando seus direitos',
          'Cumprimento de obrigação legal (Art. 7º, II) — quando exigido por autoridades',
        ],
      },
    ],
  },
  {
    n: 5,
    titulo: 'Compartilhamento com terceiros',
    paragrafos: [
      'Compartilhamos dados estritamente necessários com operadores que executam serviços em nosso nome:',
      {
        tipo: 'lista',
        itens: [
          'Vercel Inc. (EUA) — hospedagem do Site e analytics agregado de performance',
          'Make/Integromat (UE) — orquestração de webhooks de leads',
          'Provedor de e-mail marketing — envio de comunicação editorial (apenas se você consentiu)',
          'Meta Platforms Inc. (EUA) — Pixel de remarketing (apenas se você consentiu com cookies de marketing)',
          'Editora Atheneu — apenas quando você optou expressamente por receber comunicação editorial sobre os livros',
        ],
      },
      'Não vendemos dados pessoais. Transferências internacionais seguem cláusulas contratuais padrão (Art. 33 LGPD).',
    ],
  },
  {
    n: 6,
    titulo: 'Retenção e armazenamento',
    paragrafos: [
      'Dados de leads são retidos enquanto houver finalidade ativa (relacionamento editorial, agendamento de palestra, etc.). Você pode solicitar a exclusão a qualquer momento.',
      'Dados técnicos de navegação são retidos por até 12 meses em forma agregada e anônima.',
      'Backups operacionais seguem ciclos próprios e são purgados em até 90 dias.',
    ],
  },
  {
    n: 7,
    titulo: 'Cookies e tecnologias similares',
    paragrafos: [
      'Utilizamos cookies e tecnologias similares (localStorage, pixels) divididos em três categorias:',
      {
        tipo: 'lista',
        itens: [
          'Estritamente necessários — funcionamento básico do Site (sessão, segurança, preferência de cookies). Não dependem de consentimento e não podem ser desativados.',
          'Analytics — Vercel Analytics e, opcionalmente, Google Analytics 4 / GTM para mensuração agregada e anônima de uso. Dependem do seu consentimento.',
          'Marketing — Meta Pixel para mensuração de conversões e remarketing. Dependem do seu consentimento.',
        ],
      },
      'Implementamos Google Consent Mode v2 com defaults negados — analytics e marketing só rodam após você consentir explicitamente. O banner de cookies aparece no primeiro acesso e suas escolhas ficam armazenadas localmente (localStorage chave mateusnogueira_consent_v1) por tempo indeterminado, podendo ser revogadas a qualquer momento.',
      'Para revogar o consentimento, limpe o localStorage do navegador para mateusnogueira.com.br ou entre em contato pelos canais abaixo. Após nova visita, o banner reaparecerá para você decidir novamente.',
    ],
  },
  {
    n: 8,
    titulo: 'Seus direitos (Art. 18 LGPD)',
    paragrafos: [
      'Você tem direito a:',
      {
        tipo: 'lista',
        itens: [
          'Confirmação da existência de tratamento',
          'Acesso aos seus dados',
          'Correção de dados incompletos, inexatos ou desatualizados',
          'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade',
          'Portabilidade a outro fornecedor',
          'Eliminação dos dados tratados com seu consentimento',
          'Informação sobre compartilhamento e revogação do consentimento',
          'Oposição a tratamento baseado em legítimo interesse',
        ],
      },
      'Para exercer qualquer um destes direitos, envie solicitação para o e-mail dr@mateusnogueira.com.br com identificação e descrição do pedido. Atendimento em até 15 dias.',
    ],
  },
  {
    n: 9,
    titulo: 'Segurança',
    paragrafos: [
      'Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda acidental ou alteração indevida: HTTPS/TLS em todo o tráfego, controles de acesso por chave, logs auditáveis e segregação por função em sistemas de operação.',
      'Em caso de incidente que represente risco relevante, notificaremos a ANPD e os titulares afetados conforme Art. 48 LGPD.',
    ],
  },
  {
    n: 10,
    titulo: 'Encarregado e canal de contato',
    paragrafos: [
      'Encarregado pelo tratamento de dados (DPO):',
      'Dr. Mateus Antunes Nogueira',
      'E-mail: dr@mateusnogueira.com.br',
      'Para reclamações, você também pode contatar a Autoridade Nacional de Proteção de Dados (ANPD) pelo site gov.br/anpd.',
    ],
  },
  {
    n: 11,
    titulo: 'Alterações nesta Política',
    paragrafos: [
      'Esta Política pode ser atualizada para refletir mudanças regulatórias ou operacionais. A versão vigente é sempre a publicada nesta página, com a data de "última atualização" indicada ao final.',
      'Alterações substanciais serão comunicadas no Site e, quando aplicável, por e-mail.',
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <Header mode="institutional" />
      <main className="bg-mateus-bg pt-12 pb-24 lg:pt-20 lg:pb-32">
        <article className="container-content max-w-3xl">
          <header className="space-y-4 mb-12">
            <p className="eyebrow">Documentos legais</p>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-mateus-primary leading-[1.05] tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-base text-mateus-muted leading-relaxed">
              Como tratamos seus dados pessoais no site mateusnogueira.com.br,
              em conformidade com a Lei Geral de Proteção de Dados (LGPD).
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
              href="/termos"
              className="text-sm font-semibold text-mateus-primary hover:text-mateus-gold transition-colors"
            >
              Ver Termos de Uso →
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
