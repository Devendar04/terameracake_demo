/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8F0',
        'warm-white': '#FFFDF9',
        rose: {
          DEFAULT: '#E8635A',
          dark: '#C4423A',
          light: '#FDECEA',
        },
        caramel: {
          DEFAULT: '#C47B2B',
          light: '#FDF0DC',
        },
        chocolate: '#3D1F0D',
        mocha: '#6B3F1E',
        blush: '#F9C5BE',
        mint: '#C8EBD9',
        gold: '#D4A843',
      },
    },
  },
  plugins: [],
}
