# Storybook Story Patterns

This document defines the expected structure and patterns for creating Storybook stories for Fluent UI composite components.

## Story File Naming & Organization

```
src/stories/
├── Introduction.mdx                       # Welcome page
├── FormPatterns.stories.tsx               # Stories for form category
├── DataDisplay.stories.tsx                # Stories for data display
├── Layouts.stories.tsx                    # Stories for layout patterns
└── examples/
    └── Button.stories.tsx                 # Individual component examples
```

**Grouping Rule**: Group related components in one `.stories.tsx` file (e.g., FormField, RadioGroup, SelectableButtonGroup all in FormPatterns.stories.tsx). Use Storybook's CSF structure to create story blocks for each component.

## Story File Template

```typescript
// src/stories/FormPatterns.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../components/composites/FormField';
import type { FormFieldProps } from '../components/composites/FormField';

/**
 * Form Field Component
 * 
 * A composite component combining label, input, and validation messaging.
 * 
 * **Fluent Guidelines Applied:**
 * - Uses Fluent `makeStyles` + `tokens` for all styling
 * - Semantic HTML: `<label>` and `<input>` elements
 * - Accessibility: ARIA labels, error announcements via `aria-live`
 * - Composition: Accepts any Fluent input component as children
 * 
 * @see https://microsoft.github.io/fluentui/react-components/storybook/ (Fluent UI Storybook)
 */
const meta: Meta<typeof FormField> = {
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    error: {
      control: 'text',
      description: 'Error message; presence triggers error styling',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input and all interactions',
    },
    required: {
      control: 'boolean',
      description: 'Mark field as required (shows asterisk)',
    },
    hint: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

/**
 * Default story showing basic FormField usage.
 * This is the primary reference for how consumers will use the component.
 */
export const Default: Story = {
  args: {
    label: 'Email Address',
    required: true,
    hint: 'We'll never share your email',
  },
  render: (args) => (
    <FormField {...args}>
      <input type="email" placeholder="Enter your email" />
    </FormField>
  ),
};

/**
 * Error state story demonstrating validation failure.
 * Shows how the component visually indicates and announces errors.
 */
export const WithError: Story = {
  args: {
    label: 'Email Address',
    error: 'Invalid email format. Please check and try again.',
  },
  render: (args) => (
    <FormField {...args}>
      <input
        type="email"
        placeholder="Enter your email"
        value="not-an-email"
        aria-invalid="true"
      />
    </FormField>
  ),
  // Accessibility audit play function
  play: async ({ canvasElement }) => {
    // Verify error is announced to screen readers
    const errorEl = canvasElement.querySelector('[role="alert"]');
    if (!errorEl) {
      console.warn('FormField: Error message should have role="alert" for screen reader announcement');
    }
  },
};

/**
 * Disabled state story.
 * Shows how the component looks and behaves when disabled.
 */
export const Disabled: Story = {
  args: {
    label: 'Email Address',
    disabled: true,
  },
  render: (args) => (
    <FormField {...args}>
      <input type="email" placeholder="Enter your email" disabled />
    </FormField>
  ),
};

/**
 * Required field story.
 * Shows the required indicator (typically an asterisk).
 */
export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    hint: 'Please provide your legal name',
  },
  render: (args) => (
    <FormField {...args}>
      <input type="text" placeholder="Enter your name" required />
    </FormField>
  ),
};

/**
 * With hint text story.
 * Demonstrates helper text below the input.
 */
export const WithHint: Story = {
  args: {
    label: 'Password',
    hint: 'At least 8 characters, including uppercase, lowercase, number, and symbol',
  },
  render: (args) => (
    <FormField {...args}>
      <input type="password" placeholder="Enter password" />
    </FormField>
  ),
};

/**
 * All variants story.
 * Showcase multiple FormField instances with different states for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <FormField label="Default" placeholder="Normal state" />
      <FormField label="With Hint" hint="Helper text below" />
      <FormField label="Required" required />
      <FormField label="Error" error="This field has an error" />
      <FormField label="Disabled" disabled defaultValue="Disabled state" />
    </div>
  ),
};

/**
 * Interactive controls story.
 * Allows manual experimentation with all props via Storybook controls.
 */
export const Interactive: Story = {
  render: (args) => (
    <FormField {...args}>
      <input type="text" placeholder="Enter text" />
    </FormField>
  ),
};
```

## Story Structure Rules

### 1. **Meta Object (StoryObj Type)**
```typescript
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['autodocs'],                    // Enable auto-docs
  parameters: {
    layout: 'centered',                  // or 'fullscreen', 'padded'
  },
  argTypes: {
    prop1: {
      control: 'text',                   // or 'boolean', 'select', 'number', etc.
      description: 'Clear prop description',
    },
    // ... define interactive controls for each prop
  },
};
```

### 2. **JSDoc Comments on Meta**
Place a comprehensive JSDoc before the meta object describing:
- Component purpose
- Fluent guidelines applied (makeStyles, tokens, a11y, composition)
- Link to related Fluent UI documentation
- Common use cases

### 3. **Stories Within the File**

**Recommended stories for each component:**
- `Default` — Basic usage; primary reference
- `WithError` / `Error` — Error/failure state
- `Disabled` — Disabled state
- `Success` / `Loading` — Other state variants if applicable
- `Interactive` — All args exposed for manual exploration
- `AllVariants` — Side-by-side comparison of key variants

**Story naming convention**: Use PascalCase (e.g., `WithError`, not `with_error`)

### 4. **Accessibility Play Function**

```typescript
export const WithError: Story = {
  // ... args & render
  play: async ({ canvasElement }) => {
    // Verify accessibility expectations
    const errorEl = canvasElement.querySelector('[role="alert"]');
    if (!errorEl) {
      console.warn('Error message should have role="alert"');
    }
    // Check for aria-invalid on input
    const input = canvasElement.querySelector('input[aria-invalid]');
    if (!input) {
      console.warn('Input should have aria-invalid="true" when error present');
    }
  },
};
```

## MDX Documentation Pattern

Create `.mdx` files for complex component documentation:

```mdx
import { Meta, Canvas, Controls, Story } from '@storybook/addon-docs';
import * as FormFieldStories from './FormPatterns.stories.tsx';

<Meta of={FormFieldStories} />

# Form Field

A composite component that combines Fluent `TextField`, `Label`, and error messaging into a single, accessible form control.

## Principles

This component demonstrates:
- **Fluent-First**: Uses only Fluent UI base components (`@fluentui/react-components`)
- **Token-Driven**: All spacing, colors, and typography from Fluent design tokens
- **Accessible**: Built with semantic HTML, ARIA attributes, and error announcements
- **Composable**: Accepts any Fluent input component as children

## Usage

<Canvas of={FormFieldStories.Default} />
<Controls of={FormFieldStories.Default} />

## Error States

Error messages are announced to screen readers via `role="alert"`:

<Canvas of={FormFieldStories.WithError} />

## Accessibility Checklist

- ✓ Label associated with input via `htmlFor`
- ✓ Error message has `role="alert"` for announcements
- ✓ Input has `aria-invalid` when error present
- ✓ Disabled state prevents interaction and signals to AT
- ✓ Color contrast meets WCAG AA (checked via Fluent tokens)
```

## Controls & Args Best Practices

### ✅ DO
```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['primary', 'secondary', 'outlined'],
    description: '...',
  },
  size: {
    control: 'radio',
    options: ['small', 'medium', 'large'],
    description: '...',
  },
  disabled: {
    control: 'boolean',
    description: '...',
  },
}
```

### ❌ DON'T
```typescript
argTypes: {
  // Too many options makes stories hard to navigate
  color: {
    control: 'select',
    options: ['red', 'blue', 'green', 'yellow', 'purple', ...],
  },
  // Use objects or complex structures sparingly in controls
  style: {
    control: 'object',
  },
}
```

## Testing in Storybook

### Visual Regression
- Run stories regularly to catch visual regressions
- Optional: Integrate with Chromatic or Percy for automated visual testing

### Accessibility Audits
- Storybook `a11y` addon runs on each story
- Review violations in the addon panel
- Document any justified exceptions
- All violations should be address able via component fixes

### Interactive Testing
- Manually test all interactive controls
- Verify keyboard navigation works (Tab, Enter, Space, Arrows)
- Test with screen reader (NVDA on Windows, VoiceOver on macOS)

## Storybook Local Development

```bash
# Start Storybook dev server
npm run storybook

# Build Storybook for deployment
npm run build-storybook

# Open at http://localhost:6006/
```

## Story Export Checklist

Before committing a story file:

- [ ] Meta object with JSDoc and parameters
- [ ] At least 4 story variants (Default, variant states, Interactive)
- [ ] All props exposed via `argTypes`
- [ ] Accessibility `play` function for state stories
- [ ] Story names follow PascalCase convention
- [ ] No `console.error` or `console.warn` when stories render
- [ ] TypeScript strict mode: no `any` types (except in ...rest)
- [ ] MDX documentation (optional but recommended for complex components)

---

**Goal**: Use Storybook stories as a project's single source of truth for component documentation, usage, and accessibility validation.
