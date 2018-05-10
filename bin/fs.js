// Module Imports
// -------------------------------------------------------------

const glob = require('globby');
const {
  readFile,
  writeFile
} = require('fs');

// Configurations
// -------------------------------------------------------------

process.on('unhandledRejection', console.dir);

// Module Exports
// -------------------------------------------------------------

module.exports = {
  glob: (pattern, cb = new Function) => {
    if (typeof cb !== 'function') {
      throw `[bin/fs.js > glob] Invalid callback function was found.`;
    } else {
      return glob(pattern).then(paths => {
        return Promise.race(paths.map(path => cb(path)));
      });
    }
  },

  read: (path) => {
    return new Promise((resolve, reject = throwError) => {
      return readFile(path, (err, data) => {
        return err ? reject(err) : resolve({
          path: path,
          data: data
        });
      });
    });
  },

  write: (path, data) => {
    return new Promise((resolve, reject = throwError) => {
      return writeFile(path, data, (err) => {
        return err ? reject(err) : resolve({
          path: path,
          data: data
        });
      });
    });
  },
};

// Utilities
// -------------------------------------------------------------

function throwError(e) {
  throw e;
}
