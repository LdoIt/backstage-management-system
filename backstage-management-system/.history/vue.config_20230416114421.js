/*
 * @Date: 2023-04-13 18:28:44
 */
const path = require('path')
module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {//请求前缀，有这个前缀(紧跟端口号)的才会走代理
        target: 'http://1.116.64.64:5004',//后端的接口
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}