const globby = require('globby');
const fs = require('node-fs-extra');

const config = require('./config'),
      target = config.opts.target || `${config.src}/**/*.{jpg,gif,png,svg,ico}`;

globby(target).then(paths => {
  for (path of paths) {
    fs.copy(path, path.replace(config.src, config.dest), err => {
        if (err) throw err;
    });
  }
});
