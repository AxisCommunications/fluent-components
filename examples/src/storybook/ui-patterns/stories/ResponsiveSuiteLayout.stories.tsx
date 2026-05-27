import { useMediaQuery, usePageController } from "@axiscommunications/fluent-hooks";
import { SideNavigation as CompactRailNavigation } from "@axiscommunications/fluent-side-navigation";
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
  Text,
  createTableColumn,
  makeStyles,
  shorthands,
  tokens,
  type TableColumnDefinition,
} from "@fluentui/react-components";
import {
  AddRegular,
  AlertRegular,
  CheckmarkCircle24Color,
  DeleteRegular,
  EditRegular,
  SettingsRegular,
} from "@fluentui/react-icons";
import { Canvas, Description, Heading, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterToolbar } from "../components/composites/FilterToolbar";
import { FullPageHeader } from "../components/composites/FullPageHeader";
import { InlineFilterDrawer } from "../components/composites/InlineFilterDrawer";
import { Pagination } from "../components/composites/Pagination";
import {
  SuiteHeader,
  type SuiteHeaderAction,
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
    display: "grid",
    gridTemplateColumns: "68px 1fr",
    overflow: "hidden",
  },
  bodyCompact: {
    minHeight: 0,
    display: "grid",
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
  bodyWithDrawer: {
    gridTemplateColumns: "68px 320px 1fr",
  },
  compactRail: {
    height: "100%",
    position: "sticky",
    top: 0,
    alignSelf: "start",
    zIndex: 3,
    backgroundColor: tokens.colorNeutralBackground4,
  },
  inlineDrawerPanel: {
    width: "320px",
    minWidth: "320px",
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground3,
    overflow: "hidden",
    position: "relative",
    zIndex: 4,
  },
  inlineDrawerPanelCompact: {
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    maxHeight: "40vh",
    backgroundColor: tokens.colorNeutralBackground3,
    overflow: "hidden",
    position: "relative",
    zIndex: 4,
    ...shorthands.borderBottom(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralStroke2
    ),
  },
  workspaceHost: {
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
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalL,
  },
  formGridCompact: {
    gridTemplateColumns: "1fr",
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
        {rail.showDrawer && (
          <div
            className={
              isSmall ? styles.inlineDrawerPanelCompact : styles.inlineDrawerPanel
            }
          >
            <InlineFilterDrawer
              fullHeight
              resizable={false}
              defaultWidth={isSmall ? 280 : 320}
              minWidth={isSmall ? 240 : 320}
              maxWidth={isSmall ? 420 : 320}
            />
          </div>
        )}
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
                      All core systems are running normally with full redundancy.
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
                      <Text className={styles.contentBody}>Next check in 5 min</Text>
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
  { id: "dev-001", name: "Camera A1", type: "Camera", location: "Stockholm - Building A", status: "online" },
  { id: "dev-002", name: "Camera B2", type: "Camera", location: "Stockholm - Building B", status: "online" },
  { id: "dev-003", name: "Intercom C1", type: "Intercom", location: "Lund - Main Office", status: "offline" },
  { id: "dev-004", name: "Access Control D1", type: "Access Control", location: "Prague - Data Center", status: "online" },
  { id: "dev-005", name: "Camera C3", type: "Camera", location: "Stockholm - Building C", status: "online" },
  { id: "dev-006", name: "Intercom B2", type: "Intercom", location: "Stockholm - Building B", status: "online" },
  { id: "dev-007", name: "Camera D4", type: "Camera", location: "Lund - Main Office", status: "offline" },
  { id: "dev-008", name: "Access Control A1", type: "Access Control", location: "Stockholm - Building A", status: "online" },
  { id: "dev-009", name: "Camera E5", type: "Camera", location: "Prague - Data Center", status: "online" },
  { id: "dev-010", name: "Intercom A1", type: "Intercom", location: "Stockholm - Building A", status: "offline" },
];

const PAGE_SIZE = 5;

const deviceColumns: TableColumnDefinition<Device>[] = [
  createTableColumn<Device>({
    columnId: "name",
    renderHeaderCell: () => "Name",
    renderCell: (device) => (
      <TableCellLayout>{device.name}</TableCellLayout>
    ),
  }),
  createTableColumn<Device>({
    columnId: "type",
    renderHeaderCell: () => "Type",
    renderCell: (device) => (
      <TableCellLayout>{device.type}</TableCellLayout>
    ),
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
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set(["dev-001"]));
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
        {rail.showDrawer && (
          <div
            className={
              isSmall ? styles.inlineDrawerPanelCompact : styles.inlineDrawerPanel
            }
          >
            <InlineFilterDrawer
              fullHeight
              resizable={false}
              defaultWidth={isSmall ? 280 : 320}
              minWidth={isSmall ? 240 : 320}
              maxWidth={isSmall ? 420 : 320}
            />
          </div>
        )}
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
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
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
                              <DataGridCell>
                                {renderCell(item)}
                              </DataGridCell>
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

function SettingsPage({
  forceDesktopLayout = false,
}: ResponsiveLayoutPageProps) {
  const styles = useStyles();
  const rail = useRailState();
  const mediaType = useMediaQuery();
  const isSmall = !forceDesktopLayout && mediaType === "small";
  const [isSaved] = useState(false);

  return (
    <div className={styles.shell}>
      <SuiteHeader
        className={styles.suiteHeader}
        productName="Axis Management"
        showSearch
        searchPlaceholder="Search systems and devices"
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
        {rail.showDrawer && (
          <div
            className={
              isSmall ? styles.inlineDrawerPanelCompact : styles.inlineDrawerPanel
            }
          >
            <InlineFilterDrawer
              fullHeight
              resizable={false}
              defaultWidth={isSmall ? 280 : 320}
              minWidth={isSmall ? 240 : 320}
              maxWidth={isSmall ? 420 : 320}
            />
          </div>
        )}
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
                  meta: "All required fields complete",
                  color: "success",
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
              >
                <Card
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

                <div
                  className={
                    isSmall
                      ? `${styles.formGrid} ${styles.formGridCompact}`
                      : styles.formGrid
                  }
                >
                  <Field label="Organization name">
                    <Input placeholder="Enter organization name" />
                  </Field>

                  <Field label="Organization ID">
                    <Input placeholder="Auto-generated" disabled />
                  </Field>

                  <Field label="Primary contact email">
                    <Input placeholder="contact@organization.com" type="email" />
                  </Field>

                  <Field label="Support contact">
                    <Input
                      placeholder="support@organization.com"
                      type="email"
                    />
                  </Field>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: tokens.spacingVerticalM,
                  }}
                >
                  <Text style={{ fontWeight: tokens.fontWeightSemibold }}>
                    Preferences
                  </Text>
                  <Checkbox label="Enable automated backups" defaultChecked />
                  <Checkbox label="Send security alerts" defaultChecked />
                  <Checkbox label="Enable two-factor authentication" />
                </div>

                  {isSaved && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: tokens.spacingHorizontalM,
                        padding: tokens.spacingHorizontalM,
                        backgroundColor: tokens.colorStatusSuccessBackground1,
                        borderRadius: tokens.borderRadiusMedium,
                        color: tokens.colorStatusSuccessForeground1,
                      }}
                    >
                      <CheckmarkCircle24Color />
                      <Text>Settings saved successfully</Text>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponsiveLayoutDocsPage() {
  return (
    <>
      <Title />
      <Description />
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
          "Responsive layout demonstration showing how UI pattern components (SuiteHeader, SideNavigation, FullPageHeader, FilterToolbar) compose together in a real application. Each story variant shows a different page type: Dashboard overview, Device management, and System settings.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardView: Story = {
  render: () => <DashboardPage />,
};

export const DevicesListView: Story = {
  render: () => <DevicesPage />,
};

export const SettingsFormView: Story = {
  render: () => <SettingsPage />,
};
