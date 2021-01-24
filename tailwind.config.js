const { colors, fontFamily, maxWidth } = require('tailwindcss/defaultTheme');
module.exports = {
    purge: [],
    theme: {
      extend: {
        colors: {
          green: {
            ...colors.green,
            '400': '#23dc70',
          },
          blue: {
            ...colors.blue,
            '400': '#3eacf8',
          },
          white: '#e1e1f6',
          gray: {
            ...colors.gray,
            '400': '#80a0b7',
            '700': '#424155',
            '900': '#151517',
          }
        },
        boxShadow: {
          sm: '0 1px 2px 0 rgba(35, 219, 111, 0.1)',
          DEFAULT: '0 1px 3px 0 rgba(35, 219, 111, 0.33), 0 1px 2px 0 rgba(35, 219, 111, 0.1)',
          md: '0 4px 6px -1px rgba(35, 219, 111, 0.33), 0 2px 4px -1px rgba(35, 219, 111, 0.1)',
          lg: '0 10px 15px -3px rgba(35, 219, 111, 0.33), 0 4px 6px -2px rgba(35, 219, 111, 0.1)',
          xl: '0 15px 20px -5px rgba(35, 219, 111, 0.33), 0 10px 10px -5px rgba(35, 219, 111, 0.1)',
          '2xl': '0 25px 50px -12px rgba(35, 219, 111, .4)',
          inner: 'inset 0 2px 4px 0 rgba(35, 219, 111, 0.2)',
          none: 'none',
        }
      },
      fontFamily: {
        sans: ['"HKSentiments"', ...fontFamily.sans],
        serif: ['"Archia"', ...fontFamily.serif],
        mono: [...fontFamily.mono],
      },
      maxWidth: {
        ...maxWidth,
        'max-w-7xl': '90rem'
      }
    },
    variants: {
    },
    plugins: [],
  }