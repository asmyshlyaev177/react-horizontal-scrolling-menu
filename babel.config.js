module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    'transform-react-remove-prop-types',
    'dynamic-import-node',
  ],
}
