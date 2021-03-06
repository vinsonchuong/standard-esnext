const getInstalledPackage = require('./getInstalledPackage')

const config = {
  extends: [
    'plugin:import/recommended',
    'standard',
    'prettier',
    'prettier/standard'
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
    'lines-between-class-members': 'off',
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

    'import/no-named-as-default': 'off',
    'import/unambiguous': 'off',

    'node/no-deprecated-api': 'off',

    'prettier/prettier': ['error', { semi: false, singleQuote: true }]
  }
}

const flowVersion = getInstalledPackage('flow-bin')
if (flowVersion) {
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
    'import/default': 'off',

    'prettier/prettier': [
      'error',
      { parser: 'flow', semi: false, singleQuote: true }
    ]
  })
}

if (getInstalledPackage('ava')) {
  config.extends.push('plugin:ava/recommended')
  config.plugins.push('ava')
  Object.assign(config.rules, {
    'ava/no-async-fn-without-await': 'off',
    'ava/no-ignored-test-files': 'off',
    'ava/use-test': 'off'
  })
}

const reactVersion = getInstalledPackage('react')
if (reactVersion) {
  config.extends.push(
    'plugin:react/recommended',
    'standard-jsx',
    'prettier/react'
  )

  Object.assign(config.settings, {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: reactVersion
    }
  })

  if (flowVersion) {
    Object.assign(config.settings.react, { flowVersion })
  }

  Object.assign(config.rules, {
    'class-methods-use-this': 'off',
    'jsx-quotes': 'off',

    'react/prop-types': 'off',

    'react/jsx-handler-names': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-array-index-key': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-will-update-set-state': 'error',
    'react/sort-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  })
}

module.exports = config
