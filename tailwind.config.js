/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        input: '#e6e6e7',
        line: '#dddcde',
        cyan: '#5FB4A2',
        basic: '#5b5a63',
        'dark-blue': '#203A4C',
        'grayish-blue': '#33323D',
        'very-light-gray': '#FAFAFA',
        'light-gray': '#EAEAEB',
        'bright-red': '#F43030'
      },
      fontSize: {
        h1: '3.125rem', // 50px
        h2: '2.5rem', // 40px
        h3: '2rem', // 32px
        'body-1': '1rem', // 16px
        'body-2': '0.9375rem' // 15px
      },
      lineHeight: {
        h1: '3.125rem', // 50px
        h2: '2.625rem', // 42px
        h3: '2.25rem', // 36px
        'body-1': '1.875rem', // 30px
        'body-2': '1.875rem' // 30px
      },
      letterSpacing: {
        h1: '-0.45px',
        h2: '-0.36px',
        h3: '-0.29px'
      }
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      heading: ['Ibarra Real Nova', 'serif']
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
