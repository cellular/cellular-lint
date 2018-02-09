#!/usr/bin/env node
// @flow

const lint = require('../lib/lint');
const args = process.argv.slice(2);

process.exitCode = lint(args);
