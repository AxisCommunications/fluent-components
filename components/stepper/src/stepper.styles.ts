import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStepperStyles = makeStyles({
  root: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  rootVertical: {
    flexDirection: "column",
    alignContent: "left",
    alignItems: "left",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  divider: {
    flexGrow: 1,
  },
  dividerVertical: {
    display: "inline-flex",
    width: "24px",
  },
});
