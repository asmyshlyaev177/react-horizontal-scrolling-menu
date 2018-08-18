/* eslint-disable no-undef */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

const outputPath = path.resolve(__dirname, 'build');
const filename = 'index';

const options = env => ({
  module: {
    rules: [
      {
        test: /\.(jsx?|jsm)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: env.development ? 'source-map' : 'none'
          }
        }
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      'commonjs2': 'react'
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          output: {beautify: false},
          safari10: true,
          webkit: true,
          drop_console: true,
          passes: 5
        }
      })
    ]
  },
  // plugins: [
  //   new webpack.optimize.ModuleConcatenationPlugin()
  // ]
});

module.exports = env => {
  return [
    {
      devtool: env.development ? 'source-map' : 'none',
      entry: './src/index.js',
      output: {
        path: outputPath,
        filename: `${filename}.js`,
        libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
      },
      ...options(env)
    },
    {
      devtool: env.development ? 'source-map' : 'none',
      entry: {
        es: './src/index.mjs'
      },
      output: {
        path: outputPath,
        filename: `${filename}.mjs.js`
      },
      ...options(env)
    }
  ];
};
