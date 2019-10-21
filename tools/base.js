'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  entry: {
    main: join(__dirname, '..', 'src', 'main'),
    app: join(__dirname, '..', 'src', 'react', 'App.js'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          'eslint-loader',
        ],
        exclude: /(node_modules|dist)/,
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|dist)/,
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