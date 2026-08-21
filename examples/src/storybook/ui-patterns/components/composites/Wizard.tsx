import {
  Button,
  Text,
  makeStyles,
  mergeClasses,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import {
  CheckmarkFilled,
  CircleRegular,
  DismissCircleFilled,
  DismissRegular,
} from "@fluentui/react-icons";
import {
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SectionHeader, type SectionHeaderAction } from "./SectionHeader";

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

  /** Optional supporting copy shown under the step label in the sidebar. */
  details?: string;

  /** Optional per-step title shown above the content area. */
  stepTitle?: string;

  /** Optional supporting copy shown beneath the step title. */
  description?: string;

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

  /**
   * Step indicator placement.
   *
   * - `default`: vertical labelled rail beside the content (modal / large drawer).
   * - `compact`: horizontal numbered stepper above the content (small drawer / mobile).
   */
  layout?: "default" | "compact";

  /**
   * Surface chrome.
   *
   * - `overlay` (default): rounded corners and an elevation shadow.
   * - `inline`: square corners with a leading divider, for docked drawers.
   */
  surface?: "overlay" | "inline";

  /**
   * Optional header actions rendered next to the close button. Defaults to
   * none, matching the design where the header carries only the close action.
   */
  headerActions?: SectionHeaderAction[];

  /** Optional CSS class. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1440px",
    height: "100%",
    minHeight: "480px",
    backgroundColor: tokens.colorNeutralBackground1,
    overflow: "hidden",
  },

  rootOverlay: {
    borderRadius: tokens.borderRadiusLarge,
    boxShadow: tokens.shadow64,
  },

  rootInline: {
    borderLeft: `1px solid ${tokens.colorNeutralStroke1}`,
  },

  compactStepper: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    padding: "10px 24px 12px 20px",
    backgroundColor: tokens.colorNeutralBackground3,
    boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.14)",
    overflowX: "auto",
  },

  compactStep: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 0,
    margin: 0,
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    color: "inherit",
    font: "inherit",
  },

  compactIndicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    flexShrink: 0,
    borderRadius: tokens.borderRadiusCircular,
    boxSizing: "border-box",
    ...typographyStyles.caption1Strong,
  },

  compactIcon: {
    width: "24px",
    height: "24px",
    fontSize: "24px",
    flexShrink: 0,
  },

  compactGlyph: {
    fontSize: "14px",
  },

  compactIndicatorPending: {
    border: `1px solid ${tokens.colorNeutralStrokeAccessible}`,
    color: tokens.colorNeutralForeground3,
  },

  compactIndicatorDisabled: {
    border: `1px solid ${tokens.colorNeutralForegroundDisabled}`,
    color: tokens.colorNeutralForegroundDisabled,
  },

  compactStepLast: {
    flexGrow: 0,
  },

  compactConnector: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "18px",
    minWidth: "8px",
    height: "2px",
    backgroundColor: tokens.colorNeutralForegroundDisabled,
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
    width: "268px",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL} ${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground3,
    boxShadow: "inset -2px 0 4px rgba(0,0,0,0.14)",
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
    alignItems: "stretch",
    gap: tokens.spacingHorizontalM,
  },

  indicatorColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    width: "20px",
  },

  stepText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    minWidth: 0,
    textAlign: "left",
  },

  stepTextSpaced: {
    paddingBottom: tokens.spacingVerticalL,
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

  indicator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    fontSize: "20px",
    flexShrink: 0,
    borderRadius: tokens.borderRadiusCircular,
    boxSizing: "border-box",
  },

  indicatorBrand: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },

  indicatorDisabledFill: {
    backgroundColor: tokens.colorNeutralForegroundDisabled,
    color: tokens.colorNeutralBackground1,
  },

  indicatorGlyph: {
    fontSize: "12px",
  },

  indicatorPending: {
    color: tokens.colorNeutralStrokeAccessible,
  },

  indicatorError: {
    color: tokens.colorStatusDangerForeground1,
  },

  indicatorDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
  },

  connector: {
    flexGrow: 1,
    width: "2px",
    minHeight: tokens.spacingVerticalM,
    backgroundColor: tokens.colorNeutralForegroundDisabled,
  },

  connectorComplete: {
    backgroundColor: tokens.colorBrandBackground,
  },

  stepLabel: {
    ...typographyStyles.body1,
    color: tokens.colorNeutralForeground1,
  },

  stepLabelActive: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  stepLabelDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
  },

  stepDetails: {
    ...typographyStyles.caption1,
    color: tokens.colorNeutralForeground4,
  },

  main: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
    backgroundColor: tokens.colorNeutralBackground2,
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalL} 0`,
    overflow: "hidden",
  },

  closeButton: {
    // Aligns the close button with the SectionHeader action row.
    marginTop: tokens.spacingVerticalL,
    flexShrink: 0,
  },

  contentArea: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    padding: `0 ${tokens.spacingHorizontalL}`,
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
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL} ${tokens.spacingVerticalXXL}`,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
  },
});

/**
 * Wizard
 *
 * A full-page guided flow that pairs a vertical step indicator with a content
 * area and Back / Next navigation. The current step shows a filled brand
 * circle, completed steps show a brand checkmark circle with a brand connector,
 * and upcoming steps show an outlined circle. Required steps that were skipped
 * (jumped past without visiting) show a danger dismiss circle.
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
      layout = "default",
      surface = "overlay",
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
    const isCompact = layout === "compact";

    const getStepState = (index: number) => {
      const isLast = index === steps.length - 1;
      const isPassed = index < activeStep;
      const isSkippedRequired =
        isPassed && !visitedSteps.has(index) && !!steps[index]?.required;
      const isInteractive = navigationMode !== "none";
      const isNavigable = canNavigateTo(index);

      return {
        isActive: index === activeStep,
        isLast,
        isSkippedRequired,
        isCompleteStep: isPassed && !isSkippedRequired,
        isDone: finished && isLast,
        isInteractive,
        isNavigable,
        isLocked: isInteractive && !isNavigable,
      };
    };

    return (
      <div
        ref={ref}
        className={mergeClasses(
          styles.root,
          surface === "inline" ? styles.rootInline : styles.rootOverlay,
          className
        )}
      >
        {isCompact && (
          <nav className={styles.compactStepper} aria-label="Wizard steps">
            {steps.map((step, index) => {
              const {
                isActive,
                isLast,
                isSkippedRequired,
                isCompleteStep,
                isDone,
                isInteractive,
                isNavigable,
                isLocked,
              } = getStepState(index);

              return (
                <button
                  key={index}
                  type="button"
                  className={mergeClasses(
                    styles.compactStep,
                    isLast && styles.compactStepLast,
                    isInteractive &&
                      (isNavigable ? styles.stepClickable : styles.stepLocked)
                  )}
                  onClick={
                    isInteractive ? () => handleStepClick(index) : undefined
                  }
                  disabled={isInteractive && !isNavigable}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`${step.label}${isCompleteStep || isDone ? " (completed)" : ""}`}
                >
                  {isSkippedRequired ? (
                    <DismissCircleFilled
                      className={mergeClasses(
                        styles.compactIcon,
                        styles.indicatorError
                      )}
                    />
                  ) : isDone || isCompleteStep ? (
                    <span
                      className={mergeClasses(
                        styles.compactIndicator,
                        isLocked
                          ? styles.indicatorDisabledFill
                          : styles.indicatorBrand
                      )}
                    >
                      <CheckmarkFilled className={styles.compactGlyph} />
                    </span>
                  ) : (
                    <span
                      className={mergeClasses(
                        styles.compactIndicator,
                        isActive
                          ? styles.indicatorBrand
                          : isLocked
                            ? styles.compactIndicatorDisabled
                            : styles.compactIndicatorPending
                      )}
                    >
                      {index + 1}
                    </span>
                  )}
                  {!isLast && (
                    <span
                      className={mergeClasses(
                        styles.compactConnector,
                        isCompleteStep && styles.connectorComplete
                      )}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        )}

        <div className={styles.body}>
          {!isCompact && (
            <nav className={styles.sidebar} aria-label="Wizard steps">
              {steps.map((step, index) => {
                const {
                  isActive,
                  isLast,
                  isSkippedRequired,
                  isCompleteStep,
                  isDone,
                  isInteractive,
                  isNavigable,
                  isLocked,
                } = getStepState(index);

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
                      <div className={styles.indicatorColumn}>
                        {isSkippedRequired ? (
                          <DismissCircleFilled
                            className={mergeClasses(
                              styles.indicator,
                              styles.indicatorError
                            )}
                          />
                        ) : isDone || isCompleteStep ? (
                          <span
                            className={mergeClasses(
                              styles.indicator,
                              isLocked
                                ? styles.indicatorDisabledFill
                                : styles.indicatorBrand
                            )}
                          >
                            <CheckmarkFilled
                              className={styles.indicatorGlyph}
                            />
                          </span>
                        ) : isActive ? (
                          <span
                            className={mergeClasses(
                              styles.indicator,
                              styles.indicatorBrand
                            )}
                          />
                        ) : (
                          <CircleRegular
                            className={mergeClasses(
                              styles.indicator,
                              isLocked
                                ? styles.indicatorDisabled
                                : styles.indicatorPending
                            )}
                          />
                        )}
                        {!isLast && (
                          <div
                            className={mergeClasses(
                              styles.connector,
                              isCompleteStep && styles.connectorComplete
                            )}
                          />
                        )}
                      </div>
                      <div
                        className={mergeClasses(
                          styles.stepText,
                          !isLast && styles.stepTextSpaced
                        )}
                      >
                        <Text
                          className={mergeClasses(
                            styles.stepLabel,
                            (isActive || isDone) && styles.stepLabelActive,
                            isLocked && styles.stepLabelDisabled
                          )}
                        >
                          {step.label}
                        </Text>
                        {step.details && (
                          <Text
                            className={mergeClasses(
                              styles.stepDetails,
                              isLocked && styles.stepLabelDisabled
                            )}
                          >
                            {step.details}
                          </Text>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          )}

          <div className={styles.main}>
            <div className={styles.header}>
              <SectionHeader
                meta={title}
                title={current?.stepTitle ?? current?.label}
                description={current?.description}
                actions={headerActions}
              />
              <Button
                className={styles.closeButton}
                appearance="subtle"
                icon={<DismissRegular />}
                aria-label="Close"
                onClick={onClose}
              />
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
        </div>
      </div>
    );
  }
);

Wizard.displayName = "Wizard";
