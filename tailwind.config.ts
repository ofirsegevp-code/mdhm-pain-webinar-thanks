import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        bgAlt: '#F9F4EE',
        textMain: '#1C1C1C',
        textSoft: '#5C5150',
        accent: '#C4A97D',
        accentLight: '#F5EAD8',
        cta: '#8B2635',
        ctaHover: '#6B1D29',
        forest: '#2D4A2B',
        whatsapp: '#25D366',
        whatsappDark: '#128C7E',
      },
      fontFamily: {
        serif: ['Frank Ruhl Libre', 'Georgia', 'serif'],
        sans: ['Assistant', 'Heebo', 'Arial', 'sans-serif'],
      },
      spacing: {
        section: '64px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
