import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export type TableRowHeight = "compact" | "normal" | "spacious";
export type TableColumnWidth = "narrow" | "normal" | "wide";

export const useTableStyles = makeStyles({
  table: {
    overflowWrap: "anywhere",
    minWidth: "max-content",
    ...shorthands.overflow("auto"),
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
});

export const useRowStyles = makeStyles({
  compact: {
    maxHeight: "52px",
  },
  interactive: {
    cursor: "pointer",
  },
  normal: {
    maxHeight: "64px",
  },
  spacious: {
    minHeight: "80px",
    maxHeight: "128px",
  },
  padded: {
    paddingBottom: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalS,
  },
});

export const useColumnStyles = makeStyles({
  narrow: {
    flexGrow: 3,
    minWidth: "64px",
  },
  normal: {
    flexGrow: 5,
    minWidth: "96px",
  },
  wide: {
    flexGrow: 8,
    minWidth: "128px",
  },
});
