export function insertionSort<T>(
  list: Array<T>,
  key: keyof T,
  ASC: boolean = true
): T[] {
  const result = [...list];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (
      j >= 0 &&
      (ASC ? result[j][key] > current[key] : result[j][key] < current[key]!)
    ) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}
