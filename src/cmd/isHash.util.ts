function isHashLength(value: string) {
  const LONG_HASH_LENGTH = 40;
  const SHORT_HASH_LENGTH = 7;
  return (
    value.length === SHORT_HASH_LENGTH || value.length === LONG_HASH_LENGTH
  );
}

export function isHash(value: string): boolean {
  if (!isHashLength(value)) {
    return false;
  }

  return /\b[0-9a-f]{5,40}\b/.test(value);
}
