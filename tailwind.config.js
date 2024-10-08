module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '1024px' },
        'max-md': { 'max': '768px' },
        'max-sm': { 'max': '576px' },
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          lg: '1080px',
        },
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'green': '#317f81',
        'border1': '#cccccc',
        'footerBG': '#57bbbf',
      },
      fontFamily: {
        roboto: ['Roboto'],
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/webp/helpBG.webp')",
      },
    },
  },
  plugins: [],
}
