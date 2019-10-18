'use strict';

const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 4001,
    hot: true,
  },
});