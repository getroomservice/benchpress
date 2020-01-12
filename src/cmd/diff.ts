import invariant from 'invariant';
import { YargArgs } from './types';

export function diff(args: YargArgs) {
  const [cmd] = args._;
  invariant(cmd === 'diff', 'diff function should be used with diff cmd');

  // if (!value) {
  //   value;
  // }
}
