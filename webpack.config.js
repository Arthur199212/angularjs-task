const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};