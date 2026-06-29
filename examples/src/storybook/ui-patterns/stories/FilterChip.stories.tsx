import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  FilterChip,
  type FilterChipAppearance,
  FilterChipGroup,
  type FilterChipSize,
} from "../components/composites/FilterChip";

/**
 * FilterChip Component
 *
 * A toggleable, dismissible filter chip built on Fluent `InteractionTag`. It
 * adds the two-state filter semantics used by faceted-search UIs:
 *
 * - **Toggle** — clicking the chip body flips whether the filter is applied
 *   (`onToggle`) without removing the chip, reflected by the `selected` visual
 *   state.
 * - **Dismiss** — clicking the trailing X removes the chip, surfaced through the
 *   parent `FilterChipGroup`'s `onDismiss(value)` callback.
 *
 * `FilterChip` must be rendered inside a `FilterChipGroup`.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives
 * - Token-driven layout and spacing
 * - Accessible dismiss button via explicit `aria-label`
 */
const meta: Meta<typeof FilterChip> = {
  title: "UI patterns/Filter Chip",
  component: FilterChip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    value: {
      control: "text",
      description: "Stable value identifying the chip within its group.",
      table: { type: { summary: "string" } },
    },
    children: {
      control: "text",
      description: "Visible chip label.",
      table: { type: { summary: "ReactNode" } },
    },
    selected: {
      control: "boolean",
      description:
        "Whether the underlying filter is currently applied. Controls the highlighted visual state without removing the chip.",
      table: { type: { summary: "boolean | undefined" } },
    },
    disabled: {
      control: "boolean",
      description: "Disable both the toggle and dismiss interactions.",
      table: { type: { summary: "boolean | undefined" } },
    },
    size: {
      control: "radio",
      options: ["extra-small", "small", "medium"],
      description:
        "Chip size. Inherited from the parent `FilterChipGroup` when omitted.",
      table: { type: { summary: '"extra-small" | "small" | "medium"' } },
    },
    appearance: {
      control: "radio",
      options: ["outline", "brand", "filled"],
      description: "Chip appearance.",
      table: { type: { summary: '"outline" | "brand" | "filled"' } },
    },
    dismissLabel: {
      control: "text",
      description: "Accessible label for the dismiss (X) button.",
      table: { type: { summary: "string | undefined" } },
    },
    onToggle: {
      action: "onToggle",
      description:
        "Fired when the chip body is activated to toggle whether the filter is applied.",
      table: { type: { summary: "(value: string) => void" } },
    },
  },
  args: {
    value: "status:active",
    children: "Status: Active",
    selected: true,
    appearance: "outline",
  },
  decorators: [
    (Story) => (
      <FilterChipGroup aria-label="Filter chips">
        <Story />
      </FilterChipGroup>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

/** A single chip in the applied (selected) state. */
export const Default: Story = {};

/** The chip toggled off — present but not currently applied. */
export const Unselected: Story = {
  args: {
    selected: false,
  },
};

/** A non-interactive chip. */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

interface ChipModel {
  value: string;
  label: string;
  selected: boolean;
  size?: FilterChipSize;
  appearance?: FilterChipAppearance;
}

/**
 * Stateful group helper used by the interactive stories: clicking a chip body
 * toggles whether it is applied, clicking the X removes it.
 */
function InteractiveChips({
  initial,
  ariaLabel,
}: {
  initial: ChipModel[];
  ariaLabel: string;
}) {
  const [chips, setChips] = useState<ChipModel[]>(initial);

  const toggle = (value: string) =>
    setChips((current) =>
      current.map((chip) =>
        chip.value === value ? { ...chip, selected: !chip.selected } : chip
      )
    );

  const dismiss = (value: string) =>
    setChips((current) => current.filter((chip) => chip.value !== value));

  if (chips.length === 0) {
    return <span>All filters cleared.</span>;
  }

  return (
    <FilterChipGroup aria-label={ariaLabel} onDismiss={dismiss}>
      {chips.map((chip) => (
        <FilterChip
          key={chip.value}
          value={chip.value}
          selected={chip.selected}
          size={chip.size}
          appearance={chip.appearance}
          onToggle={toggle}
          dismissLabel={`Remove ${chip.label}`}
        >
          {chip.label}
        </FilterChip>
      ))}
    </FilterChipGroup>
  );
}

const INITIAL_CHIPS: ChipModel[] = [
  { value: "status:active", label: "Status: Active", selected: true },
  { value: "priority:high", label: "Priority: High", selected: true },
  { value: "region:emea", label: "Region: EMEA", selected: false },
];

/**
 * A full group wired with state. Click a chip body to toggle whether the filter
 * is applied; click the X to remove it.
 */
export const Interactive: Story = {
  decorators: [],
  render: () => (
    <InteractiveChips initial={INITIAL_CHIPS} ariaLabel="Active filters" />
  ),
};

/** Available chip sizes. Click to toggle, X to remove. */
export const Sizes: Story = {
  decorators: [],
  render: () => (
    <InteractiveChips
      ariaLabel="Sizes"
      initial={[
        {
          value: "xs",
          label: "Extra small",
          size: "extra-small",
          selected: true,
        },
        { value: "sm", label: "Small", size: "small", selected: true },
        { value: "md", label: "Medium", size: "medium", selected: true },
      ]}
    />
  ),
};

/** Available chip appearances. Click to toggle, X to remove. */
export const Appearances: Story = {
  decorators: [],
  render: () => (
    <InteractiveChips
      ariaLabel="Appearances"
      initial={[
        {
          value: "outline",
          label: "Outline",
          appearance: "outline",
          selected: false,
        },
        {
          value: "brand",
          label: "Brand",
          appearance: "brand",
          selected: false,
        },
        {
          value: "filled",
          label: "Filled",
          appearance: "filled",
          selected: false,
        },
      ]}
    />
  ),
};
