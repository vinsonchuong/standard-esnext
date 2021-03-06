# ES.Next Standard Style
[JavaScript Standard Style](https://github.com/feross/standard) for ES.Next

## Installing
Install it locally to your project by running:

```bash
yarn add --dev standard-esnext
```

Ensure that `node_modules/.bin` is on your `PATH`

## Usage
```
standard
```

Refer to the base [standard](https://github.com/feross/standard) package for
documentation.

## What's Included
* `babel-eslint` enables linting of experimental features as well
  as extensions to the language like Flow.
* `eslint-plugin-flowtype` applies complementary rules to Flow annotations.
* `eslint-plugin-import` checks validity of `import` and `export` statements.
  Aliases defined using `babel-plugin-module-resolver` are supported. Package
  name aliases defined by `babel-plugin-package-name-import` are also
  supported.
* `eslint-plugin-prettier` ensures consistent and uniform formatting

Note that because Flow already resolves and validates imports, if the `flow-bin`
package is installed, overlapping rules from `eslint-plugin-import` will be
disabled.
