module.exports = {
  root: true,
  extends: [
    'eslint-config-airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['import', 'jest'],
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0
  }
};