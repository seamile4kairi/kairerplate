const $config = require('./.config')

const $meta = {
  origin: 'https://example.com',
  title: 'Blank Title',
  description: 'Blank description.',
  thumbnail: '/assets/static/ogimg.jpg',
  lang: 'ja',
  locale: 'ja_JP',
  og_type: 'website',
  og_site_name: 'Blank Site Name',
  twitter_card: 'summary_large_image',
}

module.exports = {
  root: './',
  locals: {
    $config,
    $meta,
  },
}
