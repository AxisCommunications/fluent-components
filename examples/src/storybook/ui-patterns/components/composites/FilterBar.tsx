import {
  Button,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export interface FilterBarProps {
  /** Array of active filter chips: { label, onDismiss } */
  filters?: Array<{ label: string; onDismiss: () => void }>;

  /** Sort options for dropdown: { label, value, isSelected? } */
  sortOptions?: Array<{ label: string; value: string; isSelected?: boolean }>;

  /** Callback when sort option selected */
  onSortChange?: (value: string) => void;

  /** Callback for search input change */
  onSearchChange?: (value: string) => void;

  /** Placeholder for search input */
  searchPlaceholder?: string;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusSmall,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
  },

  startSection: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
  },

  filtersSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalS,
    alignItems: "center",
  },

  endSection: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
    marginLeft: "auto",
  },

  searchInput: {
    minWidth: tokens.spacingHorizontalXXXL,
  },
});

/**
 * FilterBar - Horizontal filter control with chips, sort dropdown, and search.
 *
 * **Fluent Guidelines Applied:**
 * - Flex layout for filter chips and controls
 * - Tag components for dismissible filter chips
 * - Menu dropdown for sort options
 * - Semantic structure with start/end sections
 * - Token-based spacing and colors
 *
 * @example
 * <FilterBar
 *   filters={[
 *     { label: 'Status: Active', onDismiss: () => removeFilter('status') },
 *     { label: 'Owner: Me', onDismiss: () => removeFilter('owner') }
 *   ]}
 *   sortOptions={[
 *     { label: 'Newest', value: 'newest', isSelected: true },
 *     { label: 'Oldest', value: 'oldest' },
 *     { label: 'A-Z', value: 'az' }
 *   ]}
 *   onSortChange={handleSort}
 *   onSearchChange={handleSearch}
 *   searchPlaceholder="Find items..."
 * />
 */
export const FilterBar = forwardRef<HTMLDivElement, FilterBarProps>(
  (
    {
      filters = [],
      sortOptions = [],
      onSortChange,
      onSearchChange,
      searchPlaceholder = "Search...",
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();

    const selectedSort =
      sortOptions.find(
        (opt: { label: string; value: string; isSelected?: boolean }) =>
          opt.isSelected
      )?.label || "Sort";

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {/* Start section: sort + filters */}
        <div className={styles.startSection}>
          {sortOptions.length > 0 && (
            <Menu>
              <MenuTrigger disableButtonEnhancement>
                <Button appearance="secondary">{selectedSort}</Button>
              </MenuTrigger>

              <MenuPopover>
                <MenuList>
                  {sortOptions.map(
                    (option: {
                      label: string;
                      value: string;
                      isSelected?: boolean;
                    }) => (
                      <MenuItem
                        key={option.value}
                        onClick={() => onSortChange?.(option.value)}
                      >
                        {option.label}
                      </MenuItem>
                    )
                  )}
                </MenuList>
              </MenuPopover>
            </Menu>
          )}

          {/* Filter chips */}
          {filters.length > 0 && (
            <div className={styles.filtersSection}>
              {filters.map(
                (
                  filter: { label: string; onDismiss: () => void },
                  idx: number
                ) => (
                  <Button
                    key={idx}
                    appearance="outline"
                    size="small"
                    onClick={filter.onDismiss}
                  >
                    {filter.label} ✕
                  </Button>
                )
              )}
            </div>
          )}
        </div>

        {/* End section: search */}
        <div className={styles.endSection}>
          <Input
            className={styles.searchInput}
            placeholder={searchPlaceholder}
            onChange={(_, data) => onSearchChange?.(data.value)}
          />
        </div>
      </div>
    );
  }
);

FilterBar.displayName = "FilterBar";
