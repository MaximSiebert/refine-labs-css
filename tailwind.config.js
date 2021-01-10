const { colors, fontFamily } = require('tailwindcss/defaultTheme');
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
          white: 'e1e1f6',
          gray: {
            ...colors.gray,
            '400': '80a0b7',
            '700': '424155',
            '900': '151517',
          }
        }
      },
      fontFamily: {
        sans: ['"HKSentiments"', ...fontFamily.sans],
        serif: ['"Archia"', ...fontFamily.serif],
        mono: [...fontFamily.mono],
      },
    },
    variants: {
    },
    plugins: [],
  }