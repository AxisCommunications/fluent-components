import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AdvancedColumnDef,
  Density,
  FilterModelItem,
  PinSide,
  SortModel,
} from "../advanced-data-grid.types";
import { filterItems } from "../utils/filtering";
import { RowGroup, flattenGroups, groupItems } from "../utils/grouping";
import { sortItems } from "../utils/sorting";

export interface UseAdvancedDataGridOptions<TItem> {
  items: TItem[];
  columns: AdvancedColumnDef<TItem>[];
  getRowId: (item: TItem) => string;
  pageSizeOptions: number[];
  defaultPageSize: number;
  defaultDensity: Density;
  defaultFilterModel?: FilterModelItem[];
  onSelectionChange?: (selectedRowIds: string[]) => void;
}

export interface AdvancedDataGridController<TItem> {
  // Derived data
  visibleColumns: AdvancedColumnDef<TItem>[];
  pagedItems: TItem[];
  totalRows: number;
  filteredRows: number;
  groups: RowGroup<TItem>[];
  firstRowIdOfGroup: Set<string>;
  groupByColumnId: string | undefined;

  // Search & filtering
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filterModel: FilterModelItem[];
  setFilterModel: (model: FilterModelItem[]) => void;
  activeFilterCount: number;

  // Sorting
  sortModel: SortModel | undefined;
  toggleSort: (columnId: string) => void;

  // Pagination
  page: number;
  pageSize: number;
  pageCount: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;

  // Selection
  selectedRowIds: Set<string>;
  setSelectedRowIds: (ids: Set<string>) => void;

  // Column visibility
  hiddenColumnIds: Set<string>;
  toggleColumnVisibility: (columnId: string) => void;

  // Density
  density: Density;
  setDensity: (density: Density) => void;

  // Grouping
  setGroupByColumnId: (columnId: string | undefined) => void;

  // Pinning & ordering
  pinnedColumns: Map<string, PinSide>;
  setColumnPin: (columnId: string, side: PinSide) => void;
  moveColumn: (columnId: string, direction: "left" | "right") => void;
  reorderColumn: (sourceColumnId: string, targetColumnId: string) => void;

  // Row ordering
  reorderRow: (sourceRowId: string, targetRowId: string) => void;
}

export function useAdvancedDataGrid<TItem>(
  options: UseAdvancedDataGridOptions<TItem>
): AdvancedDataGridController<TItem> {
  const {
    items,
    columns,
    getRowId,
    defaultPageSize,
    defaultDensity,
    defaultFilterModel,
    onSelectionChange,
  } = options;

  const [searchQuery, setSearchQuery] = useState("");
  const [filterModel, setFilterModel] = useState<FilterModelItem[]>(
    () => defaultFilterModel ?? []
  );
  const [sortModel, setSortModel] = useState<SortModel | undefined>(undefined);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSizeState] = useState(defaultPageSize);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const [hiddenColumnIds, setHiddenColumnIds] = useState<Set<string>>(
    new Set()
  );
  const [density, setDensity] = useState<Density>(defaultDensity);
  const [groupByColumnId, setGroupByColumnId] = useState<string | undefined>(
    undefined
  );
  const [pinnedColumns, setPinnedColumns] = useState<Map<string, PinSide>>(
    new Map()
  );
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map((column) => column.columnId)
  );
  const [rowOrder, setRowOrder] = useState<string[]>(() =>
    items.map((item) => getRowId(item))
  );

  // Keep the row order in sync if the set of items changes.
  useEffect(() => {
    setRowOrder((previous) => {
      const known = new Set(previous);
      const currentIds = items.map((item) => getRowId(item));
      const currentSet = new Set(currentIds);
      const next = previous.filter((id) => currentSet.has(id));
      for (const id of currentIds) {
        if (!known.has(id)) {
          next.push(id);
        }
      }
      return next;
    });
  }, [items, getRowId]);

  // Keep the column order in sync if the set of columns changes.
  useEffect(() => {
    setColumnOrder((previous) => {
      const known = new Set(previous);
      const next = previous.filter((id) =>
        columns.some((column) => column.columnId === id)
      );
      for (const column of columns) {
        if (!known.has(column.columnId)) {
          next.push(column.columnId);
        }
      }
      return next;
    });
  }, [columns]);

  // Reset to the first page whenever the result set shrinks/changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional page reset
  useEffect(() => {
    setPage(0);
  }, [searchQuery, filterModel, groupByColumnId, pageSize]);

  const columnsById = useMemo(
    () => new Map(columns.map((column) => [column.columnId, column])),
    [columns]
  );

  const visibleColumns = useMemo(() => {
    const ordered = columnOrder
      .map((id) => columnsById.get(id))
      .filter(
        (column): column is AdvancedColumnDef<TItem> =>
          column !== undefined && !hiddenColumnIds.has(column.columnId)
      );

    const left = ordered.filter(
      (c) => pinnedColumns.get(c.columnId) === "left"
    );
    const right = ordered.filter(
      (c) => pinnedColumns.get(c.columnId) === "right"
    );
    const middle = ordered.filter((c) => !pinnedColumns.get(c.columnId));
    return [...left, ...middle, ...right];
  }, [columnOrder, columnsById, hiddenColumnIds, pinnedColumns]);

  const orderedItems = useMemo(() => {
    const byId = new Map(items.map((item) => [getRowId(item), item]));
    const ordered: TItem[] = [];
    for (const id of rowOrder) {
      const item = byId.get(id);
      if (item !== undefined) {
        ordered.push(item);
        byId.delete(id);
      }
    }
    // Append any items not yet tracked in the row order.
    for (const item of byId.values()) {
      ordered.push(item);
    }
    return ordered;
  }, [items, rowOrder, getRowId]);

  const filteredItems = useMemo(
    () => filterItems(orderedItems, columns, filterModel, searchQuery),
    [orderedItems, columns, filterModel, searchQuery]
  );

  const sortedItems = useMemo(
    () => sortItems(filteredItems, columns, sortModel),
    [filteredItems, columns, sortModel]
  );

  const groups = useMemo(
    () => groupItems(sortedItems, columns, groupByColumnId),
    [sortedItems, columns, groupByColumnId]
  );

  const displayItems = useMemo(
    () => (groupByColumnId ? flattenGroups(groups) : sortedItems),
    [groupByColumnId, groups, sortedItems]
  );

  const firstRowIdOfGroup = useMemo(() => {
    const set = new Set<string>();
    for (const group of groups) {
      const first = group.items[0];
      if (first !== undefined) {
        set.add(getRowId(first));
      }
    }
    return set;
  }, [groups, getRowId]);

  const pageCount = Math.max(1, Math.ceil(displayItems.length / pageSize));
  const clampedPage = Math.min(page, pageCount - 1);

  const pagedItems = useMemo(
    () =>
      displayItems.slice(
        clampedPage * pageSize,
        clampedPage * pageSize + pageSize
      ),
    [displayItems, clampedPage, pageSize]
  );

  const toggleSort = useCallback((columnId: string) => {
    setSortModel((previous) => {
      if (!previous || previous.columnId !== columnId) {
        return { columnId, direction: "ascending" };
      }
      if (previous.direction === "ascending") {
        return { columnId, direction: "descending" };
      }
      return undefined;
    });
  }, []);

  const toggleColumnVisibility = useCallback((columnId: string) => {
    setHiddenColumnIds((previous) => {
      const next = new Set(previous);
      if (next.has(columnId)) {
        next.delete(columnId);
      } else {
        next.add(columnId);
      }
      return next;
    });
  }, []);

  const setColumnPin = useCallback((columnId: string, side: PinSide) => {
    setPinnedColumns((previous) => {
      const next = new Map(previous);
      if (side) {
        next.set(columnId, side);
      } else {
        next.delete(columnId);
      }
      return next;
    });
  }, []);

  const moveColumn = useCallback(
    (columnId: string, direction: "left" | "right") => {
      setColumnOrder((previous) => {
        const index = previous.indexOf(columnId);
        const target = direction === "left" ? index - 1 : index + 1;
        if (index === -1 || target < 0 || target >= previous.length) {
          return previous;
        }
        const next = [...previous];
        [next[index], next[target]] = [next[target], next[index]];
        return next;
      });
    },
    []
  );

  const reorderColumn = useCallback(
    (sourceColumnId: string, targetColumnId: string) => {
      if (sourceColumnId === targetColumnId) {
        return;
      }
      setColumnOrder((previous) => {
        const from = previous.indexOf(sourceColumnId);
        const to = previous.indexOf(targetColumnId);
        if (from === -1 || to === -1) {
          return previous;
        }
        const next = [...previous];
        next.splice(from, 1);
        next.splice(to, 0, sourceColumnId);
        return next;
      });
    },
    []
  );

  const reorderRow = useCallback((sourceRowId: string, targetRowId: string) => {
    if (sourceRowId === targetRowId) {
      return;
    }
    setRowOrder((previous) => {
      const from = previous.indexOf(sourceRowId);
      const to = previous.indexOf(targetRowId);
      if (from === -1 || to === -1) {
        return previous;
      }
      const next = [...previous];
      next.splice(from, 1);
      next.splice(to, 0, sourceRowId);
      return next;
    });
  }, []);

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size);
  }, []);

  const handleSetSelectedRowIds = useCallback(
    (ids: Set<string>) => {
      setSelectedRowIds(ids);
      onSelectionChange?.([...ids]);
    },
    [onSelectionChange]
  );

  const activeFilterCount = useMemo(
    () =>
      filterModel.filter(
        (filter) =>
          filter.enabled !== false &&
          (filter.operator === "isEmpty" ||
            filter.operator === "isNotEmpty" ||
            filter.value.trim() !== "")
      ).length,
    [filterModel]
  );

  return {
    visibleColumns,
    pagedItems,
    totalRows: items.length,
    filteredRows: displayItems.length,
    groups,
    firstRowIdOfGroup,
    groupByColumnId,

    searchQuery,
    setSearchQuery,
    filterModel,
    setFilterModel,
    activeFilterCount,

    sortModel,
    toggleSort,

    page: clampedPage,
    pageSize,
    pageCount,
    setPage,
    setPageSize,

    selectedRowIds,
    setSelectedRowIds: handleSetSelectedRowIds,

    hiddenColumnIds,
    toggleColumnVisibility,

    density,
    setDensity,

    setGroupByColumnId,

    pinnedColumns,
    setColumnPin,
    moveColumn,
    reorderColumn,

    reorderRow,
  };
}
