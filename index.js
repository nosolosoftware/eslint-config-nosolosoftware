module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-unresolved': ['off'],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-console': ['warn'],
    'no-undef': ['off'],
    'no-new': ['off'],
    'no-mixed-operators': ['off'],
    'no-multi-str': ['off'],
    'no-param-reassign': ['off'],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-globals': ['off'],
    'object-curly-newline': ['error', {multiline: true, consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: false}],
    'prefer-destructuring': ['off'],
    radix: ['off'],
    'vars-on-top': ['off'],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', {code: 100}]
  }
};
