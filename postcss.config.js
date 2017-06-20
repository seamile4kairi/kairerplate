const atImport = require('postcss-import');
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: {
    atImport(),
    cssnext({
      browsers: [
        // Specify supported browser-sync
        // ==============================
        // cf.) https://github.com/ai/browserslist#queries
        'Chrome ESR',
        'Edge ESR',
        'Explorer ESR',
        'Firefox ESR',
        'Safari ESR',
        'iOS ESR',
        'Android >= 4.4',
        'AndroidChrome ESR',
        // '> 1% in JP', // Specify with two-letter country code
      ]
    })
  }
};
