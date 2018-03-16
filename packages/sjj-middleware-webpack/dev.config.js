const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const defaultConfig = require('./default.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || defaultConfig.dev.host,
    port: process.env.PORT || defaultConfig.dev.port,
    open: defaultConfig.dev.autoOpenBrowser,
    overlay: defaultConfig.dev.errorOverlay
      ? {
          warnings: false,
          errors: true
        }
      : false,
    publicPath: defaultConfig.dev.assetsPublicPath,
    proxy: defaultConfig.dev.proxyTable
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './sjj-template-vue/index.html',
      inject: true
    })
  ]
});
