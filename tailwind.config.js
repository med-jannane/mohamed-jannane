/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chef: {
          blue: "#030585",
          cream: "#F5F5F0",
          dark: "#01021A",
          accent: "#0407B0",
        }
      },
      fontFamily: {
        script: ['"Parisienne"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Chango"', 'serif'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
      }
    },
  },
  plugins: [],
}
