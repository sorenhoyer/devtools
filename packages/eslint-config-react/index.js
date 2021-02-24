module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'consistent-return': 'off',
    // 'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/no-unresolved": "off"
  },
};