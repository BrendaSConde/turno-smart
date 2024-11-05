/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#4AB8AC',
          700: '#3A9B90',
        }
      },
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};