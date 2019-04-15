const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  mode: "none",
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'canvasEditor.js',
    library: 'CanvasEditor',
    libraryExport: 'CanvasEditor',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ]
  }
}