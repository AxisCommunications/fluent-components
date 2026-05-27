import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

const componentId = "side-navigation";

export const sideNavigationClassNames = {
  root: `${componentId}`,
  topGroup: `${componentId}__top-group`,
  workspaceSection: `${componentId}__workspace-section`,
  divider: `${componentId}__divider`,
  overflowSection: `${componentId}__overflow-section`,
  item: `${componentId}__item`,
  itemLabel: `${componentId}__item-label`,
  selectedItem: `${componentId}__item--selected`,
  selectedIndicator: `${componentId}__selected-indicator`,
  bottomSection: `${componentId}__bottom-section`,
  bottomItem: `${componentId}__bottom-item`,
};

const useStyles = makeStyles({
  root: {
    width: "68px",
    minWidth: "68px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "16px",
    ...shorthands.borderRight(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
    position: "relative",
    backgroundColor: tokens.colorNeutralBackground1,
    boxSizing: "border-box",
  },
  rootHidden: {
    display: "none",
  },
  topGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "4px",
    position: "relative",
    isolation: "isolate",
  },
  workspaceSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  },
  divider: {
    width: "24px",
    height: tokens.strokeWidthThin,
    backgroundColor: tokens.colorNeutralStroke1,
  },
  overflowSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  itemContainer: {
    width: "68px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  item: {
    width: "68px",
    minWidth: "68px",
    height: "56px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "2px",
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase100,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.borderStyle("none"),
    backgroundColor: "transparent",
    cursor: "pointer",
    ...shorthands.padding("8px", "4px"),
    outlineStyle: "none",
    position: "relative",
    zIndex: 0,
    transitionProperty: "background-color, color",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
    "&:focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
    "& > :first-child": {
      flexShrink: 0,
      width: "24px",
      height: "24px",
      fontSize: "24px",
      lineHeight: "24px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  selectedItem: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground3,
  },
  selectedIndicator: {
    width: "3px",
    height: "16px",
    position: "absolute",
    left: "-1px",
    top: 0,
    transform: "translateY(0)",
    backgroundColor: "#efab01",
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    zIndex: 2,
    transitionProperty: "transform, opacity",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    pointerEvents: "none",
  },
  hiddenSelectedIndicator: {
    opacity: 0,
  },
  itemLabel: {
    textAlign: "center",
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase100,
    maxWidth: "100%",
    ...shorthands.padding("0", "2px"),
    overflowWrap: "anywhere",
  },
  bottomSection: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    height: "68px",
    alignItems: "center",
  },
  bottomItem: {
    width: "60px",
    minWidth: "60px",
    height: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "2px",
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.borderStyle("none"),
    boxShadow: "0 1px 2px rgba(0,0,0,0.14), 0 0 2px rgba(0,0,0,0.12)",
    cursor: "pointer",
    padding: 0,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      color: tokens.colorNeutralForeground1,
    },
    "&:focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
    "& > :first-child": {
      flexShrink: 0,
      width: "24px",
      height: "24px",
      fontSize: "24px",
      lineHeight: "24px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export function useSideNavigationStyles() {
  const styles = useStyles();

  return {
    styles,
    rootStyle: mergeClasses(sideNavigationClassNames.root, styles.root),
  };
}
