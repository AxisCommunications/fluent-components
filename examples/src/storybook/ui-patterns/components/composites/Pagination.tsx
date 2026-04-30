import {
  Button,
  Dropdown,
  Option,
  Skeleton,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { ChevronLeftRegular, ChevronRightRegular } from "@fluentui/react-icons";
import { forwardRef } from "react";

export interface PaginationProps {
  /** Boolean to render either skeleton or the actual pagination component */
  isLoading?: boolean;

  /** Current page number (1-indexed) */
  currentPage: number;

  /** Total number of pages */
  totalPages: number;

  /** Callback to go to next page */
  nextPage: () => void;

  /** Callback to go to previous page */
  prevPage: () => void;

  /** Callback to go to a specific page */
  goToPage: (newPage: number) => void;

  /** Whether the user can navigate backward */
  canGoBackward: boolean;

  /** Whether the user can navigate forward */
  canGoForward: boolean;

  /** Total amount of items */
  total: number;

  /** Row number of the first item on current page */
  firstPageRow: number;

  /** Row number of the last item on current page */
  lastPageRow: number;

  /** String shown at the bottom, e.g. "Showing rows X-Y of Z" */
  rowCounterMsg?: string;

  /** String shown on page select, e.g. "Page X of Y" */
  pageCounterMsg?: string;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
    backgroundColor: "transparent",
    borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderRadius: `0 0 ${tokens.borderRadiusSmall} ${tokens.borderRadiusSmall}`,
  },

  infoSection: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
  },

  controlSection: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },

  pageInfo: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  pageSelector: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },

  pageInput: {
    width: "fit-content",
    minWidth: "unset",
    flexShrink: 0,
  },

  buttonGroup: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
    alignItems: "center",
  },

  skeletonRow: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    width: "100%",
    alignItems: "center",
  },
});

/**
 * Pagination - Table footer pagination component compatible with AXIS design system.
 *
 * Recommended to use when a Table reaches 100 rows with ~50 rows per page.
 *
 * **Fluent Guidelines Applied:**
 * - Flex layout with info and control sections
 * - Icon buttons with semantic accessibility
 * - Token-driven spacing and colors
 * - Loading skeleton state
 * - Integrated with utility functions for row calculations
 *
 * @example
 * const [currentPage, setCurrentPage] = useState(1);
 * const pageSize = 50;
 * const total = 100;
 * const firstPageRow = getFirstRowOnPage(currentPage, pageSize);
 * const lastPageRow = getLastRowOnPage(currentPage, pageSize, total);
 *
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={Math.ceil(total / pageSize)}
 *   nextPage={() => setCurrentPage(c => c + 1)}
 *   prevPage={() => setCurrentPage(c => c - 1)}
 *   goToPage={setCurrentPage}
 *   canGoBackward={currentPage > 1}
 *   canGoForward={currentPage < Math.ceil(total / pageSize)}
 *   total={total}
 *   firstPageRow={firstPageRow}
 *   lastPageRow={lastPageRow}
 * />
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      isLoading = false,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      goToPage,
      canGoBackward,
      canGoForward,
      total,
      firstPageRow,
      lastPageRow,
      rowCounterMsg = "Showing rows X - Y of Z",
      pageCounterMsg = "Page X of Y",
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();

    // Interpolate row counter message
    const rowMsg = rowCounterMsg
      .replace("X", String(firstPageRow))
      .replace("Y", String(lastPageRow))
      .replace("Z", String(total));

    const handleOptionSelect = (_: unknown, data: { optionValue?: string }) => {
      const page = parseInt(data.optionValue ?? "", 10);
      if (!Number.isNaN(page) && page >= 1 && page <= totalPages) {
        goToPage(page);
      }
    };

    if (isLoading) {
      return (
        <div
          ref={ref}
          className={[styles.root, className].filter(Boolean).join(" ")}
          {...rest}
        >
          <div className={styles.skeletonRow}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {/* Left section: Row counter */}
        <div className={styles.infoSection}>
          <Text>{rowMsg}</Text>
        </div>

        {/* Right section: Controls */}
        <div className={styles.controlSection}>
          {/* Page selector dropdown */}
          <div className={styles.pageSelector}>
            <Dropdown
              className={styles.pageInput}
              value={pageLabel(currentPage, totalPages)}
              selectedOptions={[String(currentPage)]}
              onOptionSelect={handleOptionSelect}
              aria-label="Select page"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Option
                    key={page}
                    value={String(page)}
                  >{`Page ${page} of ${totalPages}`}</Option>
                )
              )}
            </Dropdown>
          </div>

          {/* Navigation buttons */}
          <div className={styles.buttonGroup}>
            <Button
              appearance="secondary"
              onClick={prevPage}
              disabled={!canGoBackward}
              icon={<ChevronLeftRegular />}
              aria-label="Previous page"
            />
            <Button
              appearance="secondary"
              onClick={nextPage}
              disabled={!canGoForward}
              icon={<ChevronRightRegular />}
              aria-label="Next page"
            />
          </div>
        </div>
      </div>
    );
  }
);

Pagination.displayName = "Pagination";

function pageLabel(p: number, total: number): string {
  return `Page ${p} of ${total}`;
}
