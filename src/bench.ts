import chalk from 'chalk';
import { time } from './time.util';

export async function bench(label: string, fn: (...args: any[]) => void) {
  const duration = await time(fn);
  console.log(chalk.bold(`${duration.toFixed(3)}ms`), chalk.dim('- ' + label));
}
