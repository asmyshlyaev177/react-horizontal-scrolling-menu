const withTM = require('next-transpile-modules')(
  ['react-horizontal-scrolling-menu'],
  { resolveSymlinks: false }
); // pass the modules you would like to see transpiled

const isProd = process.env.NODE_ENV === 'production';
console.log({ isProd });

module.exports = isProd
  ? {
    assetPrefix: '/react-horizontal-scrolling-menu/',
    basePath: '/react-horizontal-scrolling-menu',
  }
  : withTM();
