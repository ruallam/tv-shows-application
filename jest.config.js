module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/*.config.js",
    "!**/main.js",
    "!**/router/**",
    "!**/http-client/**",
    "!**/coverage/**"
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!axios)/.*"],
  verbose: true
}
