import { Button, Text, makeStyles, tokens } from "@fluentui/react-components";
import { type ReactElement, forwardRef } from "react";

type SectionHeaderActionAppearance =
  | "primary"
  | "secondary"
  | "subtle"
  | "transparent";

export interface SectionHeaderAction {
  /** Button label. */
  label?: string;

  /** Click handler. */
  onClick?: () => void;

  /** Optional leading icon. */
  icon?: ReactElement | null;

  /** Button appearance. */
  appearance?: SectionHeaderActionAppearance;

  /** Disabled state. */
  disabled?: boolean;
}

export interface SectionHeaderProps {
  /** Secondary heading shown beneath the page header. */
  title?: string;

  /** Optional supporting text for the current section. */
  description?: string;

  /** Optional compact metadata shown above the title. */
  meta?: string;

  /** Optional actions aligned to the right. */
  actions?: SectionHeaderAction[];

  /** Optional CSS class. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    width: "100%",
    minWidth: 0,
    paddingTop: tokens.spacingVerticalL,
    paddingBottom: tokens.spacingVerticalM,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },

  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalL,
    width: "100%",
    minWidth: 0,
  },

  copy: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    minWidth: 0,
    flex: 1,
  },

  meta: {
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },

  title: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },

  description: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground2,
    maxWidth: "72ch",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
    flexShrink: 0,
  },
});

/**
 * SectionHeader - Advanced h2 pattern for section context within a page.
 *
 * Use this when a standard heading needs supporting text and local actions while the main
 * page identity remains in the primary page header above.
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, description, meta, actions, className, ...rest }, ref) => {
    const styles = useStyles();
    const visibleActions =
      actions?.filter((action) => Boolean(action.label)) ?? [];
    const hasCopy = Boolean(meta || title || description);

    if (!hasCopy && visibleActions.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <div className={styles.headerRow}>
          {hasCopy ? (
            <div className={styles.copy}>
              {meta ? <Text className={styles.meta}>{meta}</Text> : null}
              {title ? (
                <Text as="h2" className={styles.title}>
                  {title}
                </Text>
              ) : null}
              {description ? (
                <Text className={styles.description}>{description}</Text>
              ) : null}
            </div>
          ) : null}

          {visibleActions.length > 0 ? (
            <div className={styles.actions}>
              {visibleActions.map((action, index) => (
                <Button
                  key={`${action.label}-${index}`}
                  appearance={action.appearance ?? "secondary"}
                  icon={action.icon}
                  disabled={action.disabled}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
