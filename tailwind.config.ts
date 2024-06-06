import type { Config } from 'tailwindcss'
const primaryColor = '#31468C'
const primaryHoverColor = '#182A68'
const secondaryColor = '#C7CB50'
const secondaryHoverColor = '#919430'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
          DEFAULT: primaryColor,
          hover: primaryHoverColor,
        },
        secondary: {
          DEFAULT: secondaryColor,
          hover: secondaryHoverColor,
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
      },
      animation: {
        'pulse-border-2': 'pulseBorder2 1.5s linear infinite',
        'pulse-border': 'pulseBorder 1s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.var-button-primary-color': {
          '--button-color': `${primaryColor}`,
          '--button-hover-color': `${primaryHoverColor}`,
        },
        '.var-button-secondary-color': {
          '--button-color': `${secondaryColor}`,
          '--button-hover-color': `${secondaryHoverColor}`,
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
export default config
