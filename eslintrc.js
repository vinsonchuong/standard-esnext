const hasDevDependency = require('./hasDevDependency')

const config = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:import/recommended',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'babel',
    'import',
    'flowtype'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'package-name-import': {}
    }
  },
  rules: {
    'class-methods-use-this': 'error',
    'prefer-promise-reject-errors': 'error',
    'object-shorthand': 'error',
    'new-cap': 'off',
    'no-duplicate-imports': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-param-reassign': 'error',
    'semi': 'off',

    'babel/new-cap': 'error',
    'babel/semi': ['error', 'never'],

    'flowtype/delimiter-dangle': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'error',
    'flowtype/object-type-delimiter': 'error',
    'flowtype/semi': ['error', 'never'],

    'import/first': 'error',
    'import/no-duplicates': 'error'
  }
}

if (hasDevDependency('flow-bin')) {
  Object.assign(config.rules, {
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off'
  })
}

module.exports = config
