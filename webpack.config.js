const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
        include: [
          path.resolve(__dirname, './src/assets/images'),
          /node_modules/,
        ],
      },
      {
        test: /\.(svg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
        exclude: [
          path.resolve(__dirname, './src/assets/images'),
          /node_modules/,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
console.log('XXX', path.resolve(__dirname, './src/assets/images'));
