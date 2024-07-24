/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
            300: '#FFDEDE',
            400: '#D46A6A',
            500: '#9b273e',
            600: '#732F2F',
        }
      }
    },
  },
  plugins: [],
}

