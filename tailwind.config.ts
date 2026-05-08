import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mateus: {
          primary: '#1F2A44',
          'primary-deep': '#0F1A2E',
          accent: '#8B7355',
          gold: '#B08538',
          bg: '#FAF7F2',
          'bg-alt': '#F0EBE3',
          text: '#1F2A44',
          muted: '#8B7355',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson-pro)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
        narrow: '880px',
      },
      boxShadow: {
        'cta-primary': '0 0 20px rgba(31, 42, 68, 0.25)',
        'cta-gold': '0 0 24px rgba(176, 133, 56, 0.18)',
        'card-soft': '0 4px 24px rgba(31, 42, 68, 0.06)',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
