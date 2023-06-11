// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(
  ['react-horizontal-scrolling-menu'],
  { resolveSymlinks: false }
); // pass the modules you would like to see transpiled

const isProd = process.env.NODE_ENV === 'production';
console.log({ isProd });

module.exports = {
  ...(isProd
    ? {
        assetPrefix: '/react-horizontal-scrolling-menu/',
        basePath: '/react-horizontal-scrolling-menu',
      }
    : withTM()),

  // webpack: (config) => {
  //   config.module.rules.push({
  //     include: /node_modules/,
  //     test: /\.mjs$/,
  //     type: 'javascript/auto',
  //   });

  //   return config;
  // },
};

// TODO: try yarn workspaces and vite ?
// https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9
// or https://github.com/nicolaserny/react-library-vite-example
// and https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff
