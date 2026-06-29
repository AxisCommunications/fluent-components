import {
  Button,
  Caption1,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SpinButton,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ChevronLeftRegular, ChevronRightRegular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    ...shorthands.gap(tokens.spacingHorizontalL),
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalL),
    borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
  },
  infoSection: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  controlSection: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  pageSelector: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  pageInput: {
    width: "64px",
    minWidth: "unset",
    flexShrink: 0,
  },
  pageInfo: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  muted: {
    color: tokens.colorNeutralForeground2,
  },
});

export interface AdvancedDataGridFooterProps {
  page: number;
  pageCount: number;
  pageSize: number;
  pageSizeOptions: number[];
  filteredRows: number;
  selectedCount: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

export function AdvancedDataGridFooter({
  page,
  pageCount,
  pageSize,
  pageSizeOptions,
  filteredRows,
  selectedCount,
  setPage,
  setPageSize,
}: AdvancedDataGridFooterProps) {
  const styles = useStyles();

  const currentPage = page + 1;
  const totalPages = Math.max(pageCount, 1);
  const from = filteredRows === 0 ? 0 : page * pageSize + 1;
  const to = Math.min(from + pageSize - 1, filteredRows);
  const canGoBackward = page > 0;
  const canGoForward = page < pageCount - 1;

  // Local input value so the user can type freely before committing.
  const [pageInputValue, setPageInputValue] = useState(String(currentPage));

  useEffect(() => {
    setPageInputValue(String(currentPage));
  }, [currentPage]);

  const commitPage = (nextPage: number) => {
    if (nextPage >= 1 && nextPage <= totalPages) {
      if (nextPage !== currentPage) {
        setPage(nextPage - 1);
      }
    } else {
      setPageInputValue(String(currentPage));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.infoSection}>
        <Menu positioning="above-start">
          <MenuTrigger disableButtonEnhancement>
            <MenuButton
              size="small"
              appearance="subtle"
              data-testid="adg-page-size"
            >
              Rows per page: {pageSize}
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {pageSizeOptions.map((size) => (
                <MenuItem key={size} onClick={() => setPageSize(size)}>
                  {size}
                </MenuItem>
              ))}
            </MenuList>
          </MenuPopover>
        </Menu>
        <Caption1 className={styles.muted}>
          Showing rows {from}-{to} of {filteredRows}
        </Caption1>
        {selectedCount > 0 && (
          <Caption1 className={styles.muted}>{selectedCount} selected</Caption1>
        )}
      </div>

      <div className={styles.controlSection}>
        <div className={styles.pageSelector}>
          <Text className={styles.pageInfo}>Page</Text>
          <SpinButton
            className={styles.pageInput}
            min={1}
            max={totalPages}
            value={currentPage}
            displayValue={pageInputValue}
            onChange={(_, data) => {
              if (typeof data.value === "number") {
                setPageInputValue(String(data.value));
                commitPage(data.value);
              } else if (data.displayValue !== undefined) {
                const parsed = Number.parseInt(data.displayValue, 10);
                if (!Number.isNaN(parsed)) {
                  setPageInputValue(String(parsed));
                  commitPage(parsed);
                } else {
                  setPageInputValue(String(currentPage));
                }
              }
            }}
            aria-label="Current page"
          />
          <Text className={styles.pageInfo}>of {totalPages}</Text>
        </div>

        <div className={styles.buttonGroup}>
          <Button
            appearance="secondary"
            icon={<ChevronLeftRegular />}
            aria-label="Previous page"
            disabled={!canGoBackward}
            onClick={() => setPage(page - 1)}
          />
          <Button
            appearance="secondary"
            icon={<ChevronRightRegular />}
            aria-label="Next page"
            disabled={!canGoForward}
            onClick={() => setPage(page + 1)}
          />
        </div>
      </div>
    </div>
  );
}
