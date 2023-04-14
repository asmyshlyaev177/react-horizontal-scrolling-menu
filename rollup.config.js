import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ignore from 'rollup-plugin-ignore';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';

const input = 'src/index.tsx';

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: { clearScreen: false } };

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  (id) => /^react$|^react-dom$|^@babel\/runtime/.test(id),
];
const plugins = [
  ignore(['fs', 'net', 'react', 'react-dom', 'prop-types', 'PropTypes']),
  resolve({
    include: ['node_modules/**'],
  }),
  typescript({ sourceMap: false, tsconfig: './tsconfig.json' }),
  commonjs(),
  postcss({
    extract: 'styles.css',
    modules: false,
    minimize: true,
    use: ['sass'],
  }),

  !isProduction && sourcemaps(),
  isProduction && terser(),
  filesize(),
].filter(Boolean);

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      name: 'react-horizontal-scrolling-menu',
      file: pkg.unpkg,
      format: 'umd',
      sourcemap,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
      },
    },
    plugins,
    external,
    ...clearScreen,
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
      // { file: pkg.main, format: 'cjs', sourcemap },
      { file: pkg.module, format: 'es', sourcemap },
    ],
    ...clearScreen,
  },
];
