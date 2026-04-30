import {
  Avatar,
  Button,
  Divider,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Text,
  Toolbar,
  ToolbarButton,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  AlertRegular,
  AlertUrgent24Color,
  BoardColor,
  Calendar24Color,
  ChevronDownRegular,
  ClipboardColor,
  GridDotsRegular,
  Notebook16Color,
  QuestionCircleRegular,
  SearchRegular,
  Send28Color,
  SettingsRegular,
  SportColor,
} from "@fluentui/react-icons";
import { type ReactElement, useEffect, useState } from "react";

export interface SuiteHeaderAction {
  id: string;
  icon: ReactElement;
  ariaLabel: string;
  onClick?: () => void;
}

export interface SuiteHeaderLauncherItem {
  id: string;
  label: string;
  icon: ReactElement;
  onClick?: () => void;
}

export interface SuiteHeaderProps {
  productName?: string;
  productIcon?: ReactElement;
  showAppLauncher?: boolean;
  showTimeDate?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  notificationCount?: number;
  timeLabel?: string;
  dateLabel?: string;
  profileName?: string;
  organizationOptions?: string[];
  selectedOrganization?: string;
  onOrganizationSelect?: (organization: string) => void;
  launcherApps?: SuiteHeaderLauncherItem[];
  launcherOrganizationItems?: SuiteHeaderLauncherItem[];
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
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding("0", tokens.spacingHorizontalM),
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke2),
  },
  rootWithoutSearch: {
    gridTemplateColumns: "1fr auto",
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
  },
  rightToolbar: {
    alignItems: "center",
    ...shorthands.padding(0),
  },
  dateTime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    color: tokens.colorNeutralForeground2,
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
  organizationButton: {
    ...shorthands.margin(0, tokens.spacingHorizontalXXS, 0, 0),
    maxWidth: "180px",
  },
  launcherButton: {
    ...shorthands.margin(0),
  },
  launcherSurface: {
    width: "372px",
    maxWidth: "calc(100vw - 24px)",
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
  },
  orgGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    columnGap: "12px",
    rowGap: "12px",
  },
  tileButton: {
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
    width: "20px",
    height: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    lineHeight: 1,
    color: tokens.colorNeutralForeground1,
    "& svg": {
      width: "20px",
      height: "20px",
    },
  },
  orgTileIconWrap: {
    width: "20px",
    height: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    lineHeight: 1,
    color: tokens.colorNeutralForeground1,
    "& svg": {
      width: "20px",
      height: "20px",
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
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground3,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    ...shorthands.margin(0),
  },
  orgTileButton: {
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
  "@media (max-width: 900px)": {
    launcherGrid: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      rowGap: "12px",
    },
    orgGrid: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      rowGap: "12px",
    },
  },
  avatar: {
    cursor: "pointer",
  },
  "@media (max-width: 1024px)": {
    root: {
      gridTemplateColumns: "1fr auto",
    },
    center: {
      display: "none",
    },
    dateTime: {
      display: "none",
    },
  },
  "@media (max-width: 720px)": {
    root: {
      ...shorthands.padding("0", tokens.spacingHorizontalS),
      columnGap: tokens.spacingHorizontalS,
    },
  },
});

const defaultActions: SuiteHeaderAction[] = [
  { id: "notifications", icon: <AlertRegular />, ariaLabel: "Notifications" },
  { id: "settings", icon: <SettingsRegular />, ariaLabel: "Settings" },
  { id: "help", icon: <QuestionCircleRegular />, ariaLabel: "Help" },
];

const defaultLauncherApps: SuiteHeaderLauncherItem[] = [
  { id: "camera-station", label: "AXIS Camera Station", icon: <BoardColor /> },
  { id: "device-manager", label: "AXIS Device Manager", icon: <Send28Color /> },
  { id: "cloud-storage", label: "Cloud Storage", icon: <SportColor /> },
];

const defaultLauncherOrganizationItems: SuiteHeaderLauncherItem[] = [
  { id: "start", label: "Start", icon: <Calendar24Color /> },
  { id: "settings", label: "Settings", icon: <AlertUrgent24Color /> },
  { id: "users", label: "Users", icon: <Notebook16Color /> },
  { id: "licenses", label: "Licenses", icon: <ClipboardColor /> },
];

export function SuiteHeader({
  productName = "Product name",
  productIcon,
  showAppLauncher = false,
  showTimeDate = false,
  showSearch = true,
  searchPlaceholder = "Search",
  notificationCount,
  timeLabel = "11:52 AM",
  dateLabel = "Fri, Apr 24",
  profileName = "Megan Bowen",
  organizationOptions = ["Organization 1", "Organization 2", "Organization 3"],
  selectedOrganization,
  onOrganizationSelect,
  launcherApps = defaultLauncherApps,
  launcherOrganizationItems = defaultLauncherOrganizationItems,
  onAppLauncherClick,
  onActiveAppChange,
  onSearchChange,
  utilityActions = defaultActions,
}: SuiteHeaderProps) {
  const styles = useStyles();
  const [activeOrganization, setActiveOrganization] = useState(
    selectedOrganization ?? organizationOptions[0] ?? "Organization"
  );
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);

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
    <BoardColor className={styles.titleIcon} aria-hidden="true" />
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
      className={[styles.root, !showSearch ? styles.rootWithoutSearch : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.left}>
        {showAppLauncher && (
          <>
            <ToolbarButton
              className={styles.launcherButton}
              aria-label="Open app launcher"
              icon={<GridDotsRegular />}
              onClick={onAppLauncherClick}
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
        {showTimeDate && (
          <div className={styles.dateTime}>
            <Text className={styles.timeLabel}>{timeLabel}</Text>
            <Text className={styles.dateLabel}>{dateLabel}</Text>
          </div>
        )}

        <Toolbar
          className={styles.rightToolbar}
          aria-label="Suite quick actions"
        >
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

          <Popover
            open={isLauncherOpen}
            onOpenChange={(_event, data) => setIsLauncherOpen(data.open)}
            positioning="below-end"
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
              <div className={styles.launcherSection}>
                <div className={styles.launcherGrid}>
                  {launcherApps.map((item) => (
                    <Button
                      key={item.id}
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
                      <span className={styles.tileIconWrap} aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className={styles.tileLabel}>{item.label}</span>
                    </Button>
                  ))}
                </div>

                <Divider className={styles.launcherDivider} />

                <Text className={styles.sectionTitle}>Organization</Text>

                <div className={styles.orgGrid}>
                  {launcherOrganizationItems.map((item) => (
                    <Button
                      key={item.id}
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
                      <span className={styles.tileLabel}>{item.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </PopoverSurface>
          </Popover>

          {utilityActions.map((action) => (
            <ToolbarButton
              key={action.id}
              className={styles.appButton}
              aria-label={action.ariaLabel}
              icon={action.icon}
              onClick={action.onClick}
            />
          ))}
        </Toolbar>

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
