export function linearSearch<T>(
  list: Array<T>,
  key: keyof T,
  value: T[keyof T]
): T | null {
  for (const item of list) {
    if (item[key] === value) {
      return item;
    }
  }

  return null;
}
