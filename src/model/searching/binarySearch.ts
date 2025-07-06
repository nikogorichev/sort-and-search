export function binarySearch<T>(
  list: Array<T>,
  key: keyof T,
  value: T[keyof T]
): T | null {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = list[mid][key];

    if (current === value) {
      return list[mid];
    }

    if (current == null) {
      return null;
    }

    if (current < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
