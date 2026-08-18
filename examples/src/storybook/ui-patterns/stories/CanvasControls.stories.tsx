import { makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowMinimizeVerticalRegular,
  CursorRegular,
  HandRightRegular,
  ScaleFillRegular,
} from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  type CanvasControlAction,
  CanvasControls,
} from "../components/composites/CanvasControls";

const useDemoStyles = makeStyles({
  canvas: {
    position: "relative",
    height: "420px",
    borderRadius: tokens.borderRadiusMedium,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground3,
    backgroundImage: `radial-gradient(${tokens.colorNeutralStroke2} 1px, transparent 1px)`,
    overflow: "hidden",
  },

  dock: {
    position: "absolute",
    top: "50%",
    right: tokens.spacingHorizontalL,
    transform: "translateY(-50%)",
  },

  node: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "160px",
    height: "56px",
    borderRadius: tokens.borderRadiusMedium,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow2,
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase300,
  },

  readout: {
    position: "absolute",
    left: tokens.spacingHorizontalL,
    bottom: tokens.spacingVerticalL,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow2,
    color: tokens.colorNeutralForeground2,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase200,
  },

  row: {
    display: "flex",
    alignItems: "flex-start",
    gap: "64px",
    padding: tokens.spacingVerticalXL,
  },
});

/** The canvas-level commands the spec stacks below the zoom cluster. */
const END_ACTIONS: CanvasControlAction[] = [
  { key: "fit", label: "Fit to view", icon: <ScaleFillRegular /> },
  {
    key: "collapse",
    label: "Collapse all",
    icon: <ArrowMinimizeVerticalRegular />,
  },
];

/**
 * Canvas Controls
 *
 * Canvas controls help people navigate an interactive canvas — a map, diagram
 * or pipeline editor — with different levels of zoom plus other navigational
 * and organizational actions.
 *
 * A zoom cluster (zoom in, vertical slider, zoom out) always sits at the
 * centre and reads as a single control, so its three parts are flush. Optional
 * `start` and `end` actions stack above and below with a 4px gap. Rendering the
 * pattern with neither produces the slider-only variant.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives and tokens
 * - Buttons keep the default (secondary) appearance and add `shadow2`, the
 *   elevation the spec calls for on a control floating over canvas content
 * - Vertical `Slider` with the smallest value at the bottom, matching the
 *   zoom-out button beneath it. The slider is logarithmic, so 100% lands at the
 *   midpoint of the default 25-400% range and equal drags change the zoom by
 *   equal ratios
 * - `group` rather than `toolbar`: a toolbar promises roving arrow-key
 *   navigation, which would collide with the arrow keys the vertical slider
 *   needs
 * - Every button has a tooltip and an `aria-label`, and the slider announces
 *   `aria-valuetext` as a percentage
 *
 * <p align="right"><a href="https://www.figma.com/design/0kVLp2qecBWQiQXEQidCeJ/Axis-Global-components?node-id=350-311"><img width="240" src="./figma-global-components-cover.svg" alt="Open in Figma — AXIS Fluent Global components" /></a></p>
 */
const meta: Meta<typeof CanvasControls> = {
  title: "UI patterns/Canvas Controls",
  component: CanvasControls,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    start: {
      control: false,
      description: "Buttons stacked above the zoom cluster.",
      table: { type: { summary: "CanvasControlAction[]" } },
    },
    end: {
      control: false,
      description: "Buttons stacked below the zoom cluster.",
      table: { type: { summary: "CanvasControlAction[]" } },
    },
    zoom: {
      control: { type: "number", min: 25, max: 400, step: 25 },
      description: "Zoom percentage (controlled).",
      table: { type: { summary: "number" } },
    },
    defaultZoom: {
      control: { type: "number", min: 25, max: 400, step: 25 },
      description: "Initial zoom percentage (uncontrolled).",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    minZoom: {
      control: "number",
      table: { type: { summary: "number" }, defaultValue: { summary: "25" } },
    },
    maxZoom: {
      control: "number",
      table: { type: { summary: "number" }, defaultValue: { summary: "400" } },
    },
    zoomStep: {
      control: "number",
      description: "Increment applied by the zoom in/out buttons.",
      table: { type: { summary: "number" }, defaultValue: { summary: "25" } },
    },
    sliderLength: {
      control: { type: "number", min: 64, max: 240, step: 4 },
      description: "Length of the zoom slider track, in pixels.",
      table: { type: { summary: "number" }, defaultValue: { summary: "108" } },
    },
    tooltipPositioning: {
      control: "inline-radio",
      options: ["before", "after"],
      description:
        "Side the tooltips open toward. Use `after` when the group is docked to the leading edge.",
      table: {
        type: { summary: '"before" | "after"' },
        defaultValue: { summary: '"before"' },
      },
    },
    onZoomChange: {
      action: "zoomChange",
      table: { type: { summary: "(zoom: number) => void" } },
    },
    formatZoom: {
      control: false,
      description: "Renders the zoom percentage for assistive tech.",
      table: { type: { summary: "(zoom: number) => string" } },
    },
    ariaLabel: {
      control: "text",
      table: { type: { summary: "string" } },
    },
    className: {
      control: false,
      table: { type: { summary: "string | undefined" } },
    },
  },
  args: {
    defaultZoom: 100,
    minZoom: 25,
    maxZoom: 400,
    zoomStep: 25,
    sliderLength: 108,
    ariaLabel: "Canvas controls",
  },
};

export default meta;
type Story = StoryObj<typeof CanvasControls>;

/**
 * The default stack: a pointer tool above the zoom cluster and the fit/collapse
 * commands below it.
 */
export const Default: Story = {
  args: {
    start: [{ key: "select", label: "Select", icon: <CursorRegular /> }],
    end: END_ACTIONS,
  },
};

/**
 * With neither `start` nor `end`, only the zoom cluster remains — the
 * slider-only variant, for canvases whose other commands live elsewhere.
 */
export const SliderOnly: Story = {};

/**
 * Both variants side by side.
 */
export const Variants: Story = {
  render: (args) => {
    const styles = useDemoStyles();

    return (
      <div className={styles.row}>
        <CanvasControls
          {...args}
          start={[{ key: "select", label: "Select", icon: <CursorRegular /> }]}
          end={END_ACTIONS}
          ariaLabel="Canvas controls, default"
        />
        <CanvasControls {...args} ariaLabel="Canvas controls, slider only" />
      </div>
    );
  },
};

/**
 * The pattern in context: docked to the trailing edge of a pipeline canvas,
 * driving a live zoom level. Tooltips open toward the canvas so they never
 * leave the viewport.
 */
export const OnCanvas: Story = {
  render: (args) => {
    const styles = useDemoStyles();
    const [zoom, setZoom] = useState(100);
    const [tool, setTool] = useState<"select" | "pan">("select");

    return (
      <div className={styles.canvas} style={{ backgroundSize: "24px 24px" }}>
        <div
          className={styles.node}
          style={{
            left: "80px",
            top: "120px",
            transform: `scale(${zoom / 100})`,
          }}
        >
          Ingest
        </div>
        <div
          className={styles.node}
          style={{
            left: "300px",
            top: "220px",
            transform: `scale(${zoom / 100})`,
          }}
        >
          Transform
        </div>

        <div className={styles.readout}>
          {zoom}% · {tool === "select" ? "Select" : "Pan"}
        </div>

        <CanvasControls
          {...args}
          className={styles.dock}
          zoom={zoom}
          onZoomChange={setZoom}
          start={[
            {
              key: "tool",
              label: tool === "select" ? "Switch to pan" : "Switch to select",
              icon:
                tool === "select" ? <CursorRegular /> : <HandRightRegular />,
              onClick: () => setTool(tool === "select" ? "pan" : "select"),
            },
          ]}
          end={[
            {
              key: "fit",
              label: "Fit to view",
              icon: <ScaleFillRegular />,
              onClick: () => setZoom(100),
            },
            {
              key: "collapse",
              label: "Collapse all",
              icon: <ArrowMinimizeVerticalRegular />,
            },
          ]}
        />
      </div>
    );
  },
};

/**
 * The zoom in and out buttons disable themselves at the ends of the range, and
 * snap to the `zoomStep` grid, so a dragged value like 137% still steps to 150%
 * or 125% rather than 162% or 112%.
 */
export const AtZoomLimits: Story = {
  render: (args) => {
    const styles = useDemoStyles();

    return (
      <div className={styles.row}>
        <CanvasControls
          {...args}
          defaultZoom={25}
          end={END_ACTIONS}
          ariaLabel="Canvas controls at minimum zoom"
        />
        <CanvasControls
          {...args}
          defaultZoom={400}
          end={END_ACTIONS}
          ariaLabel="Canvas controls at maximum zoom"
        />
      </div>
    );
  },
};
