const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('dotenv').config();

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      title: process.env.APPLICATION_TITLE
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '*'],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  devServer: {
    port: process.env.APPLICATION_PORT,
  },
};
