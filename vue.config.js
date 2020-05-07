module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/agent/' : '/',
  devServer: {
    port: 8765,
    // proxy: {
    // }
  }
}
