import mockfs from 'mock-fs';
import { benchFiles } from './benchFiles.util';

describe('benchFiles', () => {
  afterEach(() => {
    mockfs.restore();
  });

  test('will not match any rando file', async () => {
    mockfs({
      'myfile.js': 'ya boiii',
    });

    const files = await benchFiles('.');
    expect(files).toEqual([]);
  });

  test('will match a single bench file', async () => {
    mockfs({
      'myfile.bench.js': 'ya boiii',
    });

    const files = await benchFiles('.');
    expect(files).toEqual(['myfile.bench.js']);
  });

  test('will match a file inside a dir', async () => {
    mockfs({
      'myfile.js': 'ya boiii',
      'cool-dir': {
        'bencher.bench.js': 'wefoiawoefije',
      },
    });

    const files = await benchFiles('.');
    expect(files).toEqual(['cool-dir/bencher.bench.js']);
  });

  test('will match multiple files in and out of a dir', async () => {
    mockfs({
      'myfile.js': 'ya boiii',
      'outfile.bench.js': 'boom bam',
      'cool-dir': {
        'bencher.bench.js': 'wefoiawoefije',
        'foobar.bench.js': 'wefoiawoefije',
      },
    });

    const files = await benchFiles('.');
    expect(files.sort()).toEqual(
      [
        'cool-dir/bencher.bench.js',
        'cool-dir/foobar.bench.js',
        'outfile.bench.js',
      ].sort(),
    );
  });

  test('works with multiple different extensions', async () => {
    mockfs({
      'typescript.bench.ts': 'wefioj',
      'tsreact.bench.tsx': 'boom bam',
      'jsx.bench.jsx': 'jsx',
    });

    const files = await benchFiles('.');
    expect(files.sort()).toEqual(
      ['typescript.bench.ts', 'tsreact.bench.tsx', 'jsx.bench.jsx'].sort(),
    );
  });

  test('ignores node_moduless', async () => {
    mockfs({
      'foo.bench.js': 'wefioj',
      node_modules: {
        'bar.bench.js': 'ahh',
      },
    });

    const files = await benchFiles('.');
    expect(files).toEqual(['foo.bench.js']);
  });
});
