import {
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import {
  DismissRegular,
  DocumentRegular,
  TabsRegular,
} from "@fluentui/react-icons";
import {
  Fragment,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";

/** Static class names targeted by descendant selectors in `useStyles`. */
const DISMISS_CLASS = "axis-DynamicTab__dismiss";
const MODIFIED_CLASS = "axis-DynamicTab__modified";

/** A single entry in a `DynamicTabList`. */
export interface DynamicTabItem {
  /** Stable identity of the tab; also the value passed to the callbacks. */
  id: string;

  /** Visible tab label. Truncates with an ellipsis at the fixed tab width. */
  label: string;

  /** Leading icon. Defaults to a 16px document glyph. */
  icon?: ReactElement | null;

  /**
   * Marks the tab's document as having unsaved changes. Renders a dot that is
   * replaced by the dismiss affordance while the tab is hovered.
   */
  modified?: boolean;

  /** Renders the tab as non-interactive. */
  disabled?: boolean;

  /** Set to `false` to remove the dismiss affordance. Defaults to `true`. */
  closable?: boolean;

  /** `id` of the panel this tab controls, wired up as `aria-controls`. */
  panelId?: string;
}

/** An entry in a tab's right-click (context) menu. */
export interface DynamicTabMenuItem {
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

  /** Renders a separator above this item. */
  dividerBefore?: boolean;
}

export interface DynamicTabListProps {
  /** Open documents, in visual order. */
  tabs: DynamicTabItem[];

  /** `id` of the active tab. Leave undefined for a list with no selection. */
  selectedId?: string;

  /** Fired when a tab is activated by pointer or keyboard. */
  onTabSelect?: (id: string) => void;

  /** Fired when a tab's dismiss affordance, middle click or `Delete` is used. */
  onTabClose?: (id: string) => void;

  /** Fired by the trailing new-tab button. Omit to hide the button. */
  onAddTab?: () => void;

  /** Accessible name and tooltip for the new-tab button. */
  addTabLabel?: string;

  /**
   * Builds the right-click menu for a tab. Return an empty array to suppress
   * the menu for that tab.
   */
  getContextMenuItems?: (tab: DynamicTabItem) => DynamicTabMenuItem[];

  /**
   * Background treatment.
   * - `inherit` (default): transparent, adopting the surface behind it.
   * - `surface`: filled with the neutral layer-1 background.
   */
  appearance?: "inherit" | "surface";

  /** Fixed width of every tab, in pixels. Defaults to `180`. */
  tabWidth?: number;

  /** Accessible name for the tab list. */
  ariaLabel?: string;

  /** Optional CSS class applied to the root element. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minWidth: 0,
    height: "44px",
    borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
  },

  rootSurface: {
    backgroundColor: tokens.colorNeutralBackground1,
  },

  strip: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    minWidth: 0,
    height: "100%",
    paddingLeft: tokens.spacingHorizontalS,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  tab: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    columnGap: tokens.spacingHorizontalXS,
    height: "32px",
    paddingLeft: tokens.spacingHorizontalS,
    paddingRight: tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorSubtleBackground,
    color: tokens.colorNeutralForeground1,
    cursor: "pointer",
    userSelect: "none",
    ":hover": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
    ":active": {
      backgroundColor: tokens.colorSubtleBackgroundPressed,
    },
    [`:hover .${DISMISS_CLASS}`]: {
      display: "flex",
    },
    [`:hover .${MODIFIED_CLASS}`]: {
      display: "none",
    },
    ":focus-visible": {
      outline: `${tokens.strokeWidthThick} solid ${tokens.colorStrokeFocus2}`,
      outlineOffset: `calc(${tokens.strokeWidthThick} * -1)`,
    },
  },

  tabSelected: {
    backgroundColor: tokens.colorSubtleBackgroundSelected,
    ":hover": {
      backgroundColor: tokens.colorSubtleBackgroundSelected,
    },
  },

  tabDisabled: {
    color: tokens.colorNeutralForegroundDisabled,
    cursor: "not-allowed",
    ":hover": {
      backgroundColor: tokens.colorSubtleBackground,
    },
    ":active": {
      backgroundColor: tokens.colorSubtleBackground,
    },
    [`:hover .${MODIFIED_CLASS}`]: {
      display: "block",
    },
  },

  // 1px hairline straddling the boundary with the next tab. Selected tabs own
  // a filled background, so they drop it.
  tabDivider: {
    "::after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: tokens.strokeWidthThin,
      height: "20px",
      backgroundColor: tokens.colorNeutralStroke2,
    },
  },

  slot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "20px",
    height: "20px",
  },

  label: {
    flexGrow: 1,
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightRegular,
    textAlign: "start",
  },

  labelSelected: {
    fontWeight: tokens.fontWeightSemibold,
  },

  modified: {
    display: "block",
    width: "6px",
    height: "6px",
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorNeutralForeground3,
  },

  dismiss: {
    display: "none",
    borderRadius: tokens.borderRadiusSmall,
    color: tokens.colorNeutralForeground2,
    ":hover": {
      backgroundColor: tokens.colorSubtleBackgroundHover,
    },
  },

  dismissVisible: {
    display: "flex",
  },

  addSlot: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    paddingLeft: tokens.spacingHorizontalXXS,
    paddingRight: tokens.spacingHorizontalS,
  },

  visuallyHidden: {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

/**
 * DynamicTabList - a document tab bar for workspaces that open, close and
 * rename objects at runtime.
 *
 * Unlike Fluent's `TabList`, tabs here are transient: each one carries a file
 * icon, an unsaved-changes indicator, a dismiss affordance and an optional
 * right-click menu, and a trailing button opens a new tab. Selected tabs use a
 * semibold label over the subtle-selected background; the remaining tabs are
 * separated by hairline dividers.
 *
 * Per the design spec: a selected tab always exposes its dismiss affordance, a
 * modified tab always shows its dot (even while selected), and hovering swaps
 * the dot for the dismiss affordance.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives and tokens
 * - `tablist`/`tab` semantics with roving tab stop, arrow/Home/End navigation
 *   and automatic activation
 * - The dismiss affordance is presentational rather than a nested button,
 *   because ARIA treats `tab` children as presentational; keyboard users close
 *   the focused tab with `Delete` or `Backspace`, or via the context menu
 *   (middle click also closes a tab)
 *
 * @example
 * <DynamicTabList
 *   tabs={tabs}
 *   selectedId={selectedId}
 *   onTabSelect={setSelectedId}
 *   onTabClose={close}
 *   onAddTab={openBlankTab}
 *   ariaLabel="Open documents"
 * />
 */
export const DynamicTabList = forwardRef<HTMLDivElement, DynamicTabListProps>(
  (
    {
      tabs,
      selectedId,
      onTabSelect,
      onTabClose,
      onAddTab,
      addTabLabel = "New tab",
      getContextMenuItems,
      appearance = "inherit",
      tabWidth = 180,
      ariaLabel = "Open documents",
      className,
    },
    ref
  ) => {
    const styles = useStyles();
    const stripRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!selectedId) {
        return;
      }
      stripRef.current
        ?.querySelector<HTMLElement>(
          `[data-tab-id="${CSS.escape(selectedId)}"]`
        )
        ?.scrollIntoView({ block: "nearest", inline: "nearest" });
    }, [selectedId]);

    const moveFocus = useCallback(
      (from: HTMLElement, delta: number | "first" | "last") => {
        const enabled = Array.from(
          stripRef.current?.querySelectorAll<HTMLElement>(
            '[role="tab"]:not([aria-disabled="true"])'
          ) ?? []
        );
        if (enabled.length === 0) {
          return;
        }

        let next: HTMLElement | undefined;
        if (delta === "first") {
          next = enabled[0];
        } else if (delta === "last") {
          next = enabled[enabled.length - 1];
        } else {
          const current = enabled.indexOf(from);
          next = enabled[(current + delta + enabled.length) % enabled.length];
        }

        if (!next) {
          return;
        }
        next.focus();
        next.scrollIntoView({ block: "nearest", inline: "nearest" });
        const id = next.dataset.tabId;
        if (id) {
          onTabSelect?.(id);
        }
      },
      [onTabSelect]
    );

    const handleKeyDown = (
      event: KeyboardEvent<HTMLDivElement>,
      tab: DynamicTabItem
    ) => {
      const target = event.currentTarget;
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          moveFocus(target, 1);
          break;
        case "ArrowLeft":
          event.preventDefault();
          moveFocus(target, -1);
          break;
        case "Home":
          event.preventDefault();
          moveFocus(target, "first");
          break;
        case "End":
          event.preventDefault();
          moveFocus(target, "last");
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          onTabSelect?.(tab.id);
          break;
        case "Delete":
        case "Backspace":
          if (tab.closable !== false) {
            event.preventDefault();
            onTabClose?.(tab.id);
          }
          break;
        default:
          break;
      }
    };

    const firstEnabledId = tabs.find((tab) => !tab.disabled)?.id;
    const hasSelection = tabs.some((tab) => tab.id === selectedId);

    const renderTab = (tab: DynamicTabItem): ReactElement => {
      const isSelected = tab.id === selectedId;
      const isClosable = tab.closable !== false;
      const showDismiss = isClosable && isSelected && !tab.modified;
      const isTabStop = hasSelection ? isSelected : tab.id === firstEnabledId;

      const handleClose = (event: MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        onTabClose?.(tab.id);
      };

      const handleAuxClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.button === 1 && isClosable) {
          event.preventDefault();
          onTabClose?.(tab.id);
        }
      };

      return (
        <div
          key={tab.id}
          className={mergeClasses(
            "axis-DynamicTab",
            styles.tab,
            isSelected && styles.tabSelected,
            !isSelected && styles.tabDivider,
            tab.disabled && styles.tabDisabled
          )}
          style={{ width: `${tabWidth}px` }}
          role="tab"
          data-tab-id={tab.id}
          aria-selected={isSelected}
          aria-disabled={tab.disabled || undefined}
          aria-controls={tab.panelId}
          aria-keyshortcuts={isClosable ? "Delete" : undefined}
          tabIndex={tab.disabled ? -1 : isTabStop ? 0 : -1}
          onClick={tab.disabled ? undefined : () => onTabSelect?.(tab.id)}
          onAuxClick={tab.disabled ? undefined : handleAuxClick}
          onMouseDown={
            tab.disabled
              ? undefined
              : // Suppress the middle-click autoscroll cursor.
                (event) => event.button === 1 && event.preventDefault()
          }
          onKeyDown={
            tab.disabled ? undefined : (event) => handleKeyDown(event, tab)
          }
        >
          <span className={styles.slot} aria-hidden="true">
            {tab.icon ?? <DocumentRegular fontSize={16} />}
          </span>

          <span
            className={mergeClasses(
              styles.label,
              isSelected && styles.labelSelected
            )}
          >
            {tab.label}
          </span>

          {tab.modified && (
            <span className={styles.visuallyHidden}>unsaved changes</span>
          )}

          {(tab.modified || isClosable) && (
            <span className={styles.slot}>
              {tab.modified && (
                <span
                  className={mergeClasses(MODIFIED_CLASS, styles.modified)}
                  aria-hidden="true"
                />
              )}
              {isClosable && !tab.disabled && (
                <span
                  className={mergeClasses(
                    DISMISS_CLASS,
                    styles.slot,
                    styles.dismiss,
                    showDismiss && styles.dismissVisible
                  )}
                  aria-hidden="true"
                  onClick={handleClose}
                  onPointerDown={(event) => event.stopPropagation()}
                >
                  <DismissRegular fontSize={12} />
                </span>
              )}
            </span>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={mergeClasses(
          "axis-DynamicTabList",
          styles.root,
          appearance === "surface" && styles.rootSurface,
          className
        )}
      >
        <div
          ref={stripRef}
          className={styles.strip}
          role="tablist"
          aria-label={ariaLabel}
        >
          {tabs.map((tab) => {
            const menuItems = getContextMenuItems?.(tab) ?? [];
            const tabNode = renderTab(tab);

            if (menuItems.length === 0 || tab.disabled) {
              return tabNode;
            }

            return (
              <Menu key={tab.id} openOnContext positioning="below-start">
                <MenuTrigger disableButtonEnhancement>{tabNode}</MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    {menuItems.map((item) => (
                      <Fragment key={item.key}>
                        {item.dividerBefore && <MenuDivider />}
                        <MenuItem
                          icon={item.icon ?? undefined}
                          disabled={item.disabled}
                          onClick={item.onClick}
                        >
                          {item.label}
                        </MenuItem>
                      </Fragment>
                    ))}
                  </MenuList>
                </MenuPopover>
              </Menu>
            );
          })}
        </div>

        {onAddTab && (
          <div className={styles.addSlot}>
            <Tooltip content={addTabLabel} relationship="label" withArrow>
              <Button
                appearance="subtle"
                icon={<TabsRegular fontSize={16} />}
                aria-label={addTabLabel}
                onClick={onAddTab}
              />
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
);

DynamicTabList.displayName = "DynamicTabList";
