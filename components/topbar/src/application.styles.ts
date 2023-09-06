import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  headerLabel: {
    textTransform: "uppercase",
  },
  standalone: {
    pointerEvents: "none",
  },
  singleLine: {
    whiteSpace: "nowrap",
    overflowX: "hidden",
  },
  applicationLabel: {
    overflowX: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  beta: {
    marginLeft: "8px",
  },
  disabled: {
    opacity: 0.3,
  },
});
