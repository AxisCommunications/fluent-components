import {
  makeStyles,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

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
  selectedApp: {
    [`& .${iconRegularClassName}`]: {
      display: "none",
    },
    [`& .${iconFilledClassName}`]: {
      color: tokens.colorCompoundBrandForeground1,
      display: "inline",
    },
  },
  selectedAppLabel: {
    ...typographyStyles.body1Strong,
    color: tokens.colorNeutralForeground1,
  },
});
