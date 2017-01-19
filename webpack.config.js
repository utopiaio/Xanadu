const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const commonPlugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [autoprefixer({ browsers: ['iOS >= 7'] }), precss],
    },
  }),
  new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: false,
    allChunks: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity,
  }),
];

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: ['./app/index.jsx'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: { App: path.resolve(__dirname, 'app/') },
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      // js[x]
      { test: /\.jsx?$/, loader: 'babel-loader' },

      // css
      { test: /\.css$/, use: ['style-loader', ExtractTextPlugin.extract('css-loader')] },

      // fonts
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=static/[name].[ext]' },

      // sass
      { test: /\.scss$/, use: ['style-loader', ExtractTextPlugin.extract('css-loader'), 'postcss-loader', 'sass-loader'] },
    ],
  },
  devtool: PRODUCTION ? 'source-map' : false,
  devServer: {
    compress: true,
    publicPath: 'https://localhost:8080/build/',
  },
  plugins: PRODUCTION ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    })
  ].concat(commonPlugins) : [
  ].concat(commonPlugins),
};
