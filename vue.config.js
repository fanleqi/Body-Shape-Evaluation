module.exports = {
  lintOnSave: false,
  publicPath: './',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = '中国成人身体形态测评';
        return args;
      });
  }
}