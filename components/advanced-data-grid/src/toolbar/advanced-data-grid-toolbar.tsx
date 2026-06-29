import {
  Badge,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SearchBox,
  Tag,
  TagGroup,
  Text,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  AddRegular,
  ArrowDownloadRegular,
  ColumnTripleRegular,
  DismissRegular,
  FilterRegular,
  GroupRegular,
  TextBulletListSquareRegular,
} from "@fluentui/react-icons";
import { useState } from "react";
import {
  AdvancedColumnDef,
  Density,
  FilterModelItem,
} from "../advanced-data-grid.types";
import { isValuelessOperator } from "../utils/filtering";
import { FilterForm } from "./filter-form";
import { OPERATOR_LABELS } from "./filter-operators";

const DENSITY_LABELS: Record<Density, string> = {
  comfortable: "Comfortable",
  medium: "Medium",
  compact: "Compact",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
  },
  topRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  endGroup: {
    display: "flex",
    alignItems: "center",
    marginInlineStart: "auto",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  search: {
    minWidth: "220px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  filterButton: {
    position: "relative",
  },
  badge: {
    marginInlineStart: tokens.spacingHorizontalXS,
  },
  chipsRow: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  chipsLabel: {
    color: tokens.colorNeutralForeground2,
    fontWeight: tokens.fontWeightSemibold,
  },
  filterPopover: {
    maxWidth: "none",
  },
});

export interface AdvancedDataGridToolbarProps<TItem> {
  columns: AdvancedColumnDef<TItem>[];
  allColumns: AdvancedColumnDef<TItem>[];

  enableSearch: boolean;
  searchQuery: string;
  setSearchQuery: (value: string) => void;

  enableFiltering: boolean;
  filterModel: FilterModelItem[];
  setFilterModel: (model: FilterModelItem[]) => void;
  activeFilterCount: number;

  enableColumnVisibility: boolean;
  hiddenColumnIds: Set<string>;
  toggleColumnVisibility: (columnId: string) => void;

  enableGrouping: boolean;
  groupByColumnId: string | undefined;
  setGroupByColumnId: (columnId: string | undefined) => void;

  enableDensity: boolean;
  density: Density;
  setDensity: (density: Density) => void;

  enableExport: boolean;
  onExport: () => void;
}

export function AdvancedDataGridToolbar<TItem>(
  props: AdvancedDataGridToolbarProps<TItem>
) {
  const styles = useStyles();
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [addingFilter, setAddingFilter] = useState(false);
  const {
    allColumns,
    enableSearch,
    searchQuery,
    setSearchQuery,
    enableFiltering,
    filterModel,
    setFilterModel,
    activeFilterCount,
    enableColumnVisibility,
    hiddenColumnIds,
    toggleColumnVisibility,
    enableGrouping,
    groupByColumnId,
    setGroupByColumnId,
    enableDensity,
    density,
    setDensity,
    enableExport,
    onExport,
  } = props;

  const hideableColumns = allColumns.filter((c) => c.hideable !== false);
  const groupableColumns = allColumns.filter((c) => c.groupable === true);
  const visibleColumnIds = allColumns
    .filter((c) => !hiddenColumnIds.has(c.columnId))
    .map((c) => c.columnId);

  const columnHeaderText = (columnId: string): string => {
    const column = allColumns.find((c) => c.columnId === columnId);
    return typeof column?.header === "string" ? column.header : columnId;
  };

  const filterValueLabel = (filter: FilterModelItem): string => {
    if (isValuelessOperator(filter.operator)) {
      return "";
    }
    const column = allColumns.find((c) => c.columnId === filter.columnId);
    const optionLabel = column?.selectOptions?.find(
      (option) => option.value === filter.value
    )?.label;
    return ` ${optionLabel ?? filter.value}`;
  };

  const filterLabel = (filter: FilterModelItem): string =>
    `${columnHeaderText(filter.columnId)} ${OPERATOR_LABELS[filter.operator]}${filterValueLabel(filter)}`;

  const isActiveFilter = (filter: FilterModelItem): boolean =>
    isValuelessOperator(filter.operator) || filter.value.trim() !== "";

  // Every saved filter, shown as a toggleable menu item.
  const savedFilters = filterModel.map((filter, index) => ({ filter, index }));

  // Enabled + active filters, shown as dismissible chips.
  const activeFilters = savedFilters.filter(
    ({ filter }) => filter.enabled !== false && isActiveFilter(filter)
  );

  const enabledFilterValues = savedFilters
    .filter(({ filter }) => filter.enabled !== false)
    .map(({ index }) => String(index));

  const setFilterEnabled = (index: number, enabled: boolean) => {
    setFilterModel(
      filterModel.map((filter, i) =>
        i === index ? { ...filter, enabled } : filter
      )
    );
  };

  const addFilter = (filter: FilterModelItem) => {
    setFilterModel([...filterModel, filter]);
    setAddingFilter(false);
    setFilterMenuOpen(false);
  };

  const openAddFilter = () => {
    setAddingFilter(true);
  };

  const handleFilterMenuOpenChange = (open: boolean) => {
    setFilterMenuOpen(open);
    if (!open) {
      setAddingFilter(false);
    }
  };

  const removeFilterAt = (index: number) => {
    setFilterModel(filterModel.filter((_, i) => i !== index));
  };

  const clearFilters = () => {
    setFilterModel([]);
  };

  return (
    <div className={styles.root}>
      <div className={styles.topRow}>
        <Toolbar className={styles.actions} aria-label="Data grid tools">
          {enableColumnVisibility && (
            <Menu checkedValues={{ columns: visibleColumnIds }}>
              <MenuTrigger disableButtonEnhancement>
                <ToolbarButton
                  icon={<ColumnTripleRegular />}
                  data-testid="adg-columns-trigger"
                >
                  Columns
                </ToolbarButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {hideableColumns.map((column) => (
                    <MenuItemCheckbox
                      key={column.columnId}
                      name="columns"
                      value={column.columnId}
                      onClick={() => toggleColumnVisibility(column.columnId)}
                    >
                      {column.header}
                    </MenuItemCheckbox>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          )}

          {enableGrouping && groupableColumns.length > 0 && (
            <Menu checkedValues={{ group: [groupByColumnId ?? "__none__"] }}>
              <MenuTrigger disableButtonEnhancement>
                <ToolbarButton
                  icon={<GroupRegular />}
                  data-testid="adg-group-trigger"
                >
                  Group
                </ToolbarButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItemRadio
                    name="group"
                    value="__none__"
                    onClick={() => setGroupByColumnId(undefined)}
                  >
                    No grouping
                  </MenuItemRadio>
                  <MenuDivider />
                  {groupableColumns.map((column) => (
                    <MenuItemRadio
                      key={column.columnId}
                      name="group"
                      value={column.columnId}
                      onClick={() => setGroupByColumnId(column.columnId)}
                    >
                      {column.header}
                    </MenuItemRadio>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          )}

          {enableDensity && (
            <Menu checkedValues={{ density: [density] }}>
              <MenuTrigger disableButtonEnhancement>
                <ToolbarButton
                  icon={<TextBulletListSquareRegular />}
                  data-testid="adg-density-trigger"
                >
                  Density
                </ToolbarButton>
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  {(Object.keys(DENSITY_LABELS) as Density[]).map((value) => (
                    <MenuItemRadio
                      key={value}
                      name="density"
                      value={value}
                      onClick={() => setDensity(value)}
                    >
                      {DENSITY_LABELS[value]}
                    </MenuItemRadio>
                  ))}
                </MenuList>
              </MenuPopover>
            </Menu>
          )}

          {enableExport && (
            <>
              <ToolbarDivider />
              <ToolbarButton
                icon={<ArrowDownloadRegular />}
                onClick={onExport}
                data-testid="adg-export"
              >
                Export
              </ToolbarButton>
            </>
          )}
        </Toolbar>

        <div className={styles.endGroup}>
          {enableFiltering && (
            <Menu
              open={filterMenuOpen}
              onOpenChange={(_, data) => handleFilterMenuOpenChange(data.open)}
              checkedValues={{ filters: enabledFilterValues }}
              positioning={{ position: "below", align: "end" }}
            >
              <MenuTrigger disableButtonEnhancement>
                <ToolbarButton
                  icon={<FilterRegular />}
                  aria-label="Filters"
                  data-testid="adg-filter-trigger"
                >
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge
                      className={styles.badge}
                      size="small"
                      appearance="filled"
                      color="brand"
                    >
                      {activeFilterCount}
                    </Badge>
                  )}
                </ToolbarButton>
              </MenuTrigger>
              <MenuPopover className={styles.filterPopover}>
                {addingFilter ? (
                  <FilterForm
                    columns={allColumns}
                    onCreate={addFilter}
                    onCancel={() => setAddingFilter(false)}
                  />
                ) : (
                  <MenuList>
                    {savedFilters.map(({ filter, index }) => (
                      <MenuItemCheckbox
                        key={index}
                        name="filters"
                        value={String(index)}
                        onClick={() =>
                          setFilterEnabled(index, filter.enabled === false)
                        }
                      >
                        {filterLabel(filter)}
                      </MenuItemCheckbox>
                    ))}
                    {savedFilters.length > 0 && <MenuDivider />}
                    <MenuItem
                      icon={<AddRegular />}
                      persistOnClick
                      onClick={openAddFilter}
                      data-testid="adg-add-filter"
                    >
                      Add filter
                    </MenuItem>
                  </MenuList>
                )}
              </MenuPopover>
            </Menu>
          )}

          {enableSearch && (
            <SearchBox
              className={styles.search}
              placeholder="Search"
              value={searchQuery}
              onChange={(_, data) => setSearchQuery(data.value)}
              aria-label="Search rows"
              data-testid="adg-search"
            />
          )}
        </div>
      </div>

      {enableFiltering && activeFilters.length > 0 && (
        <div className={styles.chipsRow} data-testid="adg-active-filters">
          <Text size={200} className={styles.chipsLabel}>
            Filters
          </Text>
          <TagGroup
            aria-label="Active filters"
            onDismiss={(_, data) => removeFilterAt(Number(data.value))}
          >
            {activeFilters.map(({ filter, index }) => (
              <Tag
                key={index}
                value={String(index)}
                size="small"
                dismissible
                dismissIcon={{ "aria-label": "Remove filter" }}
              >
                {filterLabel(filter)}
              </Tag>
            ))}
          </TagGroup>
          {activeFilters.length > 1 && (
            <Button
              appearance="subtle"
              size="small"
              icon={<DismissRegular />}
              onClick={clearFilters}
            >
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
