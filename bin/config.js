// Module Exports
// -------------------------------------------------------------

module.exports = {
  isPrd: isPrd(),
  version: process.env.npm_package_version
            + (isPrd() ? '' : `-${Date.now()}`),
  src:  process.env.npm_package_config_src  || `src`,
  dest: process.env.npm_package_config_dest || `dist`,
  ptrn: getPtrn(),
  args: getArg(),
};

// Utilities
// -------------------------------------------------------------

function isPrd() {
  return (process.env.NODE_ENV === 'production');
}

function getPtrn() {
  const regexp = /^npm_package_config_ptrn_/g,
        reducer = (obj, key) => {
          let val = process.env[key];
          key = key.replace(regexp, '').replace(/_/g, ':');

          return Object.assign(obj, {
            [key]: val
          });
        };

  return Object.keys(process.env)
    .filter(key => key.match(regexp))
    .reduce(reducer, {});
}

function getArg() {
  const reducer = (obj, item) => {
    let sep = item.search(/=/g),
        key = item,
        val = "";

    if (sep > -1) {
      key = item.slice(0, sep);
      val = item.slice(sep + 1);
    }

    return Object.assign(obj, {
      [key]: val
    });
  };

  return process.argv
    .filter(arg => !!arg.match(/^--.+/g))
    .map(arg => arg.slice(2))
    .reduce(reducer, {});
}
