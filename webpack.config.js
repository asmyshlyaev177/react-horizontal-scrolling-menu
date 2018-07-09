const path = require('path');

module.exports = env => {
  return {
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
              sourceMaps: true
            }
          }
        }
      ]
    },
    externals: {
'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
  }
};
