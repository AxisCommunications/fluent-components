import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { ChevronDownRegular } from "@fluentui/react-icons";
import { type ReactElement, forwardRef } from "react";

type VideoControlBarAppearance = "media" | "subtle";

export interface VideoControlBarMenuItem {
  /** Stable identity for the menu entry. */
  key: string;

  /** Visible menu item label. */
  label: string;

  /** Optional leading icon. */
  icon?: ReactElement | null;

  /** Selection handler. */
  onClick?: () => void;

  /** Disabled state. */
  disabled?: boolean;
}

export interface VideoControlBarItem {
  /** Stable identity for the control. */
  key: string;

  /** Accessible name used for both the tooltip and `aria-label`. */
  label: string;

  /** Icon rendered inside the control. Omit when `text` is provided. */
  icon?: ReactElement | null;

  /** Short text rendered instead of an icon (e.g. `1:1`). */
  text?: string;

  /** Click handler. Ignored when `menuItems` is provided. */
  onClick?: () => void;

  /** Disabled state. */
  disabled?: boolean;

  /**
   * Pressed / toggled state. Renders a persistent highlight and sets
   * `aria-pressed` so assistive tech can announce the on state.
   */
  active?: boolean;

  /** Emphasis. `danger` tints the control (e.g. an active recording dot). */
  tone?: "default" | "danger";

  /**
   * Renders a trailing chevron and, when `menuItems` are supplied, opens a
   * Fluent menu on click. Sets `aria-haspopup`.
   */
  hasMenu?: boolean;

  /** Optional dropdown entries; implies `hasMenu`. */
  menuItems?: VideoControlBarMenuItem[];
}

export interface VideoControlBarGroup {
  /** Stable identity for the group. */
  key: string;

  /** Controls belonging to this group, in visual order. */
  items: VideoControlBarItem[];

  /**
   * When true, the group's controls share a single rounded background and are
   * separated by vertical dividers (a segmented control cluster).
   */
  segmented?: boolean;
}

export interface VideoControlBarProps {
  /** Groups aligned to the leading (left) edge. */
  start?: VideoControlBarGroup[];

  /** Groups aligned to the trailing (right) edge. */
  end?: VideoControlBarGroup[];

  /**
   * Visual context.
   * - `media` (default): dark scrim intended to sit over a live video feed.
   * - `subtle`: theme-aware bar for placement on a page surface.
   */
  appearance?: VideoControlBarAppearance;

  /** Accessible name for the toolbar landmark. */
  ariaLabel?: string;

  /** Optional CSS class applied to the root element. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    paddingLeft: tokens.spacingHorizontalL,
    paddingRight: tokens.spacingHorizontalL,
    paddingTop: tokens.spacingVerticalS,
    paddingBottom: tokens.spacingVerticalS,
  },

  rootMedia: {
    backgroundColor: "#292929",
    color: "#ffffff",
    borderRadius: tokens.borderRadiusMedium,
  },

  rootSubtle: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
  },

  side: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
  },

  sideEnd: {
    justifyContent: "flex-end",
  },

  group: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXXS,
  },

  segment: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    borderRadius: tokens.borderRadiusMedium,
    overflow: "hidden",
  },

  segmentMedia: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },

  segmentSubtle: {
    backgroundColor: tokens.colorNeutralBackground3,
  },

  divider: {
    width: "1px",
    height: "20px",
    flexShrink: 0,
  },

  dividerMedia: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },

  dividerSubtle: {
    backgroundColor: tokens.colorNeutralStroke2,
  },

  mediaButton: {
    color: "#ffffff",
    minWidth: "32px",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "&:hover:active": {
      color: "#ffffff",
      backgroundColor: "rgba(255, 255, 255, 0.16)",
    },
  },

  mediaButtonActive: {
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },

  subtleButton: {
    minWidth: "32px",
  },

  subtleButtonActive: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
  },

  danger: {
    color: tokens.colorPaletteRedForeground1,
    "&:hover": {
      color: tokens.colorPaletteRedForeground1,
    },
  },

  buttonText: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
  },
});

interface ControlButtonProps {
  item: VideoControlBarItem;
  appearance: VideoControlBarAppearance;
}

function ControlButton({ item, appearance }: ControlButtonProps) {
  const styles = useStyles();
  const isMedia = appearance === "media";
  const hasMenu = item.hasMenu || (item.menuItems?.length ?? 0) > 0;

  const buttonClassName = mergeClasses(
    isMedia ? styles.mediaButton : styles.subtleButton,
    item.active &&
      (isMedia ? styles.mediaButtonActive : styles.subtleButtonActive),
    item.tone === "danger" && styles.danger
  );

  const button = (
    <Button
      appearance="transparent"
      className={buttonClassName}
      icon={item.text ? undefined : (item.icon ?? undefined)}
      disabled={item.disabled}
      aria-label={item.label}
      aria-pressed={item.active ? true : undefined}
      aria-haspopup={hasMenu ? "menu" : undefined}
      onClick={item.menuItems?.length ? undefined : item.onClick}
    >
      {item.text ? (
        <span className={styles.buttonText}>{item.text}</span>
      ) : null}
      {hasMenu ? <ChevronDownRegular fontSize={16} /> : null}
    </Button>
  );

  if (item.menuItems?.length) {
    return (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Tooltip content={item.label} relationship="label" withArrow>
            {button}
          </Tooltip>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            {item.menuItems.map((entry) => (
              <MenuItem
                key={entry.key}
                icon={entry.icon ?? undefined}
                disabled={entry.disabled}
                onClick={entry.onClick}
              >
                {entry.label}
              </MenuItem>
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  }

  return (
    <Tooltip content={item.label} relationship="label" withArrow>
      {button}
    </Tooltip>
  );
}

interface ControlGroupProps {
  group: VideoControlBarGroup;
  appearance: VideoControlBarAppearance;
}

function ControlGroup({ group, appearance }: ControlGroupProps) {
  const styles = useStyles();
  const isMedia = appearance === "media";

  if (group.segmented) {
    return (
      <div
        className={mergeClasses(
          styles.segment,
          isMedia ? styles.segmentMedia : styles.segmentSubtle
        )}
      >
        {group.items.map((item, index) => (
          <div key={item.key} className={styles.group}>
            {index > 0 ? (
              <span
                aria-hidden
                className={mergeClasses(
                  styles.divider,
                  isMedia ? styles.dividerMedia : styles.dividerSubtle
                )}
              />
            ) : null}
            <ControlButton item={item} appearance={appearance} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.group}>
      {group.items.map((item) => (
        <ControlButton key={item.key} item={item} appearance={appearance} />
      ))}
    </div>
  );
}

/**
 * VideoControlBar — a toolbar of grouped icon controls for a live video feed.
 *
 * Controls are arranged into leading (`start`) and trailing (`end`) groups.
 * Groups may be `segmented` to cluster related controls behind a shared
 * background with vertical dividers (e.g. record + storage, or the live-view
 * resolution / framing cluster). Every control exposes a tooltip and an
 * `aria-label`, and the root renders as a `toolbar` landmark.
 */
export const VideoControlBar = forwardRef<HTMLDivElement, VideoControlBarProps>(
  (
    {
      start = [],
      end = [],
      appearance = "media",
      ariaLabel = "Video controls",
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const isMedia = appearance === "media";

    return (
      <div
        ref={ref}
        role="toolbar"
        aria-label={ariaLabel}
        className={mergeClasses(
          styles.root,
          isMedia ? styles.rootMedia : styles.rootSubtle,
          className
        )}
        {...rest}
      >
        <div className={styles.side}>
          {start.map((group) => (
            <ControlGroup
              key={group.key}
              group={group}
              appearance={appearance}
            />
          ))}
        </div>
        <div className={mergeClasses(styles.side, styles.sideEnd)}>
          {end.map((group) => (
            <ControlGroup
              key={group.key}
              group={group}
              appearance={appearance}
            />
          ))}
        </div>
      </div>
    );
  }
);

VideoControlBar.displayName = "VideoControlBar";
