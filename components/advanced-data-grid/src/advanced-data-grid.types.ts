import { ReactNode } from "react";

/**
 * Logical data type of a column. Determines the available filter operators and
 * the default sorting / aggregation behaviour.
 */
export type ColumnDataType =
  | "string"
  | "number"
  | "boolean"
  | "date"
  | "select";

/**
 * Comparison operators available for the column filters.
 */
export type FilterOperator =
  | "contains"
  | "notContains"
  | "equals"
  | "notEquals"
  | "startsWith"
  | "endsWith"
  | "isEmpty"
  | "isNotEmpty"
  | "greaterThan"
  | "greaterThanOrEqual"
  | "lessThan"
  | "lessThanOrEqual";

/**
 * Aggregation functions that can be displayed for a grouped column.
 */
export type AggregationFn = "none" | "sum" | "avg" | "min" | "max" | "count";

export type SortDirection = "ascending" | "descending";

export type Density = "comfortable" | "medium" | "compact";

export type PinSide = "left" | "right" | undefined;

/**
 * The raw value extracted from an item for a given column. Used for sorting,
 * filtering, grouping, aggregation and CSV export.
 */
export type CellValue = string | number | boolean | Date | null | undefined;

export interface AdvancedColumnDef<TItem> {
  /** Stable unique id for the column. */
  columnId: string;
  /** Header content. */
  header: ReactNode;
  /** Extracts the comparable / exportable value for the cell. */
  getValue: (item: TItem) => CellValue;
  /** Optional custom cell renderer. Falls back to the stringified value. */
  renderCell?: (item: TItem) => ReactNode;
  /** Logical data type. Defaults to `"string"`. */
  type?: ColumnDataType;
  /** Whether the column can be sorted. Defaults to `true`. */
  sortable?: boolean;
  /** Whether the column can be filtered. Defaults to `true`. */
  filterable?: boolean;
  /** Whether the column can be used to group rows. Defaults to `false`. */
  groupable?: boolean;
  /** Whether the column can be pinned to an edge. Defaults to `true`. */
  pinnable?: boolean;
  /** Whether the column can be hidden. Defaults to `true`. */
  hideable?: boolean;
  /** Aggregation function shown in group headers. Defaults to `"none"`. */
  aggregation?: AggregationFn;
  /** Options used when `type` is `"select"`. */
  selectOptions?: { label: string; value: string }[];
  /** Default column width in pixels. */
  width?: number;
  /** Minimum column width in pixels. */
  minWidth?: number;
}

export interface FilterModelItem {
  columnId: string;
  operator: FilterOperator;
  value: string;
  /** Whether the saved filter is currently applied. Defaults to `true`. */
  enabled?: boolean;
}

export interface SortModel {
  columnId: string;
  direction: SortDirection;
}

export interface AdvancedDataGridProps<TItem> {
  /** The data to display. */
  items: TItem[];
  /** Column definitions. */
  columns: AdvancedColumnDef<TItem>[];
  /** Returns a stable unique id for an item. */
  getRowId: (item: TItem) => string;
  /** Selection behaviour. Defaults to `"multiselect"`. */
  selectionMode?: "single" | "multiselect" | "none";
  /** Available page sizes. Defaults to `[5, 10, 25]`. */
  pageSizeOptions?: number[];
  /** Initial page size. Defaults to the first `pageSizeOptions` entry. */
  defaultPageSize?: number;
  /** Initial density. Defaults to `"comfortable"`. */
  defaultDensity?: Density;
  /** Enable the global quick-filter search box. Defaults to `true`. */
  enableSearch?: boolean;
  /** Enable the per-column filter panel. Defaults to `true`. */
  enableFiltering?: boolean;
  /** Filters that are present when the grid first renders. */
  defaultFilterModel?: FilterModelItem[];
  /** Enable the column visibility menu. Defaults to `true`. */
  enableColumnVisibility?: boolean;
  /** Enable the density toggle. Defaults to `true`. */
  enableDensity?: boolean;
  /** Enable CSV export. Defaults to `true`. */
  enableExport?: boolean;
  /** Enable row grouping. Defaults to `true`. */
  enableGrouping?: boolean;
  /** Enable column pinning. Defaults to `true`. */
  enablePinning?: boolean;
  /** Enable column reordering. Defaults to `true`. */
  enableReordering?: boolean;
  /** Enable drag-and-drop reordering of rows. Defaults to `false`. */
  enableRowReordering?: boolean;
  /** File name (without extension) used for CSV export. Defaults to `"data"`. */
  exportFileName?: string;
  /** Content shown when there are no rows to display. */
  emptyState?: ReactNode;
  /** Called whenever the selection changes. */
  onSelectionChange?: (selectedRowIds: string[]) => void;
  className?: string;
  "aria-label"?: string;
}
