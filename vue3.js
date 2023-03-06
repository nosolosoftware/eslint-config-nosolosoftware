module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        'render',
        'renderError'
      ]
    }],
    'vue/multi-word-component-names': ['off'],
    'vue/require-default-prop': ['off'],
    'vue/component-definition-name-casing': ['error', 'kebab-case']
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}
