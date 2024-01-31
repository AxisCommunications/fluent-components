import { makeStyles, tokens } from "@fluentui/react-components";

export const useTabListStyles = makeStyles({
  root: {
    display: "flex",
    columnGap: tokens.spacingHorizontalXS,
  },
  vertical: {
    flexDirection: "column",
    rowGap: tokens.spacingVerticalXS,
  },
});
