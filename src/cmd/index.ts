#!/usr/bin/env node
import yargs = require('yargs');
import { run } from './run';

const args = yargs.command(
  'diff',
  'compare the current benchmark against the most recent commit.',
  yargs => {
    yargs.positional('hashOrBranch', {
      describe: 'commit hash or branch to compare against',
      type: 'string',
    });
  },
  args => {
    console.log('args', args);
  },
).argv;

if (args._.length === 0) {
  run('.').catch(console.error);
}
