
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#3498db',
        secondary: '#1e2f40ff',
        accent: '#e74c3c',
        background: '#f9f9f9',
        text: '#1e1212ff',
        'light-text': '#0e0202ff',
      },
    },
  },
  plugins: [],
}