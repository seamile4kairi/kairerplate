const cmd = require('node-cmd');
const bs = require('browser-sync');

const config = require('./config');

module.exports = {
  files: [
    `${config.dest}/**/*`,
    {
      match: [
        `${config.src}/**/*`
      ],
      fn: (event, file) => {
        let task;
        if (!event.match(/unlink/g)) {
          switch (file.slice(file.lastIndexOf('.') + 1)) {
            case 'html': task = `build:markup -- -i ${file}`; break;
            case 'css': task = 'build:style'; break;
            case 'js': task = 'build:script'; break;
            default: task = 'build:copy';
          }
        } else {
          task = `clean -- --target=${file.replace(config.src, config.dest)}`;
        }
        console.log(`Running: npm run ${task}`);
        cmd.run(`npm run ${task}`);
      }
    }
  ],
  watchEvents: [
    'add',
    'change',
    'unlink',
    'unlinkDir'
  ],
  server: config.dest,
  open: 'external'
};
