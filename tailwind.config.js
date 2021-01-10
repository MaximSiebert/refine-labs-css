const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
    purge: [],
    theme: {
      extend: {
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