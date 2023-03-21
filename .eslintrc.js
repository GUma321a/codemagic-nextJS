module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    camelcase: 'off',
    'no-param-reassign': 0,
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
