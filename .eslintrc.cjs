module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint-config-airbnb-base",
    "plugin:prettier/recommended"
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": 0,
    "import/prefer-default-export": 0
  },
};
