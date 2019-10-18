'use strict';

const ENV = process.env.NODE_ENV;

module.exports = require(`./tools/${ENV}.js`);