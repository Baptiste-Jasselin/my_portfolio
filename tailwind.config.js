/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      sans: ['Courier Prime', 'monospace'],
      caption: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-blue': '#5271ff',
        'main-blue-70': '#cbd5ff', // couleur du bleu principale allégé en transparence de 70%
      },
    },
  },
  plugins: [],
};
