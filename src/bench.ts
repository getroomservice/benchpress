import chalk from 'chalk';
import { performance, PerformanceObserver } from 'perf_hooks';

async function time(
  label: string,
  fn: (...args: any[]) => {},
): Promise<[string, number]> {
  return new Promise(resolve => {
    const wrapped = performance.timerify(fn);

    const observer = new PerformanceObserver(list => {
      const duration = list.getEntries()[0].duration;
      resolve([label, duration]);
      observer.disconnect();
    });
    observer.observe({ entryTypes: ['function'] });

    wrapped();
  });
}

export async function bench(label: string, fn: (...args: any[]) => {}) {
  const [l, duration] = await time(label, fn);
  console.log(chalk.bold(`${duration.toFixed(1)}ms`), chalk.dim('- ' + l));
}
