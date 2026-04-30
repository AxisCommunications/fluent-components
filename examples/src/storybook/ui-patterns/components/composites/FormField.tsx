import { Field, makeStyles, tokens } from "@fluentui/react-components";
import { type ReactNode, forwardRef } from "react";

export interface FormFieldProps {
  /** Label text displayed above the input */
  label: string;

  /** Error message; presence triggers error styling and aria-invalid */
  error?: string;

  /** Helper text displayed below input */
  hint?: string;

  /** Mark field as required (shows asterisk) */
  required?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Input element or custom form control */
  children: ReactNode;

  /** Optional CSS class */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },

  disabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
});

/**
 * FormField - Composite form control combining label, input, and validation.
 *
 * **Fluent Guidelines Applied:**
 * - Uses Fluent `makeStyles` + `tokens` exclusively
 * - Semantic HTML: `<label>` with `htmlFor` binding
 * - Accessibility: Error announced via `role="alert"`, input has `aria-invalid`
 * - Composition: Accepts any form input component as children
 *
 * @example
 * <FormField label="Email" required>
 *   <input type="email" placeholder="Enter email" />
 * </FormField>
 *
 * @example
 * <FormField label="Password" error="Too short" hint="At least 8 chars">
 *   <input type="password" />
 * </FormField>
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      error,
      hint,
      required = false,
      disabled = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();

    return (
      <div
        ref={ref}
        className={[styles.root, disabled && styles.disabled, className]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        <Field
          label={label}
          required={required}
          hint={hint}
          validationMessage={error}
          validationState={error ? "error" : "none"}
        >
          {children}
        </Field>
      </div>
    );
  }
);

FormField.displayName = "FormField";
