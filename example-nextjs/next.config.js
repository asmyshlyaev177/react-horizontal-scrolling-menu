const withTM = require('next-transpile-modules')(
  ['react-horizontal-scrolling-menu'],
  { resolveSymlinks: false },
) // pass the modules you would like to see transpiled

module.exports = withTM()
