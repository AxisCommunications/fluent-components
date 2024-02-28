import { makeStyles, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: "10px",
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
  inputBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  searchBox: {
    maxWidth: "320px",
  },
  sizeBox: {
    display: "flex",
    alignItems: "center",
    ...shorthands.padding("5px"),
  },
  radio: {
    fontSize: "11px",
  },
});
