/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'modo-negro': '#353336',
      },
    }
  },
  plugins: []
}