var path = require("path");
module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
    {
         test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
         loader: 'imports?define=>false&this=>window'
     }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
