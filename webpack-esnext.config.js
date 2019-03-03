/* eslint-disable no-undef */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
            sourceMaps: env.development ? 'both' : undefined,
          },
        },
      },
      {
        test: /\.(tsx?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: env.development ? 'both' : undefined,
            },
          },
          {
            loader: 'ts-loader',
            options: {configFile: 'tsconfig-esnext.json'}
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          output: { beautify: false },
          safari10: true,
          webkit: true,
          drop_console: true,
          passes: 5,
        },
      }),
    ],
  },
});

module.exports = env => {
  return [
    {
      devtool: env.development ? 'source-map' : 'none',
      entry: {
        es: './src/index.ts'
      },
      output: {
        path: outputPath,
        filename: `${filename}.mjs.js`
      },
      ...options(env)
    }
  ];
};
