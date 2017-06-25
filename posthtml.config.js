module.exports = (ctx) => {
  return {
    from: ctx.from,
    to: ctx.to,
    plugins: {
      'posthtml-w3c': {}
    }
  }
};
