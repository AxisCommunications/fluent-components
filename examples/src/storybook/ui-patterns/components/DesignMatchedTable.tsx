import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { CheckmarkCircleRegular, WarningRegular } from "@fluentui/react-icons";
import { BaseCell } from "./BaseCell";
import { RowActions } from "./RowActions";

type RowItem = {
  id: string;
  service: string;
  owner: string;
  status: "Healthy" | "At Risk";
  external?: boolean;
};

const rows: RowItem[] = [
  {
    id: "1",
    service: "Payments API",
    owner: "Lena Park",
    status: "Healthy",
    external: true,
  },
  {
    id: "2",
    service: "Customer Portal",
    owner: "Daniel Young",
    status: "At Risk",
  },
  {
    id: "3",
    service: "Notification Worker",
    owner: "Sonia Iqbal",
    status: "Healthy",
  },
  {
    id: "4",
    service: "Search Indexer",
    owner: "Aron Velasquez",
    status: "At Risk",
    external: true,
  },
];

const useStyles = makeStyles({
  table: {
    width: "100%",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusLarge,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  headerCell: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  selectionCol: {
    width: "40px",
  },
  actionsCol: {
    width: "132px",
  },
});

export function DesignMatchedTable() {
  const styles = useStyles();

  return (
    <Table className={styles.table} aria-label="Service health table">
      <TableHeader>
        <TableRow>
          <TableHeaderCell
            className={`${styles.headerCell} ${styles.selectionCol}`}
          >
            <Checkbox aria-label="Select all rows" />
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Service
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>Owner</TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Status
          </TableHeaderCell>
          <TableHeaderCell
            className={`${styles.headerCell} ${styles.actionsCol}`}
          >
            Row actions
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <Checkbox aria-label={`Select row ${row.id}`} />
            </TableCell>
            <BaseCell label={row.service} external={row.external} />
            <BaseCell label={row.owner} />
            <TableCell>
              <TableCellLayout
                media={
                  row.status === "Healthy" ? (
                    <CheckmarkCircleRegular
                      fontSize={16}
                      color={tokens.colorPaletteGreenForeground1}
                    />
                  ) : (
                    <WarningRegular
                      fontSize={16}
                      color={tokens.colorPaletteDarkOrangeForeground1}
                    />
                  )
                }
              >
                <Badge
                  appearance="filled"
                  color={row.status === "Healthy" ? "success" : "warning"}
                >
                  {row.status}
                </Badge>
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <RowActions />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
