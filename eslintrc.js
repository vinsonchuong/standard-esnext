const isInstalled = require('./isInstalled')

const config = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:import/recommended',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-babel-module')]: {},
      [require.resolve('eslint-import-resolver-package-name-import')]: {}
    }
  },
  rules: {
    'class-methods-use-this': 'error',
    'object-shorthand': 'error',
    'no-duplicate-imports': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-param-reassign': 'error',

    'import/unambiguous': 'off',

    'prettier/prettier': ['error', { semi: false, singleQuote: true }]
  }
}

if (isInstalled('flow-bin')) {
  config.extends.push('plugin:flowtype/recommended', 'prettier/flowtype')

  config.plugins.push('flowtype')

  Object.assign(config.rules, {
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always'],

    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off'
  })
}

module.exports = config
