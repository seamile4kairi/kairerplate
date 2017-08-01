let exts = {},
    opts = {};

// `${exts}`
Object.keys(process.env)
  .filter(key => key.match(/^npm_package_config_ext/g))
  .forEach(key => {
    exts[key.replace(/^npm_package_config_ext_/g, '')] = process.env[key];
  });

// `${opts}`
process.argv
  .filter(arg => !!arg.match(/^--/g))
  .forEach(arg => {
    let val = arg.replace(/^--[\w]*\=?/g, ''),
        key = arg.replace(/^--/g, '')
                .replace(`=${val}`, '');
    opts[key] = val;
  });

module.exports = {
  src:  process.env.npm_package_config_src  || `src`,
  dest: process.env.npm_package_config_dest || `dist`,
  ext:  exts,
  opts: opts
};
