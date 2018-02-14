// @flow

const spawn = require('spawn-bin');

module.exports = function(args /*: string[] */) {
  return spawn('flow-bin:flow', args).status;
};
