module.exports = {
  setupFilesAfterEnv: [
    './test/setup.js',
  ],
  collectCoverage: false,
  coverageReporters: [
    'lcov',
    'text',
    'text-summary',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
