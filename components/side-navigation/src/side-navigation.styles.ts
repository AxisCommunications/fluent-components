import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

const componentId = "side-navigation";

/** Stable class names applied to each part for styling and testing overrides. */
export const sideNavigationClassNames = {
  root: `${componentId}`,
  expanded: `${componentId}--expanded`,
  list: `${componentId}__list`,
  footer: `${componentId}__footer`,
  divider: `${componentId}__divider`,
  toggle: `${componentId}__toggle`,
  selectedIndicator: `${componentId}__selected-indicator`,
  item: `${componentId}__item`,
  itemSelected: `${componentId}__item--selected`,
  itemIcon: `${componentId}__item-icon`,
  itemLabel: `${componentId}__item-label`,
  itemChevron: `${componentId}__item-chevron`,
  group: `${componentId}__group`,
  subItem: `${componentId}__sub-item`,
  subItemSelected: `${componentId}__sub-item--selected`,
} as const;

export type SideNavigationSlot = keyof typeof sideNavigationClassNames;

/** Width of the collapsed rail and the fixed icon column, in pixels. */
export const RAIL_WIDTH = 68;
/** Default rail width when expanded, in pixels. */
export const DEFAULT_EXPANDED_WIDTH = 260;
/** Height of the sliding selection indicator, in pixels. */
export const INDICATOR_HEIGHT = 20;

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    width: `${RAIL_WIDTH}px`,
    minWidth: `${RAIL_WIDTH}px`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
    paddingLeft: tokens.spacingHorizontalXS,
    paddingRight: tokens.spacingHorizontalXS,
    rowGap: "4px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRight("1px", "solid", tokens.colorNeutralStroke2),
    transitionProperty: "width",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
    minWidth: 0,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
    marginTop: "auto",
    minWidth: 0,
  },
  divider: {
    height: tokens.strokeWidthThin,
    marginTop: "8px",
    marginBottom: "8px",
    marginLeft: "12px",
    marginRight: "12px",
    backgroundColor: tokens.colorNeutralStroke2,
  },
  selectedIndicator: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "3px",
    height: `${INDICATOR_HEIGHT}px`,
    backgroundColor: "#efab01",
    borderTopRightRadius: tokens.borderRadiusCircular,
    borderBottomRightRadius: tokens.borderRadiusCircular,
    zIndex: 2,
    pointerEvents: "none",
    transitionProperty: "transform, opacity",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },
  },
  toggle: {
    boxSizing: "border-box",
    flexShrink: 0,
    height: "40px",
    minWidth: `${RAIL_WIDTH - 8}px`,
    width: `${RAIL_WIDTH - 8}px`,
    paddingLeft: 0,
    paddingRight: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: tokens.colorNeutralForeground2,
    backgroundColor: "transparent",
    ...shorthands.borderStyle("none"),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    cursor: "pointer",
    outlineStyle: "none",
    transitionProperty: "background-color, color",
    transitionDuration: tokens.durationFaster,
    transitionTimingFunction: tokens.curveEasyEase,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2Hover,
      color: tokens.colorNeutralForeground1,
    },
    "&:focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
    "& svg": {
      fontSize: "20px",
    },
  },
  group: {
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
    minWidth: 0,
  },
  item: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minWidth: 0,
    height: "44px",
    paddingLeft: 0,
    paddingRight: "8px",
    color: tokens.colorNeutralForeground2,
    backgroundColor: "transparent",
    ...shorthands.borderStyle("none"),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    cursor: "pointer",
    outlineStyle: "none",
    textAlign: "left",
    transitionProperty: "background-color, color",
    transitionDuration: tokens.durationFaster,
    transitionTimingFunction: tokens.curveEasyEase,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2Hover,
      color: tokens.colorNeutralForeground1,
    },
    "&:focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
    "&:disabled": {
      color: tokens.colorNeutralForegroundDisabled,
      cursor: "not-allowed",
      backgroundColor: "transparent",
    },
  },
  itemSelected: {
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground2Pressed,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2Pressed,
      color: tokens.colorNeutralForeground1,
    },
  },
  itemIcon: {
    flexShrink: 0,
    width: `${RAIL_WIDTH - 8}px`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "20px",
    },
  },
  itemLabel: {
    flexGrow: 1,
    minWidth: 0,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    opacity: 0,
    transitionProperty: "opacity",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },
  },
  itemLabelVisible: {
    opacity: 1,
  },
  itemChevron: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    transitionProperty: "transform",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "& svg": {
      fontSize: "16px",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },
  },
  itemChevronOpen: {
    transform: "rotate(90deg)",
  },
  subItem: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minWidth: 0,
    height: "36px",
    paddingLeft: `${RAIL_WIDTH - 8}px`,
    paddingRight: "8px",
    color: tokens.colorNeutralForeground2,
    backgroundColor: "transparent",
    ...shorthands.borderStyle("none"),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    cursor: "pointer",
    outlineStyle: "none",
    textAlign: "left",
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transitionProperty: "background-color, color",
    transitionDuration: tokens.durationFaster,
    transitionTimingFunction: tokens.curveEasyEase,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2Hover,
      color: tokens.colorNeutralForeground1,
    },
    "&:focus-visible": {
      ...shorthands.outline(
        tokens.strokeWidthThick,
        "solid",
        tokens.colorStrokeFocus2
      ),
    },
    "&:disabled": {
      color: tokens.colorNeutralForegroundDisabled,
      cursor: "not-allowed",
      backgroundColor: "transparent",
    },
  },
  subItemSelected: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground2Pressed,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2Pressed,
      color: tokens.colorNeutralForeground1,
    },
  },
});

export type SideNavigationStyles = ReturnType<typeof useStyles>;

export function useSideNavigationStyles() {
  return useStyles();
}
