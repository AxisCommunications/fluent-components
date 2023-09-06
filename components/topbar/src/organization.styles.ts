import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  standalone: {
    pointerEvents: "none",
  },
  organizationSelection: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "30vh",
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
});
