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
          lilas: '#6B5B95',
          'lilas-light': '#9E8FB8',
          'lilas-deep': '#4D3E76',
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
        'cta-lilas': '0 0 24px rgba(107, 91, 149, 0.22)',
        'card-soft': '0 4px 24px rgba(31, 42, 68, 0.06)',
        // ── Premium glow scale (portado do vae-handson-landing,
        // ── adaptado para gold #B08538 do Dr. Mateus pessoal)
        'glow-sm': '0 0 20px rgba(176, 133, 56, 0.18)',
        'glow-md': '0 0 40px rgba(176, 133, 56, 0.22)',
        'glow-lg': '0 0 80px rgba(176, 133, 56, 0.26)',
        // Sombras editoriais premium
        screenshot:
          '0 25px 80px rgba(15, 26, 46, 0.40), 0 0 0 1px rgba(176, 133, 56, 0.15)',
        'card-hover':
          '0 18px 48px rgba(15, 26, 46, 0.18), 0 0 0 1px rgba(176, 133, 56, 0.20)',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      backgroundImage: {
        'dot-grid-mateus':
          'radial-gradient(circle, rgba(176, 133, 56, 0.16) 1px, transparent 1px)',
        'glow-radial':
          'radial-gradient(ellipse at center, rgba(176, 133, 56, 0.18) 0%, transparent 70%)',
        'text-gradient-mateus':
          'linear-gradient(135deg, #1F2A44 0%, #B08538 100%)',
      },
      backgroundSize: {
        'dot-grid-mateus': '28px 28px',
      },
      animation: {
        // Existing (LP1/LP2/palestras) — preservado
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        // Premium primitives
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'filete-grow':
          'fileteGrow 0.8s cubic-bezier(0.3, 0, 0, 1.1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fileteGrow: {
          from: { width: '0px' },
          to: { width: '80px' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
