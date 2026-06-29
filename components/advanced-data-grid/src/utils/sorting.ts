import {
  AdvancedColumnDef,
  CellValue,
  SortModel,
} from "../advanced-data-grid.types";

function compareValues(a: CellValue, b: CellValue): number {
  const aEmpty = a === null || a === undefined || a === "";
  const bEmpty = b === null || b === undefined || b === "";
  if (aEmpty && bEmpty) return 0;
  if (aEmpty) return -1;
  if (bEmpty) return 1;

  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }
  if (typeof a === "boolean" && typeof b === "boolean") {
    return a === b ? 0 : a ? 1 : -1;
  }

  return String(a).localeCompare(String(b), undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export function sortItems<TItem>(
  items: TItem[],
  columns: AdvancedColumnDef<TItem>[],
  sortModel: SortModel | undefined
): TItem[] {
  if (!sortModel) {
    return items;
  }
  const column = columns.find((c) => c.columnId === sortModel.columnId);
  if (!column) {
    return items;
  }

  const direction = sortModel.direction === "ascending" ? 1 : -1;
  // Stable sort: decorate with original index to keep equal items in order.
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const result = compareValues(
        column.getValue(a.item),
        column.getValue(b.item)
      );
      return result !== 0 ? result * direction : a.index - b.index;
    })
    .map((entry) => entry.item);
}
