/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    fontFamily: {
      dyna: ['DynaPuff', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif'],
      yatra: ['Yatra One', 'sans-serif'],
    },
   }
  },
  plugins: [],
}
