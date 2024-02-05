import { makeStyles, tokens } from "@fluentui/react-components";

export const topBarClassNames = {
  root: "axis-TopBar-root",
  left: "axis-TopBar-left",
  center: "axis-TopBar-center",
  right: "axis-TopBar-right",
} as const;

/**
 * Styles for the root slot and wrappers.
 */
export const useTopBarStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridColumnGap: tokens.spacingHorizontalS,
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    height: "46px",
    backgroundColor: tokens.colorNeutralBackground4,
    paddingLeft: tokens.spacingHorizontalS,
    paddingRight: tokens.spacingHorizontalS,
    paddingTop: tokens.spacingVerticalXS,
    paddingBottom: tokens.spacingVerticalXS,
  },
  section: {
    display: "flex",
    alignItems: "center",
    overflowX: "hidden",
  },
  leftSection: {
    gridColumnStart: "1",
    justifySelf: "left",
  },
  centerSection: {
    gridColumnStart: "2",
    justifySelf: "center",
  },
  rightSection: {
    gridColumnStart: "3",
    justifySelf: "right",
  },
});
