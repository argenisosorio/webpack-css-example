const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      }
    ]
  }
}