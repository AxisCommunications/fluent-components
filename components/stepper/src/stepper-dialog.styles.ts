import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStepperDialogStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    height: "100%",
    justifyContent: "space-between",
    overflowY: "hidden",
  },
  stepperContainer: {
    display: "grid",
    overflowY: "hidden",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
  stepperContainerVertical: {
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr 6fr",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  stepContent: {
    display: "flex",
    overflowY: "hidden",
  },
  buttonContainer: {
    display: "flex",
    ...shorthands.gap(tokens.spacingHorizontalL),
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
});
