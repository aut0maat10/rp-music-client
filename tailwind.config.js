/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#0f292f',
      'green': '#14a098',
      'magenta': '#cb2d6f',
      'gray': '#ccc',
      'darkred': '#501f3a',
      'white': '#e2e8f0',
      'yellow': '#f4b860'
    },
    extend: {
      backgroundImage: {
        'tapes': "url('@/assets/tapes-red.png')",
        'tapemachine': "url('@/assets/tape-machine.jpg')",
        'console':  "url('@/assets/console.jpg')",
      }
    },
    fontFamily: {
      outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}


