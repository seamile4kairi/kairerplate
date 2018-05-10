// Module Imports
// -------------------------------------------------------------

const {
  extname
} = require('path')
const {
  run
} = require('node-cmd');

// Configurations
// -------------------------------------------------------------

const {
  src,
  dest,
  ptrn
} = require('./bin/config');

// Module Exports
// -------------------------------------------------------------

// cf.) https://browsersync.io/docs/options

module.exports = {
  files: [
    `${dest}/**/*`,
    {
      match: [
        `${src}/**/*`
      ],
      fn: watchSrc,
    },
    {
      match: [
        `*.config.js`,
        `.*`,
        `bin/**`
      ],
      fn: watchBin,
    },
  ],
  watchEvents: [
    'add',
    'change',
    'unlink',
    'unlinkDir'
  ],
  server: dest,
  open: 'external',
};

// Utilities
// -------------------------------------------------------------

function watchSrc(event, file) {
  let task,
      ext = extname(file),
      output = file.replace(src, dest);

  if (!event.search(/^unlink/g)) {
    task = `clean:target -- ${output}`;
  } else {
    task = Object.keys(ptrn).filter(key => ptrn[key].search(ext) > -1)[0] || 'copy';

    switch (task) {
      case 'copy':
        task = `copy:target -- ${file} ${output}`;
        break;
      default:
        task = `${task} -- --target=${file}`
    }
  }

  return rerun(task);
}

function watchBin(event, file) {
  let task;

  if (!event.search(/^unlink/g)) {
    return;
  } else {
    switch (file) {
      case 'bin/posthtml.js':
      case 'posthtml.config.js':
      case '.htmldatarc.js':
        task = 'build:markup';
        break;
      case 'postcss.config.js':
      case '.stylelintrc.js':
        task = 'build:style';
        break;
      case 'rollup.config.js':
      case '.eslintrc.js':
        task = 'build:script';
        break;
      case 'bin/imagemin.js':
      case 'imagemin.config.js':
        task = 'build:image';
        break;
      default:
        task;
    }

    if (!task) {
      return;
    } else {
      return rerun(task);
    }
  }
}

function rerun(task) {
  console.log(`Running: npm run ${task}`);
  return run(`npm run ${task}`);
}
