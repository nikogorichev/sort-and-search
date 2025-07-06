import { useCallback } from "react";
import { binarySearch, linearSearch } from "../model/searching";

type SearchMethod = "linear" | "binary";

export function useSearching<T>(data: Array<T>) {
  const searchBy = useCallback(
    (key: keyof T, method: SearchMethod, value: T[keyof T]): T | null => {
      switch (method) {
        case "linear":
          return linearSearch(data, key, value);
        case "binary":
          return binarySearch(data, key, value);
        default:
          return null;
      }
    },
    [data]
  );

  return { searchBy };
}
