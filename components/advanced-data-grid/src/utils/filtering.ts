import {
  AdvancedColumnDef,
  CellValue,
  FilterModelItem,
  FilterOperator,
} from "../advanced-data-grid.types";

export function valueToString(value: CellValue): string {
  if (value === null || value === undefined) {
    return "";
  }
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return String(value);
}

function valueToNumber(value: CellValue): number | undefined {
  if (typeof value === "number") {
    return value;
  }
  if (value instanceof Date) {
    return value.getTime();
  }
  if (typeof value === "boolean") {
    return value ? 1 : 0;
  }
  if (value === null || value === undefined || value === "") {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

/**
 * Operators that do not require a filter value to be provided.
 */
const VALUELESS_OPERATORS: FilterOperator[] = ["isEmpty", "isNotEmpty"];

export function isValuelessOperator(operator: FilterOperator): boolean {
  return VALUELESS_OPERATORS.includes(operator);
}

export function matchesFilter(
  value: CellValue,
  operator: FilterOperator,
  filterValue: string
): boolean {
  const haystack = valueToString(value).toLowerCase();
  const needle = filterValue.trim().toLowerCase();

  switch (operator) {
    case "isEmpty":
      return haystack.length === 0;
    case "isNotEmpty":
      return haystack.length > 0;
    case "contains":
      return haystack.includes(needle);
    case "notContains":
      return !haystack.includes(needle);
    case "equals":
      return haystack === needle;
    case "notEquals":
      return haystack !== needle;
    case "startsWith":
      return haystack.startsWith(needle);
    case "endsWith":
      return haystack.endsWith(needle);
    case "greaterThan":
    case "greaterThanOrEqual":
    case "lessThan":
    case "lessThanOrEqual": {
      const left = valueToNumber(value);
      const right = valueToNumber(filterValue);
      if (left === undefined || right === undefined) {
        return false;
      }
      if (operator === "greaterThan") return left > right;
      if (operator === "greaterThanOrEqual") return left >= right;
      if (operator === "lessThan") return left < right;
      return left <= right;
    }
    default:
      return true;
  }
}

export function filterItems<TItem>(
  items: TItem[],
  columns: AdvancedColumnDef<TItem>[],
  filterModel: FilterModelItem[],
  searchQuery: string
): TItem[] {
  const columnsById = new Map(
    columns.map((column) => [column.columnId, column])
  );
  const search = searchQuery.trim().toLowerCase();

  const activeFilters = filterModel.filter(
    (filter) =>
      filter.enabled !== false &&
      (isValuelessOperator(filter.operator) || filter.value.trim() !== "")
  );

  return items.filter((item) => {
    const matchesColumnFilters = activeFilters.every((filter) => {
      const column = columnsById.get(filter.columnId);
      if (!column) {
        return true;
      }
      return matchesFilter(
        column.getValue(item),
        filter.operator,
        filter.value
      );
    });

    if (!matchesColumnFilters) {
      return false;
    }

    if (search.length === 0) {
      return true;
    }

    return columns.some((column) =>
      valueToString(column.getValue(item)).toLowerCase().includes(search)
    );
  });
}
