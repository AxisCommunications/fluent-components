import {
  Link,
  TableCell,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { ReactNode } from "react";

type BaseCellProps = {
  label: string;
  icon?: ReactNode;
  external?: boolean;
};

const useStyles = makeStyles({
  cell: {
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  link: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
});

export function BaseCell({ label, icon, external = false }: BaseCellProps) {
  const styles = useStyles();

  return (
    <TableCell>
      <div className={styles.cell}>
        {icon}
        {external ? (
          <Link href="#" inline className={styles.link}>
            <span className={styles.text}>{label}</span>
          </Link>
        ) : (
          <span className={styles.text}>{label}</span>
        )}
      </div>
    </TableCell>
  );
}
