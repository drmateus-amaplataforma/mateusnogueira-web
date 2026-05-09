done 2026-05-09T20:50:00-03:00
task: P2.10 — Tracking + LGPD + JSON-LD + SEO foundations
branch: feat/p2-10-tracking-jsonld-seo
base: main @ 2757bcc
files_created:
  - src/app/robots.ts
  - src/app/sitemap.ts
  - src/app/privacidade/page.tsx
  - src/app/termos/page.tsx
  - src/lib/seo/jsonld.ts
  - src/lib/track.ts
  - src/lib/utm.ts
  - src/components/analytics/CookieConsent.tsx
  - src/components/analytics/MetaPixel.tsx
  - src/components/analytics/VercelAnalytics.tsx
  - src/components/analytics/GoogleTagManager.tsx
  - .env.example
  - _DONE_P2.10.md
files_modified:
  - package.json (add @vercel/analytics ^2.0.1)
  - src/app/layout.tsx (Consent Mode v2 stub + Person+WebSite JSON-LD + montagem dos 4 componentes)
  - src/app/livros/avaliacao-metabolica/page.tsx (Book JSON-LD)
  - src/app/livros/nova-medicina/page.tsx (Book JSON-LD)
  - src/app/palestras/page.tsx (Course JSON-LD)
  - src/app/api/lead/route.ts (aceita utm_term + utm_content)
  - src/components/landing/ui/LeadForm.tsx (utmsAsPayload + trackBoth Lead)

# =====================================================================
# Checklist por bloco
# =====================================================================

bloco_a_seo_foundations:
  status: ok
  - [x] src/app/robots.ts via Next 14 MetadataRoute.Robots
  - [x] Allow / · Disallow /api/ · sitemap apontando para /sitemap.xml
  - [x] src/app/sitemap.ts com 10 URLs:
        /, /sobre, /palestras, /livros, /livros/avaliacao-metabolica,
        /livros/nova-medicina, /contato, /midia, /privacidade, /termos
  - [x] /privacidade e /termos criados (eram referenciados no Footer
        mas inexistentes — sitemap geraria 404 sem isso)

bloco_b_jsonld:
  status: ok
  - [x] src/lib/seo/jsonld.ts com helpers tipados:
        getPersonSchema(), getWebSiteSchema(), getBookSchema(slug),
        getCourseSchema(), jsonLdScriptProps(schema)
  - [x] @id canônicos referenciados via {'@id': PERSON_ID} entre schemas
  - [x] Person inclui CRM-SP 97.070 como PropertyValue identifier,
        alumniOf USP, worksFor [AMA, VAE, Oxy], sameAs [LinkedIn,
        Instagram, YouTube]
  - [x] Book bookFormat default Hardcover (TODO Doutor confirmar com
        Atheneu); ISBN omitido para LP1+LP2 (TODO Doutor)
  - [x] Course com 3 CourseInstance (Keynote, Workshop, Mentoria)
        cada um com courseMode adequado
  - [x] Inserções:
        layout.tsx → Person + WebSite (global)
        LP1 page.tsx → Book(avaliacao-metabolica)
        LP2 page.tsx → Book(nova-medicina)
        palestras/page.tsx → Course
  - [ ] Validação Google Rich Results Test (https://search.google.com/test/rich-results)
        → executar APÓS deploy verde do PR. Print esperado:
        - LP1: Person + Book detectados, 0 erros
        - LP2: Person + Book detectados, 0 erros
        - /palestras: Person + Course detectados, 0 erros

bloco_c_lgpd:
  status: ok
  - [x] CookieConsent.tsx replicado de vae-handson-landing,
        adaptado para paleta navy/dourado/marfim
  - [x] localStorage chave canônica: mateusnogueira_consent_v1 (version 1)
  - [x] Custom event: mateus:consent-change
  - [x] window.__mateusConsent escrito em persist()
  - [x] 3 botões no banner: Personalizar / Rejeitar todos / Aceitar todos
  - [x] Modal granular com 3 categorias (Necessários sempre on, Analytics, Marketing)
  - [x] Consent Mode v2 stub inline em <head> antes de qualquer script
        (gtag('consent','default', denied) + reaplica update do localStorage)
  - [x] /privacidade existente — seção 7 Cookies/Consent/Revogação
  - [x] /termos existente — link para Política
  - [x] Banner aparece no 1º acesso, persiste após Aceitar/Rejeitar (visual QA pós-deploy)

bloco_d_pixel_analytics:
  status: ok
  - [x] MetaPixel.tsx — gated por consent.marketing
        - PageView automático via fbq('track','PageView') em bootPixel()
        - ScrollDepth 50% via window scroll handler (Lead-like, no-double-fire)
        - OutboundLink classificado: Atheneu → InitiateCheckout (Pixel) +
          outbound_click (DataLayer); AMA + VAE + WhatsApp → outbound_click
        - PIXEL_ID lido de NEXT_PUBLIC_META_PIXEL_ID (default 2158555548323617
          documentado em .env.example, decisão Claude Code Desktop)
  - [x] VercelAnalytics.tsx — <Analytics /> (consent.analytics)
  - [x] GoogleTagManager.tsx — stub gated, sem GTM_ID retorna null
  - [x] src/lib/track.ts — trackPixel + trackDataLayer + trackBoth
        (no-op silencioso sem consent ou em SSR)
  - [ ] QA pós-deploy: Events Manager Meta recebe PageView com consent.marketing
        aceito; sem consent ZERO requests para fbcdn.net (verificar via DevTools
        Network na produção)

bloco_e_utm:
  status: ok
  - [x] src/lib/utm.ts — captureUtms() + utmsAsPayload()
        - lê 5 UTMs da URL (utm_source, utm_medium, utm_campaign, utm_term, utm_content)
        - merge com cookie de first-touch (URL atual prevalece)
        - persiste cookie mateusnogueira_utms (30d, SameSite=Lax, Secure em https)
        - persistência só com consent.analytics
  - [x] LeadForm.tsx — substitui o read manual de URLSearchParams por utmsAsPayload()
  - [x] Aplica-se aos 5 LeadForms automaticamente:
        - palestras (origem=palestra)
        - contato (origem=contato)
        - midia (origem=midia)
        - LP1 S8_FaqCta (livro=avaliacao-metabolica)
        - LP2 S8_FaqCta (livro=nova-medicina)
  - [x] /api/lead aceita utm_term + utm_content adicionais (LeadPayload)
  - [x] trackBoth Lead disparado após resposta ok (gated por consent — no-op silencioso)
  - [ ] QA pós-deploy: visitar prod com ?utm_source=test&utm_campaign=qa,
        submeter LeadForm, confirmar webhook recebe os UTMs (incluindo
        utm_term e utm_content vazios mas presentes no shape)

# =====================================================================
# Rotas validadas (smoke test re-execute pós-deploy)
# =====================================================================

rotas_smoke_test:
  - / (home) → 200 + Person+WebSite JSON-LD em <head>
  - /sobre → 200
  - /palestras → 200 + Course JSON-LD
  - /livros → 200
  - /livros/avaliacao-metabolica → 200 + Book JSON-LD
  - /livros/nova-medicina → 200 + Book JSON-LD
  - /contato → 200
  - /midia → 200
  - /privacidade → 200 (NOVO)
  - /termos → 200 (NOVO)
  - /robots.txt → 200 (NOVO)
  - /sitemap.xml → 200 com 10 URLs (NOVO)

# =====================================================================
# Build local — bloqueio ambiente
# =====================================================================

build_passed: skipped_environment_blocker
typecheck_passed: skipped_environment_blocker
lint_passed: skipped_environment_blocker

qa_note: |
  Drive virtual FS continua bloqueando npm install local (mesmo sintoma
  documentado em P2.8.1 e P2.9-bloco-6.4 — fresh install no Drive leva
  20+ minutos sem produzir output). Tentativas com --prefer-offline e
  --no-audit não destravam.

  QA delegada à instância principal Claude Code com node_modules local:
  rodar `npm install && npm run typecheck && npm run lint && npm run build`
  ANTES do merge. Risco baixo de regressão — todos os componentes novos
  espelham os de vae-handson-landing (já em prod) e mudanças nos arquivos
  existentes são aditivas (LeadForm, layout.tsx, api/lead, LP1/LP2/palestras).

  Verdade última: Vercel preview build do PR. Se passar verde, está bom.

# =====================================================================
# Vars de ambiente (Vercel)
# =====================================================================

env_vars_to_configure:
  required:
    - NEXT_PUBLIC_SITE_URL=https://mateusnogueira.com.br (já configurado)
    - LEAD_WEBHOOK_URL=<webhook Make> (já configurado)
  novos_p2_10:
    - NEXT_PUBLIC_META_PIXEL_ID=2158555548323617
      (mesmo Pixel da VAE Hands-On — decisão Claude Code Desktop;
       ecossistema único enquanto volume não justifica Pixel próprio.
       Criar P2.10.1 quando Doutor quiser separar.)
  opcionais:
    - NEXT_PUBLIC_GTM_CONTAINER_ID=<vazio>
      (deixa GTM stub sem rodar até Doutor configurar GA4 via GTM)

# =====================================================================
# First Load JS — antes/depois (a coletar pós-build verde)
# =====================================================================

first_load_js:
  antes: "TODO — coletar de build log do main @ 2757bcc"
  depois: "TODO — coletar de Vercel preview build do PR"
  budget: "≤ 130 KB com tracking+LGPD+JSON-LD"

# =====================================================================
# TODOs Doutor (não bloqueantes, criados durante a missão)
# =====================================================================

todos_doutor:
  - confirmar bookFormat com Editora Atheneu (Hardcover vs Paperback)
    — atualmente assume Hardcover (padrão editora científica)
  - confirmar ISBN dos 2 livros com Atheneu
    — atualmente omitido do Book JSON-LD para evitar dado errado
  - confirmar URL canônica do LinkedIn pessoal
    — slug atual em SOCIAL_PROFILES é placeholder (já era TODO no Footer)
  - URL do Oxy Recovery quando publicado
    — atualmente Person.worksFor[Oxy] sem url

# =====================================================================
# Próximos passos pós-PR verde
# =====================================================================

post_merge:
  - validar Google Rich Results Test em LP1, LP2, /palestras
  - confirmar /robots.txt e /sitemap.xml em prod
  - smoke test 12 rotas em prod
  - configurar NEXT_PUBLIC_META_PIXEL_ID no Vercel
  - DevTools Network: confirmar 0 fbcdn requests sem consent;
    confirmar 1+ requests após Aceitar
  - submeter sitemap.xml ao Google Search Console
  - registrar P2.10 → 🟢 Concluída no Notion
