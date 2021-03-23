//  生产环境配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

__webpack_base_uri__ = '/';

module.exports = {
  entry: ['./src/js/index.js', './index.html'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: './js/result.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 3000,
              outputPath: 'images',
              name: '[hash:5].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new CleanWebpackPlugin(),
  ],
  mode: 'production',
  devServer: {
    open: true,
    compress: true,
    port: 3000,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
};
