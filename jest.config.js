module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json'],
  // roots: ['<rootDir>/server.ts', '<rootDir>/src/'],
  testRegex: '(.*.(test|spec)).ts?$',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}
