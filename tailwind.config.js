/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { //added custom theme to the css, also the reel animations
      boxShadow: { //custom shadow that was acting as a glow effect. I decided not to use it.
        '3xl': '0 0 30px 30px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        goaround: {
          '0%': { transform: 'translateY(100px)' },
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
        'spinningReel': 'goaround .07s linear infinite',
        'stopReel': 'stop .4s ease-out forwards'
      },
      fontFamily: { //The logo font that is used in the game this slot machine is based upon.
        pixelBug: ["Pixel Bug", "sans-serif"]
      }
    },
  },
  plugins: [],
}
