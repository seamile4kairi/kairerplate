module.exports = {
  plugins: {
    'postcss-import': {
      plugins: [
        require('postcss-import-url'),
      ]
    },
    'postcss-cssnext': {
      autoprefixer: {
        browsers: [
          'last 2 Chrome versions',
          'last 2 Edge versions',
          'ie 11',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'last 2 iOS versions',
          'Android >= 4.4',
          'last 2 ChromeAndroid versions'
        ]
      }
    },
    'postcss-nested': {},
    'css-declaration-sorter': {
      order: 'smacss'
    },
    'postcss-discard-empty': {},
    'postcss-reporter': {
      clearMessages: true
    }
  }
};
