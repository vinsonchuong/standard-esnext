const fs = require('fs')
const path = require('path')

const cache = {}

module.exports = function(packageName) {
  if (packageName in cache) {
    return cache[packageName]
  }

  try {
    fs.statSync(path.resolve('node_modules', packageName))
    cache[packageName] = true
    return true
  } catch (error) {
    cache[packageName] = false
    return false
  }
}
