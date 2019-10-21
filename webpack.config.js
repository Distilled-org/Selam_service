const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: {
    vendor: ['styled-components'],
    app2: `${SRC_DIR}/index.jsx`,
  },
  optimization: {
    splitChunks: {
      minChunks: Infinity,
      name: true,
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['*', '.js', '.jx', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
