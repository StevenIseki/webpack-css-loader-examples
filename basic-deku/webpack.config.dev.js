var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'scripts'),
    publicPath: '/public/scripts/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/,loader: 'style!css'}
    ]
  }
};
