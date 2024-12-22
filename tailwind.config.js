/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-1px)' },
          '25%': { transform: 'translateX(-1.5px)' },
          '50%': { transform: 'translateX(1px)' },
          '75%': { transform: 'translateX(1.5px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        wave: 'wave 2s infinite linear',
      }
    },
  },
  plugins: [],
}

