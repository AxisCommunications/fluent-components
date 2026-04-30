import { Button, Text, makeStyles, tokens } from "@fluentui/react-components";
import { type ReactNode, forwardRef } from "react";

export interface EmptyStateProps {
  /** Icon or illustration element */
  icon?: ReactNode;

  /** Main headline */
  title: string;

  /** Descriptive subtitle */
  description: string;

  /** Optional call-to-action button */
  ctaLabel?: string;

  /** Callback for CTA button */
  onCTA?: () => void;

  /** Optional secondary text */
  secondaryText?: string;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalL,
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalL}`,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
    border: `${tokens.strokeWidthThick} dashed ${tokens.colorNeutralStroke1}`,
    minHeight: tokens.spacingHorizontalXXXL,
    textAlign: "center",
  },

  icon: {
    fontSize: tokens.fontSizeHero800,
    lineHeight: 1,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    maxWidth: tokens.spacingHorizontalXXXL,
  },

  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },

  description: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
    margin: 0,
    lineHeight: tokens.lineHeightBase400,
  },

  secondaryText: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    fontStyle: "italic",
    margin: 0,
  },

  ctaSection: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    justifyContent: "center",
  },
});

/**
 * EmptyState - Hero message for empty content areas with optional CTA.
 *
 * **Fluent Guidelines Applied:**
 * - Centered layout with visual hierarchy
 * - Large icon/illustration support
 * - Clear typography (title > description > secondary)
 * - Primary action button for CTA
 * - Token-based spacing and dashed border for distinction
 *
 * @example
 * <EmptyState
 *   icon="📁"
 *   title="No Files Found"
 *   description="There are no files in this folder. Create one to get started."
 *   ctaLabel="Create File"
 *   onCTA={handleCreateFile}
 *   secondaryText="Or upload an existing file"
 * />
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      title,
      description,
      ctaLabel,
      onCTA,
      secondaryText,
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {icon && <div className={styles.icon}>{icon}</div>}

        <div className={styles.content}>
          <Text as="h2" className={styles.title}>
            {title}
          </Text>
          <Text className={styles.description}>{description}</Text>

          {ctaLabel && (
            <div className={styles.ctaSection}>
              <Button appearance="primary" onClick={onCTA}>
                {ctaLabel}
              </Button>
            </div>
          )}

          {secondaryText && (
            <Text className={styles.secondaryText}>{secondaryText}</Text>
          )}
        </div>
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
