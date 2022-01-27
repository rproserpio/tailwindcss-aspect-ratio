const plugin = require('tailwindcss/plugin')

const beforeStyles = {
  paddingBottom: `calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)`,
  content: `''`,
  width: '1px',
  marginLeft: '-1px',
  float: 'left',
  height: '0',
}

const afterStyles = {
  content: `''`,
  display: 'table',
  clear: 'both',
}

const noneUtility = {
  '.aspect-none::before': {
    content: 'none',
  },
  '.aspect-none::after': {
    content: 'none',
  },
}

const aspectRatio = plugin(
  function ({ addComponents, matchComponents, theme }) {
    const values = theme('aspectRatio')

    if (matchComponents) {
      matchComponents(
        {
          'aspect-w': (value) => [
            {
              '--tw-aspect-w': value,
            },
            {
              '&::before': beforeStyles,
              '&::after': afterStyles,
            },
          ],
          'aspect-h': (value) => ({ '--tw-aspect-h': value }),
        },
        { values }
      )

      addComponents(noneUtility)
    }
  },
  {
    theme: {
      aspectRatio: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
    variants: {
      aspectRatio: ['responsive'],
    },
  }
)

module.exports = aspectRatio
