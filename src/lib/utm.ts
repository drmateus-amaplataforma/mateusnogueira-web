/**
 * UTM auto-decoration — first-touch persistente.
 *
 * Estratégia:
 * 1. Se a URL atual contém utm_*, leia esses valores.
 * 2. Se há consent.analytics, persista em cookie por 30 dias (first-touch).
 * 3. Se a URL não tem UTMs mas o cookie tem (visita posterior, mesmo
 *    usuário), use os valores do cookie — preserva a campanha original.
 * 4. Sem consent.analytics, não persiste nem lê cookie. Apenas URL atual.
 *
 * Cookie é gravado com SameSite=Lax + Secure em prod. Não é HttpOnly
 * porque precisamos lê-lo no browser para anexar ao payload do form.
 */

const COOKIE_NAME = 'mateusnogueira_utms';
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 dias

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];

export type UtmRecord = Partial<Record<UtmKey, string>>;

function hasAnalyticsConsent(): boolean {
  return (
    typeof window !== 'undefined' && Boolean(window.__mateusConsent?.analytics)
  );
}

function readFromUrl(): UtmRecord {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const out: UtmRecord = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

function readFromCookie(): UtmRecord {
  if (typeof document === 'undefined') return {};
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return {};
  try {
    const raw = decodeURIComponent(match.slice(COOKIE_NAME.length + 1));
    const parsed = JSON.parse(raw) as UtmRecord;
    if (!parsed || typeof parsed !== 'object') return {};
    const out: UtmRecord = {};
    for (const k of UTM_KEYS) {
      const v = parsed[k];
      if (typeof v === 'string') out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

function persistCookie(utms: UtmRecord) {
  if (typeof document === 'undefined') return;
  if (Object.keys(utms).length === 0) return;
  const isHttps =
    typeof window !== 'undefined' && window.location.protocol === 'https:';
  const value = encodeURIComponent(JSON.stringify(utms));
  const parts = [
    `${COOKIE_NAME}=${value}`,
    `Max-Age=${COOKIE_MAX_AGE_SECONDS}`,
    'Path=/',
    'SameSite=Lax',
  ];
  if (isHttps) parts.push('Secure');
  document.cookie = parts.join('; ');
}

/**
 * Captura UTMs da URL atual + cookie de first-touch e devolve merged.
 * URL atual tem prioridade (se a campanha mudou, o valor mais novo vale).
 *
 * Side-effect: se houver consent.analytics e UTMs novos na URL, atualiza
 * o cookie de first-touch.
 */
export function captureUtms(): UtmRecord {
  const url = readFromUrl();
  const cookie = readFromCookie();
  const merged: UtmRecord = { ...cookie, ...url };

  if (Object.keys(url).length > 0 && hasAnalyticsConsent()) {
    persistCookie(merged);
  }

  return merged;
}

/**
 * Devolve um payload plano com utm_* — todas as 5 chaves canônicas
 * sempre presentes (string vazia se ausentes), facilitando o consumo
 * downstream em webhooks que esperam shape estável.
 */
export function utmsAsPayload(): Record<UtmKey, string> {
  const captured = captureUtms();
  const out = {} as Record<UtmKey, string>;
  for (const k of UTM_KEYS) {
    out[k] = captured[k] ?? '';
  }
  return out;
}
