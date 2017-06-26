const fs = require('fs')
const path = require('path')

function findPackageJson(workingDirectory) {
  const packageJsonPath = path.join(workingDirectory, 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    return require(packageJsonPath)
  } else {
    findPackageJson(path.resolve(workingDirectory, '..'))
  }
}

let cachedPackageJson
function getPackageJson() {
  if (!cachedPackageJson) {
    cachedPackageJson = findPackageJson(process.cwd())
  }
  return cachedPackageJson
}

module.exports = function(devDependencyName) {
  const packageJson = getPackageJson()
  return devDependencyName in (packageJson.devDependencies || {})
}
