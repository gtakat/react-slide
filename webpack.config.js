module.exports = {
  entry: './src/index.js',
  output: {
//    path: __dirname + '/public',
    path: '/Users/200308/work/react-slide/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {

        test: /\.(svg|png|jpg)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'public'
  }
}
