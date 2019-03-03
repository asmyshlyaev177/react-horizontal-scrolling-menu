module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
      'diagnostics': {
        warnOnly: true
      }
    }
  },
  //testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(jsx?)$': 'babel-jest'
  },
  roots: [
    '<rootDir>/src'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  collectCoverageFrom: [
    'src/**.ts',
    'src/**.tsx'
  ],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/babel-polyfill/',
    '<rootDir>/node_modules/babel*/'
  ],
  coveragePathIgnorePatterns: [
    '/build',
    '/node_modules/',
    '/examples/',
    'jest.js',
    'src/index.js'
  ],
  coverageDirectory: 'coverage'
};
