// Module Imports
// -------------------------------------------------------------

const imagemin = require('imagemin');
const {
  dirname
} = require('path');

const {
  glob
} = require('./fs');

// Configurations
// -------------------------------------------------------------

let config = require('./config');
config = Object.assign(config, {
  target: config.args.target
          || `${config.src}/${config.ptrn['build:image']}`,
});

// Processing
// -------------------------------------------------------------

glob(config.target, path => imagemin(
    [].concat(path),
    dirname(path).replace(config.src, config.dest),
    require('../imagemin.config')
  )
  .then(files => console.log('COMPRESSED:', files[0].path))
);
