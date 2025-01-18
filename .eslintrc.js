module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      // Personaliza reglas a tu gusto
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  