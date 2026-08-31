import {
  Badge,
  Button,
  CounterBadge,
  Divider,
  Menu,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowSortRegular,
  CheckmarkCircleFilled,
  CheckmarkRegular,
  ChevronDownRegular,
  ChevronUpRegular,
  DismissRegular,
  ErrorCircleFilled,
  InfoFilled,
  MailInboxRegular,
  WarningFilled,
} from "@fluentui/react-icons";
import { type ReactNode, forwardRef, useMemo, useState } from "react";

export type NotificationIntent = "info" | "success" | "warning" | "error";

/** 1 is the most urgent, 5 the least. */
export type NotificationPriority = 1 | 2 | 3 | 4 | 5;

export interface NotificationMessage {
  id: string;

  /** Short summary of what happened. */
  title: string;

  /** Optional detail line shown under the title. */
  description?: string;

  /** Urgency from 1 (critical) to 5 (informational). Drives sorting and the badge. */
  priority: NotificationPriority;

  /** Visual tone of the leading icon. Defaults to `"info"`. */
  intent?: NotificationIntent;

  /** When the message was raised. Pass a `Date` or an ISO string. */
  timestamp: string | Date;

  /** Where the message came from, e.g. a subsystem or device name. */
  source?: string;

  /** Unread messages are highlighted and counted in the header badge. */
  read?: boolean;

  /** Label for an optional inline action, e.g. "View device". */
  actionLabel?: string;

  /** Called when the inline action is triggered. */
  onAction?: () => void;
}

export type NotificationSortKey =
  | "priority"
  | "newest"
  | "oldest"
  | "unread-first";

export interface NotificationCenterProps {
  /** The stack of system messages. Sorting is applied to a copy, never in place. */
  messages: NotificationMessage[];

  /** Heading above the stack. */
  title?: string;

  /** Sort order applied on first render. Defaults to `"priority"`. */
  defaultSort?: NotificationSortKey;

  /** Sort order (controlled). Supply together with `onSortChange`. */
  sort?: NotificationSortKey;

  /** Called with the next sort key when the user picks one. */
  onSortChange?: (sort: NotificationSortKey) => void;

  /** Called with the id of a message the user dismissed. */
  onDismiss?: (id: string) => void;

  /** Called when the user clears the whole stack. Hides the action when omitted. */
  onDismissAll?: () => void;

  /** Called when the user marks everything as read. Hides the action when omitted. */
  onMarkAllRead?: () => void;

  /** Shown in place of the list when there are no messages. */
  emptyLabel?: string;

  /** Maximum height of the scrollable stack, in pixels. */
  maxListHeight?: number;

  /** Optional CSS class applied to the root. */
  className?: string;
}

const priorityLabels: Record<NotificationPriority, string> = {
  1: "Critical",
  2: "High",
  3: "Medium",
  4: "Low",
  5: "Info",
};

const priorityBadgeColors: Record<
  NotificationPriority,
  "danger" | "severe" | "warning" | "informative" | "subtle"
> = {
  1: "danger",
  2: "severe",
  3: "warning",
  4: "informative",
  5: "subtle",
};

export const notificationSortOptions: {
  key: NotificationSortKey;
  label: string;
}[] = [
  { key: "priority", label: "Priority (highest first)" },
  { key: "newest", label: "Newest first" },
  { key: "oldest", label: "Oldest first" },
  { key: "unread-first", label: "Unread first" },
];

function toTime(timestamp: string | Date): number {
  return timestamp instanceof Date
    ? timestamp.getTime()
    : new Date(timestamp).getTime();
}

/** Most urgent first, newest first within the same priority. */
export function sortByPriority(
  messages: NotificationMessage[]
): NotificationMessage[] {
  return [...messages].sort(
    (a, b) =>
      a.priority - b.priority || toTime(b.timestamp) - toTime(a.timestamp)
  );
}

export function sortByNewest(
  messages: NotificationMessage[]
): NotificationMessage[] {
  return [...messages].sort(
    (a, b) => toTime(b.timestamp) - toTime(a.timestamp)
  );
}

export function sortByOldest(
  messages: NotificationMessage[]
): NotificationMessage[] {
  return [...messages].sort(
    (a, b) => toTime(a.timestamp) - toTime(b.timestamp)
  );
}

/** Unread before read, then by priority. */
export function sortByUnreadFirst(
  messages: NotificationMessage[]
): NotificationMessage[] {
  return [...messages].sort(
    (a, b) =>
      Number(a.read ?? false) - Number(b.read ?? false) ||
      a.priority - b.priority ||
      toTime(b.timestamp) - toTime(a.timestamp)
  );
}

export function sortNotifications(
  messages: NotificationMessage[],
  sort: NotificationSortKey
): NotificationMessage[] {
  switch (sort) {
    case "newest":
      return sortByNewest(messages);
    case "oldest":
      return sortByOldest(messages);
    case "unread-first":
      return sortByUnreadFirst(messages);
    default:
      return sortByPriority(messages);
  }
}

function formatRelativeTime(timestamp: string | Date): string {
  const deltaMinutes = Math.round((Date.now() - toTime(timestamp)) / 60000);

  if (deltaMinutes < 1) {
    return "Just now";
  }
  if (deltaMinutes < 60) {
    return `${deltaMinutes} min ago`;
  }

  const deltaHours = Math.round(deltaMinutes / 60);
  if (deltaHours < 24) {
    return `${deltaHours} h ago`;
  }

  return `${Math.round(deltaHours / 24)} d ago`;
}

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "auto auto minmax(0, 1fr)",
    width: "380px",
    maxWidth: "100%",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    paddingBottom: tokens.spacingVerticalS,
  },

  heading: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    marginInlineEnd: "auto",
    fontWeight: tokens.fontWeightSemibold,
  },

  list: {
    display: "grid",
    rowGap: tokens.spacingVerticalS,
    listStyle: "none",
    margin: 0,
    paddingInline: 0,
    paddingBlock: tokens.spacingVerticalS,
    overflowY: "auto",
  },

  item: {
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    columnGap: tokens.spacingHorizontalS,
    alignItems: "start",
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalXS}`,
    borderRadius: tokens.borderRadiusMedium,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },

  itemUnread: {
    backgroundColor: tokens.colorNeutralBackground2,
  },

  icon: {
    display: "flex",
    marginTop: "2px",
    fontSize: "16px",
  },

  iconInfo: { color: tokens.colorNeutralForeground3 },
  iconSuccess: { color: tokens.colorPaletteGreenForeground1 },
  iconWarning: { color: tokens.colorPaletteDarkOrangeForeground1 },
  iconError: { color: tokens.colorPaletteRedForeground1 },

  body: {
    display: "grid",
    rowGap: tokens.spacingVerticalXXS,
    minWidth: 0,
  },

  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    flexWrap: "wrap",
  },

  title: {
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },

  description: {
    color: tokens.colorNeutralForeground2,
  },

  meta: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },

  metaSeparator: {
    "&::before": {
      content: '"·"',
      marginInlineEnd: tokens.spacingHorizontalXS,
    },
  },

  inlineAction: {
    justifySelf: "start",
    marginInlineStart: `calc(-1 * ${tokens.spacingHorizontalS})`,
    color: tokens.colorBrandForegroundLink,
    "&:hover": {
      color: tokens.colorBrandForegroundLinkHover,
    },
  },

  itemControls: {
    display: "flex",
    alignItems: "center",
  },

  empty: {
    display: "grid",
    justifyItems: "center",
    rowGap: tokens.spacingVerticalS,
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalM}`,
    color: tokens.colorNeutralForeground3,
    textAlign: "center",
  },

  emptyIcon: {
    fontSize: "32px",
  },
});

function IntentIcon({ intent }: { intent: NotificationIntent }) {
  const styles = useStyles();

  switch (intent) {
    case "success":
      return (
        <span className={mergeClasses(styles.icon, styles.iconSuccess)}>
          <CheckmarkCircleFilled />
        </span>
      );
    case "warning":
      return (
        <span className={mergeClasses(styles.icon, styles.iconWarning)}>
          <WarningFilled />
        </span>
      );
    case "error":
      return (
        <span className={mergeClasses(styles.icon, styles.iconError)}>
          <ErrorCircleFilled />
        </span>
      );
    default:
      return (
        <span className={mergeClasses(styles.icon, styles.iconInfo)}>
          <InfoFilled />
        </span>
      );
  }
}

/**
 * NotificationCenter — a single stack for every system message in the product.
 *
 * Toasts are for the moment something happens; this is where those messages go
 * to live afterwards. It is designed to be handed to a Suite Header quick
 * action as its `flyout`, so the bell in the header opens the same stack from
 * anywhere in the app.
 *
 * Each message carries a `priority` from 1 (critical) to 5 (informational).
 * That number drives the badge and the default sort, so a flood of routine
 * chatter can never bury a critical alert. The sort helpers
 * (`sortByPriority`, `sortByNewest`, `sortByOldest`, `sortByUnreadFirst` and the
 * `sortNotifications` dispatcher) are exported as pure functions, so the same
 * ordering can be reused outside the component.
 *
 * **Fluent Guidelines Applied:**
 * - Composed from Fluent `Badge`, `CounterBadge`, `Menu`, `Divider`, `Button`
 * - Sorting uses `MenuItemRadio` with `checkedValues`, the Fluent single-select
 *   menu pattern, rather than a hand-rolled toggle group
 * - The stack is a real `<ul>`/`<li>` list inside a labelled region, and the
 *   priority badge exposes its meaning as text ("Critical") rather than colour
 *   alone
 * - Token-driven styling only; the priority badges use `tint`, never `filled`,
 *   which reads poorly against the Axis yellow brand ramp
 *
 * @example
 * <SuiteHeader
 *   utilityActions={[
 *     {
 *       id: "notifications",
 *       icon: <AlertRegular />,
 *       ariaLabel: "Notifications",
 *       flyout: <NotificationCenter messages={messages} />,
 *     },
 *   ]}
 * />
 */
export const NotificationCenter = forwardRef<
  HTMLDivElement,
  NotificationCenterProps
>(
  (
    {
      messages,
      title = "Notifications",
      defaultSort = "priority",
      sort: sortProp,
      onSortChange,
      onDismiss,
      onDismissAll,
      onMarkAllRead,
      emptyLabel = "You're all caught up",
      maxListHeight = 420,
      className,
    },
    ref
  ) => {
    const styles = useStyles();
    const [internalSort, setInternalSort] =
      useState<NotificationSortKey>(defaultSort);
    const sort = sortProp ?? internalSort;

    const sortedMessages = useMemo(
      () => sortNotifications(messages, sort),
      [messages, sort]
    );
    const unreadCount = messages.filter((message) => !message.read).length;

    const handleSortChange = (next: NotificationSortKey) => {
      if (sortProp === undefined) {
        setInternalSort(next);
      }
      onSortChange?.(next);
    };

    return (
      <div
        ref={ref}
        role="region"
        aria-label={title}
        className={mergeClasses(styles.root, className)}
      >
        <div className={styles.header}>
          <span className={styles.heading}>
            <Text weight="semibold">{title}</Text>
            {unreadCount > 0 ? (
              <CounterBadge
                appearance="filled"
                color="informative"
                count={unreadCount}
                aria-label={`${unreadCount} unread`}
              />
            ) : null}
          </span>

          <Menu
            checkedValues={{ sort: [sort] }}
            onCheckedValueChange={(_, data) =>
              handleSortChange(data.checkedItems[0] as NotificationSortKey)
            }
          >
            <MenuTrigger disableButtonEnhancement>
              <Tooltip content="Sort messages" relationship="label" withArrow>
                <Button
                  appearance="subtle"
                  size="small"
                  icon={<ArrowSortRegular />}
                  aria-label="Sort messages"
                />
              </Tooltip>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                {notificationSortOptions.map((option) => (
                  <MenuItemRadio
                    key={option.key}
                    name="sort"
                    value={option.key}
                  >
                    {option.label}
                  </MenuItemRadio>
                ))}
              </MenuList>
            </MenuPopover>
          </Menu>

          {onMarkAllRead && unreadCount > 0 ? (
            <Tooltip content="Mark all as read" relationship="label" withArrow>
              <Button
                appearance="subtle"
                size="small"
                icon={<CheckmarkRegular />}
                aria-label="Mark all as read"
                onClick={onMarkAllRead}
              />
            </Tooltip>
          ) : null}

          {onDismissAll ? (
            <Tooltip
              content="Clear all notifications"
              relationship="label"
              withArrow
            >
              <Button
                appearance="subtle"
                size="small"
                icon={<DismissRegular />}
                aria-label="Clear all notifications"
                onClick={onDismissAll}
              />
            </Tooltip>
          ) : null}
        </div>

        <Divider />

        {sortedMessages.length === 0 ? (
          <div className={styles.empty}>
            <MailInboxRegular className={styles.emptyIcon} />
            <Text>{emptyLabel}</Text>
          </div>
        ) : (
          <>
            <ul className={styles.list} style={{ maxHeight: maxListHeight }}>
              {sortedMessages.map((message) => (
                <NotificationRow
                  key={message.id}
                  message={message}
                  onDismiss={onDismiss}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
);

NotificationCenter.displayName = "NotificationCenter";

function NotificationRow({
  message,
  onDismiss,
}: {
  message: NotificationMessage;
  onDismiss?: (id: string) => void;
}) {
  const styles = useStyles();
  const unread = !message.read;
  const [expanded, setExpanded] = useState(false);
  const canExpand = Boolean(message.description || message.actionLabel);
  const detailsId = `notification-details-${message.id}`;

  const meta: ReactNode[] = [
    <span key="time">{formatRelativeTime(message.timestamp)}</span>,
  ];
  if (message.source) {
    meta.push(
      <span key="source" className={styles.metaSeparator}>
        {message.source}
      </span>
    );
  }

  return (
    <li className={mergeClasses(styles.item, unread && styles.itemUnread)}>
      <IntentIcon intent={message.intent ?? "info"} />

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <Badge
            appearance="tint"
            size="small"
            color={priorityBadgeColors[message.priority]}
          >
            {`P${message.priority} ${priorityLabels[message.priority]}`}
          </Badge>
          <Text className={styles.title}>{message.title}</Text>
        </div>

        {expanded && message.description ? (
          <Text id={detailsId} size={200} className={styles.description}>
            {message.description}
          </Text>
        ) : null}

        <div className={styles.meta}>{meta}</div>

        {expanded && message.actionLabel ? (
          <Button
            className={styles.inlineAction}
            appearance="transparent"
            size="small"
            onClick={message.onAction}
          >
            {message.actionLabel}
          </Button>
        ) : null}
      </div>

      {canExpand || onDismiss ? (
        <div className={styles.itemControls}>
          {canExpand ? (
            <Tooltip
              content={
                expanded ? "Collapse notification" : "Expand notification"
              }
              relationship="label"
              withArrow
            >
              <Button
                appearance="subtle"
                size="small"
                icon={expanded ? <ChevronUpRegular /> : <ChevronDownRegular />}
                aria-controls={expanded ? detailsId : undefined}
                aria-expanded={expanded}
                aria-label={`${expanded ? "Collapse" : "Expand"} ${message.title}`}
                onClick={() => setExpanded((current) => !current)}
              />
            </Tooltip>
          ) : null}

          {onDismiss ? (
            <Tooltip
              content={`Dismiss ${message.title}`}
              relationship="label"
              withArrow
            >
              <Button
                appearance="subtle"
                size="small"
                icon={<DismissRegular />}
                aria-label={`Dismiss ${message.title}`}
                onClick={() => onDismiss(message.id)}
              />
            </Tooltip>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}
