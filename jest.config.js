module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  // roots: ['<rootDir>/server.ts', '<rootDir>/src/'],
  testRegex: '(.*.(test|spec)).ts?$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}
