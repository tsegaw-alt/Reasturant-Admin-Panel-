module.exports = {
  devServer: {
    proxy: {
      '/restaurant/api': {
        target: 'http://62.108.57.218:8080',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}