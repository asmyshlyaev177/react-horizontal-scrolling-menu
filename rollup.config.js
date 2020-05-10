import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    external: ['react', 'react-dom'],

    input: 'src/main.js',
    output: [
      {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        name: 'scrolling-menu',
        file: pkg.browser,
        format: 'umd',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],

    plugins: [
      resolve(), // so Rollup can find modules
      peerDepsExternal(),
      babel({
        configFile: './babel.config.js',
        exclude: 'node_modules/**',
      }),
      commonjs(), // so Rollup can convert modules to an ES format
    ],
  },
]
