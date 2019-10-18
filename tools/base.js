'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path');

module.exports = {
  entry: {
    main: join(__dirname, '..', 'src', 'main'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: [/node_modules/]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '..', 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
};