done 2026-05-09T21:18:36Z
task: P2.9-6.3a
branch: feat/p2-9-6-3a-palestras-page
base: feat/p2-9-6-4-refactor-shared-components @ 6b8920a
commits: 4
todos_doutor: 9

---

# P2.9 Bloco 6.3a — Página /palestras (CORE de venda)

## Sumário

Página `/palestras` criada como primeira (e única deste bloco) página
institucional do site `mateusnogueira-web`. CORE de venda de palestras,
workshops e mentorias. Reusa Header.mode='institutional' do refactor
6.4 (ainda não-merged) e o `<LeadForm origem='palestra' />` também do
refactor 6.4. Nenhuma dependência nova. Zero novas pages além de
/palestras.

## Branch

```
main
 ← feat/p2-8-1-quick-wins-lgpd-seo (LGPD + SEO)
   ← feat/p2-9-6-4-refactor-shared-components (Header/Footer/LeadForm)
     ← feat/p2-9-6-3a-palestras-page (THIS)
```

Ordem de merge sugerida (em sequência, no remoto):

1. main ← P2.8.1 (LGPD + SEO)
2. main ← P2.9-6.4 (refactor shared components)
3. main ← P2.9-6.3a (palestras page)

## Commits (4 — semânticos, gate ≥4 atingido)

| Hash    | Mensagem                                        |
| ------- | ----------------------------------------------- |
| b9a2475 | feat(palestras): scaffold page + hero section   |
| 839cb62 | feat(palestras): proposta de valor + formatos + topicos |
| 0651129 | feat(palestras): credenciais + galeria placeholder |
| fd64e17 | feat(palestras): booking form + FAQ + CTA final |

## Estrutura da página (9 seções)

`src/app/palestras/page.tsx` (727 linhas, 1 arquivo)

1. **Hero** — foto Dr. Mateus (curadoria oficial), headline + sub +
   dual CTA (#booking + #topicos). Foto: `C1_executivo_05_terno_fisiologia_sorriso.jpg`
   copiada para `public/palestrante/dr-mateus-hero.jpg` (6.27 MB —
   `next/image` otimiza no render).
2. **Proposta de valor** — 3 cards GlowCard: Empresas, Eventos médicos,
   Mídia (este linka `/midia` futuro).
3. **Formatos** — 3 cards: Keynote 60min · Workshop 4h · Mentoria 1-a-1.
   Investimento "Sob consulta" (TODO Doutor).
4. **Tópicos canônicos** — 6 cards numerados (Avaliação metabólica,
   MEV 3.0, Performance executiva, Nutrição esportiva, Hiperbárica,
   Relação médico-paciente).
5. **Credenciais** — grid 12-col reusando `author{}` de
   `design-tokens.ts` (specialties, CRM, doctorate USP,
   professionalsTrained), liderança (CEO AMA, Diretor VAE, Founder
   Oxy) e cards Atheneu linkando LP1 + LP2.
6. **Galeria** — placeholder grid 2x2 (Keynote, Workshop, Mídia,
   Mentoria) com hint do tipo de foto esperada e marcação
   `TODO Doutor: enviar mídia` visível.
7. **Booking** (#booking) — split 12-col: coluna esquerda com texto
   + bullets de serviço + nota imprensa; coluna direita sticky com
   `<LeadForm origem='palestra' />`. Config canônica do refactor 6.4:
   success "Solicitação registrada", "Retorno em 48h úteis", submit
   "Solicitar palestra".
8. **FAQ** — 6 perguntas em accordion `<details>` nativo (zero JS
   extra, zero framer-motion): antecedência, exterior, investimento,
   gravação, materiais, exclusividade.
9. **CTA final** — bg navy + radial gold, headline "Pronto para
   trazer Dr. Mateus ao seu evento?" + dual CTA (gold #booking +
   ghost-on-dark #topicos).

## SEO / Metadata

```ts
export const metadata: Metadata = {
  title: 'Palestras', // resolve via template ' · Dr. Mateus Antunes Nogueira'
  description: 'Solicitação de palestras com Dr. Mateus Antunes Nogueira: avaliação metabólica avançada, medicina do exercício e estilo de vida...',
  alternates: { canonical: '/palestras' },
  openGraph: { title, description, url: '/palestras', type: 'website', locale: 'pt_BR', siteName },
  twitter: { card: 'summary_large_image', title, description },
};
```

Nota: o template `'%s · Dr. Mateus Antunes Nogueira'` está em
`src/app/layout.tsx` (vindo de P2.8.1), então o title final renderiza
"Palestras · Dr. Mateus Antunes Nogueira" — mantém convenção do site
com separador `·` em vez de `|`.

## Foto hero — escolha

Curadoria oficial em `00_MARCA_E_IDENTIDADE/Dr_Mateus_Pessoal/06_Photography/curadoria/`:

- ✅ Escolhida: `C1_executivo_05_terno_fisiologia_sorriso.jpg` (terno,
  sorriso natural, contexto de fisiologia — autoridade + acessibilidade).
- Alternativa disponível: `C2_academico_05_camisa_mesa_computador.jpg`
  (mais acadêmica, menos warm). Para trocar, basta substituir
  `public/palestrante/dr-mateus-hero.jpg` mantendo o nome.

## TODOs Doutor flagados (9 total)

Pontos onde há decisão de copy/dado autoral pendente — NUNCA inventei
credenciais, fee ou casuística:

1. **Hero copy** — `headline + subhead` (revisar tom, talvez mais
   personal).
2. **Proposta de valor** — confirmar 3 segmentos (Empresas / Eventos
   médicos / Mídia) ou adicionar 4º (instituições de ensino,
   sociedades médicas).
3. **Formatos** — confirmar Keynote/Workshop/Mentoria, e decidir
   tabela de fee pública vs "Sob consulta".
4. **Tópicos** — revisar lista de 6 temas + ordem.
5. **Tópico hiperbárica** — flag inline `TODO Doutor: confirmar
   manter` (item 5 de 6 — pode ser polêmico publicar como tema de
   palco).
6. **Galeria** — enviar 4 fotos/vídeos de eventos passados (Keynote,
   Workshop, Mídia, Mentoria). Placeholders prontos.
7. **FAQ #investimento** — definir tabela pública ou manter "Sob
   consulta".
8. **FAQ geral** — revisar/adicionar perguntas (dress code,
   exclusividade regional, contrato padrão).
9. **Foto hero** — confirmar `C1_executivo_05` ou trocar por outra
   da curadoria.

## QA

⚠️ **Mesmo blocker ambiental dos blocos anteriores**: filesystem do
Google Drive não suporta junctions/symlinks nativos do Windows, o que
impede `npm install` confiável neste workspace. Inspeção manual
completa cobre:

- ✅ Imports: todos os componentes já existentes no design system
  (`Header`, `Footer`, `CTAButton`, `Section`, `SectionHeader`,
  `GlowCard`, `LeadForm`) + `next/image` + `next/link`.
- ✅ Types: `Header mode="institutional"` (HeaderMode confirmado em
  Header.tsx:9). `LeadForm origem="palestra"` (LeadOrigem confirmado
  em LeadForm.tsx:6).
- ✅ Tailwind: todas as classes batem com `tailwind.config.ts`
  (`mateus-*`, `shadow-card-soft`, `shadow-cta-gold`, `tracking-eyebrow`,
  `animate-fade-up`, `max-w-narrow`, `max-w-content`).
- ✅ Utilities globais: `eyebrow`, `container-content`, `section-py`
  presentes em `src/app/globals.css`.
- ✅ JSX: todas tags balanceadas, `key` props em `.map()`, sem
  unescaped quotes (todas como `&ldquo;` `&rdquo;`).
- ✅ Acessibilidade: `aria-hidden` em decorações, `summary` em
  `<details>` com cursor pointer, alt em Image.
- ✅ Hash âncoras: `#booking` (BookingSection), `#topicos`
  (TopicosSection), `#formatos`, `#proposta`, `#credenciais`,
  `#galeria`, `#faq` — todos batem com IDs definidos em `<Section
  id="...">`.

⚠️ **Recomendação à instância coordenadora**: rodar
`npm run typecheck && npm run lint && npm run build` em ambiente NTFS
local (ou via Vercel preview) antes do merge sequencial.

## Restrições atendidas

- [x] Não criou /, /sobre, /livros, /midia, /contato (apenas
  /palestras).
- [x] Não mexeu em LP1/LP2 nem em /privacidade /termos.
- [x] Zero dependências novas. Reusou Section/SectionHeader/CTAButton/
  GlowCard/LeadForm/Header/Footer.
- [x] Paleta canônica (navy + gold + cream) via tokens
  `tailwind.config.ts`.
- [x] Sem `git push`. Branch local `feat/p2-9-6-3a-palestras-page`.
- [x] 4 commits semânticos (gate ≥4 atingido — hero / proposta-formatos-
  topicos / credenciais-galeria / booking-faq-cta-final).
- [x] `#booking` ancorando no formulário (`<Section id="booking">`).
- [x] TODO Doutor inline em todos os pontos de copy autoral / dado
  clínico.

## Notion update — payload para a instância coordenadora

A instância coordenadora deve aplicar via append em "Notas" da página
P2.9:

- **page_id**: `35bb69aa66bc8123b31ac53dbe86fb26`
- **action**: append em propriedade rich_text "Notas" (ou bloco filho)
- **conteúdo abaixo** (markdown):

```markdown
## ✅ Bloco 6.3a /palestras concluído — 2026-05-09

Página `/palestras` (CORE de venda) implementada em
`src/app/palestras/page.tsx` (727 linhas, 9 seções).

**Branch**: `feat/p2-9-6-3a-palestras-page`
**Base**: `feat/p2-9-6-4-refactor-shared-components` @ 6b8920a
**Commits semânticos**: 4
- b9a2475 feat(palestras): scaffold page + hero section
- 839cb62 feat(palestras): proposta de valor + formatos + topicos
- 0651129 feat(palestras): credenciais + galeria placeholder
- fd64e17 feat(palestras): booking form + FAQ + CTA final

**Foto hero**: `C1_executivo_05_terno_fisiologia_sorriso.jpg`
copiada para `public/palestrante/dr-mateus-hero.jpg`.

**TODOs Doutor flagados**: 9 (copy hero, segmentos proposta,
fee formatos, lista tópicos, hiperbárica, galeria 2x2, FAQ
investimento, FAQ extras, foto hero).

**Reusos do refactor 6.4** (ainda em branch separada):
- Header `mode='institutional'` → logo `/`, menu institucional
  [Palestras, Sobre, Livros, Mídia, Contato], CTA "Solicitar
  palestra"
- LeadForm `origem='palestra'` → success "Solicitação registrada",
  "Retorno em 48h úteis", submit "Solicitar palestra"

**Restrições atendidas**: zero deps novas, zero outras páginas
criadas, paleta canônica, sem git push, 4 commits semânticos.

**QA**: blocker ambiental conhecido (Google Drive sem suporte a
junctions). Inspeção manual completa em `_DONE_P2.9-6.3a.md`.
Recomendado rodar `npm run typecheck && npm run build` antes do
merge.

**Ordem de merge sugerida**:
main ← P2.8.1 ← P2.9-6.4 ← P2.9-6.3a

**Próximo bloco P2.9** (não iniciado): demais páginas
institucionais — / (home), /sobre, /livros (índice), /midia,
/contato. Cada uma reusará Header.mode='institutional' já pronto.
```

## Mensagem inline ao Doutor

> P2.9-6.3a /palestras done. 9 TODOs flagados. Branch local
> `feat/p2-9-6-3a-palestras-page` pronta para merge na sequência:
> P2.8.1 → 6.4 → 6.3a.
