const globby = require('globby');
const fs = require('fs-extra');

const config = require('./config'),
      target = config.opts.target || `${config.dest}/**/*`;

globby(target).then(paths => {
  for (let path of paths) {
    fs.remove(path)
      .then(() => console.log('REMOVED:', path))
      .catch(err => console.error(err));
  }
});
