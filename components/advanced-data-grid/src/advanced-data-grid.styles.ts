import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const advancedDataGridClassNames = {
  root: "axis-AdvancedDataGrid",
  toolbar: "axis-AdvancedDataGrid__toolbar",
  grid: "axis-AdvancedDataGrid__grid",
  footer: "axis-AdvancedDataGrid__footer",
  groupHeader: "axis-AdvancedDataGrid__groupHeader",
} as const;

export const useAdvancedDataGridStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
    width: "100%",
    minWidth: 0,
  },
  gridScroll: {
    width: "100%",
    overflowX: "auto",
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  grid: {
    minWidth: "100%",
  },
  headerCell: {
    fontWeight: tokens.fontWeightSemibold,
  },
  sortableHeader: {
    cursor: "pointer",
    userSelect: "none",
    ...shorthands.gap(tokens.spacingHorizontalXS),
  },
  headerLabel: {
    display: "inline-flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXXS),
  },
  pinnedLeft: {
    position: "sticky",
    left: 0,
    zIndex: 1,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  pinnedRight: {
    position: "sticky",
    right: 0,
    zIndex: 1,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  rowComfortable: {
    height: "44px",
  },
  rowMedium: {
    height: "36px",
  },
  rowCompact: {
    height: "28px",
  },
  draggableRow: {
    cursor: "grab",
  },
  rowDragging: {
    opacity: 0.4,
  },
  rowDragOver: {
    boxShadow: `inset 0 2px 0 0 ${tokens.colorBrandStroke1}`,
  },
  groupHeaderRow: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  groupHeaderCell: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalS),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  groupAggregations: {
    display: "inline-flex",
    ...shorthands.gap(tokens.spacingHorizontalM),
    color: tokens.colorNeutralForeground3,
    fontWeight: tokens.fontWeightRegular,
    fontSize: tokens.fontSizeBase200,
  },
  emptyState: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...shorthands.padding(tokens.spacingVerticalXXXL),
    color: tokens.colorNeutralForeground3,
  },
});
