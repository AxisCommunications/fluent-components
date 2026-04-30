import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "../components/composites/FormField";

/**
 * Form Field Component
 *
 * A composite form control combining label, input, validation messaging, and hints.
 *
 * **Fluent Guidelines Applied:**
 * - Semantic HTML: `<label>` with `htmlFor` binding
 * - Accessibility: Error messages with `role="alert"`, `aria-invalid` on error
 * - Token-driven styling via `makeStyles` + Fluent tokens exclusively
 * - Composition: Accepts any form input as children
 *
 * @see FLUENT_COMPOSITE_GUIDELINES.md for details on principles
 */
const meta: Meta<typeof FormField> = {
  title: "UI patterns/Form Field",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text displayed above input",
    },
    error: {
      control: "text",
      description:
        "Error message; presence indicates error state and triggers aria-invalid",
    },
    hint: {
      control: "text",
      description: "Helper text displayed below input (only when no error)",
    },
    required: {
      control: "boolean",
      description: "Show required asterisk indicator",
    },
    disabled: {
      control: "boolean",
      description: "Disable input and prevent interaction",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

/**
 * Default form field with label and hint text.
 * Primary reference for basic usage.
 */
export const Default: Story = {
  args: {
    label: "Email Address",
    hint: "We'll never share your email",
  },
  render: (args) => (
    <div style={{ minWidth: "300px" }}>
      <FormField {...args}>
        <input type="email" placeholder="Enter your email" />
      </FormField>
    </div>
  ),
};

/**
 * Required field showing asterisk indicator.
 */
export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
    hint: "Legal name as shown on ID",
  },
  render: (args) => (
    <div style={{ minWidth: "300px" }}>
      <FormField {...args}>
        <input type="text" placeholder="Enter your name" required />
      </FormField>
    </div>
  ),
};

/**
 * Error state with validation message.
 * Demonstrates accessibility: error has `role="alert"`,
 * input will have `aria-invalid="true"`.
 */
export const WithError: Story = {
  args: {
    label: "Password",
    error: "Password must be at least 8 characters",
  },
  render: (args) => (
    <div style={{ minWidth: "300px" }}>
      <FormField {...args}>
        <input type="password" placeholder="Enter password" />
      </FormField>
    </div>
  ),
  play: async ({ canvasElement }) => {
    // Verify error accessibility
    const errorAlert = canvasElement.querySelector('[role="alert"]');
    if (!errorAlert) {
      console.warn(
        'FormField: Error message should have role="alert" for screen reader announcement'
      );
    }
  },
};

/**
 * Disabled state.
 */
export const Disabled: Story = {
  args: {
    label: "Email Address",
    disabled: true,
    hint: "This field cannot be modified",
  },
  render: (args) => (
    <div style={{ minWidth: "300px" }}>
      <FormField {...args}>
        <input
          type="email"
          placeholder="Enter email"
          disabled
          defaultValue="user@example.com"
        />
      </FormField>
    </div>
  ),
};

/**
 * All variants side-by-side for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "32px",
        padding: "24px",
      }}
    >
      <FormField label="Default" hint="This is a hint">
        <input type="text" placeholder="Text input" />
      </FormField>

      <FormField label="Required" required hint="Marked as required">
        <input type="email" placeholder="Email input" required />
      </FormField>

      <FormField label="Error" error="This field has an error">
        <input type="text" placeholder="With error" />
      </FormField>

      <FormField label="Disabled" disabled hint="Cannot be edited">
        <input
          type="text"
          placeholder="Disabled"
          disabled
          defaultValue="Read-only"
        />
      </FormField>
    </div>
  ),
};

/**
 * Interactive story with all controls exposed.
 */
export const Interactive: Story = {
  render: (args) => (
    <div style={{ minWidth: "300px" }}>
      <FormField {...args}>
        <input type="text" placeholder="Interactive input" />
      </FormField>
    </div>
  ),
};
