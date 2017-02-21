var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
      1:'./src/1.js',
      2:'./src/2.js',
      react1:'./src/react1.js',
      vendor: [
          'react',
          'react-dom'
        ]
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: '/dist'
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
    },
    plugins: [
        new htmlWebpackPlugin();
    //   new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
devServer: {
  hot: true,
  inline: true
}

}
