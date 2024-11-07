import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  standalone: {
    pointerEvents: "none",
  },
  organizationSelection: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "30vh",
    width: "290px",
  },
  singleLine: {
    overflowX: "hidden",
  },
  organizationlabel: {
    display: "none",
    "@media (min-width: 550px)": {
      display: "block",
    },
  },
  searchInput: {
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  popoverRoot: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    maxWidth: "360px",
  },
  popoverTitle: {
    display: "flex",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
  },
});
