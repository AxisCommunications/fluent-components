import {
  Badge,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tab,
  TabList,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { CloudOffRegular, MoreHorizontalRegular } from "@fluentui/react-icons";
import {
  type ReactNode,
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BreadcrumbHeader,
  type BreadcrumbHeaderProps,
} from "./BreadcrumbHeader";

type HeaderActionAppearance =
  | "primary"
  | "secondary"
  | "subtle"
  | "transparent";

export interface FullPageHeaderStatus {
  /** Short status label displayed above the tab row. */
  label: string;

  /** Optional helper text shown next to the badge. */
  meta?: string;

  /** Optional status icon. */
  icon?: React.ReactElement | null;

  /** Fluent badge color. */
  color?:
    | "brand"
    | "danger"
    | "important"
    | "informative"
    | "severe"
    | "subtle"
    | "success"
    | "warning";
}

export interface FullPageHeaderTab {
  /** Stable tab value for selection. */
  value: string;

  /** Display label. */
  label: string;

  /** Optional disabled state. */
  disabled?: boolean;
}

export interface FullPageHeaderAction {
  /** Button label. */
  label: string;

  /** Click handler. */
  onClick?: () => void;

  /** Optional Fluent icon. */
  icon?: React.ReactElement | null;

  /** Button appearance. */
  appearance?: HeaderActionAppearance;
}

export interface FullPageHeaderProps {
  /** Breadcrumb header content. */
  breadcrumbs: BreadcrumbHeaderProps["breadcrumbs"];

  /** Main page title. */
  title: string;

  /** Optional title icon. */
  icon?: ReactNode;

  /** Optional status line shown under the breadcrumb title row. */
  status?: FullPageHeaderStatus;

  /** Optional right-side action buttons. */
  actions?: FullPageHeaderAction[];

  /** Optional tab navigation shown below the header row. */
  tabs?: FullPageHeaderTab[];

  /** Controlled selected tab value. */
  selectedTab?: string;

  /** Default selected tab value for uncontrolled usage. */
  defaultSelectedTab?: string;

  /** Tab selection callback. */
  onTabSelect?: (value: string) => void;

  /** Accessible label for the breadcrumb navigation. */
  ariaLabel?: string;

  /** Optional CSS class. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    paddingBottom: "1px",
    width: "100%",
    minWidth: 0,
  },

  headerRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minWidth: 0,
  },

  leftCluster: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 1,
  },

  identity: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
    flexShrink: 0,
  },

  tabsWrap: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 1,
    flexGrow: 0,
    marginLeft: "24px",
    overflow: "hidden",
  },

  tabsWrapStacked: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 0,
    flexGrow: 1,
    marginLeft: 0,
    marginTop: tokens.spacingVerticalXS,
    width: "100%",
    overflow: "hidden",
  },

  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    minHeight: tokens.lineHeightBase200,
    paddingLeft: "0px",
  },

  statusBadge: {
    minWidth: "auto",
  },

  statusText: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  statusMeta: {
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground2,
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    marginLeft: "auto",
    flexShrink: 0,
  },

  actionButton: {
    minWidth: "auto",
  },

  measureRoot: {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    height: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  tabs: {
    marginTop: "0px",
    minWidth: 0,
  },

  tab: {
    color: tokens.colorNeutralForeground2,

    '&[aria-selected="true"]': {
      color: tokens.colorNeutralForeground1,
    },
  },
});

/**
 * FullPageHeader - Reusable page-level header composed from breadcrumb title, optional status, actions, and tabs.
 *
 * **Fluent Guidelines Applied:**
 * - Built only from Fluent primitives and the local BreadcrumbHeader composite
 * - Token-driven layout, spacing, and typography
 * - Supports optional status, actions, and tab navigation without forcing unused UI
 * - Matches the compact, stacked page-header pattern from the Figma reference
 */
export const FullPageHeader = forwardRef<HTMLDivElement, FullPageHeaderProps>(
  (
    {
      breadcrumbs,
      title,
      icon,
      status,
      actions,
      tabs,
      selectedTab,
      defaultSelectedTab,
      onTabSelect,
      ariaLabel = "Page breadcrumb",
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const [visibleActionCount, setVisibleActionCount] = useState(
      actions?.length ?? 0
    );
    const [stackTabs, setStackTabs] = useState(false);
    const headerRowRef = useRef<HTMLDivElement | null>(null);
    const leftClusterRef = useRef<HTMLDivElement | null>(null);
    const identityRef = useRef<HTMLDivElement | null>(null);
    const tabsWrapRef = useRef<HTMLDivElement | null>(null);
    const measureActionsRef = useRef<HTMLDivElement | null>(null);
    const measureTabsRef = useRef<HTMLDivElement | null>(null);
    const moreMeasureRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(
      null
    );
    const actionMeasureRefs = useRef<
      Array<HTMLButtonElement | HTMLAnchorElement | null>
    >([]);

    const normalizedActions = useMemo(() => actions ?? [], [actions]);
    const normalizedTabs = useMemo(() => tabs ?? [], [tabs]);

    useLayoutEffect(() => {
      if (normalizedActions.length === 0) {
        setVisibleActionCount(0);
        return;
      }

      const measure = () => {
        const rowEl = headerRowRef.current;
        const leftClusterEl = leftClusterRef.current;
        const identityEl = identityRef.current;
        const measureActionsEl = measureActionsRef.current;
        const measureTabsEl = measureTabsRef.current;
        if (!rowEl || !leftClusterEl || !identityEl || !measureActionsEl) {
          return;
        }

        const rowWidth = rowEl.getBoundingClientRect().width;
        const leftClusterWidth = leftClusterEl.getBoundingClientRect().width;
        const tabsWidth = measureTabsEl ? measureTabsEl.scrollWidth : 0;
        const actionsGap =
          parseFloat(getComputedStyle(measureActionsEl).columnGap || "0") || 0;

        const hasTabs = normalizedTabs.length > 0;

        // Check if tabs and actions fit side-by-side
        const spaceBetweenTabsAndIdentity = 24; // marginLeft of tabsWrap
        const spaceNeededForTabsAndIdentity =
          identityEl.getBoundingClientRect().width +
          spaceBetweenTabsAndIdentity +
          tabsWidth;

        // Estimate actions width
        const actionWidths = normalizedActions.map((_, index) => {
          const button = actionMeasureRefs.current[index];
          return button ? button.getBoundingClientRect().width : 0;
        });
        const moreWidth = moreMeasureRef.current
          ? moreMeasureRef.current.getBoundingClientRect().width
          : 0;

        // Find max actions we can fit
        const widthForVisible = (count: number, includeMore: boolean) => {
          let total = 0;
          for (let i = 0; i < count; i += 1) {
            total += actionWidths[i] ?? 0;
            if (i > 0) {
              total += actionsGap;
            }
          }

          if (includeMore) {
            if (count > 0) {
              total += actionsGap;
            }
            total += moreWidth;
          }

          return total;
        };

        let estimatedActionsWidth = 0;
        for (let count = 0; count <= normalizedActions.length; count += 1) {
          if (
            widthForVisible(count, count < normalizedActions.length) <=
            rowWidth - spaceNeededForTabsAndIdentity
          ) {
            estimatedActionsWidth = widthForVisible(
              count,
              count < normalizedActions.length
            );
          } else {
            break;
          }
        }

        // If there's not enough space for both tabs and actions, stack tabs below
        if (
          hasTabs &&
          rowWidth < spaceNeededForTabsAndIdentity + estimatedActionsWidth
        ) {
          setStackTabs(true);
          // When stacking, recalculate available space for actions using full row width
          const availableActionsWidth =
            rowWidth - identityEl.getBoundingClientRect().width;

          let nextVisible = 0;
          for (let count = 0; count <= normalizedActions.length; count += 1) {
            if (widthForVisible(count, true) <= availableActionsWidth) {
              nextVisible = count;
            } else {
              break;
            }
          }
          setVisibleActionCount(nextVisible);
        } else {
          setStackTabs(false);
          // When tabs are inline, leftClusterWidth is accurate (includes identity + margin + tabs)
          const availableActionsWidth = Math.max(
            0,
            rowWidth - leftClusterWidth
          );

          if (
            widthForVisible(normalizedActions.length, false) <=
            availableActionsWidth
          ) {
            setVisibleActionCount(normalizedActions.length);
            return;
          }

          let nextVisible = 0;
          for (let count = 0; count <= normalizedActions.length; count += 1) {
            if (widthForVisible(count, true) <= availableActionsWidth) {
              nextVisible = count;
            } else {
              break;
            }
          }

          setVisibleActionCount(nextVisible);
        }
      };

      measure();

      const observer = new ResizeObserver(() => measure());
      if (headerRowRef.current) {
        observer.observe(headerRowRef.current);
      }
      if (identityRef.current) {
        observer.observe(identityRef.current);
      }
      if (leftClusterRef.current) {
        observer.observe(leftClusterRef.current);
      }
      if (tabsWrapRef.current) {
        observer.observe(tabsWrapRef.current);
      }

      const onWindowResize = () => measure();
      window.addEventListener("resize", onWindowResize);

      return () => {
        observer.disconnect();
        window.removeEventListener("resize", onWindowResize);
      };
    }, [normalizedActions, normalizedTabs]);

    const visibleActions = normalizedActions.slice(0, visibleActionCount);
    const overflowActions = normalizedActions.slice(visibleActionCount);

    return (
      <div
        ref={ref}
        className={[styles.root, className].filter(Boolean).join(" ")}
        {...rest}
      >
        <div className={styles.measureRoot} aria-hidden="true" inert>
          <div
            ref={(measureTabsEl) => {
              measureTabsRef.current = measureTabsEl;
            }}
            className={styles.tabsWrap}
          >
            <TabList className={styles.tabs}>
              {normalizedTabs.map((tab) => (
                <Tab
                  key={tab.value}
                  className={styles.tab}
                  value={tab.value}
                  disabled={tab.disabled}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </div>
          <div ref={measureActionsRef} className={styles.actions}>
            {normalizedActions.map((action, index) => (
              <Button
                key={`measure-${action.label}-${index}`}
                ref={(el) => {
                  actionMeasureRefs.current[index] = el;
                }}
                className={styles.actionButton}
                appearance={action.appearance ?? "primary"}
                icon={action.icon}
              >
                {action.label}
              </Button>
            ))}
            <Button
              ref={moreMeasureRef}
              className={styles.actionButton}
              appearance="secondary"
              icon={<MoreHorizontalRegular />}
            >
              More
            </Button>
          </div>
        </div>

        {status && (
          <div className={styles.statusRow}>
            <Badge
              className={styles.statusBadge}
              size="small"
              color={status.color ?? "warning"}
              icon={(status.icon ?? <CloudOffRegular />) as any}
            />
            <span className={styles.statusText}>{status.label}</span>
            {status.meta && (
              <span className={styles.statusMeta}>{status.meta}</span>
            )}
          </div>
        )}

        <div className={styles.headerRow} ref={headerRowRef}>
          <div className={styles.leftCluster} ref={leftClusterRef}>
            <div className={styles.identity} ref={identityRef}>
              <BreadcrumbHeader
                breadcrumbs={breadcrumbs}
                title={title}
                icon={icon}
                ariaLabel={ariaLabel}
              />
            </div>

            {tabs && tabs.length > 0 && !stackTabs && (
              <div className={styles.tabsWrap} ref={tabsWrapRef}>
                <TabList
                  className={styles.tabs}
                  {...(selectedTab !== undefined
                    ? { selectedValue: selectedTab }
                    : {
                        defaultSelectedValue:
                          defaultSelectedTab ?? tabs[0]?.value,
                      })}
                  onTabSelect={(_event, data) =>
                    onTabSelect?.(String(data.value))
                  }
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.value}
                      className={styles.tab}
                      value={tab.value}
                      disabled={tab.disabled}
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </TabList>
              </div>
            )}
          </div>

          {normalizedActions.length > 0 && (
            <div className={styles.actions}>
              {visibleActions.map((action, index) => (
                <Button
                  key={`${action.label}-${index}`}
                  className={styles.actionButton}
                  appearance={action.appearance ?? "primary"}
                  icon={action.icon}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}

              {overflowActions.length > 0 && (
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <Button
                      className={styles.actionButton}
                      appearance="secondary"
                      icon={<MoreHorizontalRegular />}
                    >
                      More
                    </Button>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      {overflowActions.map((action, index) => (
                        <MenuItem
                          key={`overflow-${action.label}-${index}`}
                          icon={action.icon as any}
                          onClick={action.onClick}
                        >
                          {action.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </MenuPopover>
                </Menu>
              )}
            </div>
          )}
        </div>

        {tabs && tabs.length > 0 && stackTabs && (
          <div className={styles.tabsWrapStacked} ref={tabsWrapRef}>
            <TabList
              className={styles.tabs}
              {...(selectedTab !== undefined
                ? { selectedValue: selectedTab }
                : { defaultSelectedValue: defaultSelectedTab ?? tabs[0]?.value })}
              onTabSelect={(_event, data) => onTabSelect?.(String(data.value))}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  className={styles.tab}
                  value={tab.value}
                  disabled={tab.disabled}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
          </div>
        )}
      </div>
    );
  }
);

FullPageHeader.displayName = "FullPageHeader";
