module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
    ],
  ],
  plugins: [
    '@babel/plugin-transform-react-display-name',
    'transform-react-remove-prop-types',
  ],
}
