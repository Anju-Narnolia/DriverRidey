/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      animation: {
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideOutLeft: "slideOutLeft 1s ease-in forwards",
        slideOutRight: "slideOutRight 1s ease-in forwards",
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 0 },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
      },
      colors: {
        driverGreen: '#238923',
        hi:'#90EE90',
      },
    },
  },
  plugins: [],
}

