module.exports = {
  content: ["../*.html"],
  theme: {
    screens: {
      'sm': '430px',
      // => @media (min-width: 430px) { ... }

      'md': '668px',
      // => @media (min-width: 668px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        // three image columns - max
        'gallery': 'repeat(auto-fit, minmax(max(320px), 1fr))'
      }
    },
  },
  plugins: [],
}
