import {
  Button,
  Input,
  Menu,
  MenuItemCheckbox,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  Toolbar,
  ToolbarButton,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { FilterRegular, SearchRegular } from "@fluentui/react-icons";
import { type ReactElement, forwardRef, useMemo, useState } from "react";

export interface FilterToolbarAction {
  /** Stable identifier for action item. */
  id: string;

  /** Action label shown in the toolbar button. */
  label: string;

  /** Optional icon rendered before label. */
  icon?: ReactElement | null;

  /** Callback fired when action is clicked. */
  onClick?: () => void;

  /** Optional disabled state. */
  disabled?: boolean;

  /** Optional Fluent appearance for the toolbar button. */
  appearance?: "primary" | "secondary" | "subtle" | "transparent";
}

export interface FilterToolbarFilter {
  /** Stable identifier for menu filter option. */
  id: string;

  /** Filter label used in menu and selected chip. */
  label: string;

  /** Optional disabled state. */
  disabled?: boolean;
}

export interface FilterToolbarProps {
  /** Filter options shown in the filter menu button. */
  filters?: FilterToolbarFilter[];

  /** Controlled selected filter IDs. */
  selectedFilterIds?: string[];

  /** Uncontrolled default selected filter IDs. */
  defaultSelectedFilterIds?: string[];

  /** Callback fired whenever selected filter IDs change. */
  onSelectedFilterIdsChange?: (selectedIds: string[]) => void;

  /** Optional custom label for the filter menu button. */
  filterButtonLabel?: string;

  /** Optional icon for the filter menu button. */
  filterButtonIcon?: ReactElement | null;

  /** Left-side toolbar actions. */
  primaryActions?: FilterToolbarAction[];

  /** Placeholder text for the search input. */
  searchPlaceholder?: string;

  /** Optional controlled value for the search input. */
  searchValue?: string;

  /** Callback fired on search input changes. */
  onSearchChange?: (value: string) => void;

  /** Right-side toolbar actions. */
  secondaryActions?: FilterToolbarAction[];

  /** Toolbar accessible label. */
  ariaLabel?: string;

  /** Optional className hook. */
  className?: string;

  /** Toolbar row background style variant. */
  toolbarBackground?: "default" | "transparent";
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    width: "100%",
    minWidth: 0,
  },

  toolbarRow: {
    display: "flex",
    alignItems: "center",
    borderRadius: tokens.borderRadiusMedium,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalXS}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },

  toolbarRowTransparent: {
    backgroundColor: "transparent",
  },

  toolbar: {
    width: "100%",
    minWidth: 0,
  },

  startActions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },

  endActions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    marginLeft: "auto",
  },

  searchInput: {
    minWidth: "220px",
  },

  labelsRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minHeight: tokens.lineHeightBase200,
    flexWrap: "wrap",
    paddingRight: tokens.spacingHorizontalXS,
    paddingLeft: `calc(${tokens.spacingHorizontalXS} + ${tokens.spacingHorizontalM})`,
  },

  labelsTitle: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightSemibold,
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXS,
    alignItems: "center",
  },

  chip: {
    borderRadius: tokens.borderRadiusCircular,
  },

  clearButton: {
    marginLeft: tokens.spacingHorizontalXS,
  },
});

/**
 * FilterToolbar - Fluent Toolbar composite with selected filter labels.
 *
 * Use this when you need top-level filter actions plus a visible summary of active filters,
 * matching the "selected labels" pattern from design tooling.
 */
export const FilterToolbar = forwardRef<HTMLDivElement, FilterToolbarProps>(
  (
    {
      filters = [],
      selectedFilterIds,
      defaultSelectedFilterIds = [],
      onSelectedFilterIdsChange,
      filterButtonLabel = "Filters",
      filterButtonIcon = <FilterRegular />,
      primaryActions = [],
      searchPlaceholder = "Search",
      searchValue,
      onSearchChange,
      secondaryActions = [],
      ariaLabel = "Filter toolbar",
      className,
      toolbarBackground = "default",
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const isControlled = selectedFilterIds !== undefined;
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [internalSelectedIds, setInternalSelectedIds] = useState<string[]>(
      defaultSelectedFilterIds
    );

    const activeSelectedIds = isControlled
      ? selectedFilterIds
      : internalSelectedIds;

    const selectedItems = useMemo(() => {
      const selectedSet = new Set(activeSelectedIds);
      return filters.filter((item) => selectedSet.has(item.id));
    }, [activeSelectedIds, filters]);

    const updateSelection = (nextSelected: string[]) => {
      if (!isControlled) {
        setInternalSelectedIds(nextSelected);
      }
      onSelectedFilterIdsChange?.(nextSelected);
    };

    const dismissSelected = (id: string) => {
      updateSelection(
        activeSelectedIds.filter((currentId) => currentId !== id)
      );
    };

    const clearAll = () => {
      updateSelection([]);
    };

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <div
          className={[
            styles.toolbarRow,
            toolbarBackground === "transparent"
              ? styles.toolbarRowTransparent
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Toolbar aria-label={ariaLabel} className={styles.toolbar}>
            <div className={styles.startActions}>
              {primaryActions.map((action) => (
                <Button
                  key={action.id}
                  icon={action.icon}
                  appearance={action.appearance ?? "secondary"}
                  disabled={action.disabled}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}
            </div>

            <div className={styles.endActions}>
              <Menu
                open={isFilterMenuOpen}
                checkedValues={{ filters: activeSelectedIds }}
                onOpenChange={(_event, data) => setIsFilterMenuOpen(data.open)}
                onCheckedValueChange={(_event, data) =>
                  updateSelection(data.checkedItems)
                }
              >
                <MenuTrigger disableButtonEnhancement>
                  <ToolbarButton icon={filterButtonIcon}>
                    {filterButtonLabel}
                  </ToolbarButton>
                </MenuTrigger>
                <MenuPopover>
                  {isFilterMenuOpen ? (
                    <MenuList>
                      {filters.map((item) => (
                        <MenuItemCheckbox
                          key={item.id}
                          name="filters"
                          value={item.id}
                          disabled={item.disabled}
                        >
                          {item.label}
                        </MenuItemCheckbox>
                      ))}
                    </MenuList>
                  ) : (
                    <div />
                  )}
                </MenuPopover>
              </Menu>

              <Input
                className={styles.searchInput}
                type="search"
                placeholder={searchPlaceholder}
                value={searchValue}
                contentBefore={<SearchRegular />}
                onChange={(_event, data) => onSearchChange?.(data.value)}
              />

              {secondaryActions.map((action) => (
                <Button
                  key={action.id}
                  icon={action.icon}
                  appearance={action.appearance ?? "secondary"}
                  disabled={action.disabled}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </Toolbar>
        </div>

        {selectedItems.length > 0 && (
          <div className={styles.labelsRow}>
            <Text className={styles.labelsTitle}>Selected</Text>
            <div className={styles.chips}>
              {selectedItems.map((item) => (
                <Button
                  key={item.id}
                  className={styles.chip}
                  appearance="secondary"
                  size="small"
                  onClick={() => dismissSelected(item.id)}
                >
                  {`${item.label} x`}
                </Button>
              ))}
            </div>

            {selectedItems.length > 1 && (
              <Button
                className={styles.clearButton}
                appearance="subtle"
                size="small"
                onClick={clearAll}
              >
                Clear all
              </Button>
            )}
          </div>
        )}
      </div>
    );
  }
);

FilterToolbar.displayName = "FilterToolbar";
