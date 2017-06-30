const cmd = require('node-cmd');
const bs = require('browser-sync');

module.exports = {
  files: [
    'dist/**/*',
    {
      match: [
        'src/**/*'
      ],
      fn: (event, file) => {
        let script;
        switch (file.slice(file.lastIndexOf('.') + 1)) {
          case 'html': script = 'markup'; break;
          case 'css': script = 'style'; break;
          case 'js': script = 'script'; break;
          default: script = 'copy';
        }
        cmd.run(`npm run build:${script}`);
      }
    }
  ],
  server: "dist",
  open: "external"
};
