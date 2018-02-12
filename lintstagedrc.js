// @flow

const app = require('about-this-app');
const dogfooding = app.pkg.name == 'cellular-lint';

const bin = dogfooding
  ? require.resolve('./bin/cellular-lint')
  : 'cellular-lint';

const fix = `${bin} --fix`;
const flow = app.hasAnyDep('flow-bin') && 'flow focus-check';
const stage = 'git add';

module.exports = {
  linters: {
    '**/*.+(js|mjs|jsx)': [fix, flow, stage].filter(Boolean),
  },
};
