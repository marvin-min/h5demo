module.exports = {
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api/auth': {
        target: 'http://localhost:8888/auth',
        changeOrigin: true,
        pathRewrite: {
          '^/api/auth': ''
        }
      },
      '/api': {
        target: 'http://localhost:8888/api/v1', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
