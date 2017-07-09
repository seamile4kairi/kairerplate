module.exports = (ctx) => {
  return {
    from: ctx.from,
    to: ctx.to,
    plugins: {
      'posthtml-w3c': {},
      'posthtml-hint': {
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
      }
    }
  }
};
