// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:vue/essential',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     parser: '@typescript-eslint/parser',
//     sourceType: 'module',
//   },
//   plugins: ['vue', '@typescript-eslint'],
//   rules: {
//     indent: ['error', 2],
//     'linebreak-style': ['error', 'unix'],
//     quotes: ['error', 'single'],
//     semi: ['error', 'never'],
//   },
// }

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    '@vue/prettier',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    'plugin:storybook/recommended',
    'plugin:markdown/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['src/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
}
