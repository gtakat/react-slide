module.exports = {
  entry: './src/index.js',
  output: {
//    path: __dirname + '/public',
    path: '/Users/200308/work/react-slide/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: 'public'
  }
}
