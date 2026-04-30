import { Button, Text, makeStyles, tokens } from "@fluentui/react-components";
import { type ReactNode, forwardRef } from "react";

export interface InfoCardProps {
  /** Card title */
  title: string;

  /** Main description/content text */
  description: string;

  /** Optional icon/image element */
  icon?: ReactNode;

  /** Optional action button */
  actionLabel?: string;

  /** Callback for action button */
  onAction?: () => void;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    maxWidth: tokens.spacingHorizontalXXXL,
  },

  header: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "flex-start",
  },

  icon: {
    fontSize: tokens.fontSizeBase600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textContent: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    flex: 1,
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
    lineHeight: tokens.lineHeightBase400,
  },

  footer: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
  },
});

/**
 * InfoCard - Content card with title, description, optional icon, and action button.
 *
 * **Fluent Guidelines Applied:**
 * - Semantic structure with heading and body sections
 * - Flexible icon positioning for visual context
 * - Primary action button for CTA support
 * - Token-driven spacing and colors
 *
 * @example
 * <InfoCard
 *   icon={<div>📊</div>}
 *   title="Workspace Ready"
 *   description="Your workspace has been created and is ready to use."
 *   actionLabel="Get Started"
 *   onAction={() => navigate('/workspace')}
 * />
 */
export const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(
  (
    { title, description, icon, actionLabel, onAction, className, ...rest },
    ref
  ) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div className={styles.textContent}>
            <Text as="h2" className={styles.title}>
              {title}
            </Text>
            <Text className={styles.description}>{description}</Text>
          </div>
        </div>

        {actionLabel && (
          <div className={styles.footer}>
            <Button appearance="primary" onClick={onAction}>
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

InfoCard.displayName = "InfoCard";
