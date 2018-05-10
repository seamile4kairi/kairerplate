// Module Imports
// -------------------------------------------------------------

const typeOf = require('./bin/typeOf');

// Configurations
// -------------------------------------------------------------

const {
  version,
  ptrn
} = require('./bin/config');

// Module Exports
// -------------------------------------------------------------

module.exports = addId2Obj(Object.assign({
  version: version,
  protocol: `https`,
  domain: `kairi.me`,
  dir: `ltr`,
  lang: `ja`,
  locale: `ja_JP`,
  style: `/${ptrn['build:style']}`,
  script: `/${ptrn['build:script']}`,
  site_name: `TEST SITE`,
  favicon: `/images/favicon.ico`,
  apple_touch_icon: `/images/apple-touch-icon.png`,
  apple_touch_icon_size: `152x152`,
  thumbnail: `/images/ogimage.png`,
  og_type: `website`,
  tw_card: `summary_large_image`,
}, {
  pages: {
    home: {
      title: `TEST SITE`,
      description: `This is just test.`,
      path: '/',
    },
    notfound: {
      title: `404 Not Found`,
      description: `No content.`,
      path: '/404.html',
    }
  }
}));

// Utilities
// -------------------------------------------------------------

function addId2Obj(data) {
  if (typeOf(data) === 'object') {
    for (let key in data) {
      if (typeOf(data[key]) === 'object') {
        data[key].id = key;
        addId2Obj(data[key]);
      }
    }
  }
  return data;
}
