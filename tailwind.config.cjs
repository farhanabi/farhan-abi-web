/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-out': 'fadeOut 10s ease-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'border-color': 'white' },
          '50%': { 'border-color': 'black' },
        },
        fadeOut: {
          '0%, 33%, 100%': { opacity: 1 },
          '35%, 98%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
