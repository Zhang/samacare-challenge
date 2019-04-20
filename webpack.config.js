require('dotenv').config();
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
    ],
  },
};
