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
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    camelcase: ['off'],
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-console': ['warn'],
    'no-else-return': ['error', {allowElseIf: true}],
    'no-undef': ['off'],
    'no-new': ['off'],
    'no-mixed-operators': ['off'],
    'no-multi-str': ['off'],
    'no-param-reassign': ['off'],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-globals': ['off'],
    'no-unused-vars': ['error', {argsIgnorePattern: '_'}],
    'object-curly-newline': ['error', {multiline: true, consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: false}],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['off'],
    radix: ['off'],
    'vars-on-top': ['off'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', {code: 100}],
    semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
    'newline-per-chained-call': ['off'],
    'no-multiple-empty-lines': ['error', {max: 1}]
  }
};
