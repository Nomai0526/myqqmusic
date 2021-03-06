const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

__webpack_base_uri__ = '/';

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: 'meow',
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
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
      {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      filename: 'index.html',
      template: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: '搜索',
      filename: 'search.html',
      template: './search.html',
      chunks: ['search'],
    }),
  ],
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    port: 3000,
    hot: true,
    // publicPath: '/meow',
    proxy: {
      '/search': {
        target: 'http://localhost:3300',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
    },
  },
  devtool: 'eval-cheap-module-source-map',
};
