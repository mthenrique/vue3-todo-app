// module.exports = {
//   moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
//   transform: {
//     '^.+\\.ts$': 'ts-jest',
//     // '^.+\\.vue$': 'vue-jest',
//     '^.+\\.vue$': '@vue/vue3-jest',
//   },
//   // testMatch: ['tests/unit/**/*.spec.ts'],
// }

module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
}
