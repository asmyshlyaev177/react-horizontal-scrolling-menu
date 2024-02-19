module.exports = {
  extends: [
    'plugin:maintainable/recommended',
    'plugin:maintainable/react',
    'plugin:storybook/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2023,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    project: './tsconfig.stories.json',
  },
  rules: {
    'sonarjs/cognitive-complexity': ['error', 10],
  },
};
