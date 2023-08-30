module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    defineOptions: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'template-curly-spacing': 'off',
    'comma-dangle': 'off',
    eqeqeq: ['error', 'always'],
    indent: 'off',
  },
}
