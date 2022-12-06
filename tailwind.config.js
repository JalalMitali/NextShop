/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        'xl': {'max': '1200px'},
        'lg': {'max': '991px'},
        'md': {'max': '767px'},
        'sm': {'max': '550px'},
        'xs': {'max': '375px'},
      },
    extend: {
      colors: {
        primary: '#FC7651',
        secondary: '#03FDFC'
      }
    },
  },
  plugins: [],
}