import { performance, PerformanceObserver } from 'perf_hooks';

export async function time(fn: (...args: any[]) => void): Promise<number> {
  return new Promise(resolve => {
    const wrapped = performance.timerify(fn);

    const observer = new PerformanceObserver(list => {
      const duration = list.getEntries()[0].duration;
      resolve(duration);
      observer.disconnect();
    });
    observer.observe({ entryTypes: ['function'] });

    wrapped();
  });
}
