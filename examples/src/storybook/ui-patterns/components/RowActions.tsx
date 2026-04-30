import { Button, makeStyles, tokens } from "@fluentui/react-components";
import {
  DeleteRegular,
  EditRegular,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "4px",
    width: "100%",
  },
  actionButton: {
    minWidth: "32px",
    color: tokens.colorNeutralForeground3,
  },
});

export function RowActions() {
  const styles = useStyles();

  return (
    <div className={styles.actions}>
      <Button
        appearance="subtle"
        size="small"
        icon={<EditRegular fontSize={16} />}
        className={styles.actionButton}
        aria-label="Edit row"
      />
      <Button
        appearance="subtle"
        size="small"
        icon={<DeleteRegular fontSize={16} />}
        className={styles.actionButton}
        aria-label="Delete row"
      />
      <Button
        appearance="subtle"
        size="small"
        icon={<MoreHorizontalRegular fontSize={20} />}
        className={styles.actionButton}
        aria-label="More actions"
      />
    </div>
  );
}
