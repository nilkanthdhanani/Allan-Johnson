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
          lg: '1000px',
        },
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'green': '#317f81',
        'border1': '#cccccc',
        'footerBG': '#57bbbf',
        'select': '#717171',
        'whiteLight': 'rgba(255, 255, 255, 0.59)',
      },
      fontFamily: {
        roboto: ['Roboto'],
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/webp/helpBG.webp')",
        'blog-pattern': "url('/src/assets/images/webp/blogBg.webp')",
        'hero-banner': "url('/src/assets/images/webp/heroBannerLogin.webp')",
      },
    },
  },
  plugins: [],
}
