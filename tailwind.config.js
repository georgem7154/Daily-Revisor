/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shadow: {
          '0%': { backgroundPosition: '0 0' },
          '50.01%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '0 0' },
        }
      },
      animation: {
        shadow: 'shadow 20s linear infinite'
      },
    },
  },
  plugins: [],
}
