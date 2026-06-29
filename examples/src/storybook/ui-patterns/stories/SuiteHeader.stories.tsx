import { makeStyles, tokens } from "@fluentui/react-components";
import {
  AlertRegular,
  CalendarRegular,
  ChatRegular,
  QuestionCircleRegular,
  SettingsRegular,
  ShareRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import logoBlack from "../../../assets/logo-black.svg";
import {
  SuiteHeader,
  type SuiteHeaderAction,
  defaultLauncherOrganizationItems,
} from "../components/suite/SuiteHeader";

const meta: Meta<typeof SuiteHeader> = {
  title: "UI patterns/Suite Header",
  component: SuiteHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    fitContent: true,
    docs: {
      description: {
        component:
          'A suite header pattern with app launcher, product name, global search, quick actions, and user avatar. The quick-action buttons collapse one by one into a "more" menu when the header runs out of horizontal space.\n\n<p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=92-523"><img width="240" src="/figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuiteHeader>;

/**
 * The minimal header: app launcher, product name, quick actions, and avatar.
 * Search and the organization picker are turned off.
 */
export const Default: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
  },
};

/**
 * Enables the global search field in the center of the header.
 */
export const WithSearch: Story = {
  args: {
    productName: "Product name",
    showSearch: true,
    showOrganizationPicker: false,
  },
};

/**
 * Adds the organization picker to the quick-action cluster on the right.
 */
export const WithOrganizationPicker: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: true,
  },
};

/**
 * Adds the optional sub-menu to the app launcher. Open the app launcher to see
 * the apps grid followed by the "Sub menu" section. The sub-menu is only
 * rendered when `launcherOrganizationItems` is provided.
 */
export const WithSubMenuLauncher: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    launcherOrganizationItems: defaultLauncherOrganizationItems,
  },
};

/**
 * Shows the time and date block to the left of the quick actions.
 */
export const WithTimeDate: Story = {
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    showTimeDate: true,
  },
};

/**
 * Displays a company logo before the product name.
 */
export const WithLogo: Story = {
  args: {
    companyLogo: logoBlack,
    productName: "Axis Management",
    showSearch: false,
    showOrganizationPicker: false,
  },
};

const manyActions: SuiteHeaderAction[] = [
  { id: "notifications", icon: <AlertRegular />, ariaLabel: "Notifications" },
  { id: "messages", icon: <ChatRegular />, ariaLabel: "Messages" },
  { id: "calendar", icon: <CalendarRegular />, ariaLabel: "Calendar" },
  { id: "share", icon: <ShareRegular />, ariaLabel: "Share" },
  { id: "settings", icon: <SettingsRegular />, ariaLabel: "Settings" },
  { id: "help", icon: <QuestionCircleRegular />, ariaLabel: "Help" },
];

const useCollapsingStyles = makeStyles({
  frame: {
    width: "520px",
    maxWidth: "100%",
    resize: "horizontal",
    overflow: "hidden",
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

/**
 * In a constrained container the quick-action buttons collapse one by one into
 * a "more" menu as space runs out. Drag the right edge of the frame to move the
 * actions in and out of the overflow menu.
 */
export const CollapsingActions: Story = {
  render: (args) => {
    const styles = useCollapsingStyles();

    return (
      <div className={styles.frame}>
        <SuiteHeader {...args} />
      </div>
    );
  },
  args: {
    productName: "Product name",
    showSearch: false,
    showOrganizationPicker: false,
    utilityActions: manyActions,
  },
};
