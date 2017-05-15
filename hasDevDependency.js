const findPackageJson = require('find-package-json')

let cachedPackageJson
function getPackageJson () {
  if (!cachedPackageJson) {
    cachedPackageJson = findPackageJson().next().value
    if (!cachedPackageJson.devDependencies) {
      cachedPackageJson.devDependencies = {}
    }
  }
  return cachedPackageJson
}

module.exports = function (devDependencyName) {
  const packageJson = getPackageJson()
  return devDependencyName in packageJson.devDependencies
}
