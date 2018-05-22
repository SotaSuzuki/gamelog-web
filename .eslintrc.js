module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'default-case': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-implicit-coercion': 'error',
    'no-mixed-operators': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
