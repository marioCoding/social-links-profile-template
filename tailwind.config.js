const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)',
        darkgrey: 'hsl(0, 0%, 12%)',
        offblack: 'hsl(0, 0%, 8%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
