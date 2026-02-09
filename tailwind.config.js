/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e91e63',
          dark: '#c2185b',
        },
        accent: {
          DEFAULT: '#f8f9fa',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.08)',
        medium: '0 8px 16px rgba(0, 0, 0, 0.12)',
        strong: '0 12px 24px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
}
