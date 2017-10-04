const isInstalled = require('./isInstalled')

const config = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:import/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/standard',
    'prettier/flowtype',
    'prettier/react'
  ],
  plugins: ['babel', 'import', 'flowtype', 'prettier'],
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-babel-module')]: {},
      [require.resolve('eslint-import-resolver-package-name-import')]: {}
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

    'babel/new-cap': 'error',

    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-weak-types': 'error',

    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/unambiguous': 'off',

    'prettier/prettier': ['error', { semi: false, singleQuote: true }]
  }
}

if (isInstalled('flow-bin')) {
  Object.assign(config.rules, {
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off'
  })
}

module.exports = config
