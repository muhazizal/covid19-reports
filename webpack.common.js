const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
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
      jQuery: 'jquery'
    })
  ]
}