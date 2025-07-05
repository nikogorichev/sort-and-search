export function mergeSort<T>(
  list: Array<T>,
  key: keyof T,
  ASC: boolean = true
): Array<T> {
  if (list.length <= 1) return list;

  const mid = Math.floor(list.length / 2);
  const left = mergeSort(list.slice(0, mid), key, ASC);
  const right = mergeSort(list.slice(mid), key, ASC);

  return merge(left, right, key, ASC);
}

function merge<T>(
  left: Array<T>,
  right: Array<T>,
  key: keyof T,
  ASC: boolean
): Array<T> {
  const result: T[] = [];

  while (left.length && right.length) {
    const l = left[0][key];
    const r = right[0][key];

    const comparison = l < r ? -1 : l > r ? 1 : 0;
    const shouldTakeLeft = ASC ? comparison <= 0 : comparison >= 0;

    result.push(shouldTakeLeft ? left.shift()! : right.shift()!);
  }

  return result.concat(left, right);
}
