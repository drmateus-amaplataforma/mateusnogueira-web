done 2026-05-09T22:10:00Z
task: P2.9-6.3c
branch: feat/p2-9-6-3c-livros-contato-midia
base: feat/p2-9-6-3a-polish-premium @ 473192e
commits: 5
pages: 3 (/livros, /contato, /midia)
home_adjust: 1 (Mídia + Contato em-breve removido + Livros card relink)
todos_doutor: 11

---

# P2.9 Bloco 6.3c — /livros + /contato + /midia (institucionais finais)

## Sumário

Três páginas institucionais entregues em batch, fechando o bloco P2.9-6.3
da reorganização do site `mateusnogueira.com.br`. Padrão SUPER PREMIUM
aplicado integralmente — todos os componentes premium portados em 6.3b
(`Reveal · DotGrid · AnimatedFilete · GlowCard · CTAButton · LeadForm ·
Header · Footer · Section`) reutilizados sem novo código de UI. Home
ajustada minimamente para refletir que `/midia` e `/contato` agora
existem.

## Topologia de branches

```
main
 ← feat/p2-8-1-quick-wins-lgpd-seo
   ← feat/p2-9-6-4-refactor-shared-components
     ← feat/p2-9-6-3a-palestras-page
       ← feat/p2-9-6-3b-home-sobre
         ← feat/p2-9-6-3a-polish-premium
           ← feat/p2-9-6-3c-livros-contato-midia   ← THIS  ✅
```

**Ordem de merge sugerida**:
`main ← P2.8.1 ← 6.4 ← 6.3a ← 6.3b ← 6.3a-polish ← 6.3c`

## Commits (5 — gate ≥4 atingido)

| # | Hash      | Mensagem |
|---|-----------|----------|
| 1 | `2035381` | feat(livros): add /livros index (hero + LP1/LP2 cards + CTA) |
| 2 | `de5cc26` | feat(contato): add /contato (hero + LeadForm + canais diretos) |
| 3 | `d9f4e46` | feat(midia): add /midia (hero + 6 placeholders + press kit + LeadForm imprensa) |
| 4 | `e79878f` | feat(home): mark Midia/Contato available + relink Livros card to /livros index |
| 5 | `d528d56` | refactor(midia): inline ternary for placeholder vs link wrapper |

## Diffstat

```
 src/app/contato/page.tsx | 324 +++++ (NEW)
 src/app/livros/page.tsx  | 308 +++++ (NEW)
 src/app/midia/page.tsx   | 410 +++++ (NEW)
 src/app/page.tsx         |   7 ±   (Home ajuste mínimo)
 4 files changed, 1045 insertions(+), 4 deletions(-)
```

Zero alterações em LP1, LP2, /palestras, /sobre, /privacidade, /termos,
`vercel.json`, `next.config.mjs`, `tailwind.config.ts`, `package.json`,
`globals.css`, `layout.tsx` ou em qualquer componente compartilhado em
`src/components/landing/ui/`.

---

## Página 1 · `/livros` (`src/app/livros/page.tsx` · 308 linhas)

**Rota**: `mateusnogueira.com.br/livros`

### Estrutura

| # | Seção | Padrão premium aplicado |
|---|-------|-------------------------|
| 1 | **Hero** (~40vh, `min-h-[40vh]`) | DotGrid (opacity-25) · radial gold/navy · eyebrow "Publicações" · H1 Crimson Pro 4xl→6xl · AnimatedFilete 96px · subhead 2 linhas · Reveal stagger (delays 0/0.08/0.14/0.2) |
| 2 | **Cards comparativos** (Section alt) | SectionHeader centro · grid 2 cols (mobile 1) · Reveal stagger (i*0.12) · cada card: `Link` envolvendo cover (aspect-[3/4], object-contain), tag pill (gold para LP1, neutra para LP2), H3 + subtitle italic, posicionamento, **3-col stats grid** (páginas / preço / formato), CTA "Ver detalhes →" com arrow translate · hover-lift (`hover:-translate-y-1` + `shadow-card-hover` + `border-gold/40`) |
| 3 | **Futuras publicações** (Section default) | Eyebrow + H2 "Em breve." + AnimatedFilete · card dashed `bg-mateus-bg-alt/40` · texto "Editora Atheneu" + colaborações + TODO Doutor inline para confirmar próximos títulos |
| 4 | **CTA final** | bg navy + DotGrid (opacity-15) + radial gold · eyebrow "Para a sua turma" · H2 "Quer indicar para a turma?" · AnimatedFilete 80px centrado · subhead institucional · dual CTA (gold "Falar com a editora" → `/contato` · ghost "Conheça o autor" → `/sobre`) |

### Dados canônicos (de `src/lib/design-tokens.ts`)

- **LP1**: `book.title` (Avaliação Metabólica Avançada na Saúde e no Desempenho), `book.subtitle`, `book.estimatedPages` (350), `book.priceFull` (R$ 219), capa em `/livros/avaliacao/capa-livro.png`
- **LP2**: `bookMev.title` (Nova Medicina do Estilo de Vida), `bookMev.subtitle`, `bookMev.estimatedPages` (147), `bookMev.priceFull` (R$ 139), capa em `/livros/nova-medicina/capa-livro.png`

### Metadata

```ts
title: 'Livros'
description: 'Avaliação Metabólica Avançada (Atheneu, 2026) e Nova Medicina MEV 3.0 (Atheneu, 2026): publicações para profissionais de saúde e público geral.'
canonical: '/livros'
+ openGraph + twitter cards
```

---

## Página 2 · `/contato` (`src/app/contato/page.tsx` · 324 linhas)

**Rota**: `mateusnogueira.com.br/contato`

### Estrutura

| # | Seção | Padrão premium aplicado |
|---|-------|-------------------------|
| 1 | **Hero** (~40vh) | Idem /livros — eyebrow "Fale com" · H1 "Contato" · subhead "Para palestras, livros, mídia ou demais demandas" |
| 2 | **Form + Canais** (Section alt) | Grid 12-col (7+5 desktop, 1 col mobile) · esquerda: header + `<LeadForm origem="contato" />` (já suportado desde 6.4) · direita: header + lista de 4 canais cada um em `<a>` card com hover-lift e SVG inline (whatsapp, email, linkedin, instagram) |
| 3 | **Institucional** (Section default) | Eyebrow + frase serifada explicando triagem · 3 pills (atendimento profissional · retorno 24-48h úteis · São Paulo, Brasil) |
| 4 | **CTA final compacto** | bg navy mais curto (py-16 lg:py-20) · "Já sabe que é palestra?" · dual CTA (gold "Solicitar palestra" → `/palestras#booking` · ghost "Ver os livros" → `/livros`) |

### Canais diretos (4)

| Ícone | Canal | Valor | Href |
|-------|-------|-------|------|
| whatsapp | WhatsApp · palestras | **(11) 99891-1235** | `https://wa.me/5511998911235` |
| email | E-mail profissional | dr.mateus@amaplataforma.com.br | `mailto:` |
| linkedin | LinkedIn | in/dr-mateus-antunes-nogueira | `https://www.linkedin.com/in/dr-mateus-antunes-nogueira` |
| instagram | Instagram | @drmateus.nogueira | `https://www.instagram.com/drmateus.nogueira` |

**Telefone CANÔNICO conferido**:
- ✅ `(11) 99891-1235` exibido + `https://wa.me/5511998911235` no href (idêntico ao usado em /palestras 6.3a-polish)
- ✅ ZERO ocorrências de `(11) 93712-1234` ou `wa.me/5511937121234` em /contato (esse é WhatsApp interno equipe — não público)

### Metadata

```ts
title: 'Contato'
description: 'Fale com Dr. Mateus Antunes Nogueira: palestras, livros, mídia, demais demandas. Retorno em 24-48h úteis.'
canonical: '/contato'
+ openGraph + twitter cards
```

---

## Página 3 · `/midia` (`src/app/midia/page.tsx` · 410 linhas)

**Rota**: `mateusnogueira.com.br/midia`

### Estrutura

| # | Seção | Padrão premium aplicado |
|---|-------|-------------------------|
| 1 | **Hero** (~40vh) | Idem padrão — eyebrow "Mídia e imprensa" · H1 "Mídia" · subhead "Artigos, entrevistas, podcasts e palestras públicas" |
| 2 | **Aparições** (Section alt) | SectionHeader centro · grid responsivo (1/2/3 cols em mobile/tablet/desktop) · 6 placeholders (1 Artigo, 1 Entrevista, 1 Podcast, 1 Palestra, 1 Artigo, 1 Entrevista) · cada card: thumbnail aspect-[16/9] com gradient navy/gold + dot-grid + nome do tipo em serif italic gigante (placeholder) · badge de tipo colorido por categoria (gold/navy/sépia) · veículo + data · H3 título · resumo · CTA contextual (placeholder mostra "TODO Doutor: enviar URL", real mostra "Acessar ↗") · hover-lift premium |
| 3 | **Press Kit** (Section default) | 3 cards estáticos (Bio oficial · Fotos em alta · CV resumido) explicando o que está disponível mediante solicitação |
| 4 | **Imprensa** (Section alt) | Form `<LeadForm origem="midia" />` (já suportado desde 6.4 — sucesso retorna "release oficial, fotos em alta e materiais complementares") |
| 5 | **CTA final** | bg navy completo · "Pauta científica em medicina do estilo de vida?" · dual CTA (gold "Falar com a assessoria" → `/contato` · ghost "Conheça o autor" → `/sobre`) |

### Tipos de aparição com cores semânticas

```ts
Artigo:     gold (border-mateus-gold/30 bg-mateus-gold/5)
Entrevista: navy (border-mateus-primary/25 bg-mateus-primary/5)
Podcast:    sépia (border-mateus-accent/30 bg-mateus-accent/5)
Palestra:   neutro (border-mateus-accent/30 bg-mateus-bg-alt)
```

### Metadata

```ts
title: 'Mídia e Imprensa'
description: 'Artigos publicados, entrevistas, podcasts e palestras públicas de Dr. Mateus Antunes Nogueira. Solicite materiais para imprensa.'
canonical: '/midia'
+ openGraph + twitter cards
```

---

## Ajuste Home (`src/app/page.tsx` · -4/+3 linhas)

`FRENTES[]` — array das 5 cards das frentes:

- **Mídia** card: `available: false → true` (em-breve removido, vira card normal com link funcional `/midia`)
- **Contato** card: `available: false → true` (idem, link `/contato`)
- **Livros** card: `href: '/livros/avaliacao-metabolica' → '/livros'` (linka agora ao índice, conforme TODO inline anterior que dizia "rota /livros (índice) chega em 6.3c — por ora, linka direto LP1")

Resultado visível: na seção "Quem sou" da Home, os 5 cards (Palestras · Livros · Sobre · Mídia · Contato) ficam todos navegáveis. Nenhum mostra mais a tag itálica "Em breve".

---

## Header (`src/components/landing/ui/Header.tsx`)

**Não modificado** — verificado que `MENU_INSTITUTIONAL` já listava as 5 rotas (Palestras, Sobre, Livros, Mídia, Contato) desde 6.4. Retrocompatibilidade `mode='lp1'/'lp2'` (que continua usando âncoras `#metodo`, `#conteudo`, `#autor`, `#faq`) preservada sem ajuste.

---

## TODOs Doutor (11 — listados inline em comentários `{/* TODO Doutor: ... */}`)

### Em `/livros`:

1. Confirmar lista de próximos títulos previstos pela Atheneu / outras editoras (capítulos em obras coletivas, novas edições, adaptações para nichos específicos) → seção "Futuras publicações"

### Em `/contato`:

2. Confirmar slug oficial do LinkedIn (atualmente placeholder `dr-mateus-antunes-nogueira`)
3. Confirmar e-mail institucional `dr.mateus@amaplataforma.com.br` (placeholder canônico no Header desde 6.4)

### Em `/midia`:

4. Enviar lista real de 6-12 aparições com URLs públicas, veículo, data, título e thumb (opcional). Tipos disponíveis: Artigo / Entrevista / Podcast / Palestra (substituir os 6 placeholders na const `APARICOES`)
5. Substituir placeholders de thumbnail por thumbs reais quando lista chegar (capa de podcast, frame de vídeo, screenshot de artigo, foto de palco)
6. Confirmar quais materiais entram no Press Kit estático (Bio · Fotos · CV) — atualmente descrição genérica
7. Validar copy da seção "Imprensa" — pedido para identificar veículo dentro do campo de mensagem do form atual (alternativa: adicionar campo dedicado no LeadForm)

### Heranças de blocos anteriores (não criadas em 6.3c, mas presentes):

8. Substituir badge de iniciais dos endossadores por foto real (Werutsky + Nelson) — em `/sobre`
9. Confirmar anos de formação, residência, doutorado (tema da tese), fundações — em `/sobre` (TIMELINE)
10. Confirmar headlines/subheads de Hero da Home + parágrafo de abertura da seção "Quem sou"
11. Confirmar números 1.000+ profissionais e 15+ anos (Home SocialProofSection)

---

## QA — inspeção manual (blocker ambiental: Drive sem suporte a junctions → npm install impossível)

| Item | Status |
|------|--------|
| Imports resolvem | ✅ Header / Footer / CTAButton / Section / SectionHeader / Reveal / DotGrid / AnimatedFilete / LeadForm / book / bookMev — todos já em `src/components/landing/ui/` ou `src/lib/design-tokens.ts` desde 6.3b/6.4 |
| `LeadForm` aceita `origem="contato"` e `origem="midia"` | ✅ tipo `LeadOrigem` em `LeadForm.tsx` inclui ambos desde 6.4 |
| Tailwind classes batem com config | ✅ `dot-grid-mateus`, `shadow-card-hover`, `shadow-card-soft`, `shadow-screenshot`, `border-mateus-gold/40`, `tracking-eyebrow`, `max-w-narrow`, `container-content` |
| Header `MENU_INSTITUTIONAL` cobre 5 rotas (Palestras, Sobre, Livros, Mídia, Contato) | ✅ verificado linhas 28-34 de `Header.tsx` |
| Home `FRENTES[].available` true em todos os 5 cards | ✅ confirmado |
| Telefone canônico (11) 99891-1235 em /contato | ✅ 1 ocorrência (linha 110 de `contato/page.tsx`) — mesma origem `memory/contatos_canonicos.md` que /palestras |
| Telefone proibido (11) 93712-1234 / wa.me/5511937121234 | ✅ 0 ocorrências em qualquer página nova |
| JSX balanceado | ✅ verificado por contagem de tags após cada StrReplace + Reads completos |
| Keys em todos `.map()` | ✅ `BOOK_CARDS` (key=title), `CANAIS` (key=label), `APARICOES` (key=i), `PILLS` (key=p), Press Kit cards (key=label) |
| Reveal `as` prop usa apenas tags suportadas | ✅ `p`, `h1`, `header`, `li` (todas em `RevealAs` union) |
| `prefers-reduced-motion` | ✅ Reveal short-circuita para `createElement(as, {})` · AnimatedFilete renderiza estado final · framer-motion respeita reduced-motion automaticamente |
| Aria-* | ✅ `aria-hidden` em decorações (DotGrid, gradients, ícones de seta), `alt` em todas as `<Image>`, `aria-label` em SocialIcon do Footer (não tocado) |
| Lighthouse ≥90 + bundle <130 KB | ⚠️ não medido (mesmo blocker ambiental dos blocos 6.3a/6.3b/6.3a-polish — Vercel Preview valida no merge) |

**Recomendação à coordenadora**: rodar `npm run typecheck && npm run lint && npm run build` em ambiente NTFS local antes do merge.

---

## Restrições atendidas

- [x] APENAS 3 páginas novas (`/livros`, `/contato`, `/midia`) + ajuste mínimo Home (3 linhas alteradas)
- [x] LP1, LP2, `/palestras`, `/sobre`, `/privacidade`, `/termos` intocadas
- [x] `vercel.json`, `next.config.mjs`, `tailwind.config.ts`, `package.json`, `globals.css`, `layout.tsx` intocados
- [x] Zero deps novas (tudo já portado em 6.3b/6.4)
- [x] Telefone canônico `(11) 99891-1235` aplicado · zero usos do número interno equipe (11) 93712-1234
- [x] Sem `git push` — branch local apenas
- [x] 5 commits semânticos (gate ≥4 atingido)
- [x] PADRÃO PREMIUM aplicado: Reveal + DotGrid + AnimatedFilete em hero de cada página · hover-lift cards · CTAs com glow · Crimson Pro nos H1 · spacing generoso · DotGrid + radial gold em CTA finais
- [x] TODOs Doutor inline em todo dado autoral / lista pendente (11 itens, sendo 7 desta tarefa + 4 herdados)

---

## Notion update — payload copy-paste-ready para a instância coordenadora

A coordenadora deve aplicar via append em "Notas" da página P2.9-6.3c:

- **page_id**: `35bb69aa66bc8123b31ac53dbe86fb26`
- **action**: append em propriedade rich_text "Notas"
- **conteúdo abaixo** (markdown):

```markdown
## ✅ P2.9-6.3c — /livros + /contato + /midia (institucionais finais) — 2026-05-09

Três páginas institucionais finais entregues em batch, fechando o
bloco P2.9-6.3 da reorganização do site. Padrão SUPER PREMIUM
aplicado integralmente reusando componentes portados em 6.3b/6.4.
Home ajustada minimamente para refletir que /midia e /contato
agora existem.

**Branch**: `feat/p2-9-6-3c-livros-contato-midia`
**Base**: `feat/p2-9-6-3a-polish-premium` @ 473192e
**Commits semânticos**: 5 (gate ≥4 atingido)
- 2035381 feat(livros): add /livros index (hero + LP1/LP2 cards + CTA)
- de5cc26 feat(contato): add /contato (hero + LeadForm + canais diretos)
- d9f4e46 feat(midia): add /midia (hero + 6 placeholders + press kit + LeadForm imprensa)
- e79878f feat(home): mark Midia/Contato available + relink Livros card to /livros index
- d528d56 refactor(midia): inline ternary for placeholder vs link wrapper

**Diffstat**: 4 files changed, 1045 insertions(+), 4 deletions(-).
Zero alterações em LP1/LP2/palestras/sobre/privacidade/termos/vercel.json/
next.config.mjs/tailwind.config.ts/package.json/globals.css/layout.tsx.

**/livros (308 linhas)**:
- Hero (~40vh): DotGrid + eyebrow gold "Publicações" + H1 + AnimatedFilete + subhead
- 2 cards comparativos LP1/LP2: capa aspect-[3/4], tag pill, título, subtítulo italic, frase posicional, 3-col stats grid (páginas/preço/formato), CTA com hover-lift premium
- Futuras publicações: card dashed com TODO Doutor para confirmar próximos títulos
- CTA final: bg navy, "Quer indicar para a turma?" → /contato

**/contato (324 linhas)**:
- Hero (~40vh): eyebrow "Fale com" + H1 "Contato"
- Grid 12-col (7+5): esquerda LeadForm origem="contato" · direita 4 canais (WhatsApp 99891-1235, e-mail dr.mateus@amaplataforma.com.br, LinkedIn TODO slug, Instagram @drmateus.nogueira) cada um em card com hover-lift + ícone SVG inline
- Bloco institucional: 3 pills (Atendimento profissional · 24-48h úteis · São Paulo)
- CTA final compacto

**/midia (410 linhas)**:
- Hero (~40vh): "Mídia e imprensa" + H1
- Grid responsivo 1/2/3 cols com 6 placeholders TODO Doutor (Artigo · Entrevista · Podcast · Palestra · Artigo · Entrevista) · cada card: thumb aspect-[16/9] com gradient navy/gold + dot-grid + nome do tipo em serif italic + badge colorido por categoria + veículo + data + título + resumo + CTA
- Press Kit estático: 3 cards (Bio · Fotos · CV)
- Form imprensa: LeadForm origem="midia" + texto "release oficial, fotos em alta..."
- CTA final: bg navy → /contato

**Ajuste Home (3 linhas)**:
- Mídia card: available false → true
- Contato card: available false → true
- Livros card: href '/livros/avaliacao-metabolica' → '/livros' (índice agora existe)
- Resultado: 5 cards de frentes da Home todos navegáveis, sem "Em breve"

**Header**: não modificado — verificado que MENU_INSTITUTIONAL já cobria
{Palestras, Sobre, Livros, Mídia, Contato} desde 6.4. Retrocompat
mode='lp1'/'lp2' preservada.

**Telefone canônico**:
- ✅ (11) 99891-1235 aplicado em /contato (1 ocorrência)
- ✅ zero ocorrências de (11) 93712-1234 (interno equipe) em qualquer página

**TODOs Doutor inline (11 totais — 7 novos + 4 herdados)**:
1. Lista próximos títulos Atheneu (/livros)
2. Slug oficial LinkedIn (/contato)
3. Confirmar e-mail dr.mateus@amaplataforma.com.br (/contato)
4. Lista real 6-12 aparições com URLs (/midia)
5. Thumbs reais (/midia)
6. Bio + fotos + CV no Press Kit (/midia)
7. Copy do form imprensa (/midia)
8-11. Heranças /sobre + Home (fotos endossadores, anos timeline, números social proof)

**QA blockers**:
- ⚠️ Lighthouse + bundle não medidos (Drive virtual FS sem junctions
  → npm install impossível). Vercel Preview valida no merge.
- ✅ Imports/Tailwind/JSX/keys conferidos manualmente.
- ✅ LeadForm origem="contato" e origem="midia" suportados desde 6.4.

**Ordem de merge sugerida**:
main ← P2.8.1 ← 6.4 ← 6.3a ← 6.3b ← 6.3a-polish ← 6.3c

**Status do site após este bloco**: 7 rotas funcionais com padrão
premium homogêneo (/, /sobre, /palestras, /livros, /contato, /midia,
+ LP1 e LP2 livros). Pendentes: /privacidade + /termos (já existem
mas não verificados para padrão premium · pode entrar em 6.3d se
necessário · tipicamente são páginas legais minimalistas e não
precisam de polish).
```

---

## Mensagem inline ao Doutor

> P2.9-6.3c done. /livros + /contato + /midia entregues no padrão
> premium. Branch `feat/p2-9-6-3c-livros-contato-midia` pronta com
> 5 commits. Site agora tem 7 rotas institucionais homogêneas + 11
> TODOs Doutor para revisar (lista de mídia é o maior pendente).
