import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ...shorthands.padding("8px"),
    ...shorthands.overflow("hidden"),
  },
  text: {
    display: "inline-block",
    height: "auto",
    ...shorthands.padding("0px 8px"),
  },
  displayName: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
