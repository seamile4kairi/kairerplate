const globby = require('globby');
const fs = require('fs-extra');
const posthtml = require('posthtml');

const config = require('./config'),
      target = config.opts.target || `${config.src}/**/*.html`;

globby(target).then(paths => {
  for (let path of paths) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        posthtml([
          require('posthtml-w3c')(),
          require('posthtml-hint')({
            // cf.) https://github.com/yaniswang/HTMLHint/wiki/Rules
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'tag-pair': true,
            'spec-char-escape': true,
            'id-unique': true,
            'src-not-empty': true,
            'attr-no-duplication': true,
            'title-require': true,
            'head-script-disabled': true
          })
        ]).process(data)
        .then(result => fs.outputFile(
            path.replace(config.src, config.dest),
            result.html
          ).then(data => console.log('BUILT:', path.replace(config.src, config.dest)))
          .catch(err => console.error(err))
        );
      }
    });
  }
});
