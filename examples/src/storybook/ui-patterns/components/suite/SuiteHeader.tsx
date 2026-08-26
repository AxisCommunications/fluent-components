import {
  Avatar,
  Button,
  CounterBadge,
  Divider,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Overflow,
  OverflowItem,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Text,
  Toolbar,
  ToolbarButton,
  makeStyles,
  shorthands,
  tokens,
  useIsOverflowItemVisible,
  useOverflowMenu,
} from "@fluentui/react-components";
import {
  AlertRegular,
  ChevronDownRegular,
  GridDotsRegular,
  MoreHorizontalRegular,
  QuestionCircleRegular,
  SearchRegular,
  SettingsRegular,
} from "@fluentui/react-icons";
import {
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import appIcon01 from "../../../../assets/Appicons/App 1.svg";
import appIcon02 from "../../../../assets/Appicons/App 2.svg";
import appIcon03 from "../../../../assets/Appicons/App 3.svg";
import appIcon04 from "../../../../assets/Appicons/App 4.svg";
import appIcon05 from "../../../../assets/Appicons/App 5.svg";
import appIcon06 from "../../../../assets/Appicons/App 6.svg";
import appIcon07 from "../../../../assets/Appicons/App 7.svg";

export interface SuiteHeaderAction {
  id: string;
  icon: ReactElement;
  ariaLabel: string;
  onClick?: () => void;
  /** When set, the action opens a flyout with this content instead of only firing onClick. */
  flyout?: ReactNode;
  /**
   * Unread count shown as a small badge on the icon. Omit or pass 0 to hide it.
   * Include the same number in `ariaLabel`, since the badge is decorative.
   */
  badgeCount?: number;
}

export interface SuiteHeaderLauncherItem {
  id: string;
  label: string;
  icon: ReactElement;
  onClick?: () => void;
}

export interface SuiteHeaderProps {
  className?: string;
  companyLogo?: string;
  productName?: string;
  productIcon?: ReactElement;
  showAppLauncher?: boolean;
  showTimeDate?: boolean;
  showSearch?: boolean;
  showOrganizationPicker?: boolean;
  searchPlaceholder?: string;
  notificationCount?: number;
  timeLabel?: string;
  dateLabel?: string;
  profileName?: string;
  organizationOptions?: string[];
  selectedOrganization?: string;
  onOrganizationSelect?: (organization: string) => void;
  launcherApps?: SuiteHeaderLauncherItem[];
  /**
   * Optional sub-menu shown below the app tiles in the launcher. When omitted
   * (or empty) the sub-menu section is not rendered.
   */
  launcherOrganizationItems?: SuiteHeaderLauncherItem[];
  /** Heading shown above the optional launcher sub-menu. Defaults to "Sub menu". */
  launcherOrganizationLabel?: string;
  onAppLauncherClick?: () => void;
  onActiveAppChange?: (app: SuiteHeaderLauncherItem) => void;
  onSearchChange?: (value: string) => void;
  utilityActions?: SuiteHeaderAction[];
}

const useStyles = makeStyles({
  root: {
    minHeight: "48px",
    display: "grid",
    gridTemplateColumns: "1fr minmax(180px, 1fr) 1fr",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground4,
    // No left padding so the app launcher can occupy the same 68px column as
    // the side-navigation rail and keep its icon aligned with the rail icons.
    ...shorthands.padding("0", tokens.spacingHorizontalM, "0", "0"),
    // Below the search breakpoint the center column is hidden, so collapse the
    // grid to "brand | actions". The actions take the flexible track so they
    // keep their natural width and only collapse into the overflow menu when
    // the viewport is genuinely too narrow.
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "auto minmax(0, 1fr)",
      columnGap: tokens.spacingHorizontalM,
    },
    "@media (max-width: 720px)": {
      columnGap: tokens.spacingHorizontalS,
      ...shorthands.padding("0", tokens.spacingHorizontalS, "0", "0"),
    },
  },
  rootWithoutSearch: {
    gridTemplateColumns: "auto minmax(0, 1fr)",
  },
  left: {
    display: "flex",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  productName: {
    display: "inline-flex",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalXS,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titleIcon: {
    flexShrink: 0,
    width: "20px",
    height: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    lineHeight: 1,
    "& svg": {
      width: "20px",
      height: "20px",
    },
    "& img": {
      width: "20px",
      height: "20px",
      display: "block",
    },
  },
  divider: {
    width: "1px",
    height: "24px",
    backgroundColor: tokens.colorNeutralStroke2,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    minWidth: 0,
    // Hide global search before the header runs out of horizontal room.
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  searchInput: {
    width: "100%",
    maxWidth: "560px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: tokens.spacingHorizontalS,
    minWidth: 0,
  },
  rightToolbar: {
    // Right-aligned overflow row. The toolbar fills the right column (flexGrow)
    // so Fluent's Overflow can measure the available width, and the actions are
    // end-aligned so they sit next to the avatar. justify-content:flex-end is
    // also required for detection here: the container clips with overflow:hidden
    // and Fluent's IntersectionObserver only receives change events when content
    // overflows past the START edge, which only happens when it's end-aligned.
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: tokens.spacingHorizontalS,
    minWidth: 0,
    ...shorthands.overflow("hidden"),
    ...shorthands.padding(0),
  },
  dateTime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: tokens.colorNeutralForeground2,
    whiteSpace: "nowrap",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  timeLabel: {
    fontSize: "10px",
    lineHeight: "12px",
  },
  dateLabel: {
    fontSize: tokens.fontSizeBase100,
    lineHeight: tokens.lineHeightBase100,
    fontWeight: tokens.fontWeightSemibold,
  },
  appButton: {
    ...shorthands.margin(0),
  },
  badgedIcon: {
    position: "relative",
    display: "inline-flex",
    // The badge is allowed to sit outside the 20px icon box.
    overflow: "visible",
  },
  iconBadge: {
    position: "absolute",
    // Kept inside the 32px button box: the toolbar clips with overflow:hidden,
    // so a badge hanging further out loses its corner.
    top: "-4px",
    insetInlineEnd: "-4px",
    pointerEvents: "none",
  },
  appLauncher: {
    // Match the 68px side-navigation rail column and center the launcher so its
    // icon lines up vertically with the rail icons below it.
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "68px",
    flexShrink: 0,
  },
  organizationButton: {
    ...shorthands.margin(0, tokens.spacingHorizontalXXS, 0, 0),
    maxWidth: "180px",
    whiteSpace: "nowrap",
  },
  launcherButton: {
    ...shorthands.margin(0),
  },
  launcherSurface: {
    // Responsive width: caps at 372px but shrinks to fit narrow viewports so
    // the launcher never overflows the screen. The grids below use 1fr tracks,
    // so the tiles scale down with the surface.
    width: "min(372px, calc(100vw - 24px))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "8px",
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
    ...shorthands.borderRadius("4px"),
    ...shorthands.padding("16px"),
  },
  launcherSection: {
    width: "100%",
    display: "grid",
    rowGap: "6px",
  },
  launcherDivider: {
    width: "100%",
    ...shorthands.margin(0),
  },
  launcherGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    columnGap: "12px",
    rowGap: "12px",
  },
  orgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    columnGap: "12px",
    rowGap: "16px",
    ...shorthands.margin(tokens.spacingVerticalXS, 0, 0),
  },
  tileButton: {
    // Override Fluent's default 96px button min-width so the tiles shrink to
    // their grid track and never overflow the launcher surface.
    minWidth: 0,
    minHeight: "84px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding("8px", tokens.spacingHorizontalXS),
  },
  tileButtonActive: {
    backgroundColor: tokens.colorNeutralBackground2,
    boxShadow: `inset 0 -4px 0 ${tokens.colorPaletteYellowBorderActive}`,
  },
  tileIconWrap: {
    width: "28px",
    height: "28px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    lineHeight: 1,
    color: tokens.colorNeutralForeground1,
    "& svg": {
      width: "28px",
      height: "28px",
    },
    "& img": {
      width: "28px",
      height: "28px",
      display: "block",
    },
  },
  orgTileIconWrap: {
    width: "28px",
    height: "28px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    lineHeight: 1,
    color: tokens.colorNeutralForeground1,
    "& svg": {
      width: "28px",
      height: "28px",
    },
    "& img": {
      width: "28px",
      height: "28px",
      display: "block",
    },
  },
  tileLabel: {
    textAlign: "center",
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase100,
    color: tokens.colorNeutralForeground3,
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    ...shorthands.margin(0),
  },
  orgTileButton: {
    // Override Fluent's default 96px button min-width so the four org tiles fit
    // the surface width instead of overflowing and clipping the last tile.
    minWidth: 0,
    minHeight: "84px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding("8px", tokens.spacingHorizontalXS),
  },
  orgTileButtonActive: {
    boxShadow: `inset 0 -4px 0 ${tokens.colorPaletteYellowBorderActive}`,
  },
  avatar: {
    cursor: "pointer",
  },
});

const defaultActions: SuiteHeaderAction[] = [
  { id: "notifications", icon: <AlertRegular />, ariaLabel: "Notifications" },
  { id: "settings", icon: <SettingsRegular />, ariaLabel: "Settings" },
  { id: "help", icon: <QuestionCircleRegular />, ariaLabel: "Help" },
];

/**
 * Renders a single overflowed action inside the "more" menu. It only renders
 * when its matching toolbar button has been pushed out of the visible area.
 */
function OverflowMenuItem({ action }: { action: SuiteHeaderAction }) {
  const isVisible = useIsOverflowItemVisible(action.id);

  if (isVisible) {
    return null;
  }

  return (
    <MenuItem
      icon={action.icon}
      onClick={action.onClick}
      secondaryContent={
        action.badgeCount ? String(action.badgeCount) : undefined
      }
    >
      {action.ariaLabel}
    </MenuItem>
  );
}

/**
 * The "more" menu trigger. It only appears while one or more actions don't fit,
 * collecting the hidden actions into a dropdown so they stay reachable.
 */
function ActionOverflowMenu({
  actions,
  className,
}: {
  actions: SuiteHeaderAction[];
  className?: string;
}) {
  const { ref, isOverflowing, overflowCount } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <ToolbarButton
          ref={ref}
          className={className}
          aria-label={`More actions (${overflowCount})`}
          icon={<MoreHorizontalRegular />}
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {actions.map((action) => (
            <OverflowMenuItem key={action.id} action={action} />
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

/**
 * A quick-action button. Actions carrying `flyout` content open it in a popover
 * anchored to the button, mirroring the app launcher behaviour.
 */
function ActionButton({
  action,
  className,
}: {
  action: SuiteHeaderAction;
  className?: string;
}) {
  const styles = useStyles();

  const icon = action.badgeCount ? (
    <span className={styles.badgedIcon}>
      {action.icon}
      {/* `important` rather than `danger`: filled-danger pairs red with
          colorNeutralForegroundOnBrand, which is black in the Axis themes. */}
      <CounterBadge
        className={styles.iconBadge}
        appearance="filled"
        color="important"
        size="small"
        count={action.badgeCount}
        aria-hidden
      />
    </span>
  ) : (
    action.icon
  );

  const button = (
    <ToolbarButton
      className={className}
      aria-label={action.ariaLabel}
      icon={icon}
      onClick={action.onClick}
    />
  );

  if (!action.flyout) {
    return button;
  }

  return (
    <Popover positioning="below-end" trapFocus>
      <PopoverTrigger disableButtonEnhancement>{button}</PopoverTrigger>
      <PopoverSurface>{action.flyout}</PopoverSurface>
    </Popover>
  );
}

function appIcon(src: string): ReactElement {
  return <img src={src} alt="" />;
}

const defaultLauncherApps: SuiteHeaderLauncherItem[] = [
  {
    id: "camera-station",
    label: "app1",
    icon: appIcon(appIcon01),
  },
  {
    id: "device-manager",
    label: "app2",
    icon: appIcon(appIcon02),
  },
  { id: "cloud-storage", label: "app3", icon: appIcon(appIcon03) },
];

export const defaultLauncherOrganizationItems: SuiteHeaderLauncherItem[] = [
  { id: "start", label: "app4", icon: appIcon(appIcon04) },
  { id: "settings", label: "app5", icon: appIcon(appIcon05) },
  { id: "users", label: "app6", icon: appIcon(appIcon06) },
  { id: "licenses", label: "app7", icon: appIcon(appIcon07) },
];

export function SuiteHeader({
  className,
  companyLogo,
  productName = "Product name",
  productIcon,
  showAppLauncher = true,
  showTimeDate = false,
  showSearch = true,
  showOrganizationPicker = true,
  searchPlaceholder = "Search",
  notificationCount,
  timeLabel = "11:52 AM",
  dateLabel = "Fri, Apr 24",
  profileName = "Megan Bowen",
  organizationOptions = ["Organization 1", "Organization 2", "Organization 3"],
  selectedOrganization,
  onOrganizationSelect,
  launcherApps = defaultLauncherApps,
  launcherOrganizationItems = [],
  launcherOrganizationLabel = "Sub menu",
  onAppLauncherClick,
  onActiveAppChange,
  onSearchChange,
  utilityActions = defaultActions,
}: SuiteHeaderProps) {
  const styles = useStyles();
  const firstLauncherTileRef = useRef<HTMLButtonElement | null>(null);
  const [activeOrganization, setActiveOrganization] = useState(
    selectedOrganization ?? organizationOptions[0] ?? "Organization"
  );
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);

  useEffect(() => {
    if (isLauncherOpen) {
      firstLauncherTileRef.current?.focus();
    }
  }, [isLauncherOpen]);

  const onLauncherKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const tiles = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>(
        'button[data-launcher-tile="true"]'
      )
    );

    if (tiles.length === 0) {
      return;
    }

    const currentIndex = tiles.indexOf(
      document.activeElement as HTMLButtonElement
    );
    const direction = event.shiftKey ? -1 : 1;
    const fallbackIndex = event.shiftKey ? tiles.length - 1 : 0;

    if (currentIndex === -1) {
      event.preventDefault();
      tiles[fallbackIndex]?.focus();
      return;
    }

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex === tiles.length - 1;

    if ((event.shiftKey && isAtStart) || (!event.shiftKey && isAtEnd)) {
      // Let keyboard users leave the launcher with Tab/Shift+Tab.
      setIsLauncherOpen(false);
      return;
    }

    const nextIndex = currentIndex + direction;
    event.preventDefault();
    tiles[nextIndex]?.focus();
  };

  useEffect(() => {
    if (selectedOrganization) {
      setActiveOrganization(selectedOrganization);
    }
  }, [selectedOrganization]);

  const [activeLauncherAppId, setActiveLauncherAppId] = useState(
    launcherApps[0]?.id ?? "app-0"
  );
  const [activeLauncherOrgId, setActiveLauncherOrgId] = useState(
    launcherOrganizationItems[0]?.id ?? "org-0"
  );
  const [selectedHeaderItemId, setSelectedHeaderItemId] = useState(
    launcherApps[0]?.id ?? launcherOrganizationItems[0]?.id ?? "header-0"
  );

  const selectedHeaderItem =
    launcherApps.find((item) => item.id === selectedHeaderItemId) ??
    launcherOrganizationItems.find(
      (item) => item.id === selectedHeaderItemId
    ) ??
    null;

  const displayName = selectedHeaderItem?.label ?? productName;
  const displayIcon = productIcon ?? selectedHeaderItem?.icon ?? (
    <img src={appIcon01} alt="" />
  );

  useEffect(() => {
    const selectedStillExists =
      launcherApps.some((item) => item.id === selectedHeaderItemId) ||
      launcherOrganizationItems.some(
        (item) => item.id === selectedHeaderItemId
      );

    if (!selectedStillExists) {
      setSelectedHeaderItemId(
        launcherApps[0]?.id ?? launcherOrganizationItems[0]?.id ?? "header-0"
      );
    }
  }, [launcherApps, launcherOrganizationItems, selectedHeaderItemId]);

  return (
    <header
      className={[
        styles.root,
        !showSearch ? styles.rootWithoutSearch : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.left}>
        {showAppLauncher && (
          <div className={styles.appLauncher}>
            <Popover
              open={isLauncherOpen}
              onOpenChange={(_event, data) => setIsLauncherOpen(data.open)}
              positioning="below-start"
              trapFocus
            >
              <PopoverTrigger disableButtonEnhancement>
                <ToolbarButton
                  className={styles.appButton}
                  aria-label="Open app launcher"
                  icon={<GridDotsRegular />}
                  onClick={onAppLauncherClick}
                />
              </PopoverTrigger>
              <PopoverSurface className={styles.launcherSurface}>
                <div
                  className={styles.launcherSection}
                  onKeyDown={onLauncherKeyDown}
                >
                  <div className={styles.launcherGrid}>
                    {launcherApps.map((item, index) => (
                      <Button
                        key={item.id}
                        ref={index === 0 ? firstLauncherTileRef : null}
                        data-launcher-tile="true"
                        className={[
                          styles.tileButton,
                          activeLauncherAppId === item.id
                            ? styles.tileButtonActive
                            : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        appearance="subtle"
                        onClick={() => {
                          setActiveLauncherAppId(item.id);
                          setSelectedHeaderItemId(item.id);
                          setIsLauncherOpen(false);
                          onActiveAppChange?.(item);
                          item.onClick?.();
                        }}
                      >
                        <span
                          className={styles.tileIconWrap}
                          aria-hidden="true"
                        >
                          {item.icon}
                        </span>
                        <span className={styles.tileLabel}>{item.label}</span>
                      </Button>
                    ))}
                  </div>

                  {launcherOrganizationItems.length > 0 && (
                    <>
                      <Divider className={styles.launcherDivider} />

                      <Text className={styles.sectionTitle}>
                        {launcherOrganizationLabel}
                      </Text>

                      <div className={styles.orgGrid}>
                        {launcherOrganizationItems.map((item) => (
                          <Button
                            key={item.id}
                            data-launcher-tile="true"
                            className={[
                              styles.orgTileButton,
                              activeLauncherOrgId === item.id
                                ? styles.orgTileButtonActive
                                : "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            appearance="subtle"
                            onClick={() => {
                              setActiveLauncherOrgId(item.id);
                              setSelectedHeaderItemId(item.id);
                              setIsLauncherOpen(false);
                              onActiveAppChange?.(item);
                              item.onClick?.();
                            }}
                          >
                            <span
                              className={styles.orgTileIconWrap}
                              aria-hidden="true"
                            >
                              {item.icon}
                            </span>
                            <span className={styles.tileLabel}>
                              {item.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </PopoverSurface>
            </Popover>
          </div>
        )}

        {companyLogo && (
          <>
            <img
              src={companyLogo}
              alt="Company logo"
              style={{ height: "20px" }}
            />
            <div className={styles.divider} />
          </>
        )}

        <Text className={styles.productName}>
          <span className={styles.titleIcon} aria-hidden="true">
            {displayIcon}
          </span>
          {displayName}
        </Text>
      </div>

      {showSearch ? (
        <div className={styles.center}>
          <Input
            className={styles.searchInput}
            size="small"
            contentBefore={<SearchRegular />}
            placeholder={searchPlaceholder}
            onChange={(_event, data) => onSearchChange?.(data.value)}
          />
        </div>
      ) : null}

      <div className={styles.right}>
        <Overflow minimumVisible={0} padding={36}>
          <Toolbar
            className={styles.rightToolbar}
            aria-label="Suite quick actions"
          >
            {showTimeDate && (
              <OverflowItem id="__datetime" priority={1000}>
                <div className={styles.dateTime}>
                  <Text className={styles.timeLabel}>{timeLabel}</Text>
                  <Text className={styles.dateLabel}>{dateLabel}</Text>
                </div>
              </OverflowItem>
            )}

            {showOrganizationPicker && (
              <OverflowItem id="__organization" priority={900}>
                <Menu>
                  <MenuTrigger disableButtonEnhancement>
                    <ToolbarButton
                      className={styles.organizationButton}
                      appearance="subtle"
                    >
                      {activeOrganization}
                      <ChevronDownRegular />
                    </ToolbarButton>
                  </MenuTrigger>
                  <MenuPopover>
                    <MenuList>
                      {organizationOptions.map((organization) => (
                        <MenuItem
                          key={organization}
                          onClick={() => {
                            setActiveOrganization(organization);
                            onOrganizationSelect?.(organization);
                          }}
                        >
                          {organization}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </MenuPopover>
                </Menu>
              </OverflowItem>
            )}

            {utilityActions.map((action) => (
              <OverflowItem key={action.id} id={action.id}>
                <ActionButton action={action} className={styles.appButton} />
              </OverflowItem>
            ))}

            <ActionOverflowMenu
              actions={utilityActions}
              className={styles.appButton}
            />
          </Toolbar>
        </Overflow>

        <Avatar
          className={styles.avatar}
          name={profileName}
          color={notificationCount ? "colorful" : "neutral"}
          badge={notificationCount ? { status: "available" } : undefined}
        />
      </div>
    </header>
  );
}
