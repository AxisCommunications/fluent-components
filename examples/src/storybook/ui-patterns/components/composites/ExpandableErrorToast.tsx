import {
  Button,
  Link,
  Toast,
  ToastBody,
  ToastFooter,
  ToastTitle,
  ToastTrigger,
  Toaster,
  makeStyles,
  mergeClasses,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import {
  CheckmarkRegular,
  ChevronDownRegular,
  ChevronUpRegular,
  CopyRegular,
} from "@fluentui/react-icons";
import { Fragment, forwardRef, useEffect, useRef, useState } from "react";

/**
 * The raw, machine-oriented part of a failure: what the backend actually
 * returned. Everything here is optional except `message` so the pattern can be
 * fed straight from an API error envelope.
 */
export interface SystemErrorDetails {
  /** The raw system/exception message, e.g. the `error.message` from the API. */
  message: string;

  /** Machine-readable error code, e.g. `E_DEVICE_UNREACHABLE` or `500`. */
  code?: string;

  /** Correlation / trace id that support can look up in the logs. */
  correlationId?: string;

  /** When the failure occurred. Pass an ISO string or a `Date`. */
  timestamp?: string | Date;

  /** Optional endpoint, request id, or any other free-form context line. */
  source?: string;
}

export interface ErrorToastContentProps {
  /** Short, human-readable summary of what failed. */
  title: string;

  /** One-line plain-language explanation or recovery hint. */
  description?: string;

  /** The technical payload revealed by the "Show details" action. */
  details: SystemErrorDetails;

  /** Label for the disclosure action while the details are collapsed. */
  expandLabel?: string;

  /** Label for the disclosure action while the details are expanded. */
  collapseLabel?: string;

  /** Label for the copy action. */
  copyLabel?: string;

  /** Label shown briefly after a successful copy. */
  copiedLabel?: string;

  /** Label for the dismiss action in the toast title. */
  dismissLabel?: string;

  /** Start with the technical details already revealed. */
  defaultExpanded?: boolean;

  /** Called with the exact text that was written to the clipboard. */
  onCopy?: (copiedText: string) => void;
}

const useStyles = makeStyles({
  // The Fluent Toaster is a fixed 292px column, which is too narrow for raw
  // error output. Widening the Toaster is what makes the expanded state legible.
  toaster: {
    width: "420px",
    maxWidth: "calc(100vw - 32px)",
  },

  // Toast is a 3-column grid and the title's dismiss action reserves column 3.
  // Body and footer default to column 2 only, which leaves a dead gutter down
  // the right-hand side; span to the end so the details fill the toast.
  fullWidth: {
    gridColumnEnd: 4,
  },

  footer: {
    display: "grid",
    gap: tokens.spacingVerticalSNudge,
    width: "100%",
    paddingTop: tokens.spacingVerticalS,
  },

  // Transparent buttons carry their own inline padding; pull it back so the
  // labels line up with the edges of the details surface.
  disclosure: {
    justifySelf: "end",
    marginInlineEnd: `calc(-1 * ${tokens.spacingHorizontalS})`,
  },

  copy: {
    justifySelf: "start",
    marginInlineStart: `calc(-1 * ${tokens.spacingHorizontalS})`,
  },

  details: {
    display: "grid",
    gap: tokens.spacingVerticalS,
    width: "100%",
    boxSizing: "border-box",
    maxHeight: "220px",
    overflowY: "auto",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground3,
  },

  meta: {
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    columnGap: tokens.spacingHorizontalM,
    rowGap: tokens.spacingVerticalXXS,
    margin: 0,
  },

  metaTerm: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForeground3,
    whiteSpace: "nowrap",
  },

  metaValue: {
    margin: 0,
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForeground1,
    overflowWrap: "anywhere",
  },

  message: {
    margin: 0,
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForeground1,
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  messageDivided: {
    paddingTop: tokens.spacingVerticalS,
    borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
  },

  copiedIcon: {
    color: tokens.colorPaletteGreenForeground1,
  },
});

function formatTimestamp(timestamp: string | Date): string {
  return timestamp instanceof Date ? timestamp.toISOString() : timestamp;
}

function getMetaEntries(details: SystemErrorDetails): [string, string][] {
  const entries: [string, string][] = [];

  if (details.code) {
    entries.push(["Code", details.code]);
  }
  if (details.correlationId) {
    entries.push(["Correlation ID", details.correlationId]);
  }
  if (details.source) {
    entries.push(["Source", details.source]);
  }
  if (details.timestamp) {
    entries.push(["Timestamp", formatTimestamp(details.timestamp)]);
  }

  return entries;
}

/**
 * Builds the plain-text blob handed to the clipboard. It mirrors what the
 * expanded toast shows, so what the user reads is exactly what lands in the
 * support ticket.
 */
export function formatErrorDetails(
  title: string,
  details: SystemErrorDetails
): string {
  const meta = getMetaEntries(details).map(
    ([label, value]) => `${label}: ${value}`
  );

  return [
    title,
    ...meta,
    ...(meta.length > 0 ? [""] : []),
    details.message,
  ].join("\n");
}

/**
 * ErrorToastContent — the toast body for the expandable error pattern.
 *
 * Dispatch it from any toaster you already own:
 *
 * ```tsx
 * dispatchToast(<ErrorToastContent title="..." details={...} />, {
 *   intent: "error",
 *   timeout: -1,
 *   politeness: "assertive",
 * });
 * ```
 *
 * Always pair it with `timeout: -1`. An error the user is expected to read,
 * expand, and copy must not disappear on a timer.
 */
export function ErrorToastContent({
  title,
  description,
  details,
  expandLabel = "Show details",
  collapseLabel = "Hide details",
  copyLabel = "Copy details",
  copiedLabel = "Copied",
  dismissLabel = "Dismiss",
  defaultExpanded = false,
  onCopy,
}: ErrorToastContentProps) {
  const styles = useStyles();
  const detailsId = useId("error-toast-details");
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (copyResetRef.current !== undefined) {
        window.clearTimeout(copyResetRef.current);
      }
    },
    []
  );

  const metaEntries = getMetaEntries(details);

  const onCopyClick = async () => {
    const text = formatErrorDetails(title, details);

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard is unavailable (insecure context or denied permission).
      // The details stay on screen for manual selection, so fail quietly.
      return;
    }

    onCopy?.(text);
    setCopied(true);

    if (copyResetRef.current !== undefined) {
      window.clearTimeout(copyResetRef.current);
    }
    copyResetRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Toast>
      <ToastTitle
        action={
          <ToastTrigger>
            <Link>{dismissLabel}</Link>
          </ToastTrigger>
        }
      >
        {title}
      </ToastTitle>

      {description ? (
        <ToastBody className={styles.fullWidth}>{description}</ToastBody>
      ) : null}

      <ToastFooter className={mergeClasses(styles.fullWidth, styles.footer)}>
        <Button
          className={styles.disclosure}
          appearance="transparent"
          size="small"
          icon={expanded ? <ChevronUpRegular /> : <ChevronDownRegular />}
          iconPosition="after"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? collapseLabel : expandLabel}
        </Button>

        {expanded ? (
          <>
            <div id={detailsId} className={styles.details} tabIndex={0}>
              {metaEntries.length > 0 ? (
                <dl className={styles.meta}>
                  {metaEntries.map(([label, value]) => (
                    <Fragment key={label}>
                      <dt className={styles.metaTerm}>{label}</dt>
                      <dd className={styles.metaValue}>{value}</dd>
                    </Fragment>
                  ))}
                </dl>
              ) : null}

              <pre
                className={mergeClasses(
                  styles.message,
                  metaEntries.length > 0 && styles.messageDivided
                )}
              >
                {details.message}
              </pre>
            </div>

            <Button
              className={styles.copy}
              appearance="transparent"
              size="small"
              icon={
                copied ? (
                  <CheckmarkRegular className={styles.copiedIcon} />
                ) : (
                  <CopyRegular />
                )
              }
              onClick={onCopyClick}
            >
              {copied ? copiedLabel : copyLabel}
            </Button>
          </>
        ) : null}
      </ToastFooter>
    </Toast>
  );
}

ErrorToastContent.displayName = "ErrorToastContent";

export interface ExpandableErrorToastProps extends ErrorToastContentProps {
  /** Label of the button that raises the error toast. */
  triggerLabel?: string;

  /** Where the toaster anchors itself. */
  position?: "top-start" | "top-end" | "bottom-start" | "bottom-end";

  /** Optional CSS class applied to the wrapper. */
  className?: string;
}

/**
 * ExpandableErrorToast — an error toast that reveals the underlying system
 * error on demand and lets the user copy it.
 *
 * Error toasts normally have to choose between being readable ("Couldn't save
 * the device settings") and being actionable ("HTTP 502 from
 * /api/devices/42/settings, trace 8f3c…"). This pattern does both: the toast
 * leads with the plain-language summary and keeps the raw code, correlation id
 * and system message behind a disclosure action, with a copy action so the user
 * can paste it into a support ticket.
 *
 * **Fluent Guidelines Applied:**
 * - Built on Fluent `Toaster` / `Toast` / `ToastTitle` / `ToastBody`; the
 *   dismiss affordance uses `ToastTrigger`, not a hand-rolled close button
 * - Dispatched with `intent="error"`, `timeout: -1` and
 *   `politeness="assertive"` so the failure is announced and never times out
 *   while the user is reading or copying it
 * - Disclosure button carries `aria-expanded` / `aria-controls`; the details
 *   region is focusable so it can be scrolled from the keyboard
 * - Token-driven styling only, including the monospace details surface
 *
 * @example
 * <ExpandableErrorToast
 *   title="Couldn't save device settings"
 *   description="The device rejected the configuration. Try again in a moment."
 *   details={{
 *     code: "E_DEVICE_UNREACHABLE",
 *     correlationId: "8f3c1a94-2b77-4de1-9f0c-6a1c7d0b2e55",
 *     source: "PUT /api/devices/42/settings",
 *     timestamp: "2026-08-25T09:14:02.117Z",
 *     message: "HTTP 502 Bad Gateway: upstream device did not respond within 30000 ms",
 *   }}
 * />
 */
export const ExpandableErrorToast = forwardRef<
  HTMLDivElement,
  ExpandableErrorToastProps
>(
  (
    {
      triggerLabel = "Save settings",
      position = "top-end",
      className,
      ...contentProps
    },
    ref
  ) => {
    const styles = useStyles();
    const toasterId = useId("error-toaster");
    const { dispatchToast } = useToastController(toasterId);

    return (
      <div ref={ref} className={className}>
        <Button
          appearance="primary"
          onClick={() =>
            dispatchToast(<ErrorToastContent {...contentProps} />, {
              intent: "error",
              timeout: -1,
              politeness: "assertive",
            })
          }
        >
          {triggerLabel}
        </Button>

        <Toaster
          toasterId={toasterId}
          position={position}
          className={styles.toaster}
          pauseOnHover
          pauseOnWindowBlur
        />
      </div>
    );
  }
);

ExpandableErrorToast.displayName = "ExpandableErrorToast";
