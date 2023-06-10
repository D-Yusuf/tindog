/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins" : "'Poppins', sans-serif;"
      }
    },
  },
  plugins: [],
}

