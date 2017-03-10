module.exports = {
  entry: './src/index.js',
  output: {
//    path: __dirname + '/public',
    path: '/Users/200308/work/react-slide/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(svg|png|jpg)$/, loader: 'url-loader' }
    ]
  },
  devServer: {
    contentBase: 'public'
  }
}
