import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    columnGap: tokens.spacingHorizontalXS,
  },
  vertical: {
    flexDirection: "column",
    rowGap: tokens.spacingVerticalXS,
  },
});

export const useTabListStyles = ({ vertical }: { vertical?: boolean }) => {
  const styles = useStyles();
  const rootStyle = mergeClasses(styles.root, vertical && styles.vertical);
  return { styles, rootStyle };
};
