import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt =
  'Nova Medicina do Estilo de Vida · Os 6 pilares para uma vida mais longa — e melhor · Editora Atheneu, 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const COLORS = {
  primary: '#1F2A44',
  primaryDeep: '#0F1A2E',
  bg: '#FAF7F2',
  bgAlt: '#F0EBE3',
  accent: '#8B7355',
  lilas: '#6B5B95',
  lilasLight: '#9E8FB8',
};

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLORS.bg,
          backgroundImage: `radial-gradient(circle at 85% 25%, ${COLORS.lilas}22, transparent 50%), radial-gradient(circle at 10% 90%, ${COLORS.primary}10, transparent 60%)`,
          padding: '60px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '18px',
            fontWeight: 300,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: COLORS.accent,
          }}
        >
          <span style={{ color: COLORS.lilas }}>Pré-venda</span>
          <span>·</span>
          <span>Editora Atheneu · 2026</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              color: COLORS.primary,
              letterSpacing: '-0.02em',
              margin: 0,
              fontFamily: 'Georgia, serif',
            }}
          >
            Nova Medicina
            <br />
            do Estilo de Vida
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: COLORS.accent,
              marginTop: '20px',
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Os 6 pilares para uma vida mais longa — e melhor.
            <br />
            MEV 3.0 · Editora Atheneu, 2026
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '32px',
            borderTop: `2px solid ${COLORS.primary}30`,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: COLORS.primary,
                letterSpacing: '-0.01em',
              }}
            >
              Dr. Mateus Antunes Nogueira
            </span>
            <span
              style={{
                fontSize: '14px',
                color: COLORS.accent,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              CRM-SP 97.070
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '4px',
            }}
          >
            <span
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: COLORS.lilas,
                fontFamily: 'Georgia, serif',
              }}
            >
              3× R$ 46,33
            </span>
            <span
              style={{
                fontSize: '13px',
                color: COLORS.accent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              sem juros · até 24/05
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
