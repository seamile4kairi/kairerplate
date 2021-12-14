module.exports = {
  isPrd: (process.env.NODE_ENV === 'production'),
  // Canvas width for each of design comps
  canvas: {
    sp: 320,
    pc: 1440,
  },
  // Screen width
  viewport: {
    small: 320,
    medium: 600,
    large: 960,
  },
  // Standard font-size
  rem: 16,
}
