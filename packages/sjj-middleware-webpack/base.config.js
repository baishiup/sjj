const path = require('path');

const defaultConfig = require('./default.config');

const devVueLoaderConf = Object.assign(
  {},
  {
    //loaders
    loaders: {
      css: ['vue-style-loader', 'css-loader'],
      less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    },
    cssSourceMap: true
  }
);

module.exports = {
  entry: './sjj-template-vue/src/main.js',
  resolve: {
    extensions: ['.js', '.vue', 'jsx', 'ts', 'tsx', '.json'],
    // import别名
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: devVueLoaderConf
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: `${defaultConfig.build.assetsRoot}/img/[name].[hash:8].[ext]`
        }
      }
    ]
  }
};
