import {
  Button,
  Slider,
  Tooltip,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { AddRegular, SubtractRegular } from "@fluentui/react-icons";
import { type ReactElement, forwardRef, useState } from "react";

/** A single icon button in a `CanvasControls` stack. */
export interface CanvasControlAction {
  /** Stable identity for the control. */
  key: string;

  /** Accessible name, used for both the tooltip and `aria-label`. */
  label: string;

  /** Icon rendered inside the control. */
  icon: ReactElement;

  /** Click handler. */
  onClick?: () => void;

  /** Disabled state. */
  disabled?: boolean;
}

export interface CanvasControlsProps {
  /** Buttons stacked above the zoom cluster. */
  start?: CanvasControlAction[];

  /** Buttons stacked below the zoom cluster. */
  end?: CanvasControlAction[];

  /** Zoom percentage (controlled). */
  zoom?: number;

  /** Initial zoom percentage (uncontrolled). Defaults to `100`. */
  defaultZoom?: number;

  /** Lowest selectable zoom percentage. Defaults to `25`. */
  minZoom?: number;

  /** Highest selectable zoom percentage. Defaults to `400`. */
  maxZoom?: number;

  /** Increment applied by the zoom in/out buttons. Defaults to `25`. */
  zoomStep?: number;

  /** Fired with the clamped percentage whenever the zoom changes. */
  onZoomChange?: (zoom: number) => void;

  /** Renders the zoom percentage for assistive tech. Defaults to `"120%"`. */
  formatZoom?: (zoom: number) => string;

  /** Length of the zoom slider track, in pixels. Defaults to `108`. */
  sliderLength?: number;

  /** Side the tooltips open toward. Defaults to `"before"` (leading edge). */
  tooltipPositioning?: "before" | "after";

  /** Accessible name and tooltip for the zoom in button. */
  zoomInLabel?: string;

  /** Accessible name and tooltip for the zoom out button. */
  zoomOutLabel?: string;

  /** Accessible name for the zoom slider. */
  zoomLabel?: string;

  /** Accessible name for the control group. */
  ariaLabel?: string;

  /** Optional CSS class applied to the root element. */
  className?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: tokens.spacingVerticalXS,
    width: "32px",
  },

  // Zoom in / slider / zoom out read as one control, so they sit flush.
  zoomCluster: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    minWidth: "32px",
    maxWidth: "32px",
    width: "32px",
    height: "32px",
    boxShadow: tokens.shadow2,
  },

  slider: {
    minHeight: 0,
    width: "32px",
  },
});

/** Slider positions are 0-100; zoom maps onto them logarithmically. */
const SLIDER_RANGE = 100;

/**
 * CanvasControls - a floating vertical control group for interactive canvases.
 *
 * Canvas controls help people navigate a zoomable surface such as a map,
 * diagram or pipeline editor. A zoom cluster (zoom in, vertical slider, zoom
 * out) always sits at the centre; optional `start` and `end` actions stack
 * above and below it for canvas-level commands such as fit to view.
 *
 * Rendering it with neither `start` nor `end` produces the slider-only variant.
 *
 * **Fluent Guidelines Applied:**
 * - Composed only from `@fluentui/react-components` primitives and tokens
 * - Buttons keep the default (secondary) appearance and add `shadow2`, the
 *   elevation the spec calls for on a control floating over canvas content
 * - Vertical `Slider` with the smallest value at the bottom, matching the
 *   zoom-out button beneath it. The slider is logarithmic, so the midpoint is
 *   the geometric mean of the range (100% for the default 25-400%) and equal
 *   drags change the zoom by equal ratios
 * - `group` rather than `toolbar`: a toolbar promises roving arrow-key
 *   navigation, which would collide with the arrow keys the vertical slider
 *   needs
 * - Every button has a tooltip and an `aria-label`, and the slider announces
 *   `aria-valuetext` as a percentage
 *
 * @example
 * <CanvasControls
 *   zoom={zoom}
 *   onZoomChange={setZoom}
 *   end={[{ key: "fit", label: "Fit to view", icon: <ScaleFillRegular /> }]}
 * />
 */
export const CanvasControls = forwardRef<HTMLDivElement, CanvasControlsProps>(
  (
    {
      start,
      end,
      zoom,
      defaultZoom = 100,
      minZoom = 25,
      maxZoom = 400,
      zoomStep = 25,
      onZoomChange,
      formatZoom = (value) => `${value}%`,
      sliderLength = 108,
      tooltipPositioning = "before",
      zoomInLabel = "Zoom in",
      zoomOutLabel = "Zoom out",
      zoomLabel = "Zoom level",
      ariaLabel = "Canvas controls",
      className,
    },
    ref
  ) => {
    const styles = useStyles();
    const [uncontrolledZoom, setUncontrolledZoom] = useState(defaultZoom);
    const currentZoom = zoom ?? uncontrolledZoom;

    const applyZoom = (next: number) => {
      const clamped = Math.round(Math.min(maxZoom, Math.max(minZoom, next)));
      if (zoom === undefined) {
        setUncontrolledZoom(clamped);
      }
      onZoomChange?.(clamped);
    };

    // Snap to the step grid so a dragged value like 137% still yields 150/125.
    const stepZoom = (direction: 1 | -1) => {
      const edge =
        direction > 0
          ? Math.floor(currentZoom / zoomStep)
          : Math.ceil(currentZoom / zoomStep);
      applyZoom((edge + direction) * zoomStep);
    };

    const logMin = Math.log(Math.max(1, minZoom));
    const logSpan = Math.log(Math.max(1, maxZoom)) - logMin;
    const sliderPosition =
      ((Math.log(Math.max(1, currentZoom)) - logMin) / logSpan) * SLIDER_RANGE;
    const zoomAtPosition = (position: number) =>
      Math.exp(logMin + (position / SLIDER_RANGE) * logSpan);

    const renderAction = (action: CanvasControlAction) => (
      <Tooltip
        key={action.key}
        content={action.label}
        relationship="label"
        positioning={tooltipPositioning}
        withArrow
      >
        <Button
          className={styles.button}
          icon={action.icon}
          aria-label={action.label}
          disabled={action.disabled}
          onClick={action.onClick}
        />
      </Tooltip>
    );

    return (
      <div
        ref={ref}
        className={mergeClasses("axis-CanvasControls", styles.root, className)}
        role="group"
        aria-label={ariaLabel}
      >
        {start?.map(renderAction)}

        <div className={styles.zoomCluster}>
          <Tooltip
            content={zoomInLabel}
            relationship="label"
            positioning={tooltipPositioning}
            withArrow
          >
            <Button
              className={styles.button}
              icon={<AddRegular />}
              aria-label={zoomInLabel}
              disabled={currentZoom >= maxZoom}
              onClick={() => stepZoom(1)}
            />
          </Tooltip>

          {/* No `step`: Fluent draws tick marks on a stepped rail, and the
          spec's rail is continuous. `zoomStep` only drives the buttons. */}
          <Slider
            vertical
            className={styles.slider}
            style={{ height: `${sliderLength}px` }}
            min={0}
            max={SLIDER_RANGE}
            value={sliderPosition}
            onChange={(_event, data) => applyZoom(zoomAtPosition(data.value))}
            aria-label={zoomLabel}
            aria-valuetext={formatZoom(currentZoom)}
          />

          <Tooltip
            content={zoomOutLabel}
            relationship="label"
            positioning={tooltipPositioning}
            withArrow
          >
            <Button
              className={styles.button}
              icon={<SubtractRegular />}
              aria-label={zoomOutLabel}
              disabled={currentZoom <= minZoom}
              onClick={() => stepZoom(-1)}
            />
          </Tooltip>
        </div>

        {end?.map(renderAction)}
      </div>
    );
  }
);

CanvasControls.displayName = "CanvasControls";
