const path = require('path')
const merge = require('webpack-merge')

const common = env => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'none' : 'source-map',

  entry: path.resolve(__dirname, 'src', 'main.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'react-horizontal-scrolling-menu',
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react',
    },
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
    ],
  },
})

module.exports = function (env = {}) {
  return [
    merge(common(env), {
      output: {
        filename: 'index.cjs.js',
        libraryTarget: 'commonjs2',
      },
    }),

    env.production && merge(common(env), {
      output: {
        filename: 'index.umd.js',
        libraryTarget: 'umd',
      },
    }) || {},
  ]
}
