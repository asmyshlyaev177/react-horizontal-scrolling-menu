module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { modules: false }],
    'minify',
  ],
  plugins: [
    'transform-react-remove-prop-types',
  ],
}
