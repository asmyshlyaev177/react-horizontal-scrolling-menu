import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { uglify } from 'rollup-plugin-uglify'
import progress from 'rollup-plugin-progress'
import pkg from './package.json'

const uglifyPlugin = uglify({
  output: {
    comments: function (node, comment) {
      if (comment.type === 'comment2') {
        return /@preserve|@license|@cc_on/i.test(comment.value)
      }
      return false
    },
  },
  sourcemap: false,
})

export default [
  // browser-friendly UMD build
  {
    external: [
      'react',
      'react-dom',
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    // globals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    // },

    input: 'src/main.js',
    output: [
      {
        name: 'scrolling-menu',
        file: pkg.browser,
        format: 'umd',
        plugins: [uglifyPlugin],
      },
      { file: pkg.main, format: 'cjs', plugins: [uglifyPlugin] },
      { file: pkg.module, format: 'es' },
    ],

    plugins: [
      progress(),
      resolve(), // so Rollup can find modules
      commonjs({ include: 'node_modules/**' }), // so Rollup can convert modules to an ES format
      // peerDepsExternal(),
      babel({
        configFile: './babel.config.js',
        exclude: 'node_modules/**',
      }),
    ],
  },
]
