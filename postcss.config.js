// Configurations
// -------------------------------------------------------------

const {
  isPrd,
  src,
  ptrn
} = require('./bin/config');

const svgorc = require('./.svgorc');

// Module Exports
// -------------------------------------------------------------

// cf.) https://github.com/postcss/postcss#options

module.exports = {
  plugins: {
    'postcss-import': {
      path: [
        `node_modules`,
      ],
      plugins: [
        require('postcss-import-url'),
      ],
    },
    'css-declaration-sorter': {
      order: 'smacss'
    },
    'stylelint': {
      syntax: 'scss',
      ignoreFiles: [
        `node_modules/**`,
        `${src}/lib/**`,
      ],
    },
    'postcss-cssnext': {
      features: {
        calc: {
          preserve: !isPrd
        },
        customMedia: {
          preserve: !isPrd
        },
        customProperties: {
          preserve: !isPrd
        },
        filter: false,
      },
      warnForDuplicates: false,
    },
    'postcss-nested': {},
    'postcss-extend': {},
    'cssnano': {
      preset: 'default',
      calc: false,
      mergeLonghand: false,
      minifyFontValues: {
        removeQuotes: false,
      },
      minifyParams: false,
      minifySelectors: false,
      svgo: Object.assign(svgorc, {
        // cf.) https://github.com/ben-eb/cssnano/tree/master/packages/postcss-svgo#options
        encode: true,
      }),
    },
    'perfectionist': {
      indentSize: 2,
      zeroLengthNoUnit: isPrd
    },
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
};
