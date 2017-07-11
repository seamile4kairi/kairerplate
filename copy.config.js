const globby = require('globby');
const fs = require('fs-extra');

const config = require('./config'),
      target = config.opts.target || `${config.src}/**/*.{jpg,gif,png,svg,ico}`;

globby(target).then(paths => {
  for (let path of paths) {
    fs.copy(path, path.replace(config.src, config.dest))
      .then(() => console.log('COPIED:', path.replace(config.src, config.dest)))
      .catch(err => console.error(err));
  }
});
