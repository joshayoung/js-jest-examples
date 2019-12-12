const path = require('path');

module.exports = {
  // TODO: This value may need to be changed later:
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      './main.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  }
};
