import {
  makeStyles,
  shorthands,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

export const useApplicationStyles = makeStyles({
  headerLabel: {
    textTransform: "uppercase",
  },
  standalone: {
    pointerEvents: "none",
  },
  singleLine: {
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflowX: "hidden",
  },
  applicationLabel: {
    overflowX: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginLeft: tokens.spacingHorizontalXXXL,
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
  menuPopover: {
    ...shorthands.borderRadius("1px", "4px", "4px", "4px"),
  },
  currentIcon: {
    fontSize: "20px",
  },
  applicationAreaIcon: {
    fontSize: "24px",
  },
  menuRectangle: {
    display: "flex",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 10,
    width: "34px",
    height: "32px",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...shorthands.borderRadius("6px", "6px", "1px", "6px"),
  },
  applicationIconBase: {
    height: "26px",
    minHeight: "26px",
    width: "27px",
    minWidth: "27px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...shorthands.borderRadius("6px"),
  },
  myApplicationAreaBase: {
    height: "32px",
    minHeight: "32px",
    width: "32px",
    minWidth: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...shorthands.borderRadius("6px", "6px", "1px", "6px"),
  },
  filledIcon: {
    [`& .${iconFilledClassName}`]: {
      display: "inline",
    },
    [`& .${iconRegularClassName}`]: {
      display: "none",
    },
  },
  mySystemsMenuRectangle: {
    color: "#CCEBF8",
    backgroundColor: "#008DC6",
  },
  myAxisMenuRectangle: {
    color: "#FFF5D6",
    backgroundColor: "#DFA001",
  },
  myPartnersMenuRectangle: {
    color: "#E8F4D9",
    backgroundColor: "#7FB239",
  },
  myBusinessMenuRectangle: {
    color: "#F7CEE8",
    backgroundColor: "#C10B7E",
  },
  selectedAppLabel: {
    ...typographyStyles.body1Strong,
    color: tokens.colorNeutralForeground1,
  },
});
