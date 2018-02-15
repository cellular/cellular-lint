# cellular-lint

[![Build Status](https://travis-ci.org/cellular/cellular-lint.svg?branch=master)](https://travis-ci.org/cellular/cellular-lint) [![Greenkeeper badge](https://badges.greenkeeper.io/cellular/cellular-lint.svg)](https://greenkeeper.io/)

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
      'cellular-flow focus-check', // if flow is present
      'git add'
    ]
  }
}
```

__NOTE:__ If the project contains a `.lintstagedrc` or `lint-staged.config.js` file that config will be used instead.


### `cellular-flow`

This is just a wrapper around the `flow` binary. Why? It's not uncommon for projects to contain an npm script called "flow". If such a script exists, lint-staged will run this instead of the actual flow binary which would prevent `flow focus-check` from working! To fix this we use `cellular-flow` as alias in our lint-staged configuration.

# License

MIT