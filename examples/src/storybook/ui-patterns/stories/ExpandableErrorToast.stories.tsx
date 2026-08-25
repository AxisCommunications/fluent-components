import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandableErrorToast } from "../components/composites/ExpandableErrorToast";

/**
 * Use this pattern when a background operation fails and the user needs both a
 * plain-language summary and the raw system error. The toast leads with the
 * human message, keeps the code, correlation id and system output behind a
 * "Show details" disclosure, and offers a copy action so the whole payload can
 * be pasted into a support ticket.
 *
 * Prefer it over a bare error toast whenever support or engineering will
 * realistically need the underlying error. Prefer a plain `Toast` when the
 * failure is fully self-explanatory and there is nothing technical to reveal.
 * Prefer a `MessageBar` or an error page when the failure blocks the whole view
 * rather than a single action.
 */
const meta: Meta<typeof ExpandableErrorToast> = {
  title: "UI patterns/Expandable Error Toast",
  component: ExpandableErrorToast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Short, human-readable summary of what failed",
    },
    description: {
      control: "text",
      description: "One-line plain-language explanation or recovery hint",
    },
    details: {
      control: "object",
      description:
        "Technical payload revealed by the disclosure action: message, code, correlationId, source, timestamp",
    },
    triggerLabel: {
      control: "text",
      description: "Label of the button that raises the error toast",
    },
    position: {
      control: "select",
      options: ["top-start", "top-end", "bottom-start", "bottom-end"],
      description: "Where the toaster anchors itself",
    },
    expandLabel: {
      control: "text",
      description: "Disclosure label while the details are collapsed",
    },
    collapseLabel: {
      control: "text",
      description: "Disclosure label while the details are expanded",
    },
    copyLabel: {
      control: "text",
      description: "Label for the copy action",
    },
    copiedLabel: {
      control: "text",
      description: "Label shown briefly after a successful copy",
    },
    dismissLabel: {
      control: "text",
      description: "Label for the dismiss action in the toast title",
    },
    defaultExpanded: {
      control: "boolean",
      description: "Start with the technical details already revealed",
    },
    onCopy: {
      action: "copied",
      description: "Called with the exact text written to the clipboard",
    },
    className: {
      control: false,
      description: "Optional CSS class applied to the wrapper",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExpandableErrorToast>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The everyday case. Trigger the action, read the summary, then use 'Show details' to reveal the raw error and 'Copy details' to grab it. The toast is dispatched with `timeout: -1`, so it stays until dismissed.",
      },
    },
  },
  args: {
    title: "Couldn't save device settings",
    description:
      "The device rejected the configuration. Try again in a moment.",
    triggerLabel: "Save settings",
    details: {
      code: "E_DEVICE_UNREACHABLE",
      correlationId: "8f3c1a94-2b77-4de1-9f0c-6a1c7d0b2e55",
      source: "PUT /api/devices/42/settings",
      timestamp: "2026-08-25T09:14:02.117Z",
      message:
        "HTTP 502 Bad Gateway: upstream device did not respond within 30000 ms",
    },
  },
};

export const ExpandedByDefault: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Reveal the details immediately when the error is one the user is expected to escalate straight away, such as a licensing or provisioning failure. Use sparingly — an expanded toast is a large interruption.",
      },
    },
  },
  args: {
    ...Default.args,
    title: "License activation failed",
    description: "Contact support and include the details below.",
    triggerLabel: "Activate license",
    defaultExpanded: true,
    details: {
      code: "LIC_4013",
      correlationId: "b21e77c0-51aa-4f39-8f4a-0d9f2c6b1e07",
      source: "POST /api/licenses/activate",
      timestamp: "2026-08-25T09:22:47.004Z",
      message:
        "License key 'AXIS-XXXX-XXXX-XXXX' is already bound to serial B8A44F1C2D30.",
    },
  },
};

export const MultilineStackTrace: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Long or multi-line system output is preserved verbatim in a scrollable monospace region, so stack traces and validation dumps stay readable without stretching the toast.",
      },
    },
  },
  args: {
    title: "Firmware upgrade failed",
    description: "The device was rolled back to the previous firmware.",
    triggerLabel: "Upgrade firmware",
    defaultExpanded: true,
    details: {
      code: "FW_UPGRADE_ABORTED",
      source: "POST /api/devices/42/firmware",
      timestamp: "2026-08-25T09:31:10.885Z",
      message: [
        "UpgradeError: package verification failed",
        "  at verifyPackage (firmware/verify.ts:118:11)",
        "  at applyUpgrade (firmware/apply.ts:64:5)",
        "  at processTicksAndRejections (node:internal/process/task_queues:95:5)",
        "caused by: SignatureMismatch: expected sha256 9f2c… got 41ab…",
      ].join("\n"),
    },
  },
};

export const MinimalDetails: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Only `message` is required. When the backend gives you nothing but a string, the metadata list is omitted entirely rather than rendering empty rows.",
      },
    },
  },
  args: {
    title: "Couldn't load the recording",
    description: "Check your connection and try again.",
    triggerLabel: "Load recording",
    details: {
      message: "NetworkError: Failed to fetch",
    },
  },
};

export const BottomEnd: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Anchor the toaster to match the surrounding application shell. Keep the position consistent across the whole product so users learn where errors appear.",
      },
    },
  },
  args: {
    ...Default.args,
    position: "bottom-end",
  },
};
