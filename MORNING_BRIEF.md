# 🌅 Morning Brief — 08/05/2026

> Bom dia, Dr. Mateus. Aqui está o que executei autonomamente esta noite e o que precisa de você antes de avançarmos para LP1-03 (assets finais), LP1-05 (seções), LP1-06 (lead form ao vivo) e LP1-07/08/09 (QA + aprovação + deploy).

---

## ✅ Concluído autonomamente esta noite

| Notion | Task | Estado |
|---|---|---|
| 610 | LP1-01 Briefing + wireframe | 🛠️ Concluída |
| 611 | LP1-02 Copywriting | 🟡 Em produção (rascunho completo aguardando sua revisão) |
| 612 | LP1-03 Assets | 🟡 Em produção (parcial — flyer e 3 fotos candidatas copiadas) |
| 613 | LP1-04 Scaffold | 🛠️ Concluída |
| 614 | LP1-05 Componentes | 🟡 Em produção (shared components prontos; seções aguardam copy aprovado) |

**Arquivos criados:**
- `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `.gitignore`, `.env.example`, `.eslintrc.json`
- `src/app/layout.tsx` — DM Sans via `next/font/google`, metadata SEO, redirect raiz → LP1
- `src/app/globals.css` — variáveis CSS da paleta + utilitários (`.eyebrow`, `.container-content`, `.section-py`)
- `src/lib/design-tokens.ts` — paleta + dados canônicos do livro/autor
- `src/lib/utils.ts` — `cn()`, `daysUntil()`, `formatBRL()`
- `src/components/landing/ui/Header.tsx` — sticky com blur on scroll, menu âncora, CTA Atheneu
- `src/components/landing/ui/Footer.tsx` — 3 colunas (branding, ecossistema, livros), fundo navy escuro
- `src/components/landing/ui/Section.tsx` + `SectionHeader` — primitivas de layout
- `src/components/landing/ui/GlowCard.tsx` — variantes default e gold
- `src/components/landing/ui/CTAButton.tsx` — primary / secondary / gold
- `src/components/landing/ui/LeadForm.tsx` — 3 campos (nome obrig + email obrig + WhatsApp opcional), estados idle/loading/success/error
- `src/components/landing/ui/BookMockup3D.tsx` — mockup 3D com glow dourado
- `src/components/landing/ui/CountdownLine.tsx` — frase factual estática com dias dinâmicos
- `src/app/api/lead/route.ts` — Edge runtime, valida e encaminha para `LEAD_WEBHOOK_URL`
- `src/app/livros/avaliacao-metabolica/page.tsx` — stub com Header + Footer (seções S1-S8 aguardam copy)
- `docs/LP1-02_Copywriting.md` — copy completo das 9 seções

**Assets copiados para `public/livros/avaliacao/`:**
- `flyer-prevenda.png`
- `autor-candidato-1-academico.jpg` *(recomendação — academia + livros)*
- `autor-candidato-2-laboratorio.jpg` *(alternativa — clínica + equipamento)*
- `autor-candidato-3-headshot.jpg` *(alternativa — close)*

---

## 🎯 O que precisa de você hoje (em ordem de prioridade)

### 1. **Revisar `docs/LP1-02_Copywriting.md` palavra a palavra** ⏱️ ~30-45 min

Bloqueante para LP1-05 (componentes de seção). Sem copy aprovado, não posso construir S1-S8.

**Como revisar:**
- Abrir `docs/LP1-02_Copywriting.md`
- Ler cada seção e marcar correções inline (ou me dizer ajustes em chat)
- Atenção especial a **headlines, subheads e tom** — copy aqui é o que define o nível premium da landing

**Marcadores `⚠️ [pendente: ...]`** que você precisa preencher:
- Sumário definitivo (S4): nº de capítulos, títulos, total de páginas
- ISBN do livro
- Dimensões físicas do livro
- Versão e-book? (FAQ pergunta 3)
- Canal de atualizações pós-lançamento (FAQ 6)
- E-mail de contato editorial (FAQ 7 + Footer)
- Pedidos institucionais (FAQ 8)

> Se algo ainda não está fechado, ok — eu construo as seções com placeholder e a gente preenche depois sem reescrever.

### 2. **Escolher a foto para S6_Autor** ⏱️ ~3 min

Três candidatas em `public/livros/avaliacao/`:
- **`autor-candidato-1-academico.jpg`** ← minha recomendação. Terno + mesa com livros = autoridade editorial, casa com a S6 que apresenta você como autor.
- `autor-candidato-2-laboratorio.jpg` — terno + ergoespirometria. Mais clínico/técnico. Boa, mas pode redundar com a S5 (SVDL) que já é a parte técnica.
- `autor-candidato-3-headshot.jpg` — close mais informal. Mais "pessoal" que "autor de livro Atheneu".

**Decisão:** me diga qual escolher (1, 2 ou 3 — ou aponte outra entre os 30 arquivos da pasta `06_Photography/curadoria/`).

### 3. **Webhook Make para o lead form** ⏱️ ~15 min

A rota `/api/lead` está pronta. Sem `LEAD_WEBHOOK_URL` configurada, o form retorna erro.

**Caminho A (você cria o cenário Make):** crie um cenário Make com webhook entrante → conecte ao destino que já usa para outros leads (Notion? Google Sheet? CRM?) → me passe a URL do webhook.

**Caminho B (eu crio):** me autoriza e eu monto o cenário Make pelo MCP. Preciso saber:
- Destino dos leads (Notion DB? Sheet? Outra coisa?)
- Se Notion: qual database e quais campos mapear
- Se quer notificação por email/WhatsApp quando chega lead novo

### 4. **Capa limpa do livro** ⏱️ depende da Atheneu

O `BookMockup3D` vai usar a capa do livro renderizada com perspectiva 3D. O flyer atual tem a capa misturada com elementos de marketing — preciso da **capa pura, alta resolução** (idealmente 2400×3600 px com ou sem canal alfa).

**Opções:**
- Solicitar à Atheneu (canal editorial)
- Recortar/limpar manualmente o flyer existente (Photoshop/Canva)
- Você ter o arquivo original do designer da capa

> Se não for possível antes da revisão, eu construo as seções usando o flyer e trocamos depois sem rework.

---

## 📋 Próximas tasks da sequência (após você desbloquear acima)

| Notion | Task | Pré-requisito |
|---|---|---|
| 614 | LP1-05 Seções S1-S8 | Copy aprovado (#1) |
| 612 | LP1-03 Assets finais | Foto escolhida (#2) + capa limpa (#4) |
| 615 | LP1-06 Lead form integrado | Webhook URL (#3) |
| 616 | LP1-07 QA + Lighthouse | Tudo acima |
| 617 | LP1-08 **GATE: aprovação no preview Vercel** | Tudo acima |
| 618 | LP1-09 Deploy produção + UTM | Sua aprovação no #5 |

---

## 🚦 Estado dos servidores

- **Repo GitHub:** ✅ existe, último commit é só o CLAUDE.md inicial. Não fiz commit ainda do scaffold (preferi deixar você revisar antes do primeiro push).
- **Vercel project:** ✅ existe, mas vai dar 404/erro até o primeiro push do scaffold.
- **DNS:** ✅ configurado.
- **Env var no Vercel:** `NEXT_PUBLIC_SITE_URL` ✅ · `LEAD_WEBHOOK_URL` ❌ pendente.

**Sugestão:** quando você aprovar o copy e a foto, eu (a) faço primeiro commit do scaffold + componentes shared, (b) construo as 9 seções, (c) commit + push, (d) você revisa no preview Vercel, (e) deploy produção.

---

## ⚙️ Para rodar localmente agora (opcional)

```powershell
cd "g:\Drives compartilhados\Motor de Marketing\06_MOTOR-MARKETING\09_SITES_WEB\mateusnogueira-web"
npm install
npm run dev
```

Isso vai instalar dependências e abrir em http://localhost:3000. Você verá: cabeçalho + título + rodapé funcionais; seções S1-S8 mostram aviso de "aguardando aprovação".

---

*Brief gerado por Claudio · 08/05/2026 madrugada · BR.*
