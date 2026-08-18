import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import {
  ArrowSyncRegular,
  CodeRegular,
  DocumentBulletListRegular,
  DocumentRegular,
  RenameRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import {
  type DynamicTabItem,
  DynamicTabList,
  type DynamicTabMenuItem,
} from "../components/composites/DynamicTabList";

const useDemoStyles = makeStyles({
  frame: {
    width: "100%",
    maxWidth: "800px",
  },
  workspace: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "800px",
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    overflow: "hidden",
  },
  panel: {
    minHeight: "180px",
    padding: tokens.spacingVerticalXL,
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground2,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
    lineHeight: tokens.lineHeightBase300,
  },
  empty: {
    color: tokens.colorNeutralForeground3,
  },
});

const INITIAL_TABS: DynamicTabItem[] = [
  { id: "sales", label: "Sales overview" },
  { id: "inventory", label: "Inventory snapshot" },
  { id: "shipments", label: "Shipments by region" },
  { id: "forecast", label: "Demand forecast Q3", modified: true },
];

/**
 * Dynamic Tab List
 *
 * A document tab bar for workspaces where objects are opened, renamed and
 * closed at runtime — the tab strip above a data grid or query editor.
 *
 * Each tab carries a file icon, a truncating label, an unsaved-changes dot and
 * a dismiss affordance; a trailing button opens a new tab. Following the spec:
 * a selected tab always exposes its dismiss affordance, a modified tab always
 * shows its dot (even while selected), and hovering swaps the dot for the
 * dismiss affordance.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives and tokens
 * - Subtle background ramp for rest / hover / pressed / selected states
 * - `tablist`/`tab` semantics with a roving tab stop, arrow + Home/End
 *   navigation and automatic activation
 * - ARIA treats `tab` children as presentational, so the dismiss affordance is
 *   deliberately not a nested button: keyboard users close the focused tab with
 *   `Delete`/`Backspace` (advertised via `aria-keyshortcuts`) or the context
 *   menu, which keeps the pattern free of nested interactive controls
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=349-159"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof DynamicTabList> = {
  title: "UI patterns/Dynamic Tab List",
  component: DynamicTabList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    tabs: {
      control: false,
      description: "Open documents, in visual order.",
      table: { type: { summary: "DynamicTabItem[]" } },
    },
    selectedId: {
      control: "text",
      description:
        "`id` of the active tab. Leave undefined for a list with no selection.",
      table: { type: { summary: "string | undefined" } },
    },
    appearance: {
      control: "inline-radio",
      options: ["inherit", "surface"],
      description:
        "`inherit` is transparent and adopts the surface behind it; `surface` fills with the neutral layer-1 background.",
      table: {
        type: { summary: '"inherit" | "surface"' },
        defaultValue: { summary: '"inherit"' },
      },
    },
    tabWidth: {
      control: { type: "number", min: 96, max: 320, step: 4 },
      description: "Fixed width of every tab, in pixels.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "180" },
      },
    },
    addTabLabel: {
      control: "text",
      description: "Accessible name and tooltip for the new-tab button.",
      table: { type: { summary: "string" } },
    },
    ariaLabel: {
      control: "text",
      description: "Accessible name for the tab list.",
      table: { type: { summary: "string" } },
    },
    onTabSelect: {
      action: "tabSelect",
      table: { type: { summary: "(id: string) => void" } },
    },
    onTabClose: {
      action: "tabClose",
      table: { type: { summary: "(id: string) => void" } },
    },
    onAddTab: {
      action: "addTab",
      table: { type: { summary: "() => void" } },
    },
    getContextMenuItems: {
      control: false,
      description:
        "Builds the right-click menu for a tab. Return an empty array to suppress the menu.",
      table: {
        type: { summary: "(tab: DynamicTabItem) => DynamicTabMenuItem[]" },
      },
    },
    className: {
      control: false,
      table: { type: { summary: "string | undefined" } },
    },
  },
  args: {
    appearance: "inherit",
    tabWidth: 180,
    addTabLabel: "New tab",
    ariaLabel: "Open documents",
  },
};

export default meta;
type Story = StoryObj<typeof DynamicTabList>;

/** Drives a live tab strip so open/close/add all behave like the real thing. */
function useTabState(initial: DynamicTabItem[] = INITIAL_TABS) {
  const [tabs, setTabs] = useState(initial);
  const [selectedId, setSelectedId] = useState<string | undefined>(
    initial[0]?.id
  );
  const [nextIndex, setNextIndex] = useState(1);

  const closeTab = useCallback((id: string) => {
    setTabs((current) => {
      const index = current.findIndex((tab) => tab.id === id);
      const remaining = current.filter((tab) => tab.id !== id);
      setSelectedId((selected) =>
        selected === id
          ? (remaining[index] ?? remaining[index - 1])?.id
          : selected
      );
      return remaining;
    });
  }, []);

  const renameTab = useCallback((id: string, label: string) => {
    setTabs((current) =>
      current.map((tab) => (tab.id === id ? { ...tab, label } : tab))
    );
  }, []);

  const addTab = useCallback(() => {
    const id = `untitled-${nextIndex}`;
    setNextIndex((value) => value + 1);
    setTabs((current) => [...current, { id, label: `Untitled ${nextIndex}` }]);
    setSelectedId(id);
  }, [nextIndex]);

  return { tabs, selectedId, setSelectedId, closeTab, renameTab, addTab };
}

/**
 * The default strip: four open documents with the first one selected and the
 * last one holding unsaved changes. Hover any tab to see the dismiss
 * affordance take over the modified dot.
 */
export const Default: Story = {
  render: (args) => {
    const { tabs, selectedId, setSelectedId, closeTab, addTab } = useTabState();
    const styles = useDemoStyles();

    return (
      <div className={styles.frame}>
        <DynamicTabList
          {...args}
          tabs={tabs}
          selectedId={selectedId}
          onTabSelect={setSelectedId}
          onTabClose={closeTab}
          onAddTab={addTab}
        />
      </div>
    );
  },
};

/**
 * `surface` fills the bar with the neutral layer-1 background so it reads as a
 * distinct band; `inherit` leaves it transparent so it adopts whatever surface
 * sits behind it.
 */
export const Appearance: Story = {
  render: (args) => {
    const styles = useDemoStyles();

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          backgroundColor: tokens.colorNeutralBackground2,
          padding: "24px",
        }}
      >
        <div className={styles.frame}>
          <DynamicTabList
            {...args}
            appearance="inherit"
            tabs={INITIAL_TABS}
            selectedId="sales"
            ariaLabel="Open documents, inherited background"
          />
        </div>
        <div className={styles.frame}>
          <DynamicTabList
            {...args}
            appearance="surface"
            tabs={INITIAL_TABS}
            selectedId="sales"
            ariaLabel="Open documents, surface background"
          />
        </div>
      </div>
    );
  },
};

/**
 * Every state from the design spec side by side: rest, selected, modified,
 * selected + modified (the dot wins until the tab is hovered) and disabled.
 */
export const States: Story = {
  render: (args) => {
    const styles = useDemoStyles();

    return (
      <div className={styles.frame}>
        <DynamicTabList
          {...args}
          tabWidth={150}
          tabs={[
            { id: "rest", label: "Rest" },
            { id: "selected", label: "Selected" },
            { id: "modified", label: "Modified", modified: true },
            { id: "locked", label: "Disabled", disabled: true },
            { id: "pinned", label: "Not closable", closable: false },
          ]}
          selectedId="selected"
          ariaLabel="Dynamic tab states"
        />
      </div>
    );
  },
};

/**
 * Right-click a tab to reach the object-level actions the spec calls for —
 * rename, reload and the close family. Renaming is wired to a prompt here to
 * stand in for the rename dialog.
 */
export const ContextMenu: Story = {
  render: (args) => {
    const { tabs, selectedId, setSelectedId, closeTab, renameTab, addTab } =
      useTabState();
    const styles = useDemoStyles();

    const getContextMenuItems = (tab: DynamicTabItem): DynamicTabMenuItem[] => [
      {
        key: "rename",
        label: "Rename",
        icon: <RenameRegular />,
        onClick: () => renameTab(tab.id, `${tab.label} (renamed)`),
      },
      {
        key: "reload",
        label: "Reload",
        icon: <ArrowSyncRegular />,
      },
      {
        key: "close",
        label: "Close",
        dividerBefore: true,
        onClick: () => closeTab(tab.id),
      },
      {
        key: "close-others",
        label: "Close others",
        disabled: tabs.length < 2,
        onClick: () => {
          for (const item of tabs) {
            if (item.id !== tab.id) {
              closeTab(item.id);
            }
          }
        },
      },
      {
        key: "close-all",
        label: "Close all",
        onClick: () => {
          for (const item of tabs) {
            closeTab(item.id);
          }
        },
      },
    ];

    return (
      <div className={styles.frame}>
        <DynamicTabList
          {...args}
          tabs={tabs}
          selectedId={selectedId}
          onTabSelect={setSelectedId}
          onTabClose={closeTab}
          onAddTab={addTab}
          getContextMenuItems={getContextMenuItems}
        />
      </div>
    );
  },
};

/**
 * Tabs keep their fixed width and the strip scrolls once the documents no
 * longer fit, so the new-tab button stays reachable at the trailing edge.
 */
export const Overflow: Story = {
  render: (args) => {
    const styles = useDemoStyles();
    const [selectedId, setSelectedId] = useState("query-3");

    return (
      <div className={styles.frame}>
        <DynamicTabList
          {...args}
          tabs={Array.from({ length: 12 }, (_, index) => ({
            id: `query-${index + 1}`,
            label: `Warehouse query ${index + 1}`,
            modified: index % 4 === 3,
          }))}
          selectedId={selectedId}
          onTabSelect={setSelectedId}
          ariaLabel="Open queries"
        />
      </div>
    );
  },
};

/**
 * The pattern in context: the tab strip sits directly above the panel it
 * controls, with `aria-controls` linking each tab to its region.
 */
export const InWorkspace: Story = {
  render: (args) => {
    const styles = useDemoStyles();
    const { tabs, selectedId, setSelectedId, closeTab, addTab } = useTabState([
      { id: "sales", label: "Sales overview", panelId: "panel-sales" },
      {
        id: "query",
        label: "Untitled query",
        icon: <CodeRegular fontSize={16} />,
        modified: true,
        panelId: "panel-query",
      },
      {
        id: "report",
        label: "Quarterly report",
        icon: <DocumentBulletListRegular fontSize={16} />,
        panelId: "panel-report",
      },
    ]);

    const active = tabs.find((tab) => tab.id === selectedId);

    return (
      <div className={styles.workspace}>
        <DynamicTabList
          {...args}
          appearance="surface"
          tabs={tabs}
          selectedId={selectedId}
          onTabSelect={setSelectedId}
          onTabClose={closeTab}
          onAddTab={addTab}
        />
        {active ? (
          <div
            className={styles.panel}
            id={active.panelId}
            role="tabpanel"
            aria-label={active.label}
            tabIndex={0}
          >
            Content for <strong>{active.label}</strong>
          </div>
        ) : (
          <div className={mergeClasses(styles.panel, styles.empty)}>
            All documents are closed. Use the new-tab button to open one.
          </div>
        )}
      </div>
    );
  },
};

/**
 * Tabs accept any Fluent icon, so a workspace can distinguish document types at
 * a glance instead of repeating the default file glyph.
 */
export const CustomIcons: Story = {
  render: (args) => {
    const styles = useDemoStyles();

    return (
      <div className={styles.frame}>
        <DynamicTabList
          {...args}
          tabs={[
            {
              id: "table",
              label: "Warehouse table",
              icon: <DocumentRegular fontSize={16} />,
            },
            {
              id: "sql",
              label: "Visual query",
              icon: <CodeRegular fontSize={16} />,
              modified: true,
            },
            {
              id: "report",
              label: "Weekly report",
              icon: <DocumentBulletListRegular fontSize={16} />,
            },
          ]}
          selectedId="table"
          ariaLabel="Open objects"
        />
      </div>
    );
  },
};
