import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { StepperDialogClassNames } from "./stepper-dialog.styles";

const useStyles = makeStyles({
  buttons: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
});

export function useStepperDialogFooterStyles() {
  const styles = useStyles();

  const buttonStyles = mergeClasses(
    StepperDialogClassNames.buttons,
    styles.buttons
  );

  const buttonCancel = mergeClasses(StepperDialogClassNames.cancel);
  const buttonPrevious = mergeClasses(StepperDialogClassNames.previous);
  const buttonNext = mergeClasses(StepperDialogClassNames.next);
  const buttonFinish = mergeClasses(StepperDialogClassNames.finish);

  return {
    styles,
    buttonStyles,
    buttonCancel,
    buttonPrevious,
    buttonNext,
    buttonFinish,
  };
}
