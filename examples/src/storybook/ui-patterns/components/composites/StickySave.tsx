import {
  Button,
  Spinner,
  Text,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { SaveRegular } from "@fluentui/react-icons";
import { type ReactNode, forwardRef } from "react";

export interface StickySaveProps {
  /**
   * Controls whether the bar is shown. Drive this from the form's "dirty"
   * state so the bar slides into view as soon as the user makes a change.
   */
  visible: boolean;

  /** Called when the primary save action is triggered. */
  onSave: () => void;

  /** Called when the cancel / discard action is triggered. */
  onCancel: () => void;

  /** Label for the primary save button. */
  saveLabel?: string;

  /** Label for the cancel button. */
  cancelLabel?: string;

  /**
   * Message shown on the leading edge of the bar, e.g. an unsaved-changes
   * notice. Pass a string or custom node; omit to hide.
   */
  message?: ReactNode;

  /**
   * When `true`, the save button shows a spinner and both actions are
   * disabled while the save request is in flight.
   */
  saving?: boolean;

  /**
   * Disables the save button, e.g. while the form is invalid. The cancel
   * action stays available so the user can always discard changes.
   */
  saveDisabled?: boolean;

  /** Accessible label for the bar region. */
  ariaLabel?: string;

  /** Optional CSS class applied to the bar. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    position: "sticky",
    bottom: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    boxSizing: "border-box",
    width: "100%",
    minHeight: "56px",
    paddingBlock: tokens.spacingVerticalS,
    paddingInline: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground1,
    borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    boxShadow: tokens.shadow16,
    // Slide-up + fade-in when appearing.
    transitionProperty: "transform, opacity",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveDecelerateMax,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "1ms",
    },
  },

  hidden: {
    transform: "translateY(100%)",
    opacity: 0,
    pointerEvents: "none",
    transitionTimingFunction: tokens.curveAccelerateMax,
  },

  visible: {
    transform: "translateY(0)",
    opacity: 1,
  },

  message: {
    minWidth: 0,
    color: tokens.colorNeutralForeground2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexShrink: 0,
  },
});

/**
 * StickySave — a persistent save/cancel bar for long forms.
 *
 * Pins to the bottom of its scroll container (`position: sticky`) so the save
 * and cancel actions stay reachable without scrolling to the end of a form
 * that is taller than the viewport. Slides into view when `visible` becomes
 * `true` (drive this from the form's dirty state) and slides out when the
 * changes are saved or discarded.
 *
 * **Fluent Guidelines Applied:**
 * - Token-driven styling via `makeStyles` + Fluent `tokens` exclusively
 * - Accessibility: bar is a labelled `role="region"`; hidden from AT and
 *   keyboard focus (`aria-hidden`, `pointer-events: none`) while not visible
 * - Respects `prefers-reduced-motion`
 *
 * @example
 * const [dirty, setDirty] = useState(false);
 * <StickySave
 *   visible={dirty}
 *   message="You have unsaved changes"
 *   onSave={() => saveForm().then(() => setDirty(false))}
 *   onCancel={() => resetForm()}
 * />
 */
export const StickySave = forwardRef<HTMLDivElement, StickySaveProps>(
  (
    {
      visible,
      onSave,
      onCancel,
      saveLabel = "Save",
      cancelLabel = "Cancel",
      message = "You have unsaved changes",
      saving = false,
      saveDisabled = false,
      ariaLabel = "Unsaved changes",
      className,
    },
    ref
  ) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        aria-hidden={!visible}
        inert={!visible ? true : undefined}
        className={mergeClasses(
          styles.root,
          visible ? styles.visible : styles.hidden,
          className
        )}
      >
        {message ? (
          <Text className={styles.message} truncate wrap={false}>
            {message}
          </Text>
        ) : (
          <span />
        )}

        <div className={styles.actions}>
          <Button
            appearance="secondary"
            onClick={onCancel}
            disabled={saving}
            tabIndex={visible ? 0 : -1}
          >
            {cancelLabel}
          </Button>
          <Button
            appearance="primary"
            icon={saving ? <Spinner size="tiny" /> : <SaveRegular />}
            onClick={onSave}
            disabled={saving || saveDisabled}
            tabIndex={visible ? 0 : -1}
          >
            {saveLabel}
          </Button>
        </div>
      </div>
    );
  }
);

StickySave.displayName = "StickySave";
