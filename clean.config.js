const globby = require('globby');
const fs = require('fs');

const config = require('./config'),
      target = config.opts.target || `${config.dest}/**/*`;

globby(target).then(paths => {
  // Sort files first, then directories later
  paths = [].concat(
    paths.filter(path => !!path.match(/\.[\w]+$/g)),
    paths.filter(path => !path.match(/\.[\w]+$/g))
  );
  for (path of paths) {
    !path.match(/\.[\w]+$/g)
      ? fs.rmdir(path, err => { if (err) throw err; })
      : fs.unlink(path, err => { if (err) throw err; });
    console.log('REMOVED:', path);
  }
});
