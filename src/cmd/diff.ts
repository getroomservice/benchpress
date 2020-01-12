import invariant from 'invariant';
import { YargArgs } from './types';

export function diff(args: YargArgs) {
  let [cmd, value] = args._;
  invariant(cmd === 'diff', 'diff function should be used with diff cmd');

  if (!value) {
    value;
  }
}
