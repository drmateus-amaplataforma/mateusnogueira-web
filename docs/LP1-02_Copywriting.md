# LP1-02 · Copywriting v_final.2 (executado)
## Landing "Avaliação Metabólica Avançada na Saúde e no Desempenho"

> **Status:** versão executada em 08/05/2026 e implementada nos 8 componentes de seção em `src/components/landing/sections/`.
> **Voz:** editorial-científica. Densidade Atheneu + ponte com Plataforma AMA.
> **Tipografia:** DM Sans (sans) + Crimson Pro (serif editorial nos trechos do livro e citação Werutsky).
> **Posicionamento:** landing PERPÉTUA — Atheneu Legacy strip auto-transita pré→pós 24/05.

---

## Header (sticky)

- **Logo:** Monograma MAN D2 (PNG navy sobre marfim) + nome em DM Sans ExtraBold
- **CRM:** "CRM-SP 97.070" (uppercase tracking-eyebrow, sub-linha)
- **Menu:** O método · Sumário · Autor · Perguntas frequentes
- **CTA:** "Comprar na Atheneu →" com UTM `utm_content=header`

## S1 · Hero

**Eyebrow:** `Pré-venda · Editora Atheneu · 2026` (palavra "Pré-venda" em dourado)

**Headline (Crimson Pro Bold, 4xl-6xl):**
`Avaliação Metabólica Avançada na Saúde e no Desempenho.`

**Promessa traduzida (subheadline DM Sans):**
`Da estimativa à medição: o método para dominar Calorimetria Indireta e Teste Cardiopulmonar como terapia de precisão na prática clínica.`

**Bloco preço:**
- "Editora Atheneu · 2026" (uppercase tracking)
- `5× de R$ 43,80 sem juros` (R$ 43,80 em dourado)
- `R$ 219 à vista · pré-venda até 24/05`

**CTAs:**
- Primário: `Comprar na Atheneu →` (UTM `utm_content=hero`)
- Secundário: `Receber amostra + novidades` (âncora `#receber`)

**Microcopy:** "Compra direta no site da Editora Atheneu · Envio a partir de 24/05/2026."

**Visual:** capa real do livro (`CapaAMAVertical.png`) com glow dourado radial, perspectiva 3D sutil, drop-shadow editorial.

## S2 · Atheneu Legacy + Pré-venda strip

Faixa horizontal navy sobre marfim. Layout responsivo (stack mobile, row desktop).

**Esquerda:**
> **Editora Atheneu desde 1929.** Casa editorial de Wasserman, Guyton e Robbins na medicina brasileira.

**Direita (auto-transita conforme `daysUntil` da `book.preSaleEndDate`):**
- **Pré-venda ativa:** `Pré-venda · até 24 de maio · X dias restantes` (X em dourado)
- **Pós 24/05:** `Disponível na Editora Atheneu · 2026`

## S4 · Page → Practice (protagonista — 3 splits)

**Eyebrow:** `Da página para a prática`
**Headline (Crimson Pro):** `O que está no livro está rodando agora.`
**Subhead:** `Cada página descreve o método. A Plataforma AMA aplica em produção, em tempo real. Quem lê o livro entende a Plataforma. Quem usa a Plataforma volta ao livro.`

**3 splits 50/50 (alternam direção):**

### Tema 1 · TCPE / Ergoespirometria (Cap. 5, p. 118)
**Trecho do livro (Crimson Pro italic, fundo marfim com borda dourada lateral):**
> "Assim como um teste de estresse cardiológico revela isquemias não aparentes em um eletrocardiograma de repouso, o estresse do exercício revela a saúde mitocondrial e a flexibilidade metabólica em sua dimensão mais autêntica. Décadas de estudos epidemiológicos demonstram, de forma consistente, que o VO₂máx possui forte e inversa associação com a mortalidade por todas as causas e por doenças cardiovasculares."

**Plataforma AMA aplicando:** screenshot dark mode `tcpe-svdl.png` em browser frame estilizado.
**Caption:** "Plataforma AMA · análise de curvas ventilatórias com SVDL aplicado"

### Tema 2 · Calorimetria Indireta (Cap. 4, p. 85)
> "A Calorimetria Indireta elimina a incerteza ao substituir a estimativa pela medição direta do motor metabólico do paciente, em tempo real. O Quociente Respiratório se torna protagonista — uma janela para a função mitocondrial e para a flexibilidade metabólica, revelando qual combustível o organismo utiliza em repouso. Se a TMR nos diz quanto o corpo gasta, o QR nos diz como ele gasta."

**Caption:** "Plataforma AMA · módulo de Calorimetria Indireta em produção"

### Tema 3 · Laudo / Mapa Metabólico (Cap. 5, p. 205)
> "O laudo do TCPE deixa de ser um simples documento diagnóstico para se tornar o manual de instruções do paciente. Um VO₂máx elevado, limiares ventilatórios em altas intensidades e depuração eficiente de lactato não são apenas marcadores de performance — são os sinais vitais de uma rede mitocondrial saudável. O Mapa Metabólico Modificado em 5 zonas traduz toda essa riqueza de dados em uma prescrição com doses e alvos."

**Caption:** "Plataforma AMA · geração de laudo com método aplicado"

**CTA discreto no fim:** `Ver o método em produção · amaplataforma.com.br →`

## S3 · Sumário Vivo + Densidade

**Eyebrow:** `Conteúdo`
**Headline:** `O que você vai dominar.`
**Subhead:** `Da fisiologia integrativa ao laudo assinado: o método MEV 3.0 em onze capítulos.`

**Stats (Crimson Pro Bold, 3xl-4xl):**
- `11` capítulos
- `235+` figuras científicas
- `100+` referências por pares
- `~350` páginas

**Accordion 11 capítulos** com subtítulo + 4-5 takeaways cada (curados do manuscrito real). Numeração em dourado (`01`, `02`, ..., `11`). Primeira aberta por padrão.

## S5 · Inside the Book (PDF amostra)

**Eyebrow:** `O livro por dentro`
**Headline:** `Veja antes de comprar.`
**Subhead:** `Edição revisada por pares · referências atualizadas até 2026 · Editora Atheneu. A amostra abaixo é oficial da Atheneu.`

**Layout duas colunas:**
- **Esquerda (60%):** Embed do PDF amostra Atheneu (`amostra-livro.pdf`) em viewer com header "Amostra oficial · Editora Atheneu" + link "Abrir em nova aba ↗"
- **Direita (40%):** Stats grid 2×2 (Editora · Capa · Páginas · Figuras) + thumbs de 5 figuras científicas + CTA "Comprar na Atheneu →"

## S6 · Autor

**Eyebrow:** `Autor`
**Headline (Crimson Pro):** `Quem assina.`

**Layout:** foto à esquerda (35%, aspect 3/4 com bordas marfim), texto à direita (65%).

**Texto principal:**
> **Dr. Mateus Antunes Nogueira** · CRM-SP 97.070
>
> Cirurgião do aparelho digestivo, médico do esporte e nutrólogo. Doutor pela Universidade de São Paulo. Mais de 10 anos atuando na interface entre cirurgia, fisiologia integrativa e medicina do estilo de vida.
>
> Autor de *Avaliação Metabólica Avançada na Saúde e no Desempenho* (Atheneu, 2026). **Fundador da Plataforma AMA** (amaplataforma.com.br) — sistema clínico que aplica em produção, em tempo real, o método MEV 3.0 descrito no livro.

**Card editorial (Crimson Pro italic):**
> "Cirurgião que escreveu o livro. Fundador da plataforma que aplica o método em tempo real."

**Grid 2×4 de credenciais condensadas:**
| CRM-SP | Doutorado | Especialidades | Treinou |
|--------|-----------|----------------|---------|
| 97.070 | USP | Cirurgia · Esporte · Nutrologia | +1.000 profissionais |

## S7 · Endosso Werutsky

**Eyebrow:** `Prefácio · Endosso editorial`

**Visual:** ícone de aspas em dourado, centralizado.

**Citação (Crimson Pro italic, xl-3xl):**
> "Ao folhar as páginas desse livro, o leitor vai encontrar uma abordagem científica de temas como avaliação metabólica avançada com ferramentas como a calorimetria indireta e o Teste Cardiopulmonar — com aplicação prática em estudos de casos."

**Footer:**
- **Prof. Dr. Carlos Alberto Werutsky**
- Médico Nutrólogo (ABRAN/AMB/CFM) · Médico do Esporte (SBMEE/AMB/CFM) · Mestre em Ciências do Movimento Humano (UFRGS) · Doutor em Clínica Médica (FMRP-USP) · Diretor do Departamento de Nutrologia Esportiva da ABRAN

## S8 · FAQ + Lead form + CTA final

**Layout duas colunas: FAQ à esquerda (60%), Lead form sticky à direita (40%).**

### FAQ (6 perguntas, accordion):
1. **Quando recebo o livro?** A partir de 24 de maio de 2026, durante a janela de pré-venda. Após o lançamento, segue disponível para envio direto pela Editora Atheneu.
2. **Qual a forma de pagamento?** Diretamente no site da Atheneu: cartão de crédito (até 5× sem juros), Pix ou boleto. Durante a pré-venda, R$ 219 (5× de R$ 43,80 sem juros).
3. **Existe versão digital (e-book)?** A pré-venda atual é da edição impressa. Versões digitais futuras seguem cronograma editorial da Atheneu.
4. **O livro substitui a Plataforma AMA?** Não — eles são complementares. O livro descreve o método MEV 3.0 e o SVDL. A Plataforma AMA aplica esse método em produção, com IA validando limiares em tempo real e gerando laudo.
5. **Para quem ainda não realiza ergoespirometria, o livro vale?** Vale. A primeira metade trata de fundamentos fisiológicos e calorimetria indireta — aplicáveis em qualquer prática clínica.
6. **Posso comprar para minha equipe ou clínica?** Sim. A Atheneu atende pedidos institucionais. Entre em contato pelo formulário ao lado para indicação direta.

### Lead form (3 campos + LGPD):
- Nome completo (obrig)
- E-mail (obrig)
- WhatsApp (opcional)
- ☑ LGPD checkbox (obrig) — "Autorizo o uso dos meus dados conforme a Política de Privacidade e a Lei Geral de Proteção de Dados (LGPD)."

**CTA do form:** `Receber amostra + novidades →`

**Lead magnet:** PDF amostra oficial Atheneu + avisos do autor (eventos, próximos livros, atualizações da Plataforma AMA).

**Estado de sucesso:** mensagem + link direto pra baixar amostra (`/livros/avaliacao/amostra-livro.pdf`).

### CTA final primário (abaixo do form):
**`Já decidiu? Compre direto na Atheneu.`**
"5× de R$ 43,80 sem juros · pré-venda até 24/05/2026"
**Botão:** `Comprar na Atheneu →` (UTM `utm_content=faq_final`)

## Footer

**Layout 3 colunas (stack mobile):**

### Coluna 1 — Branding pessoal
- Monograma MAN D2 (dark variant) + nome do autor + CRM-SP 97.070
- Especialidades · Doutor pela Universidade de São Paulo

### Coluna 2 — Ecossistema
- Plataforma AMA → amaplataforma.com.br
- Vida Ativa Ensino → vidaativaensino.com.br
- Oxy Recovery → em breve

### Coluna 3 — Editora Atheneu
- Avaliação Metabólica Avançada (Editora Atheneu, 2026)
- Nova Medicina do Estilo de Vida (Editora Atheneu, 2026)

**Linha final:** © 2026 Dr. Mateus Antunes Nogueira · Política de Privacidade · Termos de Uso

---

## Cláusulas anti-risco implementadas (do conselho)

1. ✅ **CTA Atheneu com UTM completo** — todos os 4 CTAs (header, hero, inside_book, faq_final) usam `book.ctaUrl(position)` que injeta `utm_source=mateusnogueira&utm_medium=landing&utm_campaign=lp1_avalmetab&utm_content=<position>`
2. ✅ **Tracking via data attribute** — botões têm `data-cta="..."` para futura analítica
3. ✅ **LGPD checkbox** obrigatório no LeadForm
4. ✅ **Trechos do manuscrito limitados** — 3 parágrafos curtos autorizados pela Atheneu (Caps 4 e 5)
5. ✅ **Werutsky** — 1 frase curta com créditos completos do prefaciador
6. ✅ **Lead magnet seguro** — PDF amostra oficial Atheneu (zero risco contratual)

## Páginas legais (a criar)

- `/privacidade` — Política de Privacidade (LGPD)
- `/termos` — Termos de Uso

> ⚠️ **Pendente Dr. Mateus:**
> 1. Confirmar 6 perguntas/respostas do FAQ
> 2. Confirmar e-mail de contato editorial (footer)
> 3. Conteúdo das páginas legais

---

*Copywriting v_final.2 executado · Claudio · 08/05/2026*
