const globby = require('globby');
const fs = require('fs');

globby('src/**/*.{jpg,gif,png,svg,ico}').then(paths => {
  for (path of paths) {
    let dest = path.replace(/src/g, 'dist');
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      return fs.writeFile(dest, data, err => {
        if (err) throw err;
      });
    });
  }
});
