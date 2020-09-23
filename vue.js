module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
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
    'vue/component-definition-name-casing': ['error', 'kebab-case']
  }
}
