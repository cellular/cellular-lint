// @flow

const { hasPkgProp, hasFile } = require('about-this-app');
const spawn = require('spawn-bin');

module.exports = function() {
  const useBuiltinConfig =
    !hasFile('.lintstagedrc') &&
    !hasFile('lint-staged.config.js') &&
    !hasPkgProp('lint-staged');

  const args = useBuiltinConfig
    ? ['-c', require.resolve('../lintstagedrc')]
    : [];

  return spawn('lint-staged', args).status;
};
