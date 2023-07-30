/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        aucto: {
          DEFAULT: '#28a4da',
          dark: '#0d7093',
        },
      },
    },
    fontFamily: {
      lato: ['Lato'],
      thicboi: ['THICCCBOI'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    themes: [],
    styled: false,
    utils: false,
    logs: false,
  },
};
