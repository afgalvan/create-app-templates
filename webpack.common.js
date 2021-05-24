const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/index.js',
    app: './src/app/about.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '/src/public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};
