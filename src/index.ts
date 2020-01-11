import { performance, PerformanceObserver } from 'perf_hooks';
import { format } from 'util';

const BRIGHT = '\x1b[1m%s\x1b[0m';
const DIM = '\x1b[2m%s\x1b[0m';
const UNDERSCORE = '\x1b[4m%s\x1b[0m';

/**
 * Works like "test" but prints out the time it
 * took to run the function.
 */
export function bench(label: string, fn: (...args: any[]) => {}) {
  const wrapped = performance.timerify(fn);

  const observer = new PerformanceObserver(list => {
    const duration = list.getEntries()[0].duration.toFixed(1);
    console.log(format(BRIGHT, `${duration}ms`), format(DIM, '- ' + label));
    observer.disconnect();
  });
  observer.observe({ entryTypes: ['function'] });

  wrapped();
}

/**
 * Works like "describe" in a testing framework,
 * but you pass in the size of your dataset.
 * @param {*} label
 * @param {Array<number>} ns the size of your sample
 * @param {*} fn
 */
export function describe(label: string, ns: any[], fn: (...args: any[]) => {}) {
  console.log('\n' + format(UNDERSCORE, label));

  for (let n of ns) {
    fn(n);
  }
}
