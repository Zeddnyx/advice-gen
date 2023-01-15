/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        font1: 'hsl(193, 28%, 86%)',
        font2: 'hsl(150, 100%, 66%)',
        bg1: 'hsl(217, 19%, 38%)',
        bg2: 'hsl(217, 19%, 24%)',
        bg3: 'hsl(218. 23%, 16%)',
      },
    },
  },
  plugins: [],
}
