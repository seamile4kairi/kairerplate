const {
  canvas,
  viewport,
  rem,
} = require('./.config')

const customMedia = {
  // Breakpoints based on screen width
  '--on-small': `(width < ${viewport.medium}px)`,
  '--on-medium': `(width >= ${viewport.medium}px)`,
  '--on-large': `(width >= ${viewport.large}px)`,
  // Breakpoints based on design layouts
  '--as-sp': '(--on-small)',
  '--as-pc': '(--on-medium)',
}

const customProperties = {
  // Root-font-size (rem) according to screen width
  '--rem-on-small': `${rem / canvas.sp * 100}vw`,
  '--rem-on-medium': `${rem / viewport.large * 100}vw`,
  '--rem-on-large': `${rem}px`,
}

module.exports = {
  // cf.) https://github.com/postcss/postcss#options
  plugins: {
    'postcss-nested': {
      // cf.) https://github.com/postcss/postcss-nested#options
    },
    'postcss-relaxed-unit': {
      // cf.) https://github.com/youncccat/postcss-relaxed-unit#options
      rules: {
        // cp = Canvas-Dependent Pixel (onomatopoeia)
        cp: `div(${rem}).unit(rem)`,
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
