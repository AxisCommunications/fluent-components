import { makeStyles, tokens } from "@fluentui/react-components";
import { AlertRegular, SettingsRegular } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  NotificationCenter,
  type NotificationMessage,
  sortByPriority,
} from "../components/composites/NotificationCenter";
import {
  SuiteHeader,
  type SuiteHeaderAction,
} from "../components/suite/SuiteHeader";

/**
 * A single stack for every system message in the product. Toasts announce
 * things as they happen; the notification center is where those messages go to
 * live afterwards, so nothing is lost when a toast times out or the user is
 * looking at another part of the app.
 *
 * Every message carries a `priority` from 1 (critical) to 5 (informational).
 * That number drives both the badge and the default sort order, so routine
 * chatter can never bury a critical alert. Sorting is exposed as pure exported
 * functions — `sortByPriority`, `sortByNewest`, `sortByOldest`,
 * `sortByUnreadFirst`, and the `sortNotifications` dispatcher — so the same
 * ordering can be reused in a full-page inbox or in tests.
 *
 * The center is built to be dropped into a Suite Header quick action as its
 * `flyout`, which is how the "In the suite header" story below wires it up.
 */
const meta: Meta<typeof NotificationCenter> = {
  title: "UI patterns/Notification Center",
  component: NotificationCenter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    messages: {
      control: false,
      description:
        "The stack of system messages. Sorting is applied to a copy, never in place.",
      table: { type: { summary: "NotificationMessage[]" } },
    },
    title: {
      control: "text",
      description: "Heading above the stack",
    },
    defaultSort: {
      control: "select",
      options: ["priority", "newest", "oldest", "unread-first"],
      description: "Sort order applied on first render",
      table: { defaultValue: { summary: '"priority"' } },
    },
    sort: {
      control: false,
      description:
        "Sort order (controlled). Supply together with onSortChange.",
    },
    onSortChange: {
      action: "sortChanged",
      description: "Called with the next sort key when the user picks one",
    },
    onDismiss: {
      action: "dismissed",
      description: "Called with the id of a message the user dismissed",
    },
    onDismissAll: {
      action: "dismissedAll",
      description:
        "Called when the user clears the whole stack. The action is hidden when omitted.",
    },
    onMarkAllRead: {
      action: "markedAllRead",
      description:
        "Called when the user marks everything as read. The action is hidden when omitted.",
    },
    emptyLabel: {
      control: "text",
      description: "Shown in place of the list when there are no messages",
    },
    maxListHeight: {
      control: "number",
      description: "Maximum height of the scrollable stack, in pixels",
      table: { defaultValue: { summary: "420" } },
    },
    className: {
      control: false,
      description: "Optional CSS class applied to the root",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationCenter>;

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const sampleMessages: NotificationMessage[] = [
  {
    id: "storage",
    title: "Recording storage almost full",
    description:
      "Site 04 has less than 5% free space. New recordings will overwrite the oldest footage.",
    priority: 1,
    intent: "error",
    source: "Storage",
    timestamp: minutesAgo(3),
    actionLabel: "Manage storage",
  },
  {
    id: "offline",
    title: "3 devices went offline",
    description: "AXIS P3265-LVE and 2 others stopped responding.",
    priority: 2,
    intent: "warning",
    source: "Devices",
    timestamp: minutesAgo(18),
    actionLabel: "View devices",
  },
  {
    id: "certificate",
    title: "Certificate expires in 14 days",
    description: "Renew the server certificate to avoid connection warnings.",
    priority: 3,
    intent: "warning",
    source: "Security",
    timestamp: minutesAgo(140),
  },
  {
    id: "firmware",
    title: "Firmware update available",
    description: "11 devices can be updated to 11.9.62.",
    priority: 4,
    intent: "info",
    source: "Devices",
    timestamp: minutesAgo(320),
    read: true,
    actionLabel: "Review update",
  },
  {
    id: "backup",
    title: "Nightly backup completed",
    priority: 5,
    intent: "success",
    source: "System",
    timestamp: minutesAgo(600),
    read: true,
  },
  {
    id: "user",
    title: "New operator added",
    description: "M. Lindqvist was granted the Operator role.",
    priority: 5,
    intent: "info",
    source: "Users",
    timestamp: minutesAgo(900),
    read: true,
  },
];

/**
 * The default sort puts priority 1 at the top and falls back to newest first
 * within a priority. Unread messages sit on a tinted surface, and the counter
 * next to the heading tracks how many are left.
 */
export const Default: Story = {
  args: {
    messages: sampleMessages,
  },
};

/**
 * Use the sort button in the header to switch order. The same four orderings are
 * available as standalone functions, so a full-page inbox can offer identical
 * sorting without duplicating the comparators.
 */
export const SortedByNewest: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`defaultSort="newest"` is the right choice for a chronological activity feed. Prefer the default `"priority"` whenever the stack can contain something that must not be missed.',
      },
    },
  },
  args: {
    messages: sampleMessages,
    defaultSort: "newest",
  },
};

/**
 * With `onDismiss`, `onDismissAll`, and `onMarkAllRead` wired up, the stack
 * becomes a working inbox. Each handler is optional; omit one and its affordance
 * disappears rather than rendering a dead control.
 */
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dismiss individual messages, mark everything as read, or clear the stack to reach the empty state.",
      },
    },
  },
  render: (args) => {
    const [messages, setMessages] = useState(sampleMessages);

    return (
      <NotificationCenter
        {...args}
        messages={messages}
        onDismiss={(id) =>
          setMessages((current) =>
            current.filter((message) => message.id !== id)
          )
        }
        onDismissAll={() => setMessages([])}
        onMarkAllRead={() =>
          setMessages((current) =>
            current.map((message) => ({ ...message, read: true }))
          )
        }
      />
    );
  },
  args: {
    messages: sampleMessages,
  },
};

/**
 * When the stack is clear, the empty state confirms it rather than showing a
 * blank panel.
 */
export const Empty: Story = {
  args: {
    messages: [],
  },
};

const useSuiteStyles = makeStyles({
  frame: {
    width: "100%",
    minHeight: "260px",
    backgroundColor: tokens.colorNeutralBackground3,
  },
});

/**
 * The intended home for the pattern. The bell in the suite header's quick-action
 * cluster carries the notification center as its `flyout`, so the same stack is
 * reachable from anywhere in the product. Click the bell to open it.
 */
export const InTheSuiteHeader: Story = {
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        story:
          "Keep the bell in a fixed position in the header so people learn where to find it. The badge on the bell, the badge on the avatar, and the counter inside the center are all driven from the same unread count, so they can never disagree.",
      },
    },
  },
  render: () => {
    const styles = useSuiteStyles();
    const [messages, setMessages] = useState(sampleMessages);
    const unreadCount = messages.filter((message) => !message.read).length;

    const actions: SuiteHeaderAction[] = [
      {
        id: "notifications",
        icon: <AlertRegular />,
        ariaLabel: `Notifications (${unreadCount} unread)`,
        badgeCount: unreadCount,
        flyout: (
          <NotificationCenter
            messages={messages}
            onDismiss={(id) =>
              setMessages((current) =>
                current.filter((message) => message.id !== id)
              )
            }
            onDismissAll={() => setMessages([])}
            onMarkAllRead={() =>
              setMessages((current) =>
                current.map((message) => ({ ...message, read: true }))
              )
            }
          />
        ),
      },
      { id: "settings", icon: <SettingsRegular />, ariaLabel: "Settings" },
    ];

    return (
      <div className={styles.frame}>
        <SuiteHeader
          productName="Product name"
          showSearch={false}
          showOrganizationPicker={false}
          notificationCount={unreadCount}
          utilityActions={actions}
        />
      </div>
    );
  },
};

/**
 * The sort helpers are plain functions over an array, so the same ordering can
 * drive a full-page inbox, a digest email, or a test assertion. This story
 * renders `sortByPriority` applied ahead of time with sorting inside the center
 * left at its default.
 */
export const PreSortedList: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`sortByPriority(messages)` and its siblings never mutate the input — they always return a new array.",
      },
    },
  },
  args: {
    title: "System messages",
    messages: sortByPriority(sampleMessages),
  },
};
