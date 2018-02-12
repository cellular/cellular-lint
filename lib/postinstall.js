const fs = require('fs');
const path = require('path');
const { hasPkgProp, hasFile, root } = require('about-this-app');

const hasConfig =
  hasFile('.eslintrc') ||
  hasFile('.eslintrc.js') ||
  !hasPkgProp('eslintConfig');

const projectRc = path.resolve(root, '.eslintrc');
const builtInRc = path.resolve(__dirname, '.eslintrc');

if (!hasConfig) {
  fs.copyFileSync(builtInRc, projectRc);
}
