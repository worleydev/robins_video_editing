/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        nsop: ["Noto Sans Old Persian", "sans-serif"],
      }
    },
  },
  plugins: [],
}

