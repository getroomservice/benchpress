# benchpress 🏋️‍

Benchpress is a benchmarking library and CLI for js projects.

## Install

```
yarn add --dev @roomservice/benchpress
```

## Library Usage

To test how long a file takes, use `bench`:

```ts
// slow.bench.ts
import { bench } from '@roomservice/benchpress';

bench('my for loop', () => {
  const count = 0;
  for (let i = 0; i < 10000; i++) {
    count += i;
  }
});
```

To test a number of different cases, use `describe`:

```ts
import { describe, bench } from '@roomservice/benchpress';

describe('my for loop', [0, 10, 100, 1000, 10000], n => {
  bench(`n = ${n}`, () => {
    const count = 0;
    for (let i = 0; i < n; i++) {
      count += i;
    }
  });
});
```

## CLI Usage

```bash
benchpress # runs a test
benchpress compare # runs against the last commit
benchpress compare <commit_hash> # runs against a specific hash
benchpress compare master
```

Benchpress looks for files with the name `*_bench.(js|ts)` or anything in a `__bench__`.
