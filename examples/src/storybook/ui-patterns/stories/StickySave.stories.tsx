import {
  Divider,
  Dropdown,
  Field,
  Input,
  Label,
  Option,
  Switch,
  Text,
  Textarea,
  makeStyles,
  tokens,
  typographyStyles,
  useId,
} from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { StickySave } from "../components/composites/StickySave";

/**
 * Sticky Save
 *
 * A persistent save/cancel bar for **long forms** — pages where the form is
 * taller than the viewport, so the save and cancel actions would otherwise sit
 * off-screen until the user scrolls all the way down.
 *
 * The bar pins to the bottom of its scroll container (`position: sticky`) and
 * slides into view as soon as the form becomes *dirty* (the user changes a
 * value). Saving or cancelling clears the dirty state and the bar slides away.
 *
 * **Fluent Guidelines Applied:**
 * - Token-driven styling via `makeStyles` + Fluent `tokens` exclusively
 * - Accessibility: labelled `role="region"`; hidden from assistive tech and
 *   keyboard focus while not visible (`aria-hidden` + `inert`)
 * - Respects `prefers-reduced-motion`
 * - Composition: drive `visible` from your form's dirty state; wire `onSave` /
 *   `onCancel` to your own persistence and reset logic
 */
const meta: Meta<typeof StickySave> = {
  title: "UI patterns/Sticky Save",
  component: StickySave,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "Whether the bar is shown; drive from the form dirty state",
    },
    message: {
      control: "text",
      description: "Leading message, e.g. an unsaved-changes notice",
    },
    saveLabel: {
      control: "text",
      description: "Label for the primary save button",
    },
    cancelLabel: {
      control: "text",
      description: "Label for the cancel button",
    },
    saving: {
      control: "boolean",
      description: "Show a spinner and disable actions while saving",
    },
    saveDisabled: {
      control: "boolean",
      description: "Disable the save button, e.g. while the form is invalid",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the bar region",
    },
    onSave: { action: "save" },
    onCancel: { action: "cancel" },
  },
};

export default meta;
type Story = StoryObj<typeof StickySave>;

// ---------------------------------------------------------------------------
// Shared demo styles + long form
// ---------------------------------------------------------------------------

const useDemoStyles = makeStyles({
  // A full-height, scrollable "page" so the sticky bar has a scroll container
  // to pin against — mirroring a real settings page taller than the viewport.
  page: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "auto",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXL,
    padding: tokens.spacingVerticalXXL,
    maxWidth: "640px",
    width: "100%",
    marginInline: "auto",
    boxSizing: "border-box",
  },
  title: {
    ...typographyStyles.title3,
    margin: 0,
  },
  sectionTitle: {
    ...typographyStyles.subtitle2,
    margin: 0,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: tokens.spacingHorizontalM,
  },
  switchRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

interface DeviceForm {
  name: string;
  location: string;
  hostname: string;
  timezone: string;
  description: string;
  ntpEnabled: boolean;
  telemetry: boolean;
  autoUpdate: boolean;
  administrator: string;
  email: string;
  notes: string;
}

const INITIAL_FORM: DeviceForm = {
  name: "Front entrance camera",
  location: "Building A — Lobby",
  hostname: "axis-b8a44f1c2d3e",
  timezone: "Europe/Stockholm",
  description: "Fixed dome monitoring the main entrance and reception desk.",
  ntpEnabled: true,
  telemetry: false,
  autoUpdate: true,
  administrator: "",
  email: "",
  notes: "",
};

const TIMEZONES = [
  "Europe/Stockholm",
  "Europe/London",
  "America/New_York",
  "America/Los_Angeles",
  "Asia/Tokyo",
];

/**
 * A long device-settings form that overflows its container. The Sticky Save
 * bar appears the moment any field changes and clears on save/cancel. This is
 * the primary reference for real usage.
 */
export const Default: Story = {
  render: (args) => {
    const styles = useDemoStyles();
    const [form, setForm] = useState<DeviceForm>(INITIAL_FORM);
    const [saved, setSaved] = useState<DeviceForm>(INITIAL_FORM);
    const [saving, setSaving] = useState(false);

    const ntpId = useId("ntp-");
    const telemetryId = useId("telemetry-");
    const autoUpdateId = useId("auto-update-");

    const dirty = useMemo(
      () => JSON.stringify(form) !== JSON.stringify(saved),
      [form, saved]
    );

    const update = useCallback(
      <K extends keyof DeviceForm>(key: K, value: DeviceForm[K]) =>
        setForm((prev) => ({ ...prev, [key]: value })),
      []
    );

    const handleSave = useCallback(() => {
      setSaving(true);
      // Simulate a persistence request.
      window.setTimeout(() => {
        setSaved(form);
        setSaving(false);
        args.onSave?.();
      }, 900);
    }, [form, args]);

    const handleCancel = useCallback(() => {
      setForm(saved);
      args.onCancel?.();
    }, [saved, args]);

    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>Device settings</h1>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>General</h2>
            <Field label="Display name" required>
              <Input
                value={form.name}
                onChange={(_, d) => update("name", d.value)}
              />
            </Field>
            <Field label="Location">
              <Input
                value={form.location}
                onChange={(_, d) => update("location", d.value)}
              />
            </Field>
            <div className={styles.row}>
              <Field label="Hostname">
                <Input
                  value={form.hostname}
                  onChange={(_, d) => update("hostname", d.value)}
                />
              </Field>
              <Field label="Time zone">
                <Dropdown
                  value={form.timezone}
                  selectedOptions={[form.timezone]}
                  onOptionSelect={(_, d) =>
                    update("timezone", d.optionValue ?? form.timezone)
                  }
                >
                  {TIMEZONES.map((tz) => (
                    <Option key={tz}>{tz}</Option>
                  ))}
                </Dropdown>
              </Field>
            </div>
            <Field label="Description" hint="Shown in the device inventory">
              <Textarea
                resize="vertical"
                value={form.description}
                onChange={(_, d) => update("description", d.value)}
              />
            </Field>
          </section>

          <Divider />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>System</h2>
            <div className={styles.switchRow}>
              <Label htmlFor={ntpId}>Synchronize time with NTP server</Label>
              <Switch
                id={ntpId}
                checked={form.ntpEnabled}
                onChange={(_, d) => update("ntpEnabled", d.checked)}
              />
            </div>
            <div className={styles.switchRow}>
              <Label htmlFor={telemetryId}>
                Share anonymous usage telemetry
              </Label>
              <Switch
                id={telemetryId}
                checked={form.telemetry}
                onChange={(_, d) => update("telemetry", d.checked)}
              />
            </div>
            <div className={styles.switchRow}>
              <Label htmlFor={autoUpdateId}>
                Install firmware updates automatically
              </Label>
              <Switch
                id={autoUpdateId}
                checked={form.autoUpdate}
                onChange={(_, d) => update("autoUpdate", d.checked)}
              />
            </div>
          </section>

          <Divider />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.row}>
              <Field label="Administrator">
                <Input
                  placeholder="Name"
                  value={form.administrator}
                  onChange={(_, d) => update("administrator", d.value)}
                />
              </Field>
              <Field label="Email">
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(_, d) => update("email", d.value)}
                />
              </Field>
            </div>
            <Field label="Notes" hint="Scroll down — the save bar stays pinned">
              <Textarea
                resize="vertical"
                placeholder="Internal notes"
                value={form.notes}
                onChange={(_, d) => update("notes", d.value)}
              />
            </Field>
          </section>
        </div>

        <StickySave
          {...args}
          visible={dirty || args.visible === true}
          saving={saving}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    );
  },
};

/**
 * The bar in isolation, forced visible via the `visible` control. Use the
 * controls to explore labels, the saving spinner, and the disabled state.
 */
export const Interactive: Story = {
  args: {
    visible: true,
    message: "You have unsaved changes",
    saveLabel: "Save",
    cancelLabel: "Cancel",
    saving: false,
    saveDisabled: false,
  },
  render: (args) => {
    const styles = useDemoStyles();
    return (
      <div className={styles.page}>
        <div className={styles.content}>
          <Text>Toggle the controls to preview the bar's states.</Text>
        </div>
        <StickySave {...args} />
      </div>
    );
  },
};
