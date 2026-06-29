import {
  AdvancedColumnDef,
  AggregationFn,
  CellValue,
} from "../advanced-data-grid.types";
import { valueToString } from "./filtering";

export interface AggregationResult {
  fn: AggregationFn;
  value: number | undefined;
}

export interface RowGroup<TItem> {
  /** Stable id for the group (the column id + the group key). */
  groupId: string;
  /** The displayable group label. */
  label: string;
  /** The items belonging to the group. */
  items: TItem[];
  /** Per-column aggregation results, keyed by column id. */
  aggregations: Map<string, AggregationResult>;
}

function toNumbers<TItem>(
  items: TItem[],
  column: AdvancedColumnDef<TItem>
): number[] {
  const numbers: number[] = [];
  for (const item of items) {
    const raw = column.getValue(item);
    const value = typeof raw === "number" ? raw : Number(raw);
    if (
      !Number.isNaN(value) &&
      raw !== null &&
      raw !== undefined &&
      raw !== ""
    ) {
      numbers.push(value);
    }
  }
  return numbers;
}

export function aggregate<TItem>(
  items: TItem[],
  column: AdvancedColumnDef<TItem>
): AggregationResult {
  const fn = column.aggregation ?? "none";
  if (fn === "none") {
    return { fn, value: undefined };
  }
  if (fn === "count") {
    return { fn, value: items.length };
  }

  const numbers = toNumbers(items, column);
  if (numbers.length === 0) {
    return { fn, value: undefined };
  }

  switch (fn) {
    case "sum":
      return { fn, value: numbers.reduce((acc, n) => acc + n, 0) };
    case "avg":
      return {
        fn,
        value: numbers.reduce((acc, n) => acc + n, 0) / numbers.length,
      };
    case "min":
      return { fn, value: Math.min(...numbers) };
    case "max":
      return { fn, value: Math.max(...numbers) };
    default:
      return { fn, value: undefined };
  }
}

export function formatAggregation(result: AggregationResult): string {
  if (result.value === undefined) {
    return "";
  }
  const labels: Record<AggregationFn, string> = {
    none: "",
    sum: "Σ",
    avg: "avg",
    min: "min",
    max: "max",
    count: "count",
  };
  const rounded =
    result.fn === "avg" ? Math.round(result.value * 100) / 100 : result.value;
  return `${labels[result.fn]} ${rounded}`.trim();
}

export function groupItems<TItem>(
  items: TItem[],
  columns: AdvancedColumnDef<TItem>[],
  groupByColumnId: string | undefined
): RowGroup<TItem>[] {
  if (!groupByColumnId) {
    return [];
  }
  const groupColumn = columns.find((c) => c.columnId === groupByColumnId);
  if (!groupColumn) {
    return [];
  }

  const groups = new Map<string, TItem[]>();
  for (const item of items) {
    const key = valueToString(groupColumn.getValue(item)) || "(empty)";
    const bucket = groups.get(key);
    if (bucket) {
      bucket.push(item);
    } else {
      groups.set(key, [item]);
    }
  }

  const aggregatedColumns = columns.filter(
    (column) => (column.aggregation ?? "none") !== "none"
  );

  return [...groups.entries()].map(([key, groupedItems]) => {
    const aggregations = new Map<string, AggregationResult>();
    for (const column of aggregatedColumns) {
      aggregations.set(column.columnId, aggregate(groupedItems, column));
    }
    return {
      groupId: `${groupByColumnId}:${key}`,
      label: key,
      items: groupedItems,
      aggregations,
    } satisfies RowGroup<TItem>;
  });
}

export function flattenGroups<TItem>(groups: RowGroup<TItem>[]): TItem[] {
  return groups.reduce<TItem[]>((acc, group) => {
    for (const item of group.items) {
      acc.push(item);
    }
    return acc;
  }, []);
}

export type { CellValue };
