/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 30px 30px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        spin: {
            transform: 'rotate(360deg)'
          }
      }
    },
  },
  plugins: [],
}
