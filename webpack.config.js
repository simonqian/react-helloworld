const path = require('path');

var config = {
  entry: './main.js',
  mode: 'deployment',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, './')
    },
    compress: true,
    liveReload: true,
    port: 7777,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true 
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;
