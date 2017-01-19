const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['./app/index.jsx'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      app: 'app',
    },
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      // js[x]
      { test: /\.jsx?$/, include: path.join(__dirname, 'app'), loader: 'babel-loader' },

      // css
      { test: /\.css$/, loader: 'style-loader!css-loader' },

      // fonts
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=static/[name].[ext]' },

      // sass
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
    ],
  },
  postcss: [autoprefixer({ browsers: ['iOS >= 7'] }), precss],
  devtool: PRODUCTION ? '#source-map' : null,
  plugins: PRODUCTION ? [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ] : [],
};
