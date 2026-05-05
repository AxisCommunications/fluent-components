import { axisLightTheme } from "@axiscommunications/fluent-theme";
import {
  Badge,
  CounterBadge,
  FluentProvider,
  PresenceBadge,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Tooltip,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { AlertRegular, LockClosedRegular } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * # Badges in Tables
 *
 * A badge is a visual indicator that communicates a status or description of an
 * associated component. They use short text, color, and icons for quick recognition
 * and are placed near the relevant content. — Fluent 2
 *
 * ## Badge types
 *
 * | Type | Usage |
 * |------|-------|
 * | `Badge` | Status labels and descriptive metadata — the primary type for tables |
 * | `CounterBadge` | Numeric summaries, e.g. issue or alert counts |
 * | `PresenceBadge` | Online/offline/away availability states |
 *
 * ## Design guidelines
 *
 * - **Use outlined badges by default** in tables. Multiple filled badges on one page
 *   create high visual noise; outlined badges provide balance without losing clarity.
 * - **Use filled badges sparingly** — reserve them for exceptions that genuinely need
 *   to stand out (e.g. a single critical-severity row in an otherwise low-severity list).
 * - **Keep labels short.** Badges are not the place for descriptions; use a tooltip for
 *   additional context if needed.
 * - **Position badges in a supporting column**, not as the first column or a heading.
 *   Badges are secondary and should reinforce — not lead — the content.
 * - **Don't use badges for interactive actions.** If a badge would trigger something
 *   on click, use a `ToggleButton` instead.
 * - **Use system-generated data only.** Badges represent facts the system determines.
 *   For user-selected values (e.g. categories, recipients) use Tags instead.
 * - **Combine badges when they represent separate facts** — e.g. "Online" (presence)
 *   + "Critical" (severity) can coexist in the same cell as they convey different information.
 *
 * ## Accessibility
 *
 * - An icon-only badge **must** have an `aria-label`.
 * - If a badge is visually attached to another element, that element's `aria-label`
 *   should include the badge information so screen readers announce the full context.
 * - If you add interactivity to a badge (e.g. a `Tooltip`), ensure the badge is
 *   focusable so keyboard users can reach it.
 */

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const useTableStyles = makeStyles({
  root: {
    width: "100%",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusLarge,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  headerCell: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  badgeCell: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  sectionLabel: {
    display: "block",
    marginBottom: tokens.spacingVerticalS,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXL,
    padding: tokens.spacingVerticalXL,
  },
});

// ---------------------------------------------------------------------------
// Story: StatusBadges — outlined (recommended default)
// ---------------------------------------------------------------------------

type DeviceRow = {
  id: string;
  name: string;
  location: string;
  status: "Online" | "Offline" | "Warning" | "Error";
};

const deviceData: DeviceRow[] = [
  { id: "1", name: "Camera 01", location: "Entrance A", status: "Online" },
  { id: "2", name: "Camera 02", location: "Parking lot", status: "Warning" },
  {
    id: "3",
    name: "Door controller 1",
    location: "Server room",
    status: "Online",
  },
  { id: "4", name: "Speaker array", location: "Lobby", status: "Offline" },
  { id: "5", name: "Radar sensor", location: "Roof", status: "Error" },
];

const statusColorMap: Record<
  DeviceRow["status"],
  "success" | "warning" | "danger" | "subtle"
> = {
  Online: "success",
  Warning: "warning",
  Error: "danger",
  Offline: "subtle",
};

function StatusTable({
  appearance,
}: { appearance: "outline" | "filled" | "tint" }) {
  const styles = useTableStyles();
  return (
    <Table className={styles.root} aria-label="Device status table">
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.headerCell}>
            Device
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Location
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Status
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deviceData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <TableCellLayout>{row.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>{row.location}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                <Badge
                  appearance={appearance}
                  color={statusColorMap[row.status]}
                >
                  {row.status}
                </Badge>
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// Story: MultipleBadgesPerCell — combining independent facts
// ---------------------------------------------------------------------------

type AssetRow = {
  id: string;
  name: string;
  connectivity: "Online" | "Offline";
  severity: "Critical" | "High" | "Normal";
};

const assetData: AssetRow[] = [
  {
    id: "1",
    name: "Network switch A",
    connectivity: "Online",
    severity: "Normal",
  },
  {
    id: "2",
    name: "Access controller",
    connectivity: "Online",
    severity: "Critical",
  },
  { id: "3", name: "Intercom unit", connectivity: "Offline", severity: "High" },
  {
    id: "4",
    name: "Edge recorder",
    connectivity: "Online",
    severity: "Normal",
  },
];

const severityMap: Record<
  AssetRow["severity"],
  "danger" | "warning" | "success"
> = {
  Critical: "danger",
  High: "warning",
  Normal: "success",
};

function MultipleBadgesTable() {
  const styles = useTableStyles();
  return (
    <Table className={styles.root} aria-label="Asset status table">
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.headerCell}>Asset</TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Status
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assetData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <TableCellLayout>{row.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {/* Two badges representing independent facts: connectivity + severity */}
                <span className={styles.badgeCell}>
                  <PresenceBadge
                    status={
                      row.connectivity === "Online" ? "available" : "offline"
                    }
                    aria-label={row.connectivity}
                  />
                  <Badge appearance="outline" color={severityMap[row.severity]}>
                    {row.severity}
                  </Badge>
                </span>
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// Story: CounterBadgeInTable — numeric summaries
// ---------------------------------------------------------------------------

type SiteRow = { id: string; site: string; alerts: number; incidents: number };

const siteData: SiteRow[] = [
  { id: "1", site: "Stockholm HQ", alerts: 0, incidents: 0 },
  { id: "2", site: "Oslo office", alerts: 3, incidents: 1 },
  { id: "3", site: "Copenhagen hub", alerts: 12, incidents: 2 },
  { id: "4", site: "Helsinki depot", alerts: 1, incidents: 0 },
];

function CounterBadgeTable() {
  const styles = useTableStyles();
  return (
    <Table className={styles.root} aria-label="Site alert summary table">
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.headerCell}>Site</TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Active alerts
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>
            Open incidents
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {siteData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <TableCellLayout>{row.site}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {row.alerts > 0 ? (
                  <CounterBadge
                    count={row.alerts}
                    color="danger"
                    appearance="filled"
                    aria-label={`${row.alerts} active alerts`}
                  />
                ) : (
                  <span aria-hidden="true">—</span>
                )}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {row.incidents > 0 ? (
                  <CounterBadge
                    count={row.incidents}
                    color="important"
                    appearance="filled"
                    aria-label={`${row.incidents} open incidents`}
                  />
                ) : (
                  <span aria-hidden="true">—</span>
                )}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// Story: IconOnlyBadge — icon badge with aria-label + tooltip for focus
// ---------------------------------------------------------------------------

type AlertRow = { id: string; name: string; locked: boolean; alert: boolean };

const alertData: AlertRow[] = [
  { id: "1", name: "Zone controller", locked: true, alert: false },
  { id: "2", name: "Video encoder", locked: false, alert: true },
  { id: "3", name: "Door sensor", locked: true, alert: true },
  { id: "4", name: "PTZ camera", locked: false, alert: false },
];

function IconBadgeTable() {
  const styles = useTableStyles();
  return (
    <Table className={styles.root} aria-label="Device alert table">
      <TableHeader>
        <TableRow>
          <TableHeaderCell className={styles.headerCell}>
            Device
          </TableHeaderCell>
          <TableHeaderCell className={styles.headerCell}>Flags</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alertData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <TableCellLayout>{row.name}</TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                <span className={styles.badgeCell}>
                  {row.locked && (
                    // Icon-only badge: aria-label is required to communicate intent
                    // Tooltip ensures keyboard users can access the label on focus
                    <Tooltip content="Access restricted" relationship="label">
                      <Badge
                        appearance="outline"
                        color="informative"
                        icon={<LockClosedRegular />}
                        role="img"
                        aria-label="Access restricted"
                        tabIndex={0}
                      />
                    </Tooltip>
                  )}
                  {row.alert && (
                    <Tooltip
                      content="Unacknowledged alert"
                      relationship="label"
                    >
                      <Badge
                        appearance="outline"
                        color="warning"
                        icon={<AlertRegular />}
                        role="img"
                        aria-label="Unacknowledged alert"
                        tabIndex={0}
                      />
                    </Tooltip>
                  )}
                  {!row.locked && !row.alert && (
                    <span
                      aria-hidden="true"
                      style={{ color: tokens.colorNeutralForeground4 }}
                    >
                      —
                    </span>
                  )}
                </span>
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ---------------------------------------------------------------------------
// Story: DoAndDont
// ---------------------------------------------------------------------------

function DoAndDontTable() {
  const styles = useTableStyles();

  // ✅ DO: badge as a supporting column, outlined, concise label
  const doRows = [
    { id: "1", device: "Camera 01", status: "Online" as DeviceRow["status"] },
    { id: "2", device: "Speaker 03", status: "Warning" as DeviceRow["status"] },
  ];

  // ❌ DON'T: long label, badge as first/primary column
  const dontRows = [
    {
      id: "1",
      badge: "Firmware update available — restart required",
      device: "Camera 01",
    },
    { id: "2", badge: "Connectivity is degraded", device: "Speaker 03" },
  ];

  return (
    <div className={styles.section}>
      {/* DO */}
      <div>
        <Text className={styles.sectionLabel}>
          ✅ Do — outlined badge, short label, supporting column
        </Text>
        <Table
          className={styles.root}
          aria-label="Do example: badges as supporting information"
        >
          <TableHeader>
            <TableRow>
              <TableHeaderCell className={styles.headerCell}>
                Device
              </TableHeaderCell>
              <TableHeaderCell className={styles.headerCell}>
                Status
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <TableCellLayout>{row.device}</TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>
                    <Badge
                      appearance="outline"
                      color={statusColorMap[row.status]}
                    >
                      {row.status}
                    </Badge>
                  </TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* DON'T: badge with long text in a leading column */}
      <div>
        <Text className={styles.sectionLabel}>
          ❌ Don't — badge used as primary column or with a long description
        </Text>
        <Table
          className={styles.root}
          aria-label="Don't example: badges as primary content"
        >
          <TableHeader>
            <TableRow>
              {/* Badge as first column — avoid this */}
              <TableHeaderCell className={styles.headerCell}>
                Status
              </TableHeaderCell>
              <TableHeaderCell className={styles.headerCell}>
                Device
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dontRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <TableCellLayout>
                    {/* Long text in a badge — avoid this */}
                    <Badge appearance="filled" color="warning">
                      {row.badge}
                    </Badge>
                  </TableCellLayout>
                </TableCell>
                <TableCell>
                  <TableCellLayout>{row.device}</TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Story: FilledVsOutlined comparison
// ---------------------------------------------------------------------------

function FilledVsOutlinedTable() {
  const styles = useTableStyles();
  return (
    <div className={styles.section}>
      <div>
        <Text className={styles.sectionLabel}>
          Outlined (default) — use when badges appear on many rows. Reduces
          cognitive load and creates visual balance.
        </Text>
        <StatusTable appearance="outline" />
      </div>
      <div>
        <Text className={styles.sectionLabel}>
          Filled — use sparingly for exceptions that must stand out. Avoid when
          most rows carry a badge.
        </Text>
        <StatusTable appearance="filled" />
      </div>
      <div>
        <Text className={styles.sectionLabel}>
          Tint — a middle ground between filled and outlined. Suitable for
          dashboards and card contexts.
        </Text>
        <StatusTable appearance="tint" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Storybook meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: "UI patterns/Badge Patterns",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A badge is a visual indicator that communicates a status or description of an associated component.
They use short text, color, and icons for quick recognition and are placed near the relevant content.

This story covers how to use Fluent \`Badge\`, \`CounterBadge\`, and \`PresenceBadge\` inside data tables.
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={axisLightTheme}>
        <Story />
      </FluentProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Use outlined badges when badges appear on many rows. This minimises cognitive load and
 * creates visual balance across the table.
 *
 * The status column is **never** the first column — badges are secondary and supportive.
 */
export const OutlinedStatusBadge: Story = {
  name: "Status badge (outlined — recommended)",
  render: () => <StatusTable appearance="outline" />,
};

/**
 * Choose the badge appearance based on context:
 * - **Outlined** — default for tables; low visual weight when many badges are visible
 * - **Filled** — exceptions only; draws maximum attention to a single row
 * - **Tint** — suitable for dashboards and card bodies where a touch of color aids scanning
 */
export const AppearanceComparison: Story = {
  name: "Filled vs outlined vs tint",
  render: () => <FilledVsOutlinedTable />,
};

/**
 * Use multiple badges in a single cell when the facts they represent are **independent**.
 * Here a `PresenceBadge` (connectivity state) is combined with a `Badge` (severity level).
 *
 * Don't stack badges for the same type of information — pick the most important one.
 */
export const MultipleBadgesPerCell: Story = {
  name: "Multiple badges per cell",
  render: () => <MultipleBadgesTable />,
};

/**
 * `CounterBadge` is best for showing aggregate counts such as open alerts or unread items.
 * Show a neutral placeholder (e.g. `—`) instead of a zero counter to reduce noise.
 */
export const CounterBadgeInTable: Story = {
  name: "Counter badge — numeric summaries",
  render: () => <CounterBadgeTable />,
};

/**
 * When a badge contains only an icon, you **must** supply an `aria-label`.
 * If you add a `Tooltip` for sighted users, ensure the badge is focusable
 * (`tabIndex={0}`) so keyboard users can also reach the tooltip.
 */
export const IconOnlyBadgeWithTooltip: Story = {
  name: "Icon-only badge with tooltip",
  render: () => <IconBadgeTable />,
};

/**
 * **Do**
 * - Keep badge labels short (one or two words)
 * - Place badges in a supporting column, not as the first/primary column
 * - Use outlined badges as the default when badges appear on multiple rows
 * - Use semantic colors (`success`, `warning`, `danger`) so color communicates severity
 *
 * **Don't**
 * - Use badges as row headings or key identifiers
 * - Write long descriptions inside a badge — use a tooltip instead
 * - Put a badge in the first column — badges are secondary to the content
 * - Make badges interactive — use `ToggleButton` for clickable states
 * - Use badges for user-selected values (categories, recipients) — use Tags instead
 */
export const DoAndDont: Story = {
  name: "Do's and don'ts",
  render: () => <DoAndDontTable />,
};
