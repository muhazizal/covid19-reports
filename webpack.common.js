const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: 'chunk.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /styles/,
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.css$/i,
        include: /styles/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.bundle\.js$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: 'my-chunk'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/virus-icon.png'
    }),
    new webpack.ProvidePlugin ({
      $: 'jquery',
      jQuery: 'jquery',
      bootstrap: 'bootstrap/dist/css/bootstrap.min.css'
    }),
  ]
}