const fs = require('fs')
const path = require('path')

const cache = {}

module.exports = function(packageName) {
  if (packageName in cache) {
    return cache[packageName]
  }

  try {
    const packageJson = fs.readFileSync(
      path.resolve('node_modules', packageName, 'package.json')
    )
    cache[packageName] = packageJson.version
    return packageJson.version
  } catch (error) {
    cache[packageName] = null
    return null
  }
}
