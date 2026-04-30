import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { type ReactNode, forwardRef } from "react";

/**
 * DataTable.Root - Container for the table structure.
 */
export interface DataTableRootProps {
  children: ReactNode;
  className?: string;
}

/**
 * DataTable.Header - Header section of the table with column headers.
 */
export interface DataTableHeaderProps {
  /** Array of column headers */
  columns: Array<{ label: string; width?: string }>;

  className?: string;
}

/**
 * DataTable.Row - Individual data row containing cells.
 */
export interface DataTableRowProps {
  /** Array of cell values */
  cells: Array<ReactNode>;

  /** Optional row action (clicked when row is interacted) */
  onRowAction?: () => void;

  className?: string;
}

/**
 * DataTable.Cell - Individual cell within a row.
 */
export interface DataTableCellProps {
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderCollapse: "collapse",
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusSmall,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
  },

  header: {
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `${tokens.strokeWidthThick} solid ${tokens.colorNeutralStroke1}`,
  },

  headerCell: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForeground1,
    textAlign: "left",
    borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,

    "&:last-child": {
      borderRight: "none",
    },
  },

  row: {
    borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    cursor: "pointer",
    transition: `background-color ${tokens.durationFaster}`,

    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },

    "&:last-child": {
      borderBottom: "none",
    },
  },

  cell: {
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,

    "&:last-child": {
      borderRight: "none",
    },
  },

  cellLeft: {
    textAlign: "left",
  },

  cellCenter: {
    textAlign: "center",
  },

  cellRight: {
    textAlign: "right",
  },
});

/**
 * DataTable - Composable table component built with Fluent components.
 *
 * **Fluent Guidelines Applied:**
 * - Semantic `<table>` structure with proper `<thead>` and `<tbody>`
 * - Token-driven styling, spacing, and colors
 * - Hover states for row interactivity
 * - Compound component pattern for flexibility
 *
 * @example
 * <DataTable.Root>
 *   <DataTable.Header columns={[
 *     { label: 'Name' },
 *     { label: 'Email' },
 *     { label: 'Status' }
 *   ]} />
 *   <DataTable.Row cells={['John Doe', 'john@example.com', 'Active']} />
 *   <DataTable.Row cells={['Jane Smith', 'jane@example.com', 'Active']} />
 * </DataTable.Root>
 */

export const DataTableRoot = forwardRef<HTMLTableElement, DataTableRootProps>(
  ({ children, className, ...rest }, ref) => {
    const styles = useStyles();
    return (
      <Table
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {children}
      </Table>
    );
  }
);

DataTableRoot.displayName = "DataTable.Root";

export const DataTableHeader = forwardRef<
  HTMLTableSectionElement,
  DataTableHeaderProps
>(({ columns, className, ...rest }, ref) => {
  const styles = useStyles();
  return (
    <TableHeader
      ref={ref}
      className={[styles.header, className].filter(Boolean).join(" ")}
      {...rest}
    >
      <TableRow>
        {columns.map(
          (column: { label: string; width?: string }, idx: number) => (
            <TableHeaderCell key={idx} className={styles.headerCell}>
              {column.label}
            </TableHeaderCell>
          )
        )}
      </TableRow>
    </TableHeader>
  );
});

DataTableHeader.displayName = "DataTable.Header";

export const DataTableRow = forwardRef<HTMLTableRowElement, DataTableRowProps>(
  ({ cells, onRowAction, className, ...rest }, ref) => {
    const styles = useStyles();
    return (
      <TableRow
        ref={ref}
        className={[styles.row, className].filter(Boolean).join(" ")}
        onClick={onRowAction}
        {...rest}
      >
        {cells.map((cell: ReactNode, idx: number) => (
          <TableCell key={idx} className={styles.cell}>
            {cell}
          </TableCell>
        ))}
      </TableRow>
    );
  }
);

DataTableRow.displayName = "DataTable.Row";

export const DataTableCell = forwardRef<
  HTMLTableDataCellElement,
  DataTableCellProps
>(({ children, align = "left", className, ...rest }, ref) => {
  const styles = useStyles();
  const alignClassMap = {
    left: styles.cellLeft,
    center: styles.cellCenter,
    right: styles.cellRight,
  } as const;
  const alignClass = alignClassMap[align];

  return (
    <TableCell
      ref={ref}
      className={[styles.cell, alignClass, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </TableCell>
  );
});

DataTableCell.displayName = "DataTable.Cell";

/**
 * Export as compound component for convenient namespace access.
 */
export const DataTable = {
  Root: DataTableRoot,
  Header: DataTableHeader,
  Body: TableBody,
  Row: DataTableRow,
  Cell: DataTableCell,
};

export default DataTable;
