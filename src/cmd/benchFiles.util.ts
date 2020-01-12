import { promises as fs } from 'fs';
import { join } from 'path';

const isBenchFile = (name: string) => /.bench./.test(name);

const shouldIgnore = (name: string) => name.includes('node_modules');

export async function benchFiles(
  dir: string,
  fileList?: string[],
): Promise<string[]> {
  let list = fileList || [];

  const files = await fs.readdir(dir);
  for (const file of files) {
    const stat = await fs.stat(join(dir, file));

    if (shouldIgnore(file)) {
      continue;
    }

    if (stat.isDirectory()) {
      list = await benchFiles(join(dir, file), list);
    } else {
      if (isBenchFile(file)) {
        list.push(join(dir, file));
      }
    }
  }
  return list;
}
