module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-void': 'off',
    // Queremos permitir constructores sin cuerpo porque en los argumentos podemos definir las
    // propiedades
    'no-useless-constructor': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    // Arregla un bug con los enum, ya que indicaba que todos los enum se declaraban en ambito
    // global cuando NO lo era. https://stackoverflow.com/a/63961972
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // No permitimos el uso de any
    '@typescript-eslint/no-explicit-any': ['error'],
    // Correcta gestion del no-use
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    // Correcta gestion de import duplicados
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    // Usamos la version de typescript
    'func-call-spacing': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  }
};
