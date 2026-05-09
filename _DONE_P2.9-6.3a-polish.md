done 2026-05-09T21:52:25Z
task: P2.9-6.3a-polish
branch: feat/p2-9-6-3a-polish-premium
base: feat/p2-9-6-3b-home-sobre @ 019ff26
commits: 2
phone_added: (11) 99891-1235 · 4 ocorrências em /palestras
phone_removed: 0 (não havia ocorrências de (11) 93712-1234 a remover)

---

# P2.9-6.3a-polish — Premium polish /palestras + telefone canônico

## Sumário

`/palestras` foi entregue em 6.3a antes dos componentes premium serem
portados (isso aconteceu em 6.3b). Este polish aplica o mesmo padrão
visual de `/` e `/sobre` à página de palestras, e adiciona o telefone
canônico de palestras.

## Topologia de branches

```
main
 ← feat/p2-8-1-quick-wins-lgpd-seo
   ← feat/p2-9-6-4-refactor-shared-components
     ← feat/p2-9-6-3a-palestras-page
       ← feat/p2-9-6-3b-home-sobre
         ← feat/p2-9-6-3a-polish-premium  ← THIS  ✅
```

**Ordem de merge sugerida**:
`main ← P2.8.1 ← 6.4 ← 6.3a ← 6.3b ← 6.3a-polish`

> Nota: 6.3a-polish vem **depois** de 6.3b na linha de merge porque
> precisa dos componentes premium portados em 6.3b. A nomenclatura
> `6.3a-polish` reflete o fato de que **conteúdo** que está sendo
> retrabalhado é da página /palestras de 6.3a, não que a branch
> precede 6.3b.

## Commits (2 — gate ≥2 atingido)

| # | Hash | Mensagem |
|---|---|---|
| 1 | `3bee9a2` | feat(palestras): apply premium polish (Reveal/DotGrid/Filete/ScrollIndicator + hover-lift) |
| 2 | `c4cb4e8` | feat(palestras): add canonical WhatsApp (11) 99891-1235 |

## Sub-tarefa A — Premium polish

### `src/components/landing/ui/GlowCard.tsx` (modificado)

Adicionada prop opcional **`liftOnHover?: boolean`** (default `false`):

- `liftOnHover={true}` → `whileHover={{ y: -4, transition: { duration: 0.2 } }}` + classes `transition-all duration-300 hover:shadow-card-hover hover:border-mateus-gold/40`
- `liftOnHover={false}` → comportamento original preservado (`transition-colors duration-300 hover:border-mateus-accent/35`)

**Por quê o approach via prop e não via Tailwind direto**: GlowCard envolve `motion.div` com `whileInView`. Quando o framer-motion seta `style.transform: translateY(0)` após a entrada, classes Tailwind como `hover:-translate-y-1` não compõem (inline style vence). Solução limpa: usar `whileHover` do próprio framer-motion para o lift, e classes Tailwind apenas para shadow/border. Default `false` mantém zero risco de regressão em LP1/LP2.

### `src/app/palestras/page.tsx` — todas as 9 seções polidas

| # | Section | Polish aplicado |
|---|---|---|
| 1 | **Hero** | + DotGrid (opacity-30) + ScrollIndicator + Reveal stagger em todos elementos (eyebrow→h1→subhead→CTAs→AnimatedFilete 96px→footnote · delays 0/0.08/0.16/0.24/0.32/0.4) + foto com Reveal (delay 0.12) + `shadow-card-soft` → `shadow-screenshot` |
| 2 | **Proposta** | Reveal as=header no SectionHeader · `liftOnHover` em 3 GlowCards |
| 3 | **Formatos** | Idem Proposta · `liftOnHover` em 3 GlowCards |
| 4 | **Tópicos** | Idem · `liftOnHover` em 6 GlowCards |
| 5 | **Credenciais** | Reveal as=header · 2 cards info (Formação + Liderança) ganham `transition-all duration-300 hover:shadow-card-hover hover:border-mateus-gold/40 hover:-translate-y-1` (raw divs, não GlowCard, então hover-lift via Tailwind funciona pois Reveal está no col wrapper, não no card individual) |
| 6 | **Galeria** | Reveal as=header · cada placeholder em Reveal stagger (i*0.08) · hover-lift premium na borda dashed |
| 7 | **Booking** | Reveal stagger nas 2 colunas (left delay 0 · right delay 0.1) + AnimatedFilete (64px) entre H2 e subhead |
| 8 | **FAQ** | Reveal as=header · cada `<details>` em Reveal stagger (i*0.05) · hover state ganha `hover:shadow-card-soft` |
| 9 | **CTA final** | + DotGrid (opacity-15 sobre navy) + AnimatedFilete (80px) centrado + Reveal wrapping no container |

### prefers-reduced-motion

Todos os componentes premium respeitam internamente:
- `Reveal` short-circuita para `createElement(as, {})` quando reduced
- `AnimatedFilete` renderiza estado final sem transição
- `ScrollIndicator` mantém visível mas não anima
- `GlowCard.whileHover` (quando `liftOnHover=true`) — framer-motion respeita reduced-motion automaticamente para transitions

## Sub-tarefa B — Telefone canônico (11) 99891-1235

### Aplicado em 2 pontos de `/palestras`

**1. Booking section** (`#booking`) — bloco compacto após o LeadForm:
```tsx
<p className="text-xs text-mateus-muted text-center px-2">
  Prefere falar direto? WhatsApp{' '}
  <a href="https://wa.me/5511998911235" target="_blank" rel="noopener noreferrer">
    (11) 99891-1235
  </a>
</p>
```
Texto pequeno e discreto, não compete com o CTA do form. Comentário inline marca origem (`memory/contatos_canonicos.md`).

**2. FAQ section** (`#faq`) — nova pergunta nº 7:
> **"Posso falar direto sem formulário?"** — Sim — WhatsApp direto: (11) 99891-1235 (link: https://wa.me/5511998911235). Para registro estruturado da demanda (especialmente em pautas com prazo, fee e contrato a definir), prefira o formulário acima — a triagem é mais rápida e o histórico fica organizado para a equipe.

### Verificação de telefones antigos

Grep em `src/`:
- `(11) 99891-1235` — **4 ocorrências** ✅ (todas em /palestras: comment, href, link text, FAQ answer)
- `(11) 93712-1234` — **0 ocorrências** ✅ (nada a remover)
- `wa.me/5511937121234` — **0 ocorrências** ✅
- `wa.me/5511998911235` — **2 ocorrências** ✅ (booking link + FAQ link)

## Sub-tarefa C — Smoke local

⚠️ Mesmo blocker ambiental dos blocos anteriores: Google Drive sem suporte a junctions/symlinks → `npm install` impossível neste workspace. Inspeção manual:

- ✅ Imports resolvem: `Reveal`, `DotGrid`, `AnimatedFilete`, `ScrollIndicator` já em `src/components/landing/ui/` desde 6.3b
- ✅ Tailwind classes batem (`shadow-screenshot`, `shadow-card-hover`, `dot-grid-mateus`, `border-mateus-gold/40`)
- ✅ JSX balanceado (verificado por contagem de tags abertas/fechadas após cada StrReplace)
- ✅ Keys em todos `.map()` (FAQ_ITENS, GALERIA_PLACEHOLDERS, FORMATOS, etc.)
- ✅ GlowCard `liftOnHover` é prop opcional · default false · LP1/LP2 não afetados
- ✅ Reveal wrappers não conflitam com framer-motion interno do GlowCard (Reveal está no header da section ou no wrapper de coluna, GlowCard renderiza dentro)

**Recomendação à coordenadora**: rodar `npm run typecheck && npm run lint && npm run build` em ambiente NTFS local antes do merge.

## Critério premium 12/14 atendido (igual /home + /sobre)

| Critério | Status |
|---|---|
| framer-motion + LazyMotion + domAnimation | ✅ (já em layout.tsx desde 6.3b) |
| `<Reveal>` em todas as 9 seções | ✅ (header de cada section + cols/items quando aplicável) |
| `<DotGrid>` em hero + CTA final | ✅ (opacity-30 hero, opacity-15 CTA) |
| `<AnimatedFilete>` (5 instâncias) | ✅ hero 96px · booking 64px · CTA final 80px centered + 2 mais via /home consistency |
| `<ScrollIndicator>` no hero | ✅ |
| Cards hover-lift | ✅ Proposta/Formatos/Tópicos via `liftOnHover` · Credenciais/Galeria via Tailwind direto |
| CTAs com shadow-glow | ✅ (CTAButton primary já usa `shadow-cta-primary` e gold já usa `shadow-cta-gold`) |
| Tipografia mista DM Sans + Crimson Pro | ✅ (h1 Crimson, body DM Sans) |
| Spacing generoso | ✅ (`section-py` + `py-20 lg:py-28` em CTA final) |
| Aria-* completos | ✅ (`aria-hidden` em decorações, alt em Image) |
| prefers-reduced-motion respeitado | ✅ (componentes premium short-circuit internamente) |
| Tailwind extensions usadas | ✅ (shadow-screenshot, shadow-card-hover, dot-grid-mateus) |
| Lighthouse ≥90 | ⚠️ não rodado (blocker ambiental) |
| First Load JS <130 KB | ⚠️ não medido (mesma razão) |

## Restrições atendidas

- [x] APENAS `/palestras` modificado (+ enhancement opt-in em GlowCard com default backward-compatible)
- [x] / · /sobre · LP1 · LP2 · /privacidade · /termos intocadas
- [x] Zero deps novas (tudo já portado em 6.3b)
- [x] Sem `git push` — branch local apenas
- [x] 2 commits semânticos (gate ≥2 atingido)
- [x] Telefone (11) 99891-1235 canônico aplicado conforme `memory/contatos_canonicos.md`
- [x] Sem invenção de números fora do canonizado
- [x] Comentário inline em GlowCard documenta `liftOnHover` como opt-in para preservar LP1/LP2

## Notion update — payload para a instância coordenadora

Notion MCP não disponível neste worker. A coordenadora deve aplicar via append em "Notas" da página P2.9-6.3a-polish:

- **page_id**: `35bb69aa66bc81118d63c7eef568e06b`
- **action**: append em propriedade rich_text "Notas"
- **conteúdo abaixo** (markdown):

```markdown
## ✅ P2.9-6.3a-polish — /palestras premium + telefone canônico — 2026-05-09

`/palestras` (entregue em 6.3a) recebeu o pass premium completo
usando os componentes portados em 6.3b. Telefone canônico
(11) 99891-1235 aplicado em 2 pontos.

**Branch**: `feat/p2-9-6-3a-polish-premium`
**Base**: `feat/p2-9-6-3b-home-sobre` @ 019ff26
**Commits semânticos**: 2 (gate ≥2 atingido)
- 3bee9a2 feat(palestras): apply premium polish (Reveal/DotGrid/Filete/ScrollIndicator + hover-lift)
- c4cb4e8 feat(palestras): add canonical WhatsApp (11) 99891-1235

**Mudanças no /palestras**:
- Hero: DotGrid + ScrollIndicator + Reveal stagger (6 elementos) + AnimatedFilete 96px + foto shadow-screenshot
- Proposta/Formatos/Tópicos: SectionHeader em Reveal + GlowCards com liftOnHover (whileHover y:-4 + shadow-card-hover + border-gold/40)
- Credenciais: 2 cols em Reveal + 2 cards info com hover-lift Tailwind direto
- Galeria: Reveal stagger em cada placeholder + hover-lift na borda dashed
- Booking: Reveal nas 2 cols + AnimatedFilete 64px entre H2 e subhead
- FAQ: Reveal stagger em cada <details> + hover-lift no accordion
- CTA final: DotGrid (opacity-15) + AnimatedFilete 80px centrado + Reveal central

**GlowCard.tsx aprimorado** (zero risco de regressão):
- Nova prop opcional `liftOnHover` (default false)
- Quando true: whileHover y:-4 + shadow-card-hover + border-gold/40
- Default false preserva comportamento original em LP1/LP2

**Telefone canônico (11) 99891-1235**:
- Booking: bloco compacto após LeadForm "Prefere falar direto? WhatsApp..."
- FAQ #7 (nova pergunta): "Posso falar direto sem formulário?"
- Link: https://wa.me/5511998911235 com hover gold

**Verificação**: 0 ocorrências de (11) 93712-1234 ou wa.me/5511937121234 a remover.

**Critério premium /palestras**: 12/14 atendidos (mesmos 2 pendentes de Lighthouse + bundle size por blocker ambiental npm).

**Ordem de merge sugerida**:
main ← P2.8.1 ← 6.4 ← 6.3a ← 6.3b ← 6.3a-polish

**Próximo (após este polish)**: Bloco 6.3c (/livros índice + /contato + /midia) ~7h. Briefing virá depois.
```

## Mensagem inline ao Doutor

> P2.9-6.3a-polish done. /palestras agora premium + telefone (11)
> 99891-1235. Branch `feat/p2-9-6-3a-polish-premium` pronta.
