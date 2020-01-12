#!/usr/bin/env node
import yargs = require('yargs');
import { run } from './run';

const args = yargs.command(
  'diff',
  'compare the current benchmark against the most recent commit.',
  ys => {
    ys.positional('hashOrBranch', {
      describe: 'commit hash or branch to compare against',
      type: 'string',
    });
  },
  a => {
    console.log('args', a);
  },
).argv;

if (args._.length === 0) {
  run('.').catch(console.error);
}
