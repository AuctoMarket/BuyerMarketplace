/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{scss,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
  plugins: [require('flowbite/plugin')],
};
