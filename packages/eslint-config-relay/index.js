module.exports = {
  plugins: [
    'relay',
  ],
  env: {
    browser: true,
  },
  rules: {
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
    'relay/hook-required-argument': 'warn'
  }
};