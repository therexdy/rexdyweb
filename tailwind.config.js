/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors: {
        'rexdy-green': '#2DBA4E',
      },
      
    },
  },
  plugins: [],
}

