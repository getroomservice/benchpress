import { bench, describe } from '../src/index';

describe('my sorting', [0, 10, 100, 1000, 10000, 100000, 1000000], n => {
  bench(`n = ${n}`, () => {
    let arr = new Array(n).map(() => Math.random());
    arr.sort();
  });
});
