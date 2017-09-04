const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs,
  eslint,
  cmd: 'standard',
  tagline: 'Use ES.Next Standard Style',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.js')
  },
  cwd: '',

  parser: 'babel-eslint',

  parseOpts(opts) {
    opts.ignore = opts.ignore.concat('flow-typed/**')
    return opts
  }
}
