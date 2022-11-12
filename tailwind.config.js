/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/src/*.scss",
    "./src/index.html",
    "./src/**/*.{scss, ts, html}",
    "./src/app/views/**/*.{scss, ts, html}",
  ],
  theme: {
    screens: {
      sm: "572px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
}
