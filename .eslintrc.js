module.exports = {
  globals: {
    I18n: 'readonly',
    google: 'readonly',
    global: 'readonly',
    YT: 'readonly',
    betterplaceOverlayConfigs: 'readonly',
    dataLayer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  plugins: ['@typescript-eslint', 'react', 'prettier', 'sort-imports-es6-autofix'],
  env: {
    browser: true,

    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:betterplace/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-unassigned-import': 0,
    'import/no-named-as-default-member': 0,
    'import/order': 0,
    'react/prop-types': 0,
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^[_A-Z]',
        argsIgnorePattern: '^_*',
        caughtErrors: 'none',
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
      },
    ],
  },
}
