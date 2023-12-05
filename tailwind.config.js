/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "red": "#E60023",
      },
      boxShadow: {
        "light": "1px 1px 0 1px rgba(0,0,0,0.1) inset",
        "dark": "1px 1px 0 1px  rgba(0,0,0,0.4) inset",
        "btn-d": "-1px 1px 0 1px  rgba(51, 65, 85)",
        "btn-l": "-1px 1px 0 1px  rgba(100, 116, 139, .5)"
      },
      fontFamily: {
        "title": "Hedvig Letters Serif"
      },
      keyframes: {
        loader: {
          '100%': { width: '0', right: "0", left: "unset"},
          '50%': { width: '100%' },
        }
      },
      animation: {
        'loader': 'loader 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

