import { Button, Input, makeStyles, tokens } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
        <Input type="email" placeholder="Enter your email" />
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
        <Input type="text" placeholder="Enter your name" required />
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
        <Input type="password" placeholder="Enter password" />
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
        <Input
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
        <Input type="text" placeholder="Text input" />
      </FormField>

      <FormField label="Required" required hint="Marked as required">
        <Input type="email" placeholder="Email input" required />
      </FormField>

      <FormField label="Error" error="This field has an error">
        <Input type="text" placeholder="With error" />
      </FormField>

      <FormField label="Disabled" disabled hint="Cannot be edited">
        <Input
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
        <Input type="text" placeholder="Interactive input" />
      </FormField>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Full registration form
// ---------------------------------------------------------------------------

const useFormStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
    paddingTop: tokens.spacingVerticalS,
  },
  passwordValid: {
    "--colorCompoundBrandStroke": tokens.colorStatusSuccessForeground1,
    "--colorCompoundBrandStrokePressed": tokens.colorStatusSuccessForeground1,
    selectors: {
      "&::after": {
        borderBottomColor: `${tokens.colorStatusSuccessForeground1} !important`,
      },
      "&:focus-within::after": {
        borderBottomColor: `${tokens.colorStatusSuccessForeground1} !important`,
      },
      "&:focus-within:active::after": {
        borderBottomColor: `${tokens.colorStatusSuccessForeground1} !important`,
      },
    },
  },
  success: {
    color: tokens.colorStatusSuccessForeground1,
    fontSize: tokens.fontSizeBase200,
    textAlign: "center",
    paddingTop: tokens.spacingVerticalS,
  },
});

type RegistrationFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegistrationErrors = Partial<Record<keyof RegistrationFields, string>>;

function RegistrationForm() {
  const styles = useFormStyles();

  const [fields, setFields] = useState<RegistrationFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const isPasswordValid = fields.password.length >= 8;

  const set =
    (key: keyof RegistrationFields) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): RegistrationErrors => {
    const errs: RegistrationErrors = {};
    if (!fields.firstName.trim()) errs.firstName = "First name is required";
    if (!fields.lastName.trim()) errs.lastName = "Last name is required";
    if (!fields.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!fields.password) {
      errs.password = "Password is required";
    } else if (fields.password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }
    if (!fields.confirmPassword) {
      errs.confirmPassword = "Please confirm your password";
    } else if (fields.confirmPassword !== fields.password) {
      errs.confirmPassword = "Passwords do not match";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFields({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <p className={styles.success}>
          ✓ Registration successful! Welcome, {fields.firstName}.
        </p>
        <div className={styles.actions}>
          <Button appearance="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          alignItems: "start",
        }}
      >
        <FormField label="First name" required error={errors.firstName}>
          <Input
            style={{ width: "100%" }}
            value={fields.firstName}
            onChange={set("firstName")}
            placeholder="Jane"
          />
        </FormField>
        <FormField label="Last name" required error={errors.lastName}>
          <Input
            style={{ width: "100%" }}
            value={fields.lastName}
            onChange={set("lastName")}
            placeholder="Smith"
          />
        </FormField>
      </div>

      <FormField
        label="Email address"
        required
        hint="Used for login and notifications"
        error={errors.email}
      >
        <Input
          style={{ width: "100%" }}
          type="email"
          value={fields.email}
          onChange={set("email")}
          placeholder="jane@example.com"
        />
      </FormField>

      <FormField
        label="Password"
        required
        hint="At least 8 characters"
        error={errors.password}
      >
        <Input
          style={{ width: "100%" }}
          className={isPasswordValid ? styles.passwordValid : undefined}
          type="password"
          value={fields.password}
          onChange={set("password")}
          placeholder="••••••••"
        />
      </FormField>

      <FormField
        label="Confirm password"
        required
        error={errors.confirmPassword}
      >
        <Input
          style={{ width: "100%" }}
          type="password"
          value={fields.confirmPassword}
          onChange={set("confirmPassword")}
          placeholder="••••••••"
        />
      </FormField>

      <div className={styles.actions}>
        <Button appearance="secondary" type="button" onClick={handleReset}>
          Clear
        </Button>
        <Button appearance="primary" type="submit">
          Create account
        </Button>
      </div>
    </form>
  );
}

/**
 * A complete registration form with client-side validation.
 * Required fields show errors on submit; each error clears as the user types.
 */
export const RegistrationFormStory: Story = {
  name: "Registration form",
  parameters: { layout: "centered" },
  render: () => <RegistrationForm />,
};
