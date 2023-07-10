module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    'curly': ['error', 'multi-line', 'consistent'],
    camelcase: ['error'],
    'class-methods-use-this': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'no-console': ['warn'],
    'no-else-return': ['error', {allowElseIf: true}],
    'no-new': ['off'],
    'no-mixed-operators': ['off'],
    'no-multi-str': ['off'],
    'no-nested-ternary': ['error'],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-unused-vars': ['error', {argsIgnorePattern: '_'}],
    'object-curly-newline': ['error', {multiline: true, consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: false}],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['off'],
    radix: ['error', 'as-needed'],
    'vars-on-top': ['off'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', {code: 100}],
    semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
    'semi-style': ['error', 'first'],
    'newline-per-chained-call': ['off'],
    'no-multiple-empty-lines': ['error', {max: 1}],
    'padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'return'}],

    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    // Lo desactivamos para que las clases tengan todas un nombre y los LSP sean de ayuda
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
  }
};
