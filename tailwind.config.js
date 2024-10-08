/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'starwars': ['Orbitron', 'sans-serif'],
      },
      colors: {
        'starwars-yellow': '#feda4a',
        'starwars-blue': {
          light: '#4a90e2',
          DEFAULT: '#003366',
          dark: '#001933',
        },
        'starwars-red': {
          light: '#ff4d4d',
          DEFAULT: '#b00020',
          dark: '#800000',
        },
        'starwars-black': '#000000',
        'starwars-gray': {
          light: '#333333',
          DEFAULT: '#1a1a1a',
          dark: '#0d0d0d',
        },
      },
      screens: {
      'small': {'max': '454px'},
      },
    },
  },
  plugins: [],
}