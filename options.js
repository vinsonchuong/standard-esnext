var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs,
  eslint: eslint,
  cmd: 'standard',
  tagline: 'Use ES.Next Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  cwd: '',

  parser: 'babel-eslint'
}
