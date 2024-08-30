/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.desktop-h1': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold', // 700
            fontSize: '3rem', // text-5xl	- 48px
            lineHeight: '1',
            marginBottom: '1.75rem', // mb-7
          },
          '.mobile-h1': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold', // 700
            fontSize: '2.25rem', // 20px
            lineHeight: '2.5rem', // 24px
            marginBottom: '1.5rem', // mb-6
          },
        },
        //  ['responsive']  // Rendre ces classes réactives
      );
    }),
  ],
};
