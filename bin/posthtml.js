// Module Imports
// -------------------------------------------------------------

const posthtml = require('posthtml');
const posthtmlrc = require('posthtml-load-config');
const {
  glob,
  read,
  write
} = require('./fs');

// Configurations
// -------------------------------------------------------------

let config = require('./config');
config = Object.assign(config, {
  target: config.args.target
          || `${config.src}/${config.ptrn['build:markup']}`,
});

// Processing
// -------------------------------------------------------------

glob(config.target, path => read(path)
  .then(result => posthtmlrc({
      path: path,
    })
    .then(({plugins, options}) => posthtml(plugins)
      .process(result.data, options)
    )
  )
  .then(result => Object.assign(result, {
    path: path.replace(config.src, config.dest),
    data: result.html
  }))
  .then(result => write(result.path, result.data))
  .then(result => console.log('BUILT:', result.path))
);
