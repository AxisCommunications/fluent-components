import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableColumnDefinition,
  TableColumnSizingOptions,
  createTableColumn,
  mergeClasses,
} from "@fluentui/react-components";
import {
  CSSProperties,
  DragEvent,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  advancedDataGridClassNames,
  useAdvancedDataGridStyles,
} from "./advanced-data-grid.styles";
import {
  AdvancedColumnDef,
  AdvancedDataGridProps,
  Density,
  FilterOperator,
} from "./advanced-data-grid.types";
import { ColumnHeaderCell } from "./column-header-cell";
import { AdvancedDataGridFooter } from "./footer/advanced-data-grid-footer";
import { useAdvancedDataGrid } from "./hooks/use-advanced-data-grid";
import { AdvancedDataGridToolbar } from "./toolbar/advanced-data-grid-toolbar";
import { buildCsv, downloadCsv } from "./utils/export-csv";
import { filterItems, valueToString } from "./utils/filtering";
import { RowGroup, flattenGroups, formatAggregation } from "./utils/grouping";
import { sortItems } from "./utils/sorting";

const DENSITY_ROW_CLASS: Record<
  Density,
  keyof ReturnType<typeof useAdvancedDataGridStyles>
> = {
  comfortable: "rowComfortable",
  medium: "rowMedium",
  compact: "rowCompact",
};

function defaultColumnWidth<TItem>(column: AdvancedColumnDef<TItem>): number {
  return column.width ?? column.minWidth ?? 150;
}

function AdvancedDataGridInner<TItem>(
  props: AdvancedDataGridProps<TItem>,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    items,
    columns,
    getRowId,
    selectionMode = "multiselect",
    pageSizeOptions = [5, 10, 25],
    defaultPageSize,
    defaultDensity = "comfortable",
    enableSearch = true,
    enableFiltering = true,
    defaultFilterModel,
    enableColumnVisibility = true,
    enableDensity = true,
    enableExport = true,
    enableGrouping = true,
    enablePinning = true,
    enableReordering = true,
    enableRowReordering = false,
    exportFileName = "data",
    emptyState,
    onSelectionChange,
    className,
  } = props;

  const styles = useAdvancedDataGridStyles();

  const controller = useAdvancedDataGrid<TItem>({
    items,
    columns,
    getRowId,
    pageSizeOptions,
    defaultPageSize: defaultPageSize ?? pageSizeOptions[0] ?? 10,
    defaultDensity,
    defaultFilterModel,
    onSelectionChange,
  });

  const {
    visibleColumns,
    pagedItems,
    filteredRows,
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
    page,
    pageSize,
    pageCount,
    setPage,
    setPageSize,
    selectedRowIds,
    setSelectedRowIds,
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
  } = controller;

  const [draggingRowId, setDraggingRowId] = useState<string | null>(null);
  const [dragOverRowId, setDragOverRowId] = useState<string | null>(null);

  // Sticky offsets for pinned columns.
  const pinStyles = useMemo(() => {
    const map = new Map<string, CSSProperties>();
    const selectionWidth = selectionMode === "none" ? 0 : 44;

    let leftAcc = selectionWidth;
    for (const column of visibleColumns) {
      if (pinnedColumns.get(column.columnId) === "left") {
        map.set(column.columnId, { left: leftAcc });
        leftAcc += defaultColumnWidth(column);
      }
    }

    let rightAcc = 0;
    for (let i = visibleColumns.length - 1; i >= 0; i -= 1) {
      const column = visibleColumns[i];
      if (pinnedColumns.get(column.columnId) === "right") {
        map.set(column.columnId, { right: rightAcc });
        rightAcc += defaultColumnWidth(column);
      }
    }
    return map;
  }, [visibleColumns, pinnedColumns, selectionMode]);

  const pinClass = useCallback(
    (columnId: string) => {
      const side = pinnedColumns.get(columnId);
      if (side === "left") return styles.pinnedLeft;
      if (side === "right") return styles.pinnedRight;
      return undefined;
    },
    [pinnedColumns, styles]
  );

  const setColumnFilter = useCallback(
    (columnId: string, operator: FilterOperator, value: string) => {
      const next = { columnId, operator, value, enabled: true };
      const existingIndex = filterModel.findIndex(
        (filter) => filter.columnId === columnId
      );
      if (existingIndex === -1) {
        setFilterModel([...filterModel, next]);
      } else {
        setFilterModel(
          filterModel.map((filter, index) =>
            index === existingIndex ? next : filter
          )
        );
      }
    },
    [filterModel, setFilterModel]
  );

  const clearColumnFilter = useCallback(
    (columnId: string) => {
      const existingIndex = filterModel.findIndex(
        (filter) => filter.columnId === columnId
      );
      if (existingIndex !== -1) {
        setFilterModel(
          filterModel.filter((_, index) => index !== existingIndex)
        );
      }
    },
    [filterModel, setFilterModel]
  );

  const tableColumns: TableColumnDefinition<TItem>[] = useMemo(
    () =>
      visibleColumns.map((column) =>
        createTableColumn<TItem>({
          columnId: column.columnId,
          renderHeaderCell: () => (
            <ColumnHeaderCell
              column={column}
              sortModel={sortModel}
              pinSide={pinnedColumns.get(column.columnId)}
              columnFilter={filterModel.find(
                (filter) => filter.columnId === column.columnId
              )}
              enableSorting
              enableFiltering={enableFiltering}
              enablePinning={enablePinning}
              enableReordering={enableReordering}
              enableGrouping={enableGrouping}
              enableColumnVisibility={enableColumnVisibility}
              onToggleSort={toggleSort}
              onSetColumnFilter={setColumnFilter}
              onClearColumnFilter={clearColumnFilter}
              onSetPin={setColumnPin}
              onMove={moveColumn}
              onReorder={reorderColumn}
              onGroupBy={setGroupByColumnId}
              onHide={toggleColumnVisibility}
            />
          ),
          renderCell: (item) =>
            column.renderCell
              ? column.renderCell(item)
              : valueToString(column.getValue(item)),
        })
      ),
    [
      visibleColumns,
      sortModel,
      pinnedColumns,
      filterModel,
      enableFiltering,
      enablePinning,
      enableReordering,
      enableGrouping,
      enableColumnVisibility,
      toggleSort,
      setColumnFilter,
      clearColumnFilter,
      setColumnPin,
      moveColumn,
      reorderColumn,
      setGroupByColumnId,
      toggleColumnVisibility,
    ]
  );

  const columnSizingOptions: TableColumnSizingOptions = useMemo(() => {
    const options: TableColumnSizingOptions = {};
    for (const column of visibleColumns) {
      options[column.columnId] = {
        minWidth: column.minWidth ?? 80,
        defaultWidth: defaultColumnWidth(column),
        idealWidth: defaultColumnWidth(column),
      };
    }
    return options;
  }, [visibleColumns]);

  const groupByRowId = useMemo(() => {
    const map = new Map<string, RowGroup<TItem>>();
    for (const group of groups) {
      for (const item of group.items) {
        map.set(getRowId(item), group);
      }
    }
    return map;
  }, [groups, getRowId]);

  const firstPagedRowId =
    pagedItems.length > 0 ? getRowId(pagedItems[0]) : undefined;

  const handleExport = useCallback(() => {
    const headerLabels = new Map(
      visibleColumns.map((column) => [
        column.columnId,
        valueToString(column.header as never) || column.columnId,
      ])
    );
    // Export the full filtered & sorted set, not just the current page.
    const fullSet = groupByColumnId
      ? flattenGroups(groups)
      : sortItems(
          filterItems(items, columns, filterModel, searchQuery),
          columns,
          sortModel
        );
    const csv = buildCsv(fullSet, visibleColumns, headerLabels);
    downloadCsv(exportFileName, csv);
  }, [
    visibleColumns,
    groupByColumnId,
    groups,
    items,
    columns,
    searchQuery,
    filterModel,
    sortModel,
    exportFileName,
  ]);

  const densityRowClass = styles[DENSITY_ROW_CLASS[density]];

  const renderGroupHeader = (group: RowGroup<TItem>) => {
    const aggregationEntries = visibleColumns
      .map((column) => {
        const result = group.aggregations.get(column.columnId);
        if (!result || result.value === undefined) {
          return undefined;
        }
        return `${String(column.header)}: ${formatAggregation(result)}`;
      })
      .filter((entry): entry is string => entry !== undefined);

    return (
      <div
        role="row"
        className={styles.groupHeaderRow}
        key={`group-${group.groupId}`}
      >
        <div role="gridcell" className={styles.groupHeaderCell}>
          <span>
            {group.label} ({group.items.length})
          </span>
          {aggregationEntries.length > 0 && (
            <span className={styles.groupAggregations}>
              {aggregationEntries.join("  •  ")}
            </span>
          )}
        </div>
      </div>
    );
  };

  const selectionProps =
    selectionMode === "none"
      ? {}
      : {
          selectionMode,
          selectedItems: selectedRowIds,
          onSelectionChange: (
            _event: unknown,
            data: { selectedItems: Set<string | number> }
          ) => {
            setSelectedRowIds(
              new Set([...data.selectedItems].map((id) => String(id)))
            );
          },
        };

  return (
    <div
      ref={ref}
      className={mergeClasses(
        advancedDataGridClassNames.root,
        styles.root,
        className
      )}
    >
      <AdvancedDataGridToolbar
        columns={visibleColumns}
        allColumns={columns}
        enableSearch={enableSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        enableFiltering={enableFiltering}
        filterModel={filterModel}
        setFilterModel={setFilterModel}
        activeFilterCount={activeFilterCount}
        enableColumnVisibility={enableColumnVisibility}
        hiddenColumnIds={hiddenColumnIds}
        toggleColumnVisibility={toggleColumnVisibility}
        enableGrouping={enableGrouping}
        groupByColumnId={groupByColumnId}
        setGroupByColumnId={setGroupByColumnId}
        enableDensity={enableDensity}
        density={density}
        setDensity={setDensity}
        enableExport={enableExport}
        onExport={handleExport}
      />

      <div
        className={mergeClasses(
          advancedDataGridClassNames.grid,
          styles.gridScroll
        )}
      >
        <DataGrid
          items={pagedItems}
          columns={tableColumns}
          getRowId={getRowId as (item: unknown) => string}
          resizableColumns
          columnSizingOptions={columnSizingOptions}
          focusMode="composite"
          className={styles.grid}
          aria-label={props["aria-label"] ?? "Advanced data grid"}
          {...selectionProps}
        >
          <DataGridHeader>
            <DataGridRow
              selectionCell={
                selectionMode === "none"
                  ? undefined
                  : { checkboxIndicator: { "aria-label": "Select all rows" } }
              }
            >
              {({ renderHeaderCell, columnId }) => (
                <DataGridHeaderCell
                  className={mergeClasses(
                    styles.headerCell,
                    pinClass(String(columnId))
                  )}
                  style={pinStyles.get(String(columnId))}
                >
                  {renderHeaderCell()}
                </DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<TItem>>
            {({ item, rowId }) => {
              const showGroupHeader =
                groupByColumnId !== undefined &&
                (firstRowIdOfGroup.has(String(rowId)) ||
                  String(rowId) === firstPagedRowId);
              const group = groupByRowId.get(String(rowId));

              return (
                <>
                  {showGroupHeader && group && renderGroupHeader(group)}
                  <DataGridRow<TItem>
                    key={rowId}
                    className={mergeClasses(
                      densityRowClass,
                      enableRowReordering && styles.draggableRow,
                      draggingRowId === String(rowId) && styles.rowDragging,
                      dragOverRowId === String(rowId) && styles.rowDragOver
                    )}
                    draggable={enableRowReordering}
                    onDragStart={
                      enableRowReordering
                        ? (event: DragEvent<HTMLDivElement>) => {
                            event.dataTransfer.setData(
                              "application/x-adg-row-id",
                              String(rowId)
                            );
                            event.dataTransfer.effectAllowed = "move";
                            setDraggingRowId(String(rowId));
                          }
                        : undefined
                    }
                    onDragOver={
                      enableRowReordering
                        ? (event: DragEvent<HTMLDivElement>) => {
                            event.preventDefault();
                            event.dataTransfer.dropEffect = "move";
                            setDragOverRowId(String(rowId));
                          }
                        : undefined
                    }
                    onDragLeave={
                      enableRowReordering
                        ? () => setDragOverRowId(null)
                        : undefined
                    }
                    onDrop={
                      enableRowReordering
                        ? (event: DragEvent<HTMLDivElement>) => {
                            event.preventDefault();
                            const sourceRowId = event.dataTransfer.getData(
                              "application/x-adg-row-id"
                            );
                            if (sourceRowId && sourceRowId !== String(rowId)) {
                              reorderRow(sourceRowId, String(rowId));
                            }
                            setDragOverRowId(null);
                            setDraggingRowId(null);
                          }
                        : undefined
                    }
                    onDragEnd={
                      enableRowReordering
                        ? () => {
                            setDragOverRowId(null);
                            setDraggingRowId(null);
                          }
                        : undefined
                    }
                    selectionCell={
                      selectionMode === "none"
                        ? undefined
                        : { checkboxIndicator: { "aria-label": "Select row" } }
                    }
                  >
                    {({ renderCell, columnId }) => (
                      <DataGridCell
                        className={pinClass(String(columnId))}
                        style={pinStyles.get(String(columnId))}
                      >
                        {renderCell(item)}
                      </DataGridCell>
                    )}
                  </DataGridRow>
                </>
              );
            }}
          </DataGridBody>
        </DataGrid>

        {pagedItems.length === 0 && (
          <div className={styles.emptyState}>
            {emptyState ?? "No rows to display"}
          </div>
        )}
      </div>

      <AdvancedDataGridFooter
        page={page}
        pageCount={pageCount}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        filteredRows={filteredRows}
        selectedCount={selectedRowIds.size}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    </div>
  );
}

export const AdvancedDataGrid = forwardRef(AdvancedDataGridInner) as <TItem>(
  props: AdvancedDataGridProps<TItem> & { ref?: React.Ref<HTMLDivElement> }
) => ReturnType<typeof AdvancedDataGridInner>;
