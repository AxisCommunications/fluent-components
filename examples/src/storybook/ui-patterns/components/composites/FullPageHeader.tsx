import {
  Badge,
  Button,
  Divider,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Tab,
  TabList,
  makeStyles,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";
import { CloudOff16Filled, MoreHorizontalRegular } from "@fluentui/react-icons";
import {
  type ReactNode,
  type Ref,
  forwardRef,
  useEffect,
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

  /**
   * When `true`, the action is disabled and cannot be clicked. Useful for a
   * "Save" action that should only be enabled once the form has unsaved
   * changes.
   */
  disabled?: boolean;
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
    paddingBottom: "0px",
    width: "100%",
    minWidth: 0,
  },

  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    minWidth: 0,
  },

  leftCluster: {
    display: "flex",
    alignItems: "flex-start",
    minWidth: 0,
    flexShrink: 1,
  },

  identity: {
    display: "flex",
    alignItems: "flex-start",
    gap: tokens.spacingHorizontalS,
    minWidth: 0,
    overflow: "hidden",
    paddingTop: tokens.spacingVerticalSNudge,
  },

  tabsWrap: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 1,
    flexGrow: 0,
    marginLeft: "24px",
    marginBottom: tokens.spacingVerticalXXS,
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "thin",
  },

  tabsWrapStacked: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 0,
    flexGrow: 1,
    marginLeft: 0,
    marginBottom: tokens.spacingVerticalXXS,
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    scrollbarWidth: "thin",
  },

  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    minHeight: tokens.lineHeightBase200,
    paddingLeft: "0px",
    flexWrap: "wrap",
  },

  statusBadge: {
    minWidth: "auto",
  },

  statusLabel: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
  },

  statusText: {
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  statusMeta: {
    ...typographyStyles.caption2,
    color: tokens.colorNeutralForeground2,
    paddingTop: tokens.spacingVerticalXXS,
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
    width: "max-content",
    minWidth: "100%",
    flexShrink: 0,
  },

  tab: {
    maxWidth: "160px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: tokens.colorNeutralForeground2,

    '&[aria-selected="true"]': {
      color: tokens.colorNeutralForeground1,
    },
  },

  divider: {
    marginTop: "-2px",
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
    const [internalSelectedTab, setInternalSelectedTab] = useState<string>(
      defaultSelectedTab ?? tabs?.[0]?.value ?? ""
    );
    const [visibleActionCount, setVisibleActionCount] = useState(
      actions?.length ?? 0
    );
    const [stackTabs, setStackTabs] = useState(false);
    const headerRowRef = useRef<HTMLDivElement | null>(null);
    const leftClusterRef = useRef<HTMLDivElement | null>(null);
    const identityRef = useRef<HTMLDivElement | null>(null);
    const tabsWrapRef = useRef<HTMLDivElement | null>(null);
    const tabRefs = useRef<Record<string, HTMLElement | null>>({});
    const measureActionsRef = useRef<HTMLDivElement | null>(null);
    const measureTabsRef = useRef<HTMLDivElement | null>(null);
    const measureIdentityRef = useRef<HTMLDivElement | null>(null);
    const moreMeasureRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(
      null
    );
    const actionMeasureRefs = useRef<
      Array<HTMLButtonElement | HTMLAnchorElement | null>
    >([]);

    const normalizedActions = useMemo(() => actions ?? [], [actions]);
    const normalizedTabs = useMemo(() => tabs ?? [], [tabs]);
    const activeTabValue = selectedTab ?? internalSelectedTab;

    useEffect(() => {
      if (selectedTab !== undefined) {
        return;
      }

      if (normalizedTabs.length === 0) {
        setInternalSelectedTab("");
        return;
      }

      const stillExists = normalizedTabs.some(
        (tab) => tab.value === internalSelectedTab
      );
      if (!stillExists) {
        setInternalSelectedTab(defaultSelectedTab ?? normalizedTabs[0].value);
      }
    }, [defaultSelectedTab, internalSelectedTab, normalizedTabs, selectedTab]);

    useLayoutEffect(() => {
      if (!activeTabValue) {
        return;
      }

      const tabsContainer = tabsWrapRef.current;
      const activeTab = tabRefs.current[activeTabValue];

      if (!tabsContainer || !activeTab || !tabsContainer.contains(activeTab)) {
        return;
      }

      activeTab.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "auto",
      });
    }, [activeTabValue]);

    const handleTabSelect: NonNullable<FullPageHeaderProps["onTabSelect"]> = (
      value
    ) => {
      if (selectedTab === undefined) {
        setInternalSelectedTab(value);
      }
      onTabSelect?.(value);
    };

    const setTabRef =
      (value: string): Ref<HTMLButtonElement> =>
      (el) => {
        tabRefs.current[value] = el;
      };

    useLayoutEffect(() => {
      const measure = () => {
        const rowEl = headerRowRef.current;
        const leftClusterEl = leftClusterRef.current;
        const identityEl = identityRef.current;
        const measureActionsEl = measureActionsRef.current;
        const measureTabsEl = measureTabsRef.current;
        const measureIdentityEl = measureIdentityRef.current;
        if (!rowEl || !leftClusterEl || !identityEl) {
          return;
        }

        // Use the hidden measurement copy of the identity to read its natural
        // (uncollapsed) width. Reading the live identity element is unreliable
        // because it shrinks to make room for the action buttons, which would
        // otherwise create a feedback loop that hides tabs behind the actions.
        const identityNaturalWidth = measureIdentityEl
          ? measureIdentityEl.scrollWidth
          : identityEl.getBoundingClientRect().width;

        if (normalizedActions.length === 0) {
          // Still calculate tab stacking even without actions
          const hasTabs = normalizedTabs.length > 0;
          if (hasTabs && measureTabsEl) {
            const rowWidth = rowEl.getBoundingClientRect().width;
            const identityWidth = identityNaturalWidth;
            const spaceBetweenTabsAndIdentity = 24;
            const tabsWidth = measureTabsEl.scrollWidth;
            const spaceNeededForTabsAndIdentity =
              identityWidth + spaceBetweenTabsAndIdentity + tabsWidth;
            setStackTabs(rowWidth < spaceNeededForTabsAndIdentity);
          } else {
            setStackTabs(false);
          }
          setVisibleActionCount(0);
          return;
        }

        if (!measureActionsEl) {
          return;
        }

        const rowWidth = rowEl.getBoundingClientRect().width;
        const tabsWidth = measureTabsEl ? measureTabsEl.scrollWidth : 0;
        const actionsGap =
          parseFloat(getComputedStyle(measureActionsEl).columnGap || "0") || 0;

        const hasTabs = normalizedTabs.length > 0;

        // Check if tabs and actions fit side-by-side
        const spaceBetweenTabsAndIdentity = 24; // marginLeft of tabsWrap
        const spaceNeededForTabsAndIdentity =
          identityNaturalWidth +
          (hasTabs ? spaceBetweenTabsAndIdentity + tabsWidth : 0);

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
          const availableActionsWidth = rowWidth - identityNaturalWidth;

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
          // Base available action space on the identity's natural width plus
          // the inline tabs, not the live left cluster (which shrinks to fit
          // the actions and would otherwise mask the overflow).
          const availableActionsWidth = Math.max(
            0,
            rowWidth - spaceNeededForTabsAndIdentity
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
            ref={(measureIdentityEl) => {
              measureIdentityRef.current = measureIdentityEl;
            }}
            className={styles.identity}
          >
            <BreadcrumbHeader
              breadcrumbs={breadcrumbs}
              title={title}
              icon={icon}
              ariaLabel={ariaLabel}
            />
          </div>
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
            <span className={styles.statusLabel}>
              <Badge
                className={styles.statusBadge}
                size="large"
                appearance="ghost"
                color={status.color ?? "warning"}
                icon={(status.icon ?? <CloudOff16Filled />) as any}
              >
                {status.label}
              </Badge>
            </span>
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
                  selectedValue={activeTabValue}
                  onTabSelect={(_event, data) => {
                    handleTabSelect(String(data.value));
                  }}
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.value}
                      ref={setTabRef(tab.value)}
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
                  disabled={action.disabled}
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
                          disabled={action.disabled}
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
              selectedValue={activeTabValue}
              onTabSelect={(_event, data) => {
                handleTabSelect(String(data.value));
              }}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  ref={setTabRef(tab.value)}
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

        <Divider className={styles.divider} />
      </div>
    );
  }
);

FullPageHeader.displayName = "FullPageHeader";
