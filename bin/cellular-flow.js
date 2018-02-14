#!/usr/bin/env node
// @flow

const flow = require('../lib/flow');
const args = process.argv.slice(2);

process.exitCode = flow(args);
