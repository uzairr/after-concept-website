import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          900: '#26215C',
          700: '#3C3489',
          500: '#534AB7',
          300: '#AFA9EC',
          100: '#EEEDFE',
        },
        ember: {
          600: '#D85A30',
          300: '#F0997B',
          100: '#FAECE7',
        },
        cream: '#F6F4EE',
        charcoal: {
          DEFAULT: '#2C2C2A',
          soft: '#5F5E5A',
        },
        line: 'rgba(44,44,42,0.12)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
