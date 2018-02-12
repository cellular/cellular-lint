# cellular-lint

[![Build Status](https://travis-ci.org/fgnass/cellular-lint.svg?branch=master)](https://travis-ci.org/fgnass/cellular-lint) [![Greenkeeper badge](https://badges.greenkeeper.io/fgnass/cellular-lint.svg)](https://greenkeeper.io/)

CLI toolbox for linting projects

## Usage

Add the following script to your package.json:

```json
{
  "scripts": {
    "lint": "cellular-lint",
    "precommit": "cellular-lint-staged"
  }
}
```

__NOTE:__ This package includes [husky](https://github.com/typicode/husky) which will install a Git-hook that executes the `precommit` script upon commits.

## Binaries

### `cellular-lint`

Runs ESLint. If the project does not have any ESLint config, the following defaults are used instead:

```json
{
  "extends": ["cellular"]
}
```

__NOTE:__ This package has a `postinstall` script that will create a `.eslintrc` file with the defaults from above if the project does not contain any custom config.


### `cellular-lint-staged`

Runs lint-staged with the folloing settigns:

```js
{
  linters: {
    '**/*.+(js|mjs|jsx)': [
      'cellular-lint --fix',
      'flow focus-check', // if flow is present
      'git add'
    ]
  }
}
```

__NOTE:__ If the project contains a `.lintstagedrc` or `lint-staged.config.js` file that config will be used instead.

# License

MIT