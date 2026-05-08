# mateusnogueira-web

Site pessoal do **Dr. Mateus Antunes Nogueira** — landing pages dos livros publicados pela Editora Atheneu (pré-venda 2026).

## Stack

- Next.js 14 (App Router)
- TypeScript strict
- Tailwind CSS
- Framer Motion
- DM Sans (via `next/font/google`)

## Estrutura

```
src/
├── app/
│   ├── api/lead/route.ts          # POST → forward para LEAD_WEBHOOK_URL (Make)
│   ├── livros/avaliacao-metabolica/page.tsx   # LP1
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                   # / → redirect para LP1
├── components/landing/ui/         # componentes compartilhados (Header, Footer, GlowCard…)
└── lib/
    ├── design-tokens.ts           # paleta + dados do livro/autor
    └── utils.ts                   # cn(), daysUntil(), formatBRL()

public/livros/avaliacao/           # assets da LP1
docs/LP1-02_Copywriting.md         # copy aguardando aprovação
```

## Comandos

```bash
npm install
npm run dev          # local em http://localhost:3000
npm run build        # build de produção
npm run typecheck    # validação TypeScript
npm run lint         # ESLint
```

## Variáveis de ambiente

Copiar `.env.example` para `.env.local`:

| Variável | Origem | Uso |
|---|---|---|
| `LEAD_WEBHOOK_URL` | Cenário Make a criar | Recebe submissões de `/api/lead` |
| `NEXT_PUBLIC_SITE_URL` | https://mateusnogueira.com.br | Já configurado no Vercel |

## Estado atual (07/05/2026)

- Infra Vercel + DNS + repo GitHub ✅
- Wireframe LP1 aprovado ✅
- Copywriting LP1 escrito (`docs/LP1-02_Copywriting.md`) — aguardando revisão
- Scaffold + design system + shared components ✅
- Seções S1-S8 aguardam aprovação do copy
- Webhook Make ainda não configurado (`LEAD_WEBHOOK_URL` vazio)

Ver `MORNING_BRIEF.md` para o que está pendente do Dr. Mateus.

## Padrão de qualidade

Referências obrigatórias:
- https://amaplataforma.com.br
- https://vidaativaensino.com.br/cursos/hands-on

Princípios herdados:
- Densidade técnica > hype
- Espaço negativo ≥30%
- Mockups reais; zero stock
- Animações `whileInView` discretas (`opacity + y:24px`, 0.6s)
- Tipografia única: DM Sans 300 / 400 / 800
- Lighthouse alvo: ≥90 em todas as métricas

---

*Construído por Dr. Mateus Antunes Nogueira + Claudio (Claude Code)*
