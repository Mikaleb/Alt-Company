module.exports = {
  purge: [],
  prefix: '',
  important: false,
  separator: ':',
  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
