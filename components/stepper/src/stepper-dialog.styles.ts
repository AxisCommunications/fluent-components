import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

const ROOT_CLASS_NAME = "axis-StepperDialog";

export const StepperDialogClassNames = {
  root: ROOT_CLASS_NAME,
  container: `${ROOT_CLASS_NAME}-container`,
  content: `${ROOT_CLASS_NAME}-content`,
  buttonContainer: `${ROOT_CLASS_NAME}-buttons-container`,
  buttons: `${ROOT_CLASS_NAME}-buttons`,
  cancel: `${ROOT_CLASS_NAME}-cancel`,
  previous: `${ROOT_CLASS_NAME}-previous`,
  next: `${ROOT_CLASS_NAME}-next`,
  finish: `${ROOT_CLASS_NAME}-finish`,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    height: "100%",
    justifyContent: "space-between",
    overflowY: "hidden",
  },
  stepperContainer: {
    display: "grid",
    overflowY: "hidden",
    gap: tokens.spacingVerticalL,
  },
  stepperContainerVertical: {
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr 6fr",
    gap: tokens.spacingHorizontalL,
  },
  stepContent: {
    display: "flex",
    overflowY: "hidden",
  },
  buttonContainer: {
    display: "flex",
    gap: tokens.spacingHorizontalL,
    justifyContent: "space-between",
  },
});

type TUseStepperDialogStyles = {
  className?: string;
  vertical?: boolean;
};

export function useStepperDialogStyles({
  vertical,
  className,
}: TUseStepperDialogStyles) {
  const styles = useStyles();

  const rootStyles = mergeClasses(
    StepperDialogClassNames.root,
    styles.root,
    className
  );
  const containerStyles = mergeClasses(
    StepperDialogClassNames.container,
    styles.stepperContainer,
    vertical && styles.stepperContainerVertical
  );
  const contentStyles = mergeClasses(
    StepperDialogClassNames.content,
    styles.stepContent
  );
  const buttonContainerStyles = mergeClasses(
    StepperDialogClassNames.buttonContainer,
    styles.buttonContainer
  );

  return {
    styles,
    rootStyles,
    containerStyles,
    contentStyles,
    buttonContainerStyles,
  };
}
