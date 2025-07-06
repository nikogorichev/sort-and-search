import { useCallback, useState } from "react";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  selectionSort,
} from "../model/sorting";

type SortMethod = "merge" | "bubble" | "insertion" | "selection";

export function useSorting<T>(data: Array<T>) {
  const [sortedData, setSortedData] = useState<Array<T>>(data);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortBy = useCallback(
    (key: keyof T, method: SortMethod) => {
      const ascending = sortDirection === "asc";

      const result = (() => {
        switch (method) {
          case "merge":
            return mergeSort(data, key, ascending);
          case "bubble":
            return bubbleSort(data, key, ascending);
          case "insertion":
            return insertionSort(data, key, ascending);
          case "selection":
            return selectionSort(data, key, ascending);
        }
      })();

      setSortedData(result);
    },
    [data, sortDirection]
  );

  const toggleSortDirection = useCallback(() => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  }, []);

  return {
    sortedData,
    sortBy,
    sortDirection,
    toggleSortDirection,
  };
}
