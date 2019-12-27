module.exports = {
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://a3pi.active.com/v2', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
};
