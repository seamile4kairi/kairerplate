// Configurations
// -------------------------------------------------------------

const svgorc = require('./.svgorc');

// Module Exports
// -------------------------------------------------------------

// cf.) https://github.com/imagemin/imagemin#options

module.exports = {
  plugins: [
    // JPEG
    require('imagemin-mozjpeg')({
      // cf.) https://github.com/imagemin/imagemin-mozjpeg#options
      quality: 90,
      progressive: true,
    }),

    // PNG
    require('imagemin-pngquant')({
      // cf.) https://github.com/imagemin/imagemin-pngquant#options
      floyd: 0,
      quality: '65-80',
      speed: 1,
    }),

    // SVG
    require('imagemin-svgo')(svgorc),
  ],
}
