/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1020',
        slate: { 550: '#5A6478' },
        accent: { DEFAULT: '#5D55FA', dark: '#4840E6', soft: '#EEEDFE' },
        mist: '#F7F9FD',
        line: '#E9ECF5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,16,32,.04), 0 8px 24px -12px rgba(11,16,32,.10)',
        lift: '0 12px 40px -12px rgba(11,16,32,.18)',
        float: '0 24px 60px -20px rgba(11,16,32,.25)',
      },
      maxWidth: { shell: '1180px' },
    },
  },
  plugins: [],
}
