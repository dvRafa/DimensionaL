/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        yakin: ['Yakin'],
      },
      colors: {
        green: '#00ffad',
        lightgray: '#8f8f8f',
        darkgray: '#353535',
        darkbg: '#101010',
        cardbg: '#1f1e1ea1',
        blanco: '#efefef',
        cardlightgray: '#222222'
      },
    },
  },
  plugins: [],
}
