import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  standalone: {
    pointerEvents: "none",
  },
  organizationSelection: {
    overflowY: "auto",
    overflowX: "hidden",
    height: "30vh",
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
});
