import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transformOrigin: {
        'bottom-center': 'bottom center',
      },
      boxShadow: {
        'why-tree': '5px 0 30px -5px rgba(0, 0, 0, 0.1)',
        'why-tree-item': '0 10px 40px -10px rgba(62, 62, 62, 0.15)',
        'primary-input': '0px 3px 8px 0px rgba(0, 88, 255, 0.12)',
      },
      backgroundImage: {
        'ui-tree': "url('/assets/img/tree.svg')",
      },
      content: {
        empty: "''",
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#212529',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
      },
      fontFamily: {
        nunito: 'var(--font-nunito)',
        roboto: 'var(--font-roboto)',
      },
      keyframes: {
        pulseBorder: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
        pulseBorder2: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.7)',
            opacity: '0',
          },
        },
        blink: {
          '0%': {
            background: '#fff',
          },
          '50%': {
            background: '#8e9ac0',
          },
          '100%': {
            background: '#fff',
          },
        },
        'hand-rotate': {
          '0%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '100%': {
            transform: 'rotate(-10deg)',
          },
        },
      },
      animation: {
        'pulse-border-2': 'pulseBorder2 1.5s linear infinite',
        'pulse-border': 'pulseBorder 1s linear infinite',
        blink: 'blink 1.4s linear infinite',
        'hand-rotate': 'hand-rotate 1.6s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.var-button-primary-color': {
          '--button-color': 'var(--primary)',
          '--button-hover-color': 'var(--primary-hover)',
        },
        '.var-button-secondary-color': {
          '--button-color': 'var(--secondary)',
          '--button-hover-color': 'var(--secondary-hover)',
        },
        '.items-first-baseline': {
          'align-items': 'first baseline',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
export default config
