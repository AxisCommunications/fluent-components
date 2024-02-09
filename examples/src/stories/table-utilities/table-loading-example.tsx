import { usePageController } from "@axiscommunications/fluent-hooks";
import {
  useColumnStyles,
  useRowStyles,
  useTableStyles,
} from "@axiscommunications/fluent-styles";
import {
  Button,
  makeStyles,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  shorthands,
  SkeletonItem,
  TableSelectionCell,
  tokens,
} from "@fluentui/react-components";
import {
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import {
  bundleIcon,
  ChevronLeft16Filled,
  ChevronLeft16Regular,
  ChevronRight16Filled,
  ChevronRight16Regular,
} from "@fluentui/react-icons";
import React, { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/page-header";
import { useAppContext } from "../../context/ApplicationStateProvider";
import { useLayoutStyles, useScrollPageStyle } from "../../styles/page";

const users = [
  { user: "Robin", role: "Admin", luckyNumber: 1337 },
  { user: "Batman", role: "Hero", luckyNumber: 7 },
  { user: "Alfred", role: "Butler", luckyNumber: 9 },
  { user: "Joker", role: "Villain", luckyNumber: 4 },
  { user: "Harley Quinn", role: "Villain", luckyNumber: 5 },
  { user: "Bane", role: "Villain", luckyNumber: 6 },
  { user: "Poison Ivy", role: "Villain", luckyNumber: 7 },
  { user: "Vicky Vale", role: "Reporter", luckyNumber: 22 },
  { user: "Jim Gordon", role: "Commissioner", luckyNumber: 13 },
];

const pageSizes = [5, 7, 15];
const ChevronLeft = bundleIcon(ChevronLeft16Filled, ChevronLeft16Regular);
const ChevronRight = bundleIcon(ChevronRight16Filled, ChevronRight16Regular);

export const TableUtilitiesPage = () => {
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(pageSizes[0]);
  const [total /*, setTotal*/] = useState(users.length);

  const pageController = usePageController({ total, skip, take, setSkip });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      const simulatedLoadingDuration = 700;
      const id = setTimeout(() => setLoading(false), simulatedLoadingDuration);
      return () => clearTimeout(id);
    }
  }, [loading]);

  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Table utilities" />
      <div className={mergeClasses(layoutStyles.content, scrollPageStyle)}>
        <TableExample loading={loading} skip={skip} take={take} />
        <TableFooter
          {...pageController}
          total={total}
          take={take}
          setTake={setTake}
        />
        <div>
          <Button onClick={() => setLoading(true)}>Reload data</Button>
        </div>
      </div>
    </div>
  );
};

function TableExample(
  { loading, skip, take }: { loading: boolean; skip: number; take: number }
) {
  const tableStyles = useTableStyles();
  const rowStyles = useRowStyles();
  const columnStyles = useColumnStyles();

  const page = users.slice(skip, skip + take);

  return (
    <Table noNativeElements size="medium" className={tableStyles.table}>
      <TableHeader className={tableStyles.header}>
        <TableRow>
          <TableSelectionCell hidden />
          <TableHeaderCell className={columnStyles.normal}>
            User
          </TableHeaderCell>
          <TableHeaderCell className={columnStyles.wide}>
            Role
          </TableHeaderCell>
          <TableHeaderCell className={columnStyles.narrow}>
            Lucky number
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      {loading
        ? (
          <SkeletonTableBody
            rows={page.length}
            widths={[undefined, "normal", "wide", "narrow"]}
          />
        )
        : (
          <TableBody>
            {page.map((rowContent, index) => (
              <TableRow className={rowStyles.normal} key={index}>
                <TableSelectionCell />
                <TableCell className={columnStyles.normal}>
                  <TableCellLayout>{rowContent.user}</TableCellLayout>
                </TableCell>
                <TableCell className={columnStyles.wide}>
                  <TableCellLayout>{rowContent.role}</TableCellLayout>
                </TableCell>
                <TableCell className={columnStyles.narrow}>
                  <TableCellLayout>{rowContent.luckyNumber}</TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
    </Table>
  );
}

type TableFooterProps =
  & Pick<
    ReturnType<typeof usePageController>,
    "currentPage" | "totalPages" | "nextPage" | "prevPage" | "goToPage"
  >
  & { total: number; take: number; setTake: (take: number) => void };

const useTableFooterStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: tokens.spacingVerticalM,
  },
  rowsSelectors: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  pagesSelectors: { display: "flex" },
});

function TableFooter({
  total,
  currentPage,
  totalPages,
  take,
  setTake,
  nextPage,
  prevPage,
  goToPage,
}: TableFooterProps) {
  const dir = useAppContext((context) => context.dir);
  const styles = useTableFooterStyles();
  const from = currentPage * take + 1;
  const to = Math.min(from + take - 1, total);

  return (
    <div className={styles.root}>
      <div className={styles.rowsSelectors}>
        Showing rows {from}-{to} of {total}
        <Menu positioning={"after"}>
          <MenuTrigger>
            <MenuButton data-testid="page-size-select-button">
              Rows per page: {take}
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {pageSizes.map((size) => {
                return (
                  <MenuItem
                    key={size}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => {
                      setTake(size);
                    }}
                  >
                    {size}
                  </MenuItem>
                );
              })}
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
      <div>
        <Menu positioning={"after"}>
          <MenuTrigger>
            <MenuButton data-testid="page-select-button">
              Page: {currentPage + 1} of {totalPages}
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              {Array(totalPages)
                .fill(0)
                .map((_, index) => {
                  return (
                    <MenuItem
                      key={index}
                      // eslint-disable-next-line react/jsx-no-bind
                      onClick={() => {
                        goToPage(index);
                      }}
                    >
                      {index + 1}
                    </MenuItem>
                  );
                })}
            </MenuList>
          </MenuPopover>
        </Menu>
        {dir === "ltr"
          ? (
            <>
              <Button
                appearance="transparent"
                icon={<ChevronLeft onClick={prevPage} />}
              />
              <Button
                appearance="transparent"
                icon={<ChevronRight onClick={nextPage} />}
              />
            </>
          )
          : (
            <>
              <Button
                appearance="transparent"
                icon={<ChevronRight onClick={prevPage} />}
              />
              <Button
                appearance="transparent"
                icon={<ChevronLeft onClick={nextPage} />}
              />
            </>
          )}
      </div>
    </div>
  );
}

/**
 * Skeleton TableBody
 * Renders a skeleton table matching the specified column widths.
 * The number of rows will be used if set and non-zero, otherwise randomized
 * for the duration of the component or until data changes.
 *
 * Switch out the real TableBody for this while query data is `loading` or `stale`,
 * and set `rows` from the query's stale data. This makes the number of rows feel
 * consistent.
 */

const useSkeletonTableBodyStyles = makeStyles({
  fillTableCell: {
    width: "100%",
  },
  nonInteractive: {
    pointerEvents: "none",
  },
  // Simulates TableSelectionCell which is 44px with a centered 32px Checkbox.
  // The inline padding is (44 - skeleton size) / 2
  // (TableLayoutCell has 8px inline padding by default.)
  fakeSelectionCell: {
    width: "44px",
    maxWidth: "44px",
    boxSizing: "border-box",
    ...shorthands.paddingInline("12px"),
  },
});

// `undefined` doesn't set a width and can be used in place of TableSelectionCell
type ColumnWidth = undefined | keyof ReturnType<typeof useColumnStyles>;

const minRandomRows = 3;
const maxRandomRows = 10;

interface SkeletonTableBodyProps {
  rows?: number;
  rowType?: keyof ReturnType<typeof useRowStyles>;
  widths: Array<ColumnWidth>;
}

// <SkeletonItem> should be wrapped by <Skeleton> according to docs,
// however this is only necessary if overriding `animation` or `appearance`.
// <Skeleton> seems to work at any level above <SkeletonItem> in the hierachy,
// so it could perhaps go outside the whole Table to avoid interfering with the
// layout, although this is less of a problem when using `noNativeElements`.
export function SkeletonTableBody(
  { rows, rowType = "normal", widths }: SkeletonTableBodyProps
) {
  const rowCount = useMemo(
    () =>
      rows
      || (minRandomRows
        + Math.floor((maxRandomRows - minRandomRows + 1) * Math.random())),
    [rows]
  );
  const rowKeys = Array.from({ length: rowCount }, (_, k) => k);

  const styles = useSkeletonTableBodyStyles();
  const rowStyles = useRowStyles();
  const rowStyle = mergeClasses(rowStyles[rowType], styles.nonInteractive);

  const columnStyles = useColumnStyles();
  return (
    <TableBody>
      {rowKeys.map((rowKey) => (
        <TableRow className={rowStyle} key={rowKey}>
          {widths.map((w, cellKey) => {
            const hasDefinedWidth = !!(w && columnStyles[w]);
            if (hasDefinedWidth) {
              return (
                <TableCell className={columnStyles[w]} key={cellKey}>
                  <SkeletonItem size={20} />
                </TableCell>
              );
            }
            return (
              <div className={styles.fakeSelectionCell} key={cellKey}>
                <SkeletonItem size={20} />
              </div>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}
