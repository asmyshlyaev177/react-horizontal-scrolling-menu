/* eslint-disable no-undef */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  return [
    {
      devtool: env.development ? 'source-map' : 'none',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
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
            test: /\.js($|\?)/i
          })
        ]
      }
    },
    {
      devtool: env.development ? 'source-map' : 'none',
      entry: {
        es: './src/index.mjs'
      },
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.mjs'
      },
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
            test: /\.js($|\?)/i
          })
        ]
      }
    }
  ];
};
