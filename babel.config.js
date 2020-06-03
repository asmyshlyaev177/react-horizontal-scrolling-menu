module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: ['transform-react-remove-prop-types', 'dynamic-import-node'],
}
