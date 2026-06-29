import {
  Button,
  Text,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import {
  CheckmarkRegular,
  DismissRegular,
  LightbulbRegular,
  QuestionCircleRegular,
} from "@fluentui/react-icons";
import {
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * Controls whether sidebar steps can be clicked to navigate.
 *
 * - `none`: steps are not interactive; navigation only via Back / Next.
 * - `linear`: each step must be completed in order. Only the current step and
 *   already-completed (visited) steps are clickable; future steps are locked.
 * - `free`: any step can be clicked to jump to it at any time.
 */
export type WizardNavigationMode = "none" | "linear" | "free";

export interface WizardStep {
  /** Label shown next to the step indicator in the sidebar. */
  label: string;

  /** Optional per-step title shown above the content area. */
  stepTitle?: string;

  /** Content rendered in the main area when the step is active. */
  content?: ReactNode;

  /**
   * Marks the step as required. If the user jumps past a required step
   * (e.g. in `free` navigation) without ever visiting it, the step indicator
   * shows an attention dot marker instead of a completion checkmark.
   */
  required?: boolean;
}

export interface WizardProps {
  /** Small muted title shown above the step title. */
  title: string;

  /** Ordered list of steps shown in the sidebar. */
  steps: WizardStep[];

  /** Controlled active step index (zero-based). */
  currentStep?: number;

  /** Default active step index for uncontrolled usage. */
  defaultStep?: number;

  /** Called whenever the active step changes. */
  onStepChange?: (step: number) => void;

  /**
   * How sidebar steps respond to clicks.
   *
   * - `none` (default): steps are not clickable.
   * - `linear`: steps must be completed in order; only visited/completed steps
   *   and the current step can be clicked.
   * - `free`: any step can be clicked to jump to it.
   */
  navigationMode?: WizardNavigationMode;

  /** Called when the final step's primary action is pressed. */
  onFinish?: () => void;

  /** Called when the close icon is pressed. */
  onClose?: () => void;

  /** Label for the back button. */
  backLabel?: string;

  /** Label for the next button. */
  nextLabel?: string;

  /** Label for the primary action on the final step. */
  finishLabel?: string;

  /** Disable navigating to the next step. */
  disableProgression?: boolean;

  /**
   * Animate the content area with a directional sway when the active step
   * changes. Moving forward slides the content in from the right; moving
   * backward slides it in from the left. Defaults to `false`.
   */
  animateContent?: boolean;

  /** Override the top-right header actions. */
  headerActions?: ReactNode;

  /** Optional CSS class. */
  className?: string;
}

const INDICATOR_SIZE = "18px";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "520px",
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow16,
    overflow: "hidden",
  },

  body: {
    display: "flex",
    flex: 1,
    minHeight: 0,
  },

  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    flexShrink: 0,
    width: "200px",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    overflowY: "auto",
  },

  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    margin: 0,
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    font: "inherit",
    color: "inherit",
    width: "100%",
  },

  stepRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
  },

  stepClickable: {
    cursor: "pointer",
    ":hover .axis-WizardStepRow": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
    ":focus-visible": {
      outline: "none",
    },
    ":focus-visible .axis-WizardStepRow": {
      outline: `2px solid ${tokens.colorStrokeFocus2}`,
      outlineOffset: "2px",
    },
  },

  stepLocked: {
    cursor: "not-allowed",
  },

  connectorWrap: {
    display: "flex",
    justifyContent: "flex-start",
    // Align the connector under the centre of the indicator:
    // row padding-left (spacingHorizontalS = 8px) + half indicator (9px) - half line (1px).
    paddingLeft: "16px",
    height: tokens.spacingVerticalM,
  },

  indicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    flexShrink: 0,
    borderRadius: tokens.borderRadiusCircular,
    boxSizing: "border-box",
  },

  indicatorPending: {
    border: `2px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },

  indicatorActive: {
    backgroundColor: tokens.colorBrandBackground,
  },

  indicatorActiveDot: {
    width: "7px",
    height: "7px",
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralForegroundOnBrand,
  },

  indicatorComplete: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },

  indicatorDone: {
    backgroundColor: tokens.colorStatusSuccessBackground1,
    color: tokens.colorStatusSuccessForeground1,
  },

  indicatorSkipped: {
    border: `2px solid ${tokens.colorStatusDangerBorder2}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },

  indicatorSkippedDot: {
    width: "7px",
    height: "7px",
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorStatusDangerBackground3,
  },

  connector: {
    width: "2px",
    height: "100%",
    backgroundColor: tokens.colorNeutralStroke2,
  },

  connectorComplete: {
    backgroundColor: tokens.colorBrandBackground,
  },

  stepLabel: {
    ...typographyStyles.body1,
    color: tokens.colorNeutralForeground2,
  },

  stepLabelActive: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  stepLabelSkipped: {
    color: tokens.colorStatusDangerForeground1,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
    padding: tokens.spacingHorizontalL,
    gap: tokens.spacingVerticalM,
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },

  headerTitles: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    minWidth: 0,
  },

  title: {
    ...typographyStyles.caption1,
    color: tokens.colorNeutralForeground3,
  },

  stepTitle: {
    ...typographyStyles.subtitle1,
    color: tokens.colorNeutralForeground1,
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXXS,
    flexShrink: 0,
  },

  contentArea: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
  },

  swayForward: {
    animationName: {
      from: { opacity: 0, transform: "translateX(24px)" },
      to: { opacity: 1, transform: "translateX(0)" },
    },
    animationDuration: tokens.durationNormal,
    animationTimingFunction: tokens.curveDecelerateMid,
    animationFillMode: "both",
  },

  swayBackward: {
    animationName: {
      from: { opacity: 0, transform: "translateX(-24px)" },
      to: { opacity: 1, transform: "translateX(0)" },
    },
    animationDuration: tokens.durationNormal,
    animationTimingFunction: tokens.curveDecelerateMid,
    animationFillMode: "both",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingHorizontalL,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

/**
 * Wizard
 *
 * A full-page guided flow that pairs a vertical step indicator with a content
 * area and Back / Next navigation. Completed steps show a checkmark, the active
 * step is filled with the Axis brand color, and upcoming steps are outlined.
 * Finishing the final step shows a green checkmark, and required steps that were
 * skipped (jumped past without visiting) show an attention dot marker.
 *
 * Steps can optionally be clicked to navigate via `navigationMode` (`linear`
 * requires completing steps in order, `free` allows jumping anywhere).
 *
 * Supports both controlled (`currentStep` + `onStepChange`) and uncontrolled
 * (`defaultStep`) usage.
 */
export const Wizard = forwardRef<HTMLDivElement, WizardProps>(
  (
    {
      title,
      steps,
      currentStep,
      defaultStep = 0,
      navigationMode = "none",
      onStepChange,
      onFinish,
      onClose,
      backLabel = "Back",
      nextLabel = "Next",
      finishLabel = "Finish",
      disableProgression = false,
      animateContent = false,
      headerActions,
      className,
    },
    ref
  ) => {
    const styles = useStyles();

    const [internalStep, setInternalStep] = useState(defaultStep);
    const isControlled = currentStep !== undefined;
    const activeStep = isControlled ? currentStep : internalStep;

    const lastStep = steps.length - 1;
    const isFirstStep = activeStep <= 0;
    const isLastStep = activeStep >= lastStep;

    // Track the previous step so the content sway can animate in the direction
    // of travel (forward slides in from the right, backward from the left).
    const prevStepRef = useRef(activeStep);
    const isBackward = activeStep < prevStepRef.current;
    useEffect(() => {
      prevStepRef.current = activeStep;
    }, [activeStep]);

    // Track the furthest step the user has reached so `linear` mode can allow
    // jumping back to any visited step but not skipping ahead.
    const [maxReachedStep, setMaxReachedStep] = useState(activeStep);
    useEffect(() => {
      setMaxReachedStep((prev) => Math.max(prev, activeStep));
    }, [activeStep]);

    // Track which steps the user has actually visited (made active). A required
    // step that was jumped past without ever being visited is flagged skipped.
    const [visitedSteps, setVisitedSteps] = useState<Set<number>>(
      () => new Set([activeStep])
    );
    useEffect(() => {
      setVisitedSteps((prev) => {
        if (prev.has(activeStep)) {
          return prev;
        }
        const next = new Set(prev);
        next.add(activeStep);
        return next;
      });
    }, [activeStep]);

    // Whether the final step has been completed via the Finish action. When
    // finished, the last step shows a green completion checkmark.
    const [finished, setFinished] = useState(false);
    useEffect(() => {
      if (activeStep !== lastStep) {
        setFinished(false);
      }
    }, [activeStep, lastStep]);

    const goToStep = useCallback(
      (next: number) => {
        const clamped = Math.min(Math.max(next, 0), lastStep);
        if (!isControlled) {
          setInternalStep(clamped);
        }
        onStepChange?.(clamped);
      },
      [isControlled, lastStep, onStepChange]
    );

    const canNavigateTo = useCallback(
      (index: number) => {
        if (navigationMode === "free") {
          return true;
        }
        if (navigationMode === "linear") {
          return index <= maxReachedStep;
        }
        return false;
      },
      [navigationMode, maxReachedStep]
    );

    const handleStepClick = useCallback(
      (index: number) => {
        if (index === activeStep || !canNavigateTo(index)) {
          return;
        }
        goToStep(index);
      },
      [activeStep, canNavigateTo, goToStep]
    );

    const handleNext = useCallback(() => {
      if (isLastStep) {
        setFinished(true);
        onFinish?.();
        return;
      }
      goToStep(activeStep + 1);
    }, [activeStep, goToStep, isLastStep, onFinish]);

    const handleBack = useCallback(() => {
      goToStep(activeStep - 1);
    }, [activeStep, goToStep]);

    const current = steps[activeStep];

    const defaultHeaderActions = useMemo(
      () => (
        <>
          <Tooltip content="Tips" relationship="label">
            <Button
              appearance="subtle"
              icon={<LightbulbRegular />}
              aria-label="Tips"
            />
          </Tooltip>
          <Tooltip content="Help" relationship="label">
            <Button
              appearance="subtle"
              icon={<QuestionCircleRegular />}
              aria-label="Help"
            />
          </Tooltip>
          <Tooltip content="Close" relationship="label">
            <Button
              appearance="subtle"
              icon={<DismissRegular />}
              aria-label="Close"
              onClick={onClose}
            />
          </Tooltip>
        </>
      ),
      [onClose]
    );

    return (
      <div ref={ref} className={mergeClasses(styles.root, className)}>
        <div className={styles.body}>
          <nav className={styles.sidebar} aria-label="Wizard steps">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isLast = index === steps.length - 1;
              const isPassed = index < activeStep;
              const isSkippedRequired =
                isPassed && !visitedSteps.has(index) && !!step.required;
              const isCompleteStep = isPassed && !isSkippedRequired;
              const isDone = finished && isLast;
              const isInteractive = navigationMode !== "none";
              const isNavigable = canNavigateTo(index);

              return (
                <button
                  key={index}
                  type="button"
                  className={mergeClasses(
                    styles.step,
                    isInteractive &&
                      (isNavigable ? styles.stepClickable : styles.stepLocked)
                  )}
                  onClick={
                    isInteractive ? () => handleStepClick(index) : undefined
                  }
                  disabled={isInteractive && !isNavigable}
                  aria-current={isActive ? "step" : undefined}
                >
                  <div
                    className={mergeClasses(
                      "axis-WizardStepRow",
                      styles.stepRow
                    )}
                  >
                    <div
                      className={mergeClasses(
                        styles.indicator,
                        isDone && styles.indicatorDone,
                        !isDone && isCompleteStep && styles.indicatorComplete,
                        !isDone && isActive && styles.indicatorActive,
                        isSkippedRequired && styles.indicatorSkipped,
                        !isDone &&
                          !isCompleteStep &&
                          !isActive &&
                          !isSkippedRequired &&
                          styles.indicatorPending
                      )}
                    >
                      {(isDone || isCompleteStep) && (
                        <CheckmarkRegular fontSize={10} />
                      )}
                      {!isDone && isActive && (
                        <span className={styles.indicatorActiveDot} />
                      )}
                      {isSkippedRequired && (
                        <span className={styles.indicatorSkippedDot} />
                      )}
                    </div>
                    <Text
                      className={mergeClasses(
                        styles.stepLabel,
                        (isActive || isDone) && styles.stepLabelActive,
                        isSkippedRequired && styles.stepLabelSkipped
                      )}
                    >
                      {step.label}
                    </Text>
                  </div>
                  {!isLast && (
                    <div className={styles.connectorWrap}>
                      <div
                        className={mergeClasses(
                          styles.connector,
                          isCompleteStep && styles.connectorComplete
                        )}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.headerTitles}>
                <Text className={styles.title}>{title}</Text>
                <Text className={styles.stepTitle}>
                  {current?.stepTitle ?? current?.label}
                </Text>
              </div>
              <div className={styles.headerActions}>
                {headerActions ?? defaultHeaderActions}
              </div>
            </div>

            <div
              key={animateContent ? activeStep : undefined}
              className={mergeClasses(
                styles.contentArea,
                animateContent &&
                  (isBackward ? styles.swayBackward : styles.swayForward)
              )}
            >
              {current?.content}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <Button
            appearance="secondary"
            onClick={handleBack}
            disabled={isFirstStep}
          >
            {backLabel}
          </Button>
          <Button
            appearance="primary"
            onClick={handleNext}
            disabled={disableProgression}
          >
            {isLastStep ? finishLabel : nextLabel}
          </Button>
        </div>
      </div>
    );
  }
);

Wizard.displayName = "Wizard";
