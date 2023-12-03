/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "red": "#E60023",
      },
      fontFamily: {
        "title": "Hedvig Letters Serif"
      }
    },
  },
  plugins: [],
}

