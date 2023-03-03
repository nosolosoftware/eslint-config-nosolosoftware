module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-void': 'off',
    semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
    'semi-style': ['error', 'first'],
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '_'}],
    'no-console': 'error',
    // Lo desactivamos para que las clases tengan todas un nombre y los LSP sean de ayuda
    'import/prefer-default-export': 'off',
    // Queremos permitir constructores sin cuerpo porque en los argumentos podemos definir las
    // propiedades
    'no-useless-constructor': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    // Arregla un bug con los enum, ya que indicaba que todos los enum se declaraban en ambito
    // global cuando NO lo era. https://stackoverflow.com/a/63961972
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-explicit-any': ['error']
  }
};
