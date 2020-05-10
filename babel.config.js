module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { modules: false }],
    'minify',
  ],
  plugins: [
    '@babel/plugin-transform-react-display-name',
    'transform-react-remove-prop-types',
  ],
}
