# CLAUDE.md — mateusnogueira-web
## Landing Pages dos Livros Atheneu · Dr. Mateus Antunes Nogueira

> Este arquivo é carregado automaticamente em toda sessão Claude Code neste diretório.
> Contém todo o contexto necessário para executar sem briefing adicional.

---

## 1. Identidade do projeto

**Site:** `mateusnogueira.com.br` — site pessoal do Dr. Mateus Antunes Nogueira (CRM-SP 97.070)
**Repo GitHub:** `drmateus-amaplataforma/mateusnogueira-web`
**Vercel:** projeto a criar na org `drmateus-amaplataforma` (mesma do `vae-handson-landing`)
**Stack:** Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion

**Propósito atual:** landing pages de pré-venda dos dois livros publicados pela Editora Atheneu (pré-venda ativa até 24/05/2026).

---

## 2. Modo de execução

- Execução autônoma total — sem confirmações intermediárias
- Só interromper se erro técnico bloquear continuação
- Uma landing page por vez: **LP1 primeiro, LP2 só após LP1-09 deployada**
- Cada fase de LP1 tem gates de aprovação explícitos (ver seção 7)

---

## 3. Design System — Dr. Mateus Pessoal

Paleta canônica (imutável):

```css
--mateus-primary:   #1F2A44;  /* Navy Executivo — cor dominante */
--mateus-accent:    #8B7355;  /* Sépia Grafite — acento */
--mateus-bg:        #FAF7F2;  /* Marfim Suave — fundo */
--mateus-bg-alt:    #F0EBE3;  /* Marfim escuro — seções alternadas */
--mateus-text:      #1F2A44;  /* Texto principal */
--mateus-muted:     #8B7355;  /* Texto secundário */
--mateus-white:     #FFFFFF;
```

**Tipografia:** DM Sans exclusivamente
- ExtraBold 800 → títulos, headlines
- Regular 400 → corpo
- Light 300 uppercase → categorias, labels

Fontes TTF em:
`C:\Users\mateu\Home Office\06_MOTOR-MARKETING\00_MARCA_E_IDENTIDADE\AMA_Plataforma\Paleta_e_Tipografia\Fontes_DMSans\`

**Estética:** minimalismo premium, espaços negativos generosos (≥30%), zero ornamentos, zero stock photography.

---

## 4. Referências de qualidade obrigatórias

Estas duas landing pages definem o padrão visual e de conversão. **Estudar ambas antes de escrever qualquer componente.**

### 4a. AMA Plataforma — padrão de design system
URL: https://amaplataforma.com.br
Código fonte local:

```
C:\Users\mateu\Home Office\04_AMA-PLATAFORMA\ama-plataforma-web\src\app\page.tsx
C:\Users\mateu\Home Office\04_AMA-PLATAFORMA\ama-plataforma-web\src\components\landing\

Localização deste projeto: C:\Users\mateu\Home Office\06_MOTOR-MARKETING\09_SITES_WEB\mateusnogueira-web
```

### 4b. VAE Hands-On — padrão de landing page de produto/curso
URL: https://vidaativaensino.com.br/cursos/hands-on
Código fonte local: `C:\Users\mateu\Home Office\06_MOTOR-MARKETING\09_SITES_WEB\vae-handson-landing\` (se existir)
**O que replicar desta landing:** estrutura de seções de conversão, hierarquia de CTAs, social proof, urgência, depoimentos, FAQ, hero com proposta de valor clara.

### Estrutura de seções da AMA (referência de ordem e padrão):
1. Header (sticky)
2. S1_Hero — headline + dual CTA + visual proof
3. S2_Especialidades — marquee contínuo (prova de abrangência)
4. S3_Fluxo — processo step-by-step com animação
5. S4_Laudos — showcase do produto
6. S5_SVDL — diferencial técnico + tabela comparativa
7. S7_DrMateus — credenciais do autor
8. S8_FaqCTA — FAQ accordion + formulário de captura
9. Footer

### Componentes reutilizáveis da AMA (adaptar, não copiar):
- `GlowCard` — card com motion, glass-morphism, hover glow
- `BrowserMockup` — frame de browser com parallax
- `LeadForm` — formulário completo com validação e estados
- `MiniBadge` — badge de feature para mobile

### Padrões de animação AMA (replicar):
```tsx
// Entrance padrão (WhileInView)
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-60px' }}
transition={{ duration: 0.6 }}

// Stagger entre cards
delay: i * 0.1

// Spring para elementos de destaque
transition={{ type: 'spring', stiffness: 260, damping: 18 }}
```

### Padrão CTA primário AMA (adaptar para paleta Dr. Mateus):
```tsx
className="bg-[var(--mateus-primary)] text-white font-semibold py-4 px-8 
           rounded-lg hover:opacity-90 transition-all duration-200 
           shadow-[0_0_20px_rgba(31,42,68,0.25)]"
```

---

## 5. LP1 — Livro "Avaliação Metabólica Avançada"

### Dados comerciais
| Campo | Valor |
|---|---|
| Título completo | Avaliação Metabólica Avançada na Saúde e no Desempenho |
| Subtítulo | Calorimetria Indireta e Teste de Performance Cardiopulmonar na Prática Clínica. MEV 3.0 |
| Autor | Mateus Antunes Nogueira |
| Editora | Atheneu (97 anos) |
| Preço | 5× de R$ 43,80 sem juros (~R$ 219 total) |
| Promoção válida até | 24/05/2026 |
| Envio a partir de | 24/05/2026 |
| URL compra Atheneu | https://www.atheneu.com.br/avaliacao-metabolica-avancada-na-saude-e-no-desempenho |
| URL da landing | mateusnogueira.com.br/livros/avaliacao-metabolica |
| Rota Next.js | `app/livros/avaliacao-metabolica/page.tsx` |

### Público-alvo
Médicos de todas as especialidades + nutricionistas + fisioterapeutas + educadores físicos + fisiologistas clínicos. **Mesmo público da AMA Plataforma.**

### Visual de referência
Capa navy/dourado com atleta em máscara de ergoespirometria. Acento dourado (`#B08538`) permitido como cor de destaque secundária nesta landing.

### Assets
- Flyer pré-venda: `C:\Users\mateu\Home Office\06_MOTOR-MARKETING\00_MARCA_E_IDENTIDADE\Dr_Mateus_Pessoal\08_Livros_Atheneu\Flyer_Prevenda_AvaliacaoMetabolica.png`
- Fotos autor para curadoria: `C:\Users\mateu\Home Office\06_MOTOR-MARKETING\00_MARCA_E_IDENTIDADE\Dr_Mateus_Pessoal\06_Photography\curadoria\`

### Notion tasks LP1 (atualizar status ao iniciar/concluir)

| Ordem | Task | Notion ID |
|---|---|---|
| 610 | LP1-01 Briefing + wireframe | `359b69aa-66bc-81cc-9b04-e262bd2a6701` |
| 611 | LP1-02 Copywriting completo | `359b69aa-66bc-8178-a6cf-fca6faa9e355` |
| 612 | LP1-03 Assets visuais | `359b69aa-66bc-8161-ba1d-c096c4343144` |
| 613 | LP1-04 Scaffold Next.js | `359b69aa-66bc-81dd-8495-ea4cfffaf9af` |
| 614 | LP1-05 Desenvolvimento seções | `359b69aa-66bc-8188-b133-c86373e73d84` |
| 615 | LP1-06 Formulário leads + Make | `359b69aa-66bc-8182-8f15-c606f53752ae` |
| 616 | LP1-07 QA + Lighthouse | `359b69aa-66bc-814a-8355-c5e2c909d0ad` |
| 617 | LP1-08 Aprovação Dr. Mateus | `359b69aa-66bc-815a-8c9c-cf000e29f3ba` |
| 618 | LP1-09 Deploy + UTM | `359b69aa-66bc-81b5-a3a8-c5d0fe220399` |

---

## 6. LP2 — Livro "Nova Medicina do Estilo de Vida"

### Dados comerciais
| Campo | Valor |
|---|---|
| Título completo | Nova Medicina do Estilo de Vida |
| Subtítulo | Prevenção, Tratamento e Longevidade |
| Autor | Mateus Antunes Nogueira |
| Editora | Atheneu (97 anos) |
| Preço | 3× de R$ 46,33 sem juros (~R$ 139 total) |
| Promoção válida até | 24/05/2026 |
| Envio a partir de | 24/05/2026 |
| URL compra Atheneu | https://www.atheneu.com.br/nova-medicina-do-estilo-de-vida |
| URL da landing | mateusnogueira.com.br/livros/nova-medicina |
| Rota Next.js | `app/livros/nova-medicina/page.tsx` |

### Público-alvo
Profissionais de saúde + público geral interessado em longevidade, prevenção e estilo de vida. **Tom mais acolhedor e acessível que LP1.**

### Visual de referência
Capa roxo/lilás com roda dos 6 pilares MEV (exercício, nutrição, meditação, sono, social, sem tabagismo). Acento lilás/roxo (`#6B5B95` aprox.) como cor de destaque secundária nesta landing.

### Assets
- Flyer pré-venda: `C:\Users\mateu\Home Office\06_MOTOR-MARKETING\00_MARCA_E_IDENTIDADE\Dr_Mateus_Pessoal\08_Livros_Atheneu\Flyer_Prevenda_NovaMedicina.png`

### Notion tasks LP2

| Ordem | Task | Notion ID |
|---|---|---|
| 620 | LP2-01 Briefing + wireframe | `359b69aa-66bc-8197-b150-cc9139f637a5` |
| 621 | LP2-02 Copywriting completo | `359b69aa-66bc-81a5-bda2-f5e9abf10e5a` |
| 622 | LP2-03 Assets visuais | `359b69aa-66bc-81ee-aed2-e120c0060688` |
| 623 | LP2-04 Desenvolvimento (reuso LP1) | `359b69aa-66bc-81e0-b964-ed2628d04b5b` |
| 624 | LP2-05 Formulário leads | `359b69aa-66bc-8162-a947-e5bbe1bea9a2` |
| 625 | LP2-06 QA + Lighthouse | `359b69aa-66bc-81f5-a018-cbe4b3b567af` |
| 626 | LP2-07 Aprovação Dr. Mateus | `359b69aa-66bc-81fb-a7fc-e1e1c8262ff8` |
| 627 | LP2-08 Deploy + UTM | `359b69aa-66bc-8127-a892-c0de47262212` |

---

## 7. Protocolo de execução (gates obrigatórios)

```
INFRA (600-603)          ← Pré-requisito de tudo. Executar primeiro.
  ↓
LP1-01 Briefing          ← Cowork com Dr. Mateus. NÃO pular para código.
  ↓ (aprovação escrita)
LP1-02 Copywriting       ← Cowork com Dr. Mateus. Textos aprovados antes de dev.
  ↓ (aprovação escrita)
LP1-03 Assets            ← Imagens otimizadas em public/livros/avaliacao/
  ↓
LP1-04 Scaffold          ← Só aqui começa o código
  ↓
LP1-05 Seções            ← Componentes das seções
  ↓
LP1-06 Lead form         ← Make webhook configurado (LEAD_WEBHOOK_URL)
  ↓
LP1-07 QA                ← Lighthouse ≥90 em tudo
  ↓
LP1-08 GATE: aprovação   ← Dr. Mateus revisa no preview Vercel. SEM DEPLOY sem isso.
  ↓ (aprovação no Notion)
LP1-09 Deploy            ← Produção + UTM
  ↓
LP2-01 ... LP2-08        ← Mesma sequência. Infra já existe, componentss reutilizados.
```

### Regra Notion obrigatória
- **Ao iniciar** task: `Status → 🟡 Em produção`
- **Ao concluir**: `Status → 🛠️ Concluída` + Notas com resumo do que foi feito

---

## 8. Infraestrutura

### DNS (configurar no painel Registro.br)
```
Tipo A     @           76.76.21.21
Tipo CNAME www         cname.vercel-dns.com
```

### Variáveis de ambiente (configurar no Vercel)
```
LEAD_WEBHOOK_URL=      # URL do webhook Make (criar cenário antes)
NEXT_PUBLIC_SITE_URL=  https://mateusnogueira.com.br
```

### Notion tasks de infra

| Ordem | Task | Notion ID |
|---|---|---|
| 600 | LP-INFRA-01 Criar repo GitHub | `359b69aa-66bc-81db-b93e-dc30f4927460` |
| 601 | LP-INFRA-02 Criar projeto Vercel | `359b69aa-66bc-8111-a3e9-dbe18956ba2f` |
| 602 | LP-INFRA-03 Configurar DNS | `359b69aa-66bc-81b9-b3ac-ea20cfa04430` |
| 603 | LP-INFRA-04 Env vars Vercel | `359b69aa-66bc-8164-b457-e38c22e8807e` |

---

## 9. Lead capture

### Campos do formulário
```ts
{ nome: string, email: string, whatsapp: string, especialidade: string, livro: 'avaliacao-metabolica' | 'nova-medicina' }
```

### Fluxo
1. Submit → `POST /api/lead`
2. API route → `fetch(LEAD_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(data) })`
3. Sucesso → redirecionar para URL de compra Atheneu
4. Erro → mensagem inline, não bloquear CTA de compra

### CTA duplo (obrigatório em ambas as landings)
- **Primário:** "Comprar na Atheneu" → link direto Atheneu (target="_blank")
- **Secundário:** "Receber novidades sobre o livro" → abre formulário de lead

---

## 10. Estrutura de seções sugerida para LP1

*A aprovar em LP1-01. Este é o rascunho inicial — não executar sem aprovação.*

```
S1_Hero          Título + capa do livro + badge "Pré-venda" + preço + dual CTA
S2_Urgencia      Countdown/destaque prazo 24/05/2026 + frete
S3_Para_Quem     Para quem é este livro (cards por especialidade)
S4_O_Que_Voce    O que você vai dominar (sumário em cards)
S5_SVDL          Diferencial científico — SVDL + CI + TCPE (texto denso, autoridade máxima)
S6_Autor         Dr. Mateus — credenciais, CRM, Atheneu, experiência clínica
S7_Depoimentos   Testemunhos (profissionais da área — a preencher com Dr. Mateus)
S8_FAQ_CTA       FAQ + formulário de captura + CTA final de compra
Footer           Editora Atheneu, links legais
```

---

## 11. Ecossistema de marcas (contexto)

```
Dr. Mateus Antunes Nogueira (mateusnogueira.com.br — este projeto)
  ├── AMA Plataforma — SaaS médico B2B (amaplataforma.com.br) ← referência de qualidade
  ├── Vida Ativa Ensino — escola (vidaativaensino.com.br — não construído ainda)
  └── Oxy Recovery — clínica (oxyrecovery-vidaativa.com.br — não construído ainda)
```

Os dois livros são autoria pessoal do Dr. Mateus — pertencem ao domínio pessoal, não às marcas corporativas.

---

## 12. Kanbans Notion

- **LP1:** https://www.notion.so/a064fa47aa434965b10196ba7787b654?v=359b69aa66bc8154aefe000c5efb7dd2
- **LP2:** https://www.notion.so/a064fa47aa434965b10196ba7787b654?v=359b69aa66bc81fa94f6000cd84392e8
- **Banco completo (Motor de Marketing):** https://www.notion.so/a064fa47aa434965b10196ba7787b654

---

*CLAUDE.md gerado por Claudio (Claude Code) · 07/05/2026*
*Contexto transferido da sessão de branding do ecossistema + decisões arquiteturais LP1/LP2*
