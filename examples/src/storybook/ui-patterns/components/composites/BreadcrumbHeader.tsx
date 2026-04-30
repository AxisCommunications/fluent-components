import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { AgentsColor } from "@fluentui/react-icons";
import { type ReactNode, forwardRef } from "react";

export interface BreadcrumbHeaderProps {
  /** Breadcrumb items displayed before the title. */
  breadcrumbs: Array<{ label: string; onClick?: () => void }>;

  /** Main title shown after the breadcrumb trail. */
  title: string;

  /** Optional leading icon for the title area. */
  icon?: ReactNode;

  /** Accessible label for breadcrumb navigation. */
  ariaLabel?: string;

  /** Optional CSS class. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalXXL,
    minHeight: tokens.spacingVerticalXXL,
    width: "fit-content",
    maxWidth: "100%",
    overflowX: "auto",
  },

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
  },

  breadcrumbItem: {
    display: "flex",
    alignItems: "center",
  },

  crumbButton: {
    minWidth: "auto",
    paddingLeft: tokens.spacingHorizontalSNudge,
    paddingRight: tokens.spacingHorizontalSNudge,
    paddingTop: tokens.spacingVerticalSNudge,
    paddingBottom: tokens.spacingVerticalSNudge,
    backgroundColor: "transparent",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderBottomStyle: "none",
    borderLeftStyle: "none",
    boxShadow: "none",
    borderRadius: tokens.borderRadiusSmall,
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,

    ":hover": {
      backgroundColor: "transparent",
      color: tokens.colorNeutralForeground2Hover,
    },

    ":active": {
      backgroundColor: "transparent",
      color: tokens.colorNeutralForeground2Pressed,
    },

    ":focus-visible": {
      outlineStyle: "none",
      boxShadow: "none",
    },
  },

  divider: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase400,
    paddingLeft: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalXXS,
  },

  titleGroup: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalSNudge,
    paddingLeft: tokens.spacingHorizontalSNudge,
    minWidth: 0,
  },

  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
    width: "20px",
    height: "20px",
  },

  title: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

/**
 * BreadcrumbHeader - Inline breadcrumb trail followed by a section title.
 *
 * **Fluent Guidelines Applied:**
 * - Uses Fluent breadcrumb primitives and iconography only
 * - Token-driven spacing, typography, and color styling
 * - Supports keyboard-accessible breadcrumb actions
 * - Keeps the compact inline layout from the Figma reference
 */
export const BreadcrumbHeader = forwardRef<
  HTMLDivElement,
  BreadcrumbHeaderProps
>(
  (
    { breadcrumbs, title, icon, ariaLabel = "Breadcrumb", className, ...rest },
    ref
  ) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <nav aria-label={ariaLabel}>
          <Breadcrumb className={styles.breadcrumb}>
            {breadcrumbs.map((crumb, index) => (
              <BreadcrumbItem
                key={`${crumb.label}-${index}`}
                className={styles.breadcrumbItem}
              >
                <BreadcrumbButton
                  className={styles.crumbButton}
                  onClick={crumb.onClick}
                  current={index === breadcrumbs.length - 1 ? undefined : false}
                >
                  {crumb.label}
                </BreadcrumbButton>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbDivider className={styles.divider}>
                    /
                  </BreadcrumbDivider>
                )}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </nav>

        <div className={styles.titleGroup}>
          <span className={styles.titleIcon} aria-hidden="true">
            {icon ?? <AgentsColor />}
          </span>
          <Text className={styles.title}>{title}</Text>
        </div>
      </div>
    );
  }
);

BreadcrumbHeader.displayName = "BreadcrumbHeader";
