const path = require('path')
const merge = require('webpack-merge')

const common = (env) => ({
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'none' : 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'react-horizontal-scrolling-menu',
  },

  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      umd: 'react-dom',
    },
  },

  // devServer: {
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   hot: true,
  // },

  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
    symlinks: false,
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
            sourceMaps: env.development ? 'both' : undefined,
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

    (env.production &&
      merge(common(env), {
        output: {
          filename: 'index.umd.js',
          libraryTarget: 'umd',
        },
      })) ||
      false,
  ].filter(Boolean)
}
