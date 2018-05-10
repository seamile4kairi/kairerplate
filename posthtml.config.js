// Configurations
// -------------------------------------------------------------

const {
  src,
  ptrn
} = require('./bin/config');

let data = require('./.htmldatarc');
data = Object.assign(data, {
  // Add some objects with comma, if you need
});

const hint = require('./.htmlhintrc');

// Module Exports
// -------------------------------------------------------------

// cf.) https://github.com/posthtml/posthtml-load-config#posthtmlrc

module.exports = (ctx) => ({
  options: {},
  plugins: {
    'posthtml-extend': {
      root: `./${src}/`,
    },
    'posthtml-expressions': {
      locals: data,
    },
    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '_'
    },
    'posthtml-beautify': {
      // cf.) https://github.com/Scrum/posthtml-beautify#options
      rules: {
        blankLines: false,
        eof: '\n\n',
      },
      mini: {},
    },
    'posthtml-hint': hint,
  },
});
