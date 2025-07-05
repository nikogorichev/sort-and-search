export function selectionSort<T>(
  list: Array<T>,
  key: keyof T,
  ASC: boolean = true
): Array<T> {
  const result = [...list];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let targetIndex = i;

    for (let j = i + 1; j < n; j++) {
      const a = result[j][key];
      const b = result[targetIndex][key];
      const compare = a < b ? -1 : a > b ? 1 : 0;

      const shouldSwap = ASC ? compare < 0 : compare > 0;
      if (shouldSwap) {
        targetIndex = j;
      }
    }

    if (targetIndex !== i) {
      [result[i], result[targetIndex]] = [result[targetIndex], result[i]];
    }
  }

  return result;
}
