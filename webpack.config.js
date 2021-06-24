/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge').merge;

const common = (env) => ({
  mode: env.production ? 'production' : 'development',
  devtool: 'inline-source-map',

  entry: path.resolve(__dirname, 'src', 'index'),
  watch: env.development,

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

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
    symlinks: false,
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },

  module: {
    rules: [
      // {
      //   test: /\.m?jsx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       cacheDirectory: true,
      //       configFile: path.resolve(__dirname, 'babel.config.js'),
      //       sourceMaps: env.development ? 'both' : undefined,
      //     },
      //   },
      // },

      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declarationMap: true,
                outDir: './dist',
              },
            },
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

module.exports = function (env = {}) {
  return [
    merge(common(env), {
      output: {
        filename: 'index.cjs.js',
        libraryTarget: 'commonjs2',
      },
    }),

    // TODO: when webpack support esm
    // "module": "dist/index.mjs",
    // merge(common(env), {
    //   output: {
    //     filename: 'index.mjs',
    //     libraryTarget: 'var',
    //   },
    // }),

    merge(common(env), {
      output: {
        filename: 'index.umd.js',
        libraryTarget: 'umd',
      },
    }),
  ].filter(Boolean);
};
