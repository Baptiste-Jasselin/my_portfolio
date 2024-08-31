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
          '.desktop-h2': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold', // 700
            fontSize: '1.5rem', // 24px
            lineHeight: '2rem', // 32px
            marginBottom: '1.75rem', // mb-7
            marginTop: '2.5rem', // 40px
          },
          '.mobile-h2': {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold', // 700
            fontSize: '1.25rem', // 20px
            lineHeight: '1.75rem', // 28px
            marginBottom: '0.875rem', // mb-3.5
            marginTop: '1.25rem', // 20px
          },
          '.desktop-h3': {
            fontFamily: 'Courier Prime, monospace',
            fontWeight: 'bold', // 700
            fontSize: '1.5rem', // 24px
            lineHeight: '2rem', // 32px
            marginBottom: '1rem', // mb-4 16px
            marginTop: '1.5rem', // mt-6 24px
          },
          '.mobile-h3': {
            fontFamily: 'Courier Prime, monospace',
            fontWeight: 'bold', // 700
            fontSize: '1.25rem', // 20px
            lineHeight: '1.75rem', // 28px
            marginBottom: '0.5rem', // mb-2 8px
            marginTop: '0.75rem', // mt-3 12px
          },
          '.desktop-body_highlight': {
            fontFamily: 'Courier Prime, monospace',
            fontWeight: 'bold', // 700
            fontSize: '1.25rem', // text-xl 20px
            lineHeight: '1.75rem', // 28px
          },
          '.mobile-body_highlight': {
            fontFamily: 'Courier Prime, monospace',
            fontWeight: 'bold', // 700
            fontSize: '1rem', // text-base 16px
            lineHeight: '1.5rem', // 24px
          },
          '.desktop-body': {
            fontFamily: 'Courier Prime, monospace',
            fontSize: '1.25rem', // text-xl 20px
            lineHeight: '1.75rem', // 28px
          },
          '.mobile-body': {
            fontFamily: 'Courier Prime, monospace',
            fontSize: '1rem', // text-base 16px
            lineHeight: '1.5rem', // 24px
          },
        }
        //  ['responsive']  // Rendre ces classes réactives
      );
    }),
  ],
};
