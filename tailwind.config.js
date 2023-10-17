/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greygreen": "#57886C",
        "lightgrey": "#EDF2EF",
        "yellow": "#E0E718",
        "salmon": "#F97068",
        "darkblue": "#212738"
      }
    },
  },
  plugins: [],
}

