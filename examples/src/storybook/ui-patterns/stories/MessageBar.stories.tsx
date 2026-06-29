import {
  SideNavigation as BaseSideNavigation,
  type SideNavigationItem,
} from "@axiscommunications/fluent-side-navigation";
import {
  Badge,
  Button,
  Card,
  Link,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarGroup,
  MessageBarTitle,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { MessageBarIntent } from "@fluentui/react-components";
import {
  AlertFilled,
  AlertRegular,
  DismissRegular,
  GlobeFilled,
  GlobeRegular,
  HomeFilled,
  HomeRegular,
  SettingsFilled,
  SettingsRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { type CSSProperties, useState } from "react";
import { FullPageHeader } from "../components/composites/FullPageHeader";
import {
  SuiteHeader,
  type SuiteHeaderAction,
  defaultLauncherOrganizationItems,
} from "../components/suite/SuiteHeader";

/**
 * # Message Bar
 *
 * A message bar is an inline, persistent surface that communicates a status,
 * notification, or system message to the user. It stays in the layout until it
 * is resolved or dismissed — unlike a `Toast`, which is transient. — Fluent 2
 *
 * This pattern is built entirely from the native Fluent v9 `MessageBar`
 * primitives (`MessageBar`, `MessageBarBody`, `MessageBarTitle`,
 * `MessageBarActions`, `MessageBarGroup`) so it stays theme- and
 * accessibility-aligned with the rest of the design system.
 *
 * ## Placement levels
 *
 * | Level | Usage |
 * |-------|-------|
 * | **Global** | Full-width bar pinned to the top of a page or app shell. Use `shape="square"` so the bar spans edge-to-edge. Reserve for messages that affect the whole view. |
 * | **Container** | Rounded bar (`shape="rounded"`, the default) placed inside a card, panel, or form section. Use for messages scoped to that container. |
 *
 * ## Intents
 *
 * The `intent` prop drives the semantic color and leading icon — never style the
 * bar with raw colors.
 *
 * | Intent | Use for |
 * |--------|---------|
 * | `info` | Neutral, informational context |
 * | `success` | A completed, successful operation |
 * | `warning` | A condition the user should review |
 * | `error` | A failure that needs attention or action |
 *
 * ## Layout
 *
 * - `singleline` (default) keeps the body and actions on one row and truncates
 *   long text.
 * - `multiline` wraps long body text and moves actions below — use it when the
 *   message is long or carries multiple actions.
 * - `auto` switches between the two based on available width.
 *
 * ## Accessibility
 *
 * - Set `politeness="assertive"` for `error` bars so screen readers announce
 *   them immediately; keep `polite` (the default) for `info`, `success`, and
 *   `warning` so they don't interrupt the user.
 * - Always pair a dismiss (icon-only) button with an `aria-label`.
 * - Provide a `MessageBarTitle` for a concise summary; the body follows as the
 *   detail. The title is wired to the bar's labelling automatically.
 * - Stack related bars in a `MessageBarGroup` so enter/exit animations and
 *   spacing stay consistent and focus is preserved when a bar is removed.
 */

// ---------------------------------------------------------------------------
// Shared styles
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    width: "100%",
    maxWidth: "960px",
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
    gap: tokens.spacingVerticalXL,
    width: "100%",
    maxWidth: "960px",
  },

  // Global placement mock — an app shell with an edge-to-edge bar on top.
  appShell: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "960px",
    borderRadius: tokens.borderRadiusLarge,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  appBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingHorizontalXL,
    minHeight: "160px",
  },
  appBodyTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  appBodyText: {
    color: tokens.colorNeutralForeground2,
  },

  // Container placement mock — a card holding a scoped bar.
  card: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    width: "100%",
    maxWidth: "640px",
    padding: tokens.spacingHorizontalXL,
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow16,
  },
  cardTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  cardText: {
    color: tokens.colorNeutralForeground2,
  },

  // Placement-hierarchy mock — a full suite shell (app bar + rail + page header)
  // hosting app → page → section → card message-bar scopes.
  fullShell: {
    height: "100vh",
    display: "grid",
    // app header · app-scope bar · body (rail + workspace)
    gridTemplateRows: "48px auto 1fr",
    backgroundColor: tokens.colorNeutralBackground4,
    overflow: "hidden",
  },
  fullSuiteHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: tokens.colorNeutralBackground4,
  },
  fullBody: {
    minHeight: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  fullRail: {
    flexShrink: 0,
    height: "100%",
  },
  fullWorkspace: {
    flexGrow: 1,
    minWidth: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  fullPageHeaderStack: {
    flexShrink: 0,
    paddingTop: tokens.spacingVerticalS,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingLeft: tokens.spacingHorizontalXXL,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  fullPageScroll: {
    minHeight: 0,
    flex: 1,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    paddingTop: tokens.spacingVerticalL,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
    paddingLeft: tokens.spacingHorizontalXXL,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  scopeLabel: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground3,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  fullSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingHorizontalL,
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  fullSectionTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  fullCardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  fullCard: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    padding: tokens.spacingHorizontalL,
  },
  fullCardTitle: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  fullCardText: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
  },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Intent → recommended politeness. Errors announce assertively; others stay polite. */
function politenessFor(intent: MessageBarIntent): "assertive" | "polite" {
  return intent === "error" ? "assertive" : "polite";
}

const intentCopy: Record<MessageBarIntent, { title: string; body: string }> = {
  info: {
    title: "Scheduled maintenance",
    body: "Background indexing runs tonight at 02:00. No action is required.",
  },
  success: {
    title: "Changes saved",
    body: "Your configuration was updated and applied to all devices.",
  },
  warning: {
    title: "Certificate expiring",
    body: "The TLS certificate for this device expires in 7 days. Renew it to avoid downtime.",
  },
  error: {
    title: "Connection failed",
    body: "The device could not be reached. Check the network and try again.",
  },
};

// ---------------------------------------------------------------------------
// Building blocks
// ---------------------------------------------------------------------------

function BasicBar({
  intent,
  shape,
}: {
  intent: MessageBarIntent;
  shape?: "square" | "rounded";
}) {
  const copy = intentCopy[intent];
  return (
    <MessageBar
      intent={intent}
      shape={shape}
      politeness={politenessFor(intent)}
    >
      <MessageBarBody>
        <MessageBarTitle>{copy.title}</MessageBarTitle> {copy.body}
      </MessageBarBody>
    </MessageBar>
  );
}

// ---------------------------------------------------------------------------
// Suite-shell building blocks (used by the Placement hierarchy story)
// ---------------------------------------------------------------------------

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
      { id: "settings-storage", label: "Storage" },
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
 * Collapsible icon rail backing the suite shell, reusing the shared
 * {@link BaseSideNavigation} component from the design system.
 */
function ShellRailNavigation({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const [selectedItemId, setSelectedItemId] = useState("home");
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
      onSelect={setSelectedItemId}
    />
  );
}

// ---------------------------------------------------------------------------
// Storybook meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: "UI patterns/Message Bar",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A message bar is an inline, persistent surface for status, notification, and system
messages. Built from native Fluent v9 \`MessageBar\` primitives.

Use a **global** (full-width, \`shape="square"\`) bar for messages that affect the whole
page, and a **container** (rounded) bar for messages scoped to a card, panel, or form
section. The \`intent\` prop drives semantic color and icon — never use raw colors.

Set \`politeness="assertive"\` for errors and keep \`polite\` for everything else.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/**
 * The four intents. `intent` controls the semantic color and leading icon, so the
 * meaning is conveyed without relying on color alone (the icon and title carry it too).
 */
export const Intents: Story = {
  name: "Intents (info / success / warning / error)",
  render: () => {
    const styles = useStyles();
    const intents: MessageBarIntent[] = ["info", "success", "warning", "error"];
    return (
      <div className={styles.stack}>
        {intents.map((intent) => (
          <BasicBar key={intent} intent={intent} />
        ))}
      </div>
    );
  },
};

/**
 * **Global placement.** A full-width bar pinned to the top of an app shell. Use
 * `shape="square"` so the bar spans edge-to-edge with no rounded corners.
 *
 * Reserve global bars for messages that affect the entire view — e.g. a service-wide
 * outage or a recurring system warning.
 */
export const GlobalMessageBar: Story = {
  name: "Global (full-width, app top)",
  render: () => {
    const styles = useStyles();
    return (
      <div className={styles.appShell}>
        <MessageBar intent="warning" shape="square" politeness="polite">
          <MessageBarBody>
            <MessageBarTitle>Recurring warning</MessageBarTitle> Two devices
            report intermittent connectivity. Review their network settings.
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                appearance="transparent"
                icon={<DismissRegular />}
                aria-label="Dismiss message"
              />
            }
          >
            <Button>Review devices</Button>
          </MessageBarActions>
        </MessageBar>
        <div className={styles.appBody}>
          <Text as="h2" className={styles.appBodyTitle}>
            Dashboard
          </Text>
          <Text className={styles.appBodyText}>
            Page content sits below the global message bar.
          </Text>
        </div>
      </div>
    );
  },
};

/**
 * **Container placement.** A rounded bar (the default `shape`) scoped to a card or
 * form section. Use it for messages that relate only to the content of that container.
 */
export const ContainerLevelMessageBar: Story = {
  name: "Container level (inside a card)",
  render: () => {
    const styles = useStyles();
    return (
      <div className={styles.card}>
        <Text as="h2" className={styles.cardTitle}>
          Network settings
        </Text>
        <MessageBar intent="error" politeness="assertive">
          <MessageBarBody>
            <MessageBarTitle>Couldn't apply settings</MessageBarTitle> The
            gateway rejected the new DNS configuration. Verify the address and
            try again.
          </MessageBarBody>
          <MessageBarActions>
            <Button>Try again</Button>
          </MessageBarActions>
        </MessageBar>
        <Text className={styles.cardText}>
          The rest of the form fields would appear here.
        </Text>
      </div>
    );
  },
};

/**
 * **Placement hierarchy.** A message bar lives at the boundary of the scope it
 * applies to. From broadest to narrowest:
 *
 * 1. **App** — affects the whole application. Pin a full-width `shape="square"`
 *    bar directly below the top app bar. Reserve for the most severe, system-wide
 *    messages (use `error` + `politeness="assertive"`).
 * 2. **Page** — affects the current page. Place a bar at the top of the page
 *    content, above all sections.
 * 3. **Section** — affects one group of related content. Place a bar at the top
 *    of that section.
 * 4. **Card** — affects a single card/control. Place a bar inside the card.
 *
 * Match the bar's width and position to its scope so users can tell *what* a
 * message applies to. Avoid stacking many high-severity bars across levels at
 * once — escalate, don't overwhelm.
 */
export const PlacementHierarchy: Story = {
  name: "Placement hierarchy (app / page / section / card)",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "A full suite shell — app header, navigation rail, and page header — hosting a message bar at each scope: app → page → section → card. Each bar sits at the boundary of the scope it applies to, so its width and placement signal what it affects.",
      },
    },
  },
  render: () => {
    const styles = useStyles();
    return (
      <div className={styles.fullShell}>
        {/* Suite header — the top app bar. */}
        <SuiteHeader
          className={styles.fullSuiteHeader}
          productName="Axis Management"
          showSearch
          searchPlaceholder="Search systems and devices"
          launcherOrganizationItems={defaultLauncherOrganizationItems}
          utilityActions={headerUtilityActions}
        />

        {/* App scope — full width, edge-to-edge, directly below the app bar and
            spanning the rail. Reserve for the most severe, system-wide messages. */}
        <MessageBar intent="error" shape="square" politeness="assertive">
          <MessageBarBody>
            <MessageBarTitle>App-wide service advisory</MessageBarTitle> The
            Americas region is experiencing degraded connectivity. Some devices
            may be unreachable.
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                appearance="transparent"
                icon={<DismissRegular />}
                aria-label="Dismiss message"
              />
            }
          >
            <Button>Status page</Button>
          </MessageBarActions>
        </MessageBar>

        <div className={styles.fullBody}>
          <ShellRailNavigation
            className={styles.fullRail}
            style={{ height: "100%" }}
          />

          <div className={styles.fullWorkspace}>
            {/* Page header. */}
            <div className={styles.fullPageHeaderStack}>
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

            <div className={styles.fullPageScroll}>
              {/* Page scope — top of the page content, above all sections. */}
              <div>
                <Text className={styles.scopeLabel}>Page</Text>
                <MessageBar
                  intent="warning"
                  politeness="polite"
                  style={{ marginTop: tokens.spacingVerticalXS }}
                >
                  <MessageBarBody>
                    <MessageBarTitle>Scheduled maintenance</MessageBarTitle> A
                    maintenance window is planned tonight at 02:00. Recording
                    may be briefly unavailable.
                  </MessageBarBody>
                  <MessageBarActions
                    containerAction={
                      <Button
                        appearance="transparent"
                        icon={<DismissRegular />}
                        aria-label="Dismiss message"
                      />
                    }
                  >
                    <Button>View details</Button>
                  </MessageBarActions>
                </MessageBar>
              </div>

              {/* Section scope — top of one group of related content. */}
              <section className={styles.fullSection} aria-label="Storage">
                <Text as="h2" className={styles.fullSectionTitle}>
                  Storage
                </Text>
                <Text className={styles.scopeLabel}>Section — Storage</Text>
                <MessageBar intent="info" politeness="polite">
                  <MessageBarBody>
                    <MessageBarTitle>Retention policy updated</MessageBarTitle>{" "}
                    Capacity planning for this section was recalculated for the
                    new retention policy.
                  </MessageBarBody>
                </MessageBar>

                <div className={styles.fullCardGrid}>
                  {/* Card scope — inside a single card. */}
                  <Card className={styles.fullCard}>
                    <Text className={styles.scopeLabel}>Card — Capacity</Text>
                    <Text className={styles.fullCardTitle}>Node A1</Text>
                    <MessageBar intent="warning" politeness="polite">
                      <MessageBarBody>
                        <MessageBarTitle>Approaching capacity</MessageBarTitle>{" "}
                        This node is at 89% utilization.
                      </MessageBarBody>
                    </MessageBar>
                    <div>
                      <Badge appearance="tint" color="warning">
                        Monitor
                      </Badge>
                    </div>
                  </Card>

                  <Card className={styles.fullCard}>
                    <Text className={styles.fullCardTitle}>Node B2</Text>
                    <Text className={styles.fullCardText}>
                      Operating normally at 42% utilization with full
                      redundancy.
                    </Text>
                    <div>
                      <Badge appearance="tint" color="success">
                        Healthy
                      </Badge>
                    </div>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Bars can carry both **primary actions** and an icon-only **dismiss** button.
 *
 * - Action buttons go in `MessageBarActions` children.
 * - The dismiss button goes in the `containerAction` slot and **must** have an
 *   `aria-label`.
 * - Inline `Link`s in the body are fine for navigational follow-ups.
 */
export const WithActions: Story = {
  name: "With actions and dismiss",
  render: () => {
    const styles = useStyles();
    return (
      <div className={styles.stack}>
        <MessageBar intent="info" politeness="polite">
          <MessageBarBody>
            <MessageBarTitle>New firmware available</MessageBarTitle> Version
            11.2 improves stability. <Link href="#">Read the changelog</Link>.
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                appearance="transparent"
                icon={<DismissRegular />}
                aria-label="Dismiss message"
              />
            }
          >
            <Button>Update now</Button>
            <Button>Later</Button>
          </MessageBarActions>
        </MessageBar>
      </div>
    );
  },
};

/**
 * Long messages should use `layout="multiline"` so the body wraps and the actions
 * move to their own row instead of truncating. Compare with the default single-line
 * bar, which truncates overflowing text.
 */
export const Layout: Story = {
  name: "Single-line vs multiline",
  render: () => {
    const styles = useStyles();
    const longBody =
      "A scheduled maintenance window will temporarily take recording offline between 02:00 and 04:00. Connected cameras will reconnect automatically once the window completes, but live view may be unavailable during this period.";
    return (
      <div className={styles.section}>
        <div className={styles.stack}>
          <Text className={styles.sectionLabel}>
            Single-line (default) — truncates
          </Text>
          <MessageBar intent="info" politeness="polite">
            <MessageBarBody>
              <MessageBarTitle>Maintenance</MessageBarTitle> {longBody}
            </MessageBarBody>
            <MessageBarActions>
              <Button>Details</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
        <div className={styles.stack}>
          <Text className={styles.sectionLabel}>Multiline — wraps</Text>
          <MessageBar intent="info" politeness="polite" layout="multiline">
            <MessageBarBody>
              <MessageBarTitle>Maintenance</MessageBarTitle> {longBody}
            </MessageBarBody>
            <MessageBarActions>
              <Button>Details</Button>
              <Button>Dismiss</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
      </div>
    );
  },
};

/**
 * Stack multiple related bars in a `MessageBarGroup`. The group keeps spacing
 * consistent and animates bars in and out (`animate="both"`). Dismissing a bar
 * removes it from state while preserving the surrounding layout and focus order.
 */
export const StackedGroup: Story = {
  name: "Stacked group (dismissible)",
  render: () => {
    const styles = useStyles();
    type Item = { id: number; intent: MessageBarIntent };
    const initial: Item[] = [
      { id: 1, intent: "error" },
      { id: 2, intent: "warning" },
      { id: 3, intent: "success" },
      { id: 4, intent: "info" },
    ];
    const [items, setItems] = useState<Item[]>(initial);

    const dismiss = (id: number) =>
      setItems((current) => current.filter((item) => item.id !== id));

    return (
      <div className={styles.stack}>
        <MessageBarGroup animate="both" className={styles.stack}>
          {items.map((item) => {
            const copy = intentCopy[item.intent];
            return (
              <MessageBar
                key={item.id}
                intent={item.intent}
                politeness={politenessFor(item.intent)}
              >
                <MessageBarBody>
                  <MessageBarTitle>{copy.title}</MessageBarTitle> {copy.body}
                </MessageBarBody>
                <MessageBarActions
                  containerAction={
                    <Button
                      appearance="transparent"
                      icon={<DismissRegular />}
                      aria-label="Dismiss message"
                      onClick={() => dismiss(item.id)}
                    />
                  }
                />
              </MessageBar>
            );
          })}
        </MessageBarGroup>
        {items.length === 0 && (
          <Button onClick={() => setItems(initial)}>Reset messages</Button>
        )}
      </div>
    );
  },
};

/**
 * Interactive playground. Use the controls to change the intent, title, body, shape,
 * and layout. Politeness follows the intent automatically (assertive for errors).
 */
export const Playground: Story = {
  argTypes: {
    intent: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Semantic intent driving color and icon.",
    },
    shape: {
      control: "inline-radio",
      options: ["rounded", "square"],
      description: "Rounded for container level, square for global/full-width.",
    },
    layout: {
      control: "inline-radio",
      options: ["singleline", "multiline", "auto"],
      description: "Single-line truncates; multiline wraps.",
    },
    title: { control: "text" },
    body: { control: "text" },
  },
  args: {
    intent: "info",
    shape: "rounded",
    layout: "singleline",
    title: "Heads up",
    body: "This is a configurable message bar. Adjust the controls to explore states.",
  },
  render: (args) => {
    const styles = useStyles();
    const intent = args.intent as MessageBarIntent;
    return (
      <div className={styles.stack}>
        <MessageBar
          intent={intent}
          shape={args.shape as "rounded" | "square"}
          layout={args.layout as "singleline" | "multiline" | "auto"}
          politeness={politenessFor(intent)}
        >
          <MessageBarBody>
            <MessageBarTitle>{args.title as string}</MessageBarTitle>{" "}
            {args.body as string}
          </MessageBarBody>
          <MessageBarActions
            containerAction={
              <Button
                appearance="transparent"
                icon={<DismissRegular />}
                aria-label="Dismiss message"
              />
            }
          >
            <Button>Action</Button>
          </MessageBarActions>
        </MessageBar>
      </div>
    );
  },
};
