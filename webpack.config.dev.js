const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
  static: { directory: path.join(__dirname, 'build') },
  compress: true,
  port: 8080,
  historyApiFallback: true,
};

module.exports = config;
