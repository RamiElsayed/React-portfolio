/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        radiate: {
          '0%': { boxShadow: '0 0 0 0 rgba(255,255,255,1)' },
          '70%': { boxShadow: '0 0 2rem 1.5rem rgba(255,255,255, 0)' },
        },
      },
      animation: {
        radiate: 'radiate 2s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
