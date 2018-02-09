// @flow

const { hasPkgProp, hasFile } = require('about-this-app');
const spawn = require('./spawn');

module.exports = function() {
  const useBuiltinConfig =
    !hasFile('.lintstagedrc') &&
    !hasFile('lint-staged.config.js') &&
    !hasPkgProp('lint-staged');

  const args = useBuiltinConfig ? [require.resolve('./lintstagedrc')] : [];
  console.log(args);
  return spawn('lint-staged', args);
};
