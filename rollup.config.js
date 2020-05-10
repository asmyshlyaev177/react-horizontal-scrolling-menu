import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import progress from 'rollup-plugin-progress'
import minify from 'rollup-plugin-babel-minify'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    external: [
      'react',
      'react-dom',
      'prop-types',
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],

    input: 'src/main.js',
    output: [
      {
        name: 'scrolling-menu',
        file: pkg.browser,
        format: 'umd',
        globals: {
          'prop-types': 'propTypes',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        plugins: [minify()],
      },
      { file: pkg.main, format: 'cjs', plugins: [terser()] },
      { file: pkg.module, format: 'es', plugins: [terser()] },
    ],

    plugins: [
      progress(),
      resolve(), // so Rollup can find modules
      commonjs({ include: 'node_modules/**' }), // so Rollup can convert modules to an ES format
      babel({
        configFile: './babel.config.js',
        exclude: 'node_modules/**',
      }),
      // peerDepsExternal(),
    ],
  },
]
