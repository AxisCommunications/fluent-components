import {
  useMediaQuery,
  usePageController,
} from "@axiscommunications/fluent-hooks";
import {
  SideNavigation as BaseSideNavigation,
  type SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import {
  Badge,
  Card,
  Checkbox,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  Field,
  Input,
  TableCellLayout,
  type TableColumnDefinition,
  Text,
  Toast,
  ToastBody,
  ToastTitle,
  Toaster,
  createTableColumn,
  makeStyles,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import {
  AddRegular,
  AlertFilled,
  AlertRegular,
  ArrowResetRegular,
  DeleteRegular,
  EditRegular,
  GlobeFilled,
  GlobeRegular,
  HomeFilled,
  HomeRegular,
  SaveRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import {
  Canvas,
  Description,
  Heading,
  Markdown,
  Title,
} from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { FilterToolbar } from "../components/composites/FilterToolbar";
import { FullPageHeader } from "../components/composites/FullPageHeader";
import { InlineFilterDrawer } from "../components/composites/InlineFilterDrawer";
import { Pagination } from "../components/composites/Pagination";
import {
  SuiteHeader,
  type SuiteHeaderAction,
  defaultLauncherOrganizationItems,
} from "../components/suite/SuiteHeader";

const useStyles = makeStyles({
  shell: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "48px 1fr",
    backgroundColor: tokens.colorNeutralBackground4,
    overflow: "hidden",
  },
  suiteHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: tokens.colorNeutralBackground4,
  },
  body: {
    minHeight: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bodyCompact: {
    minHeight: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bodyWithDrawer: {},
  compactRail: {
    flexShrink: 0,
    height: "100%",
    position: "sticky",
    top: 0,
    alignSelf: "start",
    zIndex: 3,
    backgroundColor: tokens.colorNeutralBackground4,
  },
  inlineDrawerPanel: {
    flexShrink: 0,
    minWidth: 0,
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground3,
    overflow: "hidden",
    position: "relative",
    zIndex: 4,
    transitionProperty: "width",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    "@media (prefers-reduced-motion: reduce)": {
      transitionDuration: "0.01ms",
    },
  },
  inlineDrawerInner: {
    height: "100%",
    flexShrink: 0,
  },
  workspaceHost: {
    flexGrow: 1,
    minWidth: 0,
    height: "100%",
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  pageSection: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    backgroundColor: tokens.colorNeutralBackground2,
    overflow: "hidden",
  },
  pageHeaderStack: {
    flexShrink: 0,
    position: "sticky",
    top: 0,
    zIndex: 2,
    paddingTop: tokens.spacingVerticalS,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingLeft: tokens.spacingHorizontalXXL,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  pageHeaderStackCompact: {
    paddingRight: tokens.spacingHorizontalM,
    paddingLeft: tokens.spacingHorizontalM,
  },
  pageScrollArea: {
    minHeight: 0,
    flex: 1,
    backgroundColor: tokens.colorNeutralBackground2,
    overflow: "auto",
  },
  pageContentArea: {
    paddingTop: tokens.spacingVerticalS,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingBottom: tokens.spacingVerticalXL,
    paddingLeft: tokens.spacingHorizontalXXL,
  },
  pageContentAreaCompact: {
    paddingRight: tokens.spacingHorizontalM,
    paddingBottom: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  contentGridCompact: {
    gridTemplateColumns: "1fr",
    gap: tokens.spacingVerticalS,
  },
  contentCard: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    minHeight: "180px",
    padding: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  contentEyebrow: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  contentTitle: {
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
  },
  contentBody: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    lineHeight: tokens.lineHeightBase300,
  },
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
    marginTop: "auto",
  },
  // --- Responsive 12-column grid system ---------------------------------
  // Fluent UI v9 does not ship a Grid component, so application pages build a
  // CSS grid that mirrors the Fluent 2 layout breakpoints. Content blocks opt
  // into a column span per breakpoint instead of stretching to fill the page.
  // The grid is a *container* so blocks respond to the real content-area width
  // (which shrinks when a drawer/rail is open) rather than the viewport width.
  // Container breakpoints (min-width): medium 700 · large 1100
  contentGrid12: {
    display: "grid",
    containerType: "inline-size",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    columnGap: tokens.spacingHorizontalXXL,
    rowGap: tokens.spacingVerticalXL,
    alignItems: "start",
  },
  // Forms are most legible as a single narrow column. Mobile-first: full width
  // when the container is narrow, half-width at medium, and capped at ~1/3
  // (4 of 12 ≈ 33%) once there is enough room — never edge-to-edge.
  formColumn: {
    gridColumn: "span 12",
    "@container (min-width: 700px)": {
      gridColumn: "span 6",
    },
    "@container (min-width: 1100px)": {
      gridColumn: "span 4",
    },
  },
  // Supporting content (preferences, help) stacks below the form when the
  // container is narrow and sits beside it once there is room.
  asideColumn: {
    gridColumn: "span 12",
    "@container (min-width: 700px)": {
      gridColumn: "span 6",
    },
    "@container (min-width: 1100px)": {
      gridColumn: "span 3",
    },
  },
  // Form fields are always stacked in a single column for fast vertical scanning.
  formStack: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  dataGridWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minHeight: 0,
    backgroundColor: "transparent",
  },
  dataGridScroll: {
    flex: 1,
    overflowX: "auto",
    overflowY: "auto",
  },
  dataGrid: {
    width: "100%",
  },
  paginationSticky: {
    position: "sticky",
    bottom: 0,
    zIndex: 1,
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

const headerUtilityActions: SuiteHeaderAction[] = [
  { id: "alerts", icon: <AlertRegular />, ariaLabel: "Alerts" },
  { id: "settings", icon: <SettingsRegular />, ariaLabel: "Settings" },
];

const railNavItems: SideNavigationItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeRegular />,
    selectedIcon: <HomeFilled />,
    children: [
      { id: "home-overview", label: "Overview" },
      { id: "home-activity", label: "Activity" },
    ],
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: <AlertRegular />,
    selectedIcon: <AlertFilled />,
    children: [
      { id: "alerts-active", label: "Active" },
      { id: "alerts-resolved", label: "Resolved" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsRegular />,
    selectedIcon: <SettingsFilled />,
    children: [
      { id: "settings-general", label: "General" },
      { id: "settings-preferences", label: "Preferences" },
      { id: "settings-security", label: "Security" },
    ],
  },
];

const railFooterItems: SideNavigationItem[] = [
  {
    id: "site",
    label: "Site",
    icon: <GlobeRegular />,
    selectedIcon: <GlobeFilled />,
  },
];

/** Width of the rail when expanded to reveal labels, in pixels. */
const RAIL_EXPANDED_WIDTH = 260;

/**
 * Local wrapper that supplies the suite's nav items to the shared
 * {@link BaseSideNavigation} component and renders it as a collapsible icon
 * rail that can expand inline to reveal labels via the built-in toggle.
 */
function CompactRailNavigation({
  className,
  style,
  selectedItemId,
  onSelect,
}: {
  className?: string;
  style?: CSSProperties;
  selectedItemId?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <BaseSideNavigation
      className={className}
      style={style}
      items={railNavItems}
      footerItems={railFooterItems}
      collapsible
      expandedWidth={RAIL_EXPANDED_WIDTH}
      defaultOpenItemIds={["home", "alerts", "settings"]}
      selectedItemId={selectedItemId}
      onSelect={onSelect}
    />
  );
}

/**
 * Always-rendered inline filter drawer that slides open/closed by animating its
 * width, mirroring the collapsible behavior of {@link CompactRailNavigation}.
 * The drawer is never wider than its content: the inner content keeps a fixed
 * width so it does not reflow while the panel width transitions, and the open
 * width adapts to the viewport.
 */
function InlineDrawerSlot({
  open,
  isSmall,
}: {
  open: boolean;
  isSmall: boolean;
}) {
  const styles = useStyles();
  const contentWidth = isSmall ? 280 : 320;

  return (
    <div
      className={styles.inlineDrawerPanel}
      style={{ width: open ? contentWidth : 0 }}
      aria-hidden={!open}
    >
      <div className={styles.inlineDrawerInner} style={{ width: contentWidth }}>
        <InlineFilterDrawer
          fullHeight
          resizable={false}
          defaultWidth={contentWidth}
          minWidth={contentWidth}
          maxWidth={contentWidth}
        />
      </div>
    </div>
  );
}

function useRailState() {
  const [selectedNavItemId, setSelectedNavItemId] = useState("home");
  const [showDrawer, setShowDrawer] = useState(false);

  return {
    selectedNavItemId,
    showDrawer,
    onSelect: (itemId: string) => {
      if (itemId === "site") {
        setShowDrawer((prev) => !prev);
        return;
      }

      setSelectedNavItemId(itemId);
    },
  };
}

interface ResponsiveLayoutPageProps {
  forceDesktopLayout?: boolean;
}

function DashboardPage({
  forceDesktopLayout = false,
}: ResponsiveLayoutPageProps) {
  const styles = useStyles();
  const rail = useRailState();
  const mediaType = useMediaQuery();
  const isSmall = !forceDesktopLayout && mediaType === "small";

  return (
    <div className={styles.shell}>
      <SuiteHeader
        className={styles.suiteHeader}
        productName="Axis Management"
        showSearch
        searchPlaceholder="Search systems and devices"
        launcherOrganizationItems={defaultLauncherOrganizationItems}
        utilityActions={headerUtilityActions}
      />
      <div
        className={
          rail.showDrawer
            ? `${styles.body} ${styles.bodyWithDrawer}`
            : styles.body
        }
      >
        <CompactRailNavigation
          className={styles.compactRail}
          style={{ height: "100%" }}
          selectedItemId={rail.selectedNavItemId}
          onSelect={rail.onSelect}
        />
        <InlineDrawerSlot open={rail.showDrawer} isSmall={isSmall} />
        <div className={styles.workspaceHost}>
          <div className={styles.pageSection}>
            <div
              className={
                isSmall
                  ? `${styles.pageHeaderStack} ${styles.pageHeaderStackCompact}`
                  : styles.pageHeaderStack
              }
            >
              <FullPageHeader
                breadcrumbs={[
                  { label: "Management", onClick: () => {} },
                  { label: "Systems" },
                ]}
                title="System Overview"
                status={{
                  label: "Operational",
                  meta: "All systems healthy",
                  color: "success",
                }}
                tabs={[
                  { value: "overview", label: "Overview" },
                  { value: "activity", label: "Activity" },
                ]}
                defaultSelectedTab="overview"
              />
            </div>

            <div className={styles.pageScrollArea}>
              <div
                className={
                  isSmall
                    ? `${styles.pageContentArea} ${styles.pageContentAreaCompact}`
                    : styles.pageContentArea
                }
              >
                <div
                  className={
                    isSmall
                      ? `${styles.contentGrid} ${styles.contentGridCompact}`
                      : styles.contentGrid
                  }
                >
                  <Card className={styles.contentCard}>
                    <Text className={styles.contentEyebrow}>Status</Text>
                    <Text className={styles.contentTitle}>Core systems</Text>
                    <Text className={styles.contentBody}>
                      All core systems are running normally with full
                      redundancy.
                    </Text>
                    <div className={styles.footerRow}>
                      <Badge appearance="tint" color="success">
                        Healthy
                      </Badge>
                      <Text className={styles.contentBody}>Updated now</Text>
                    </div>
                  </Card>

                  <Card className={styles.contentCard}>
                    <Text className={styles.contentEyebrow}>Performance</Text>
                    <Text className={styles.contentTitle}>
                      Average latency 45ms
                    </Text>
                    <Text className={styles.contentBody}>
                      System performance is excellent with response times well
                      below targets.
                    </Text>
                    <div className={styles.footerRow}>
                      <Badge appearance="tint" color="success">
                        Optimal
                      </Badge>
                      <Text className={styles.contentBody}>
                        Next check in 5 min
                      </Text>
                    </div>
                  </Card>

                  <Card className={styles.contentCard}>
                    <Text className={styles.contentEyebrow}>Capacity</Text>
                    <Text className={styles.contentTitle}>89% utilized</Text>
                    <Text className={styles.contentBody}>
                      Storage capacity is being utilized efficiently across all
                      production nodes.
                    </Text>
                    <div className={styles.footerRow}>
                      <Badge appearance="tint" color="warning">
                        Monitor
                      </Badge>
                      <Text className={styles.contentBody}>
                        Projected growth 2%/mo
                      </Text>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type DeviceStatus = "online" | "offline";

interface Device {
  id: string;
  name: string;
  type: string;
  location: string;
  status: DeviceStatus;
}

const ALL_DEVICES: Device[] = [
  {
    id: "dev-001",
    name: "Camera A1",
    type: "Camera",
    location: "Stockholm - Building A",
    status: "online",
  },
  {
    id: "dev-002",
    name: "Camera B2",
    type: "Camera",
    location: "Stockholm - Building B",
    status: "online",
  },
  {
    id: "dev-003",
    name: "Intercom C1",
    type: "Intercom",
    location: "Lund - Main Office",
    status: "offline",
  },
  {
    id: "dev-004",
    name: "Access Control D1",
    type: "Access Control",
    location: "Prague - Data Center",
    status: "online",
  },
  {
    id: "dev-005",
    name: "Camera C3",
    type: "Camera",
    location: "Stockholm - Building C",
    status: "online",
  },
  {
    id: "dev-006",
    name: "Intercom B2",
    type: "Intercom",
    location: "Stockholm - Building B",
    status: "online",
  },
  {
    id: "dev-007",
    name: "Camera D4",
    type: "Camera",
    location: "Lund - Main Office",
    status: "offline",
  },
  {
    id: "dev-008",
    name: "Access Control A1",
    type: "Access Control",
    location: "Stockholm - Building A",
    status: "online",
  },
  {
    id: "dev-009",
    name: "Camera E5",
    type: "Camera",
    location: "Prague - Data Center",
    status: "online",
  },
  {
    id: "dev-010",
    name: "Intercom A1",
    type: "Intercom",
    location: "Stockholm - Building A",
    status: "offline",
  },
];

const PAGE_SIZE = 5;

const deviceColumns: TableColumnDefinition<Device>[] = [
  createTableColumn<Device>({
    columnId: "name",
    renderHeaderCell: () => "Name",
    renderCell: (device) => <TableCellLayout>{device.name}</TableCellLayout>,
  }),
  createTableColumn<Device>({
    columnId: "type",
    renderHeaderCell: () => "Type",
    renderCell: (device) => <TableCellLayout>{device.type}</TableCellLayout>,
  }),
  createTableColumn<Device>({
    columnId: "location",
    renderHeaderCell: () => "Location",
    renderCell: (device) => (
      <TableCellLayout>{device.location}</TableCellLayout>
    ),
  }),
  createTableColumn<Device>({
    columnId: "status",
    renderHeaderCell: () => "Status",
    renderCell: (device) => (
      <TableCellLayout>
        <Badge
          appearance="tint"
          color={device.status === "online" ? "success" : "warning"}
        >
          {device.status}
        </Badge>
      </TableCellLayout>
    ),
  }),
];

function DevicesPage({
  forceDesktopLayout = false,
}: ResponsiveLayoutPageProps) {
  const styles = useStyles();
  const rail = useRailState();
  const mediaType = useMediaQuery();
  const isSmall = !forceDesktopLayout && mediaType === "small";
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(["dev-001"])
  );
  const [skip, setSkip] = useState(0);

  const controller = usePageController({
    total: ALL_DEVICES.length,
    skip,
    take: PAGE_SIZE,
    setSkip,
  });

  const pagedDevices = ALL_DEVICES.slice(skip, skip + PAGE_SIZE);
  const firstRow = skip + 1;
  const lastRow = Math.min(skip + PAGE_SIZE, ALL_DEVICES.length);

  return (
    <div className={styles.shell}>
      <SuiteHeader
        className={styles.suiteHeader}
        productName="Axis Management"
        showSearch
        searchPlaceholder="Search systems and devices"
        launcherOrganizationItems={defaultLauncherOrganizationItems}
        utilityActions={headerUtilityActions}
      />
      <div
        className={
          rail.showDrawer
            ? `${styles.body} ${styles.bodyWithDrawer}`
            : styles.body
        }
      >
        <CompactRailNavigation
          className={styles.compactRail}
          style={{ height: "100%" }}
          selectedItemId={rail.selectedNavItemId}
          onSelect={rail.onSelect}
        />
        <InlineDrawerSlot open={rail.showDrawer} isSmall={isSmall} />
        <div className={styles.workspaceHost}>
          <div className={styles.pageSection}>
            <div
              className={
                isSmall
                  ? `${styles.pageHeaderStack} ${styles.pageHeaderStackCompact}`
                  : styles.pageHeaderStack
              }
            >
              <FullPageHeader
                breadcrumbs={[
                  { label: "Management", onClick: () => {} },
                  { label: "Devices" },
                ]}
                title="Device Management"
                status={{
                  label: "8 online",
                  meta: "2 offline",
                  color: "warning",
                }}
              />
            </div>

            <div className={styles.pageScrollArea}>
              <div
                className={
                  isSmall
                    ? `${styles.pageContentArea} ${styles.pageContentAreaCompact}`
                    : styles.pageContentArea
                }
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div className={styles.dataGridWrapper}>
                  <FilterToolbar
                    toolbarBackground="transparent"
                    filters={[
                      { id: "type-camera", label: "Type: Camera" },
                      { id: "type-intercom", label: "Type: Intercom" },
                      { id: "status-online", label: "Status: Online" },
                      { id: "status-offline", label: "Status: Offline" },
                    ]}
                    defaultSelectedFilterIds={["status-online"]}
                    searchPlaceholder="Search devices..."
                    primaryActions={[
                      {
                        id: "add",
                        label: "Add",
                        icon: <AddRegular />,
                        appearance: "primary",
                        onClick: () => console.log("add device"),
                      },
                      {
                        id: "edit",
                        label: "Edit",
                        icon: <EditRegular />,
                        disabled: selectedItems.size !== 1,
                        onClick: () => console.log("edit device"),
                      },
                      {
                        id: "delete",
                        label: "Delete",
                        icon: <DeleteRegular />,
                        disabled: selectedItems.size === 0,
                        onClick: () => console.log("delete devices"),
                      },
                    ]}
                    onSearchChange={(value) => console.log("search", value)}
                  />
                  <div className={styles.dataGridScroll}>
                    <DataGrid
                      className={styles.dataGrid}
                      items={pagedDevices}
                      columns={deviceColumns}
                      selectionMode="multiselect"
                      selectedItems={selectedItems}
                      onSelectionChange={(_e, data) =>
                        setSelectedItems(data.selectedItems as Set<string>)
                      }
                      getRowId={(device) => device.id}
                    >
                      <DataGridHeader>
                        <DataGridRow
                          selectionCell={{ "aria-label": "Select all rows" }}
                        >
                          {({ renderHeaderCell }) => (
                            <DataGridHeaderCell>
                              {renderHeaderCell()}
                            </DataGridHeaderCell>
                          )}
                        </DataGridRow>
                      </DataGridHeader>
                      <DataGridBody<Device>>
                        {({ item, rowId }) => (
                          <DataGridRow<Device>
                            key={rowId}
                            selectionCell={{
                              "aria-label": `Select ${item.name}`,
                            }}
                          >
                            {({ renderCell }) => (
                              <DataGridCell>{renderCell(item)}</DataGridCell>
                            )}
                          </DataGridRow>
                        )}
                      </DataGridBody>
                    </DataGrid>
                  </div>
                  <Pagination
                    className={styles.paginationSticky}
                    currentPage={controller.currentPage + 1}
                    totalPages={controller.totalPages}
                    nextPage={controller.nextPage}
                    prevPage={controller.prevPage}
                    goToPage={(page) => controller.goToPage(page - 1)}
                    canGoBackward={controller.canGoBackward}
                    canGoForward={controller.canGoForward}
                    total={ALL_DEVICES.length}
                    firstPageRow={firstRow}
                    lastPageRow={lastRow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SettingsFormValues {
  organizationName: string;
  contactEmail: string;
  supportContact: string;
  automatedBackups: boolean;
  securityAlerts: boolean;
  twoFactor: boolean;
}

const INITIAL_SETTINGS: SettingsFormValues = {
  organizationName: "",
  contactEmail: "",
  supportContact: "",
  automatedBackups: true,
  securityAlerts: true,
  twoFactor: false,
};

function SettingsPage({
  forceDesktopLayout = false,
}: ResponsiveLayoutPageProps) {
  const styles = useStyles();
  const rail = useRailState();
  const mediaType = useMediaQuery();
  const isSmall = !forceDesktopLayout && mediaType === "small";
  const [saved, setSaved] = useState<SettingsFormValues>(INITIAL_SETTINGS);
  const [draft, setDraft] = useState<SettingsFormValues>(INITIAL_SETTINGS);
  const toasterId = useId("settings-toaster");
  const { dispatchToast } = useToastController(toasterId);

  const isDirty = useMemo(
    () =>
      draft.organizationName !== saved.organizationName ||
      draft.contactEmail !== saved.contactEmail ||
      draft.supportContact !== saved.supportContact ||
      draft.automatedBackups !== saved.automatedBackups ||
      draft.securityAlerts !== saved.securityAlerts ||
      draft.twoFactor !== saved.twoFactor,
    [draft, saved]
  );

  const updateField =
    <K extends keyof SettingsFormValues>(field: K) =>
    (value: SettingsFormValues[K]) =>
      setDraft((prev) => ({ ...prev, [field]: value }));

  return (
    <div className={styles.shell}>
      <Toaster toasterId={toasterId} position="top-end" />
      <SuiteHeader
        className={styles.suiteHeader}
        productName="Axis Management"
        showSearch
        searchPlaceholder="Search systems and devices"
        launcherOrganizationItems={defaultLauncherOrganizationItems}
        utilityActions={headerUtilityActions}
      />
      <div
        className={
          rail.showDrawer
            ? `${styles.body} ${styles.bodyWithDrawer}`
            : styles.body
        }
      >
        <CompactRailNavigation
          className={styles.compactRail}
          style={{ height: "100%" }}
          selectedItemId={rail.selectedNavItemId}
          onSelect={rail.onSelect}
        />
        <InlineDrawerSlot open={rail.showDrawer} isSmall={isSmall} />
        <div className={styles.workspaceHost}>
          <div className={styles.pageSection}>
            <div
              className={
                isSmall
                  ? `${styles.pageHeaderStack} ${styles.pageHeaderStackCompact}`
                  : styles.pageHeaderStack
              }
            >
              <FullPageHeader
                breadcrumbs={[
                  { label: "Administration", onClick: () => {} },
                  { label: "Settings" },
                ]}
                title="System Settings"
                status={{
                  label: "Configured",
                  meta: "Manage organization settings",
                  color: "success",
                }}
                actions={[
                  {
                    label: "Reset",
                    icon: <ArrowResetRegular />,
                    appearance: "secondary",
                    disabled: !isDirty,
                    onClick: () => setDraft(saved),
                  },
                  {
                    label: "Save",
                    icon: <SaveRegular />,
                    appearance: isDirty ? "primary" : "secondary",
                    disabled: !isDirty,
                    onClick: () => {
                      setSaved(draft);
                      dispatchToast(
                        <Toast>
                          <ToastTitle>Settings saved</ToastTitle>
                          <ToastBody>Your changes have been applied.</ToastBody>
                        </Toast>,
                        { intent: "success" }
                      );
                    },
                  },
                ]}
                tabs={[
                  { value: "general", label: "General" },
                  { value: "preferences", label: "Preferences" },
                  { value: "security", label: "Security" },
                ]}
                defaultSelectedTab="general"
              />
            </div>

            <div className={styles.pageScrollArea}>
              <div
                className={
                  isSmall
                    ? `${styles.pageContentArea} ${styles.pageContentAreaCompact}`
                    : styles.pageContentArea
                }
              >
                <div className={styles.contentGrid12}>
                  <Card
                    className={styles.formColumn}
                    style={{
                      padding: tokens.spacingHorizontalL,
                      display: "flex",
                      flexDirection: "column",
                      gap: tokens.spacingVerticalL,
                      backgroundColor: tokens.colorNeutralBackground1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: tokens.fontSizeBase400,
                        fontWeight: tokens.fontWeightSemibold,
                      }}
                    >
                      Organization Settings
                    </Text>

                    <div className={styles.formStack}>
                      <Field label="Organization name">
                        <Input
                          placeholder="Enter organization name"
                          value={draft.organizationName}
                          onChange={(_e, data) =>
                            updateField("organizationName")(data.value)
                          }
                        />
                      </Field>

                      <Field label="Organization ID">
                        <Input placeholder="Auto-generated" disabled />
                      </Field>

                      <Field label="Primary contact email">
                        <Input
                          placeholder="contact@organization.com"
                          type="email"
                          value={draft.contactEmail}
                          onChange={(_e, data) =>
                            updateField("contactEmail")(data.value)
                          }
                        />
                      </Field>

                      <Field label="Support contact">
                        <Input
                          placeholder="support@organization.com"
                          type="email"
                          value={draft.supportContact}
                          onChange={(_e, data) =>
                            updateField("supportContact")(data.value)
                          }
                        />
                      </Field>
                    </div>
                  </Card>

                  <Card
                    className={styles.asideColumn}
                    style={{
                      padding: tokens.spacingHorizontalL,
                      display: "flex",
                      flexDirection: "column",
                      gap: tokens.spacingVerticalM,
                      backgroundColor: tokens.colorNeutralBackground1,
                    }}
                  >
                    <Text style={{ fontWeight: tokens.fontWeightSemibold }}>
                      Preferences
                    </Text>
                    <Checkbox
                      label="Enable automated backups"
                      checked={draft.automatedBackups}
                      onChange={(_e, data) =>
                        updateField("automatedBackups")(Boolean(data.checked))
                      }
                    />
                    <Checkbox
                      label="Send security alerts"
                      checked={draft.securityAlerts}
                      onChange={(_e, data) =>
                        updateField("securityAlerts")(Boolean(data.checked))
                      }
                    />
                    <Checkbox
                      label="Enable two-factor authentication"
                      checked={draft.twoFactor}
                      onChange={(_e, data) =>
                        updateField("twoFactor")(Boolean(data.checked))
                      }
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const responsiveGridGuide = `
Application pages are laid out on a **12-column grid** that adapts across six
breakpoints. Instead of stretching content to fill the available space, every
block is assigned a **column span per breakpoint** — this keeps line lengths
readable and content predictable from mobile to ultra-wide.

The grid measures **its own width, not the viewport** (CSS container queries).
That matters because the content area shrinks when a side rail or filter drawer
is open: the same page reflows to one column when it is squeezed, even on a
large monitor.

### Breakpoints (content-area width)

| Size class | Breakpoint range | Breakpoints |
| --- | --- | --- |
| small | 320–479 | < 479 pixels |
| medium | 480–639 | < 639 pixels |
| large | 640–1023 | < 1023 pixels |
| x-large | 1024–1365 | > 1024 pixels |
| xx-large | 1366–1919 | > 1366 pixels |
| xxx-large | 1920 and up | > 1920 pixels |

### Column spans by region

| Region | small | medium | large | x-large | xx-large | xxx-large |
| --- | --- | --- | --- | --- | --- | --- |
| **Form** | 12/12 (full) | 12/12 (full) | 6/12 (½) | **4/12 (⅓)** | **4/12 (⅓)** | 3/12 (¼) |
| **Supporting / preferences** | 12/12 (full) | 12/12 (full) | 6/12 (½) | 3/12 (¼) | 3/12 (¼) | 2/12 (⅙) |
| **Data table** | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 | 12/12 |
| **Dashboard cards** | 12/12 | 6/12 | 4/12 | 3/12 | 3/12 | 2/12 |

### Rules of thumb for designers

- **Measure the content area, not the screen.** A drawer or rail makes the page
  narrower — design the breakpoint where the layout *stops working*, then trust
  the grid to collapse to one column when space runs out.
- **Forms are not full-width.** A form column maxes out at ~⅓ of the page on
  wide screens. Wide fields are hard to scan and look unfinished.
- **Stack form fields in a single column.** Two-up fields only work for short,
  paired values (e.g. first / last name); default to stacked.
- **Reserve whitespace.** Empty grid columns to the right of a narrow form are
  intentional — they are not "unused space" to be filled.
- **Cards stack vertically when narrow.** At the small breakpoint, side-by-side
  cards become a single stacked column in source order.
- **Tables and toolbars span all 12 columns** at every breakpoint; their
  internal columns collapse instead of the page grid.
`;

function ResponsiveLayoutDocsPage() {
  // The story previews are full-page app shells rendered in their own iframes.
  // As each iframe mounts, a focusable element inside it (form fields, data
  // grid, etc.) receives focus and the browser scrolls that iframe into view,
  // leaving the Docs page parked in the middle on load. Keep the Docs page
  // pinned to the top until the user scrolls intentionally.
  useEffect(() => {
    let frame = 0;
    let userScrolled = false;

    const markUserScroll = () => {
      userScrolled = true;
    };

    const start = performance.now();
    const pinToTop = () => {
      if (userScrolled) {
        return;
      }
      window.scrollTo(0, 0);
      if (performance.now() - start < 1500) {
        frame = requestAnimationFrame(pinToTop);
      }
    };
    frame = requestAnimationFrame(pinToTop);

    window.addEventListener("wheel", markUserScroll, { passive: true });
    window.addEventListener("touchmove", markUserScroll, { passive: true });
    window.addEventListener("keydown", markUserScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", markUserScroll);
      window.removeEventListener("touchmove", markUserScroll);
      window.removeEventListener("keydown", markUserScroll);
    };
  }, []);

  return (
    <>
      <Title />
      <Description />
      <Heading>Designing responsively: the 12-column grid</Heading>
      <Markdown>{responsiveGridGuide}</Markdown>
      <Heading>Dashboard View</Heading>
      <Canvas of={DashboardView} />
      <Heading>Devices List View</Heading>
      <Canvas of={DevicesListView} />
      <Heading>Settings Form View</Heading>
      <Canvas of={SettingsFormView} />
    </>
  );
}

const meta: Meta = {
  title: "UI patterns/Responsive Layout",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: ResponsiveLayoutDocsPage,
      story: {
        inline: false,
        height: "960px",
      },
      description: {
        component:
          "Responsive layout demonstration showing how UI pattern components (SuiteHeader, SideNavigation, FullPageHeader, FilterToolbar) compose together in a real application. Pages are laid out on a 12-column grid that reflows by breakpoint — see the designer guidance below. Each story variant shows a different page type: Dashboard overview, Device management, and System settings.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const isDocsView = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (new URLSearchParams(window.location.search).get("viewMode") === "docs") {
    return true;
  }

  try {
    const parentParams = new URLSearchParams(window.parent.location.search);
    const parentPath = parentParams.get("path");
    return parentPath?.startsWith("/docs/") ?? false;
  } catch {
    return false;
  }
};

export const DashboardView: Story = {
  render: () => <DashboardPage forceDesktopLayout={isDocsView()} />,
};

export const DevicesListView: Story = {
  render: () => <DevicesPage forceDesktopLayout={isDocsView()} />,
};

export const SettingsFormView: Story = {
  render: () => <SettingsPage forceDesktopLayout={isDocsView()} />,
};
