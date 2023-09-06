import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

export const useLayoutStyles = makeStyles({
  grid: {
    display: "grid",
    gridColumnGap: tokens.spacingHorizontalL,
    gridTemplateColumns: "auto",
    gridTemplateRows: "min-content auto",
    gridTemplateAreas: `
    'header'
    'content'`,
    height: "100%",
    paddingTop: tokens.spacingVerticalXXL,
    paddingLeft: tokens.spacingHorizontalXXL,
  },
  innerGrid: {
    display: "grid",
    gridColumnGap: tokens.spacingHorizontalL,
    gridTemplateColumns: "auto",
    gridTemplateRows: "min-content auto",
    gridTemplateAreas: `
    'header'
    'content'`,
    height: "100%",
  },
  gridWithSidebar: {
    gridTemplateColumns: "min-content auto",
    gridTemplateAreas: `
    'header header'
    'sidebar content'`,
  },
  header: {
    ...shorthands.gridArea("header"),
  },
  sidebar: {
    minWidth: "208px",
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalL,
    ...shorthands.gridArea("sidebar"),
  },
  tabList: {
    whiteSpace: "nowrap",
  },
  content: {
    position: "relative",
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalL,
    paddingRight: tokens.spacingHorizontalXXL,
    ...shorthands.gridArea("content"),
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteBottomRight: {
    position: "absolute",
    bottom: tokens.spacingVerticalM,
    right: tokens.spacingHorizontalM,
  },
  sections: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
});

export const usePageStyles = makeStyles({
  fill: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    ":first-child": {
      flexGrow: 0,
    },
  },
  scroll: {
    ...shorthands.overflow("auto"),
  },
  relative: {
    position: "relative",
  },
});

export function useFixedPageStyle() {
  const pageStyles = usePageStyles();
  return mergeClasses(
    "fixed-page,",
    pageStyles.fill,
    pageStyles.column,
    pageStyles.relative
  );
}

export function useScrollPageStyle() {
  const pageStyles = usePageStyles();
  return mergeClasses(
    "scroll-page",
    pageStyles.fill,
    pageStyles.column,
    pageStyles.scroll,
    pageStyles.relative
  );
}
