const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = merge(baseConfig, {
  output: {
    filename: '[name].min.js'
  },
  watch: false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
});

module.exports = config;
