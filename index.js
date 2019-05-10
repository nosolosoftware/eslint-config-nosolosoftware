module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  parserOptions: {
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
    'object-curly-newline': ['error', {multiline: true, consistent: true}],
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: false}],
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': ['off'],
    radix: ['off'],
    'vars-on-top': ['off'],
    'arrow-body-style': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['error', {code: 100}],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        'template',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'render',
        'renderError'
      ]
    }],
    'vue/require-default-prop': ['off'],
    'newline-per-chained-call': ['off'],
    'no-multiple-empty-lines': ['error', {max: 1}]
  }
};
