module.exports = {
  devServer: {
    open: true
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    //extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 36
          })
        ]
      }
    }
  }
}
