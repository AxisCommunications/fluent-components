import { Text, makeStyles, tokens } from "@fluentui/react-components";
import { type ReactNode, forwardRef } from "react";

export interface StatCardProps {
  /** Card title/label */
  title: string;

  /** Main metric value (e.g., "1,234") */
  value: string | number;

  /** Optional change indicator (e.g., "+12%" or "-5%") */
  change?: string;

  /** Positive, negative, or neutral trend */
  trend?: "up" | "down" | "neutral";

  /** Optional icon or decorator */
  icon?: ReactNode;

  /** Optional description text */
  description?: string;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingVerticalL,
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    minWidth: tokens.spacingHorizontalXXXL,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },

  icon: {
    fontSize: tokens.fontSizeBase500,
    color: tokens.colorBrandForeground1,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },

  value: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForeground1,
  },

  changeBar: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },

  change: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
  },

  changeUp: {
    color: tokens.colorStatusSuccessForeground1,
  },

  changeDown: {
    color: tokens.colorStatusDangerForeground1,
  },

  changeNeutral: {
    color: tokens.colorNeutralForeground3,
  },

  description: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
});

/**
 * StatCard - Data display card showing a metric with trend indicator.
 *
 * **Fluent Guidelines Applied:**
 * - Grid layout with Fluent token spacing
 * - Color coding for trend direction (green=up, red=down, neutral=same)
 * - Semantic structure with heading and content sections
 * - Optional icon support for visual reinforcement
 *
 * @example
 * <StatCard
 *   title="Revenue"
 *   value="$45,230"
 *   change="+12%"
 *   trend="up"
 * />
 */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      title,
      value,
      change,
      trend = "neutral",
      icon,
      description,
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();

    const trendColorMap = {
      up: styles.changeUp,
      down: styles.changeDown,
      neutral: styles.changeNeutral,
    } as const;
    const trendColor = trendColorMap[trend as keyof typeof trendColorMap];

    const trendArrowMap = {
      up: "↑",
      down: "↓",
      neutral: "→",
    } as const;
    const trendArrow = trendArrowMap[trend as keyof typeof trendArrowMap];

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <div className={styles.header}>
          <Text as="h3" className={styles.title}>
            {title}
          </Text>
          {icon && <div className={styles.icon}>{icon}</div>}
        </div>

        <div className={styles.content}>
          <div className={styles.value}>{value}</div>

          {change && (
            <div className={styles.changeBar}>
              <Text className={`${styles.change} ${trendColor}`}>
                {trendArrow} {change}
              </Text>
              {description && (
                <Text className={styles.description}>{description}</Text>
              )}
            </div>
          )}

          {!change && description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
      </div>
    );
  }
);

StatCard.displayName = "StatCard";
