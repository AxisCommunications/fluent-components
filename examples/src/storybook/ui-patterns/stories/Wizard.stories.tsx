import { tokens } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
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
 * - Active and completed steps use the Axis brand color
 * - Accessible: `nav` landmark, `aria-current="step"`, labelled icon buttons
 *
 * ## Behaviour
 *
 * - Completed steps render a checkmark and a brand-colored connector.
 * - The active step is filled with the brand color.
 * - Upcoming steps are outlined.
 * - The primary button switches from **Next** to **Finish** on the last step.
 *
 * Supports both controlled (`currentStep` + `onStepChange`) and uncontrolled
 * (`defaultStep`) usage.
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=104-459"><img width="240" src="/figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof Wizard> = {
  title: "UI patterns/Wizard",
  component: Wizard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
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
        minHeight: 360,
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
 * steps. Any *required* step you skip without ever visiting it shows an
 * attention dot marker (instead of a completion checkmark) so it is clear it
 * still needs to be filled in. Jump from the first step to a later one to see
 * the marker appear on the required steps in between.
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
 * and turns the final step indicator into a green checkmark. Walk through with
 * **Next** and press **Finish** to see it.
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
