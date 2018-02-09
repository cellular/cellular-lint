// @flow

const app = require('about-this-app');

const fix = 'cellular-lint --fix';
const flow = app.hasAnyDep('flow-bin') && 'flow focus-check';
const stage = 'git add';

module.exports = {
  linters: {
    '**/*.+(js|mjs|json)': [fix, flow, stage].filter(Boolean),
  },
};
