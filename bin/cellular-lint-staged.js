#!/usr/bin/env node
// @flow

const lintStaged = require('../lib/lint-staged');
process.exitCode = lintStaged();
