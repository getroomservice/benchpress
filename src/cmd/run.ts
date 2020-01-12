import { execSync as execSyncNode } from 'child_process';
import { extname } from 'path';
import { benchFiles } from './benchFiles.util';

function execSync(cmd: string) {
  try {
    const stdout = execSyncNode(cmd, {
      stdio: 'inherit',
    });
    console.log(stdout.toString());
  } catch (err) {
    // node and ts-node will output the error here anywhoo
    // so no need to repeat it
  }
}

async function runTypescript(filepath: string) {
  execSync(`ts-node ${filepath}`);
}

function runNode(filepath: string) {
  execSync(`node ${filepath}`);
}

function runFile(filepath: string) {
  const ext = extname(filepath);
  if (ext === '.ts' || ext === '.tsx') {
    return runTypescript(filepath);
  }

  if (ext === '.js') {
    return runNode(filepath);
  }

  throw new Error(`Unexpected benchmark file '${filepath}' with ext '${ext}'`);
}

export async function run(path: string) {
  const files = await benchFiles(path);

  for (let file of files) {
    await runFile(file);
  }
}
