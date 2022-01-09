const config = require('./.config')

const customMedia = {
  // Breakpoints based on screen width
  '--on-small': `(width < ${config.viewport.medium}px)`,
  '--on-medium': `(width >= ${config.viewport.medium}px)`,
  '--on-large': `(width >= ${config.viewport.large}px)`,
  // Breakpoints based on design layouts
  '--as-sp': '(--on-small)',
  '--as-pc': '(--on-medium)',
}

const customProperties = {
  // Root-font-size (rem) according to screen width
  '--rem-on-small': `${config.rem / config.canvas.sp * 100}vw`,
  '--rem-on-medium': `${config.rem / config.viewport.large * 100}vw`,
  '--rem-on-large': `${config.rem}px`,
}

module.exports = {
  // cf.) https://github.com/postcss/postcss#options
  plugins: {
    'postcss-import': {
      // cf.) https://github.com/postcss/postcss-import#options
    },
    'postcss-nested': {
      // cf.) https://github.com/postcss/postcss-nested#options
    },
    'postcss-relaxed-unit': {
      // cf.) https://github.com/youncccat/postcss-relaxed-unit#options
      rules: {
        // cp = Canvas-Dependent Pixel (onomatopoeia)
        cp: `div(${config.rem}).unit(rem)`,
      },
    },
    'postcss-preset-env': {
      // cf.) https://github.com/csstools/postcss-preset-env#options
      features: {
        // cf.) https://preset-env.cssdb.org/features
        'custom-media-queries': true,
        'custom-properties': {
          preserve: false,
        },
        'system-ui-font-family': false,
      },
      importFrom: [
        {
          customMedia,
          customProperties,
        },
      ],
    },
  }
};
