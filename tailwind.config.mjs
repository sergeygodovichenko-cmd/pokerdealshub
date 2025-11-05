/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // 🔒 предотвращает вырезание нужных классов при билде
  safelist: [
    // фирменные цвета
    'text-gold', 'text-gold-light', 'text-gold-dark',
    'bg-gold/10', 'border-gold/30',
    // зелёные и нейтральные оттенки, часто встречающиеся в компонентах
    'text-green-300', 'text-green-400', 'border-green-400/60', 'bg-green-950/40',
    'text-neutral-300', 'text-neutral-400',
    // любые прозрачные варианты, встречающиеся в UI
    'bg-neutral-800/80', 'border-neutral-700/50',
  ],

  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#f6c867',
          light: '#f8d588',
          dark: '#e5b84e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
};

export default config;
