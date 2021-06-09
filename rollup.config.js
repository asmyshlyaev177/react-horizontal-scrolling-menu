import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ignore from 'rollup-plugin-ignore'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const input = 'src/index.tsx'

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  (id) => /^react$|^react-dom$|^@babel\/runtime/.test(id),
]
const plugins = [
  ignore(['fs', 'net', 'react', 'react-dom', 'prop-types', 'PropTypes']),
  resolve({
    include: ['node_modules/**'],
  }),
  typescript({ sourceMap: true, tsconfig: './tsconfig.json' }),
  commonjs(),
  postcss({
    modules: false,
    use: ['sass'],
  }),

  terser(),
]

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      name: 'react-horizontal-scrolling-menu',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
      },
    },
    plugins,
    external,
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input,
    plugins,
    external,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]
