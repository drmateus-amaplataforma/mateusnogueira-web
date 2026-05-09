import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface LeadPayload {
  nome?: string;
  email?: string;
  whatsapp?: string;
  origem?: string;
  livro?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  submitted_at?: string;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let payload: LeadPayload;

  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const nome = payload.nome?.trim() ?? '';
  const email = payload.email?.trim() ?? '';

  if (!nome || nome.length < 2) {
    return NextResponse.json({ error: 'Nome obrigatório' }, { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[lead] LEAD_WEBHOOK_URL not configured');
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        nome,
        email,
        whatsapp: payload.whatsapp?.trim() || null,
        received_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error('[lead] webhook returned', res.status);
      return NextResponse.json({ error: 'Webhook failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[lead] webhook error', err);
    return NextResponse.json({ error: 'Webhook unreachable' }, { status: 502 });
  }
}
