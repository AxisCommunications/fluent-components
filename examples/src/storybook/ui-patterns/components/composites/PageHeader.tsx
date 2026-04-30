import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export interface PageHeaderProps {
  /** Breadcrumb items: array of { label, onClick? } */
  breadcrumbs?: Array<{ label: string; onClick?: () => void }>;

  /** Main page title */
  title: string;

  /** Optional subtitle/description */
  description?: string;

  /** Optional action buttons */
  actions?: Array<{
    label: string;
    onClick: () => void;
    appearance?: "primary" | "secondary";
  }>;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalL,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },

  breadcrumbRow: {
    display: "flex",
    alignItems: "center",
  },

  titleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalL,
  },

  titleSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
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
  },

  actionsRow: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    alignItems: "center",
  },

  breadcrumbItem: {
    display: "flex",
    alignItems: "center",
  },
});

/**
 * PageHeader - Top section with breadcrumb, title, and action buttons.
 *
 * **Fluent Guidelines Applied:**
 * - Semantic `<nav>` and heading elements
 * - Clear typography hierarchy (title > description)
 * - Action buttons grouped on the right
 * - Token-based spacing and borders
 *
 * @example
 * <PageHeader
 *   breadcrumbs={[
 *     { label: 'Home', onClick: () => navigate('/') },
 *     { label: 'Workspaces' }
 *   ]}
 *   title="My Workspace"
 *   description="Production data workspace"
 *   actions={[
 *     { label: 'Save', onClick: handleSave, appearance: 'primary' },
 *     { label: 'Cancel', onClick: handleCancel }
 *   ]}
 * />
 */
export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ breadcrumbs, title, description, actions, className, ...rest }, ref) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        {/* Breadcrumb navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbRow} aria-label="Breadcrumb">
            <Breadcrumb>
              {breadcrumbs.map(
                (
                  crumb: { label: string; onClick?: () => void },
                  idx: number
                ) => (
                  <BreadcrumbItem key={idx} className={styles.breadcrumbItem}>
                    <BreadcrumbButton onClick={crumb.onClick}>
                      {crumb.label}
                    </BreadcrumbButton>
                    {idx < breadcrumbs.length - 1 && <BreadcrumbDivider />}
                  </BreadcrumbItem>
                )
              )}
            </Breadcrumb>
          </nav>
        )}

        {/* Title row with actions */}
        <div className={styles.titleRow}>
          <div className={styles.titleSection}>
            <Text as="h1" className={styles.title}>
              {title}
            </Text>
            {description && (
              <Text className={styles.description}>{description}</Text>
            )}
          </div>

          {actions && actions.length > 0 && (
            <div className={styles.actionsRow}>
              {actions.map(
                (
                  action: {
                    label: string;
                    onClick: () => void;
                    appearance?: "primary" | "secondary";
                  },
                  idx: number
                ) => (
                  <Button
                    key={idx}
                    appearance={action.appearance || "secondary"}
                    onClick={action.onClick}
                  >
                    {action.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

PageHeader.displayName = "PageHeader";
