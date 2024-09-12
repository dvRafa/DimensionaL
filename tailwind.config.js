/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoo: ['Robotoo', 'sans-serif'],
        robotoooo: ['Robotooo', 'sans-serif'],
        kanji: ['Kanji', 'sans-serif']
      },
    },
  },
  plugins: [],
}
