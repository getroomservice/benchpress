import { isHash } from './isHash.util';

describe('isHash', () => {
  test('works on a long hash', () => {
    expect(isHash('ae5968d9812a1f071178e2489b5f2100abdb139d')).toBe(true);
  });

  test('works on a short hash', () => {
    expect(isHash('247c25b')).toBe(true);
  });

  test('works on a hex-like branch name', () => {
    expect(isHash('aaaaaaab5')).toBe(false);
    expect(isHash('master')).toBe(false);
    expect(isHash('staging')).toBe(false);
    expect(isHash('babababababa')).toBe(false);
    expect(isHash('cool-branch')).toBe(false);
  });
});
