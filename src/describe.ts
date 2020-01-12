import chalk from 'chalk';

/**
 * Works like "describe" in a testing framework,
 * but you pass in the size of your dataset.
 * @param {*} label
 * @param {Array<number>} ns the size of your sample
 * @param {*} fn
 */
export function describe(
  label: string,
  ns: any[],
  fn: (...args: any[]) => void,
) {
  console.log('\n' + chalk.underline(label));

  for (const n of ns) {
    fn(n);
  }
}
