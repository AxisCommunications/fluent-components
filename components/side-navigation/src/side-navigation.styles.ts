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
  itemCollapsed: `${componentId}__item--collapsed`,
  itemIcon: `${componentId}__item-icon`,
  itemLabel: `${componentId}__item-label`,
  itemChevron: `${componentId}__item-chevron`,
  itemChevronCollapsed: `${componentId}__item-chevron--collapsed`,
  group: `${componentId}__group`,
  subItem: `${componentId}__sub-item`,
  subItemSelected: `${componentId}__sub-item--selected`,
  hoverIndicator: `${componentId}__hover-indicator`,
  flyoutItem: `${componentId}__flyout-item`,
  flyoutItemSelected: `${componentId}__flyout-item--selected`,
} as const;

export type SideNavigationSlot = keyof typeof sideNavigationClassNames;

/** Width of the collapsed rail and the fixed icon column, in pixels. */
export const RAIL_WIDTH = 60;
/** Default rail width when expanded, in pixels. */
export const DEFAULT_EXPANDED_WIDTH = 260;
/** Height of the sliding selection indicator, in pixels. */
export const SELECTED_INDICATOR_HEIGHT = 16;

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    width: `${RAIL_WIDTH}px`,
    minWidth: `${RAIL_WIDTH}px`,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
    paddingLeft: "8px",
    paddingRight: "8px",
    rowGap: "4px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground4,
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
  // A short rounded stroke sits inside the left edge of the selected item.
  selectedIndicator: {
    position: "absolute",
    left: 0,
    top: 0,
    width: tokens.strokeWidthThicker,
    height: `${SELECTED_INDICATOR_HEIGHT}px`,
    backgroundColor: "#efab01",
    borderRadius: tokens.borderRadiusCircular,
    zIndex: 2,
    pointerEvents: "none",
    transitionProperty: "transform, height, opacity",
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
    minWidth: `${RAIL_WIDTH - 16}px`,
    width: `${RAIL_WIDTH - 16}px`,
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
    height: "40px",
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
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      width: tokens.strokeWidthThicker,
      height: `${SELECTED_INDICATOR_HEIGHT}px`,
      backgroundColor: tokens.colorNeutralStroke1Hover,
      borderRadius: tokens.borderRadiusCircular,
      opacity: 0,
      transform: "translateY(-50%)",
      transitionProperty: "opacity",
      transitionDuration: tokens.durationFaster,
      transitionTimingFunction: tokens.curveEasyEase,
      pointerEvents: "none",
    },
    "&:not(:disabled):hover::before": {
      opacity: 1,
    },
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Hover,
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
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground3Selected,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Selected,
      color: tokens.colorNeutralForeground1,
    },
  },
  itemCollapsed: {
    alignSelf: "flex-start",
    width: "44px",
    height: "40px",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  itemIcon: {
    flexShrink: 0,
    width: "44px",
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
  itemChevronCollapsed: {
    position: "absolute",
    right: "2px",
    width: "12px",
    "& svg": {
      fontSize: "12px",
    },
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
  hoverIndicator: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      width: tokens.strokeWidthThicker,
      height: `${SELECTED_INDICATOR_HEIGHT}px`,
      backgroundColor: tokens.colorNeutralStroke1Hover,
      borderRadius: tokens.borderRadiusCircular,
      opacity: 0,
      transform: "translateY(-50%)",
      transitionProperty: "opacity",
      transitionDuration: tokens.durationFaster,
      transitionTimingFunction: tokens.curveEasyEase,
      pointerEvents: "none",
    },
    '&:not(:disabled):not([aria-disabled="true"]):hover::before': {
      opacity: 1,
    },
  },
  subItemGroup: {
    paddingRight: "8px",
  },
  nestedSubItem: {
    paddingLeft: `${RAIL_WIDTH + 16}px`,
  },
  subItemLabel: {
    flexGrow: 1,
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  subItemSelected: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground3Selected,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Selected,
      color: tokens.colorNeutralForeground1,
    },
  },
  flyoutItemSelected: {
    position: "relative",
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground3Selected,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      width: tokens.strokeWidthThicker,
      height: `${SELECTED_INDICATOR_HEIGHT}px`,
      backgroundColor: "#efab01",
      borderRadius: tokens.borderRadiusCircular,
      opacity: 1,
      transform: "translateY(-50%)",
      pointerEvents: "none",
    },
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Selected,
      color: tokens.colorNeutralForeground1,
    },
  },
  // Menu auto-focuses the first item when it opens on hover; suppress the
  // resulting focus-visible ring since it isn't a real keyboard interaction.
  flyoutItem: {
    "&::after": {
      ...shorthands.borderColor("transparent"),
    },
  },
});

export type SideNavigationStyles = ReturnType<typeof useStyles>;

export function useSideNavigationStyles() {
  return useStyles();
}
