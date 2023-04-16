/*
 * @Date: 2023-04-13 18:28:44
 */
module.exports = {
  devServer: {
    lintOnSave: false,
    open: true,
    proxy: {
      '/api2': {//请求前缀，有这个前缀(紧跟端口号)的才会走代理
        target: 'http://1.116.64.64:5004',//后端的接口
      }
    }
  }
}