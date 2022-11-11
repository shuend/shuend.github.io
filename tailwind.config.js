/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#9c8cc6',
        secondary: '#64748b',
        dark: '#4a2772',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}