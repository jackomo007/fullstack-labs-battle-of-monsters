module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['data/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
