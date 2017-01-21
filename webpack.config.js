var webpack = require('webpack');

module.exports = {
  entry: {
      1:'./src/1.js',
      2:'./src/2.js',
      react1:'./src/react1.js',
  },
  output: {
    path: './dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'stage-0', 'react']
        }
    }]
  }
}
