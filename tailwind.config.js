module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'bcg':'#E2F9EE',
      'white':'#FFFFFF'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
