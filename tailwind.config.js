/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#08A3A4',
        'info': '#0256FF',
        'danger': '#F56C6C',
        'success': '#b3e19d',
        'activeTag' : '#E5EEFF',
        'text': '#ffffff',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

