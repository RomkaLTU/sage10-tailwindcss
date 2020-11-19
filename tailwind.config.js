module.exports = {
  purge: [
    './resources/views/**/*.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}