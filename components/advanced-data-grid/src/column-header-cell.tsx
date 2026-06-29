import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowLeftRegular,
  ArrowRightRegular,
  ArrowSortDownRegular,
  ArrowSortRegular,
  ArrowSortUpRegular,
  EyeOffRegular,
  GroupRegular,
  MoreVerticalRegular,
  PinRegular,
} from "@fluentui/react-icons";
import { DragEvent, useState } from "react";
import {
  AdvancedColumnDef,
  FilterModelItem,
  FilterOperator,
  PinSide,
  SortModel,
} from "./advanced-data-grid.types";
import { ColumnFilter } from "./column-filter";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  draggable: {
    cursor: "grab",
  },
  dragging: {
    opacity: 0.4,
  },
  dragOver: {
    boxShadow: `inset 2px 0 0 0 ${tokens.colorBrandStroke1}`,
  },
  label: {
    display: "inline-flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXXS),
    cursor: "pointer",
    userSelect: "none",
    minWidth: 0,
  },
  actions: {
    display: "inline-flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXXS),
  },
  labelText: {
    ...shorthands.overflow("hidden"),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  sortIcon: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
  sortIconActive: {
    color: tokens.colorNeutralForeground1,
  },
});

export interface ColumnHeaderCellProps<TItem> {
  column: AdvancedColumnDef<TItem>;
  sortModel: SortModel | undefined;
  pinSide: PinSide;
  columnFilter: FilterModelItem | undefined;

  enableSorting: boolean;
  enableFiltering: boolean;
  enablePinning: boolean;
  enableReordering: boolean;
  enableGrouping: boolean;
  enableColumnVisibility: boolean;

  onToggleSort: (columnId: string) => void;
  onSetColumnFilter: (
    columnId: string,
    operator: FilterOperator,
    value: string
  ) => void;
  onClearColumnFilter: (columnId: string) => void;
  onSetPin: (columnId: string, side: PinSide) => void;
  onMove: (columnId: string, direction: "left" | "right") => void;
  onReorder: (sourceColumnId: string, targetColumnId: string) => void;
  onGroupBy: (columnId: string | undefined) => void;
  onHide: (columnId: string) => void;
}

export function ColumnHeaderCell<TItem>(props: ColumnHeaderCellProps<TItem>) {
  const styles = useStyles();
  const {
    column,
    sortModel,
    pinSide,
    columnFilter,
    enableSorting,
    enableFiltering,
    enablePinning,
    enableReordering,
    enableGrouping,
    enableColumnVisibility,
    onToggleSort,
    onSetColumnFilter,
    onClearColumnFilter,
    onSetPin,
    onMove,
    onReorder,
    onGroupBy,
    onHide,
  } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("application/x-adg-column-id", column.columnId);
    event.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const sourceColumnId = event.dataTransfer.getData(
      "application/x-adg-column-id"
    );
    if (sourceColumnId && sourceColumnId !== column.columnId) {
      onReorder(sourceColumnId, column.columnId);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setIsDragOver(false);
  };

  const sortable = enableSorting && column.sortable !== false;
  const isSorted = sortModel?.columnId === column.columnId;
  const direction = isSorted ? sortModel?.direction : undefined;

  const SortIcon =
    direction === "ascending"
      ? ArrowSortUpRegular
      : direction === "descending"
        ? ArrowSortDownRegular
        : ArrowSortRegular;

  const hasMenu =
    enablePinning ||
    enableReordering ||
    (enableGrouping && column.groupable) ||
    (enableColumnVisibility && column.hideable !== false);

  return (
    <div
      className={mergeClasses(
        styles.root,
        enableReordering && styles.draggable,
        isDragging && styles.dragging,
        isDragOver && styles.dragOver
      )}
      draggable={enableReordering}
      onDragStart={enableReordering ? handleDragStart : undefined}
      onDragOver={enableReordering ? handleDragOver : undefined}
      onDragLeave={enableReordering ? handleDragLeave : undefined}
      onDrop={enableReordering ? handleDrop : undefined}
      onDragEnd={enableReordering ? handleDragEnd : undefined}
    >
      <span
        className={styles.label}
        role={sortable ? "button" : undefined}
        tabIndex={sortable ? 0 : undefined}
        onClick={sortable ? () => onToggleSort(column.columnId) : undefined}
        onKeyDown={
          sortable
            ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onToggleSort(column.columnId);
                }
              }
            : undefined
        }
      >
        <span className={styles.labelText}>{column.header}</span>
        {sortable && (
          <SortIcon
            className={mergeClasses(
              styles.sortIcon,
              isSorted && styles.sortIconActive
            )}
          />
        )}
      </span>

      <span className={styles.actions}>
        {enableFiltering && column.filterable !== false && (
          <ColumnFilter
            column={column}
            filter={columnFilter}
            onApply={(operator, value) =>
              onSetColumnFilter(column.columnId, operator, value)
            }
            onClear={() => onClearColumnFilter(column.columnId)}
          />
        )}

        {hasMenu && (
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <span
                role="button"
                tabIndex={0}
                aria-label={`Column options for ${String(column.header)}`}
                style={{ display: "inline-flex", cursor: "pointer" }}
              >
                <MoreVerticalRegular />
              </span>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {enablePinning && column.pinnable !== false && (
                  <>
                    <MenuItem
                      icon={<PinRegular />}
                      disabled={pinSide === "left"}
                      onClick={() => onSetPin(column.columnId, "left")}
                    >
                      Pin left
                    </MenuItem>
                    <MenuItem
                      icon={<PinRegular />}
                      disabled={pinSide === "right"}
                      onClick={() => onSetPin(column.columnId, "right")}
                    >
                      Pin right
                    </MenuItem>
                    {pinSide && (
                      <MenuItem
                        onClick={() => onSetPin(column.columnId, undefined)}
                      >
                        Unpin
                      </MenuItem>
                    )}
                  </>
                )}
                {enableReordering && (
                  <>
                    {enablePinning && column.pinnable !== false && (
                      <MenuDivider />
                    )}
                    <MenuItem
                      icon={<ArrowLeftRegular />}
                      onClick={() => onMove(column.columnId, "left")}
                    >
                      Move left
                    </MenuItem>
                    <MenuItem
                      icon={<ArrowRightRegular />}
                      onClick={() => onMove(column.columnId, "right")}
                    >
                      Move right
                    </MenuItem>
                  </>
                )}
                {enableGrouping && column.groupable && (
                  <>
                    <MenuDivider />
                    <MenuItem
                      icon={<GroupRegular />}
                      onClick={() => onGroupBy(column.columnId)}
                    >
                      Group by this column
                    </MenuItem>
                  </>
                )}
                {enableColumnVisibility && column.hideable !== false && (
                  <>
                    <MenuDivider />
                    <MenuItem
                      icon={<EyeOffRegular />}
                      onClick={() => onHide(column.columnId)}
                    >
                      Hide column
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </MenuPopover>
          </Menu>
        )}
      </span>
    </div>
  );
}
