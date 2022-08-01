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
        goaround: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' }
        },
        stop: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-90px)' },
          '75%': { transform: 'translateY(-80px)' },
          '100%': { transform: 'translateY(-85px)' }
        },
      },
      animation: {
        'spinningReel': 'goaround 0.08s linear infinite',
        'stopReel': 'stop .3s ease-out forwards'
      }
    },
  },
  plugins: [],
}
