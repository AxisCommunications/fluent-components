import { tokens } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Wizard, type WizardStep } from "../components/composites/Wizard";

/**
 * Wizard
 *
 * A full-page guided flow that pairs a vertical step indicator with a content
 * area and Back / Next navigation. It is ideal for multi-step setup or
 * onboarding tasks where users need awareness of completed, current, and
 * upcoming steps.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components`
 * - Token-driven styling via `makeStyles` + Fluent `tokens` (Axis theme aware)
 * - Step status uses Fluent status icons tinted with foreground tokens, so the
 *   Axis yellow brand never carries an on-brand glyph
 * - Accessible: `nav` landmark, `aria-current="step"`, labelled icon buttons
 *
 * ## Behaviour
 *
 * - The current step shows a filled brand circle.
 * - Completed steps show a brand checkmark circle and a brand connector.
 * - Upcoming steps show an outlined circle; locked steps are muted.
 * - The primary button switches from **Next** to **Finish** on the last step.
 *
 * Supports both controlled (`currentStep` + `onStepChange`) and uncontrolled
 * (`defaultStep`) usage.
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=104-459"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof Wizard> = {
  title: "UI patterns/Wizard",
  component: Wizard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", padding: 24, boxSizing: "border-box" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "Small muted title shown above the step title",
    },
    navigationMode: {
      control: "radio",
      options: ["none", "linear", "free"],
      description:
        "Whether sidebar steps are clickable: 'none' (Back/Next only), " +
        "'linear' (only completed/visited steps), or 'free' (jump anywhere)",
    },
    backLabel: { control: "text", description: "Label for the back button" },
    nextLabel: { control: "text", description: "Label for the next button" },
    layout: {
      control: "radio",
      options: ["default", "compact"],
      description:
        "Step indicator placement: 'default' (vertical labelled rail) or " +
        "'compact' (horizontal numbered stepper for small drawers / mobile)",
    },
    surface: {
      control: "radio",
      options: ["overlay", "inline"],
      description:
        "Surface chrome: 'overlay' (rounded with elevation) or 'inline' " +
        "(square with a leading divider)",
    },
    finishLabel: {
      control: "text",
      description: "Label for the primary action on the final step",
    },
    disableProgression: {
      control: "boolean",
      description: "Disable navigating to the next step",
    },
    animateContent: {
      control: "boolean",
      description:
        "Animate the content area with a directional sway when the active " +
        "step changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Wizard>;

function PlaceholderContent() {
  return (
    <div
      style={{
        height: "100%",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: tokens.borderRadiusMedium,
        backgroundColor: tokens.colorBrandBackground2,
        color: tokens.colorBrandForeground2,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontSize: tokens.fontSizeBase200,
      }}
    >
      Swap with content
    </div>
  );
}

const steps: WizardStep[] = Array.from({ length: 8 }, (_, index) => ({
  label: `Step ${index + 1}`,
  stepTitle: "Wizard step title",
  content: <PlaceholderContent />,
}));

/**
 * Default wizard matching the design: an eight-step vertical indicator with the
 * second step active and a content placeholder. Steps are not clickable
 * (`navigationMode="none"`); navigate with Back / Next.
 */
export const Default: Story = {
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 1,
  },
};

/**
 * **Linear navigation** (`navigationMode="linear"`). Each step must be completed
 * in order. You can click any step you have already reached to jump back to it,
 * but upcoming steps stay locked until you advance with **Next**. Walk forward
 * with Next, then click an earlier step to revisit it.
 */
export const LinearNavigation: Story = {
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 0,
  },
};

/**
 * **Free navigation** (`navigationMode="free"`). Every step is clickable, so the
 * user can jump to any step at any time — useful for non-sequential flows or
 * editing a previously completed step.
 */
export const FreeNavigation: Story = {
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "free",
    defaultStep: 2,
  },
};

/**
 * **Required steps** (`step.required`). With `free` navigation you can jump past
 * steps. Any *required* step you skip without ever visiting it shows a danger
 * dismiss circle (instead of a completion checkmark) so it is clear it still
 * needs to be filled in. Jump from the first step to a later one to see the
 * marker appear on the required steps in between.
 */
export const RequiredSteps: Story = {
  args: {
    title: "Wizard title",
    navigationMode: "free",
    defaultStep: 0,
    steps: Array.from({ length: 6 }, (_, index) => ({
      label: `Step ${index + 1}`,
      stepTitle: "Wizard step title",
      content: <PlaceholderContent />,
      required: index === 1 || index === 2,
    })),
  },
};

/**
 * **Completion** — pressing **Finish** on the last step marks the wizard done
 * and turns the final step indicator into a brand checkmark circle. Walk through
 * with **Next** and press **Finish** to see it.
 */
export const Completion: Story = {
  args: {
    title: "Wizard title",
    steps,
    navigationMode: "linear",
    defaultStep: 7,
  },
};

/**
 * Controlled usage. The parent owns the active step via `currentStep` and
 * `onStepChange`, allowing custom validation before progressing.
 */
export const Controlled: Story = {
  render: (args) => {
    const ControlledWizard = () => {
      const [step, setStep] = useState(0);
      return (
        <Wizard
          {...args}
          currentStep={step}
          onStepChange={setStep}
          onFinish={() => alert("Wizard finished!")}
        />
      );
    };
    return <ControlledWizard />;
  },
  args: {
    title: "Device setup",
    steps: [
      {
        label: "Connect",
        stepTitle: "Connect your device",
        content: <PlaceholderContent />,
      },
      {
        label: "Configure",
        stepTitle: "Configure settings",
        content: <PlaceholderContent />,
      },
      {
        label: "Review",
        stepTitle: "Review and confirm",
        content: <PlaceholderContent />,
      },
    ],
  },
};

/**
 * **Animated content** (`animateContent`). The content area sways in the
 * direction of travel when the active step changes — sliding in from the right
 * when moving forward and from the left when moving back. Use Back / Next to
 * see the transition.
 */
export const AnimatedContent: Story = {
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 0,
    navigationMode: "free",
    animateContent: true,
  },
};

/**
 * A short three-step flow demonstrating the **Finish** action on the final step.
 */
export const ThreeSteps: Story = {
  args: {
    title: "Onboarding",
    defaultStep: 2,
    steps: [
      {
        label: "Welcome",
        stepTitle: "Welcome",
        content: <PlaceholderContent />,
      },
      {
        label: "Profile",
        stepTitle: "Set up your profile",
        content: <PlaceholderContent />,
      },
      {
        label: "Done",
        stepTitle: "All set",
        content: <PlaceholderContent />,
      },
    ],
  },
};

/**
 * **Section Header integration.** The wizard header *is* the
 * [Section Header](?path=/docs/ui-patterns-section-header--docs) pattern: the
 * wizard `title` becomes the meta label, the step's `stepTitle` becomes the
 * `h2`, and the optional step `description` becomes the supporting copy. The
 * header carries only the close action; pass `headerActions` if a flow needs
 * local section actions.
 */
export const SectionHeaderIntegration: Story = {
  args: {
    title: "Wizard title",
    navigationMode: "linear",
    defaultStep: 0,
    steps: [
      {
        label: "Choose data source",
        details:
          "Choose from sample data, existing sources, or create a new one.",
        stepTitle: "Choose data source",
        description:
          "Introduce the active step, clarify the task, and provide local actions without repeating the wizard-level title.",
        content: <PlaceholderContent />,
      },
      {
        label: "Choose data",
        stepTitle: "Choose data",
        description:
          "Pick the records that should be included in this deployment.",
        content: <PlaceholderContent />,
      },
      {
        label: "Choose data destination",
        stepTitle: "Choose data destination",
        description:
          "Select where the data should land. Step actions stay in the header, navigation stays in the footer.",
        content: <PlaceholderContent />,
      },
      {
        label: "Map to destination",
        stepTitle: "Map to destination",
        description: "Match each source field to a destination field.",
        content: <PlaceholderContent />,
      },
      {
        label: "Review and Create",
        stepTitle: "Review and confirm",
        description:
          "Confirm the source and targets before finishing the wizard.",
        content: <PlaceholderContent />,
      },
    ],
  },
};

/**
 * **Compact overlay drawer / mobile** (`layout="compact"`, `surface="overlay"`).
 * At small widths the labelled rail is replaced by a horizontal numbered
 * stepper above the content: completed steps collapse to a brand checkmark,
 * the current step is a filled brand circle with its number, and upcoming
 * steps are outlined. Rounded corners and elevation mark it as an overlay.
 */
export const CompactOverlayDrawer: Story = {
  render: (args) => (
    <div style={{ width: 340, height: "100%" }}>
      <Wizard {...args} />
    </div>
  ),
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 4,
    layout: "compact",
    surface: "overlay",
  },
};

/**
 * **Compact inline drawer** (`layout="compact"`, `surface="inline"`). Same
 * compact stepper, but docked into the page: square corners and a leading
 * divider instead of rounded corners and a shadow.
 */
export const CompactInlineDrawer: Story = {
  render: (args) => (
    <div style={{ width: 340, height: "100%" }}>
      <Wizard {...args} />
    </div>
  ),
  args: {
    title: "Wizard title",
    steps,
    defaultStep: 4,
    layout: "compact",
    surface: "inline",
  },
};
