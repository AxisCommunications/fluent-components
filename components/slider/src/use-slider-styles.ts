import { useMemo } from "react";

import {
  createFocusOutlineStyle,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  useFluent,
} from "@fluentui/react-components";

import { SliderState } from "./slider.types";
import { toPercent } from "./utils";

export const sliderClassNames = {
  root: "axis-Slider",
  control: "axis-Slider__control",
  rail: "axis-Slider__rail",
  track: "axis-Slider__track",
  thumb: {
    root: "axis-Slider__thumb",
    label: "axis-Slider__thumb-label",
  },
  mark: {
    root: "axis-Slider__mark",
    label: "axis-Slider__mark__label",
  },
  section: {
    root: "axis-Slider__section",
    label: "axis-Slider__section__label",
  },
};

export const sliderVars = {
  root: {
    paddingBottom: "--axis-slider--paddingBottom",
  },
  rail: {
    color: "--axis-slider__rail--color",
    size: "--axis-slider__rail--size",
  },
  track: {
    color: "--axis-slider__track--color",
  },
  thumb: {
    size: "--axis-Slider__thumb--size",
    color: "--axis-Slider__thumb--color",
  },
  tick: {
    color: "--axis-Slider__tick--color",
  },
  mark: {
    color: "--axis-Slider__mark--color",
  },
  section: {
    color: "--axis-Slider__section--color",
  },
};

export const sliderDurations = {
  short: "100ms",
};

export const sliderEasings = {
  easeOutFast: "cubic-bezier(0.5, 0.5, 0, 1)",
};

const useRootStyles = makeStyles({
  root: {
    ...shorthands.padding(
      tokens.spacingVerticalSNudge,
      `0px`,
      `calc(var(${sliderVars.root.paddingBottom}) + ${tokens.spacingVerticalSNudge})`,
      `0px`
    ),
    height: `var(${sliderVars.thumb.size})`,
    display: "flex",
    position: "relative",
    width: `100%`,

    [sliderVars.root.paddingBottom]: "0px",
  },
  small: {
    [sliderVars.thumb.size]: "16px",
    [sliderVars.rail.size]: "2px",
  },
  medium: {
    [sliderVars.thumb.size]: "20px",
    [sliderVars.rail.size]: "4px",
  },
  focusIndicator: createFocusOutlineStyle({
    selector: "focus-within",
    style: {
      outlineOffset: {
        top: "-2px",
        bottom: "-2px",
        left: "8px",
        right: "8px",
      },
    },
  }),
  hasMarkLabel: {
    [sliderVars.root.paddingBottom]: "1rem",
  },
  hasSectionLabels: {
    [sliderVars.root.paddingBottom]: "1rem",
  },
});

const useControlStyles = makeStyles({
  control: {
    position: "relative",
    display: "inline-block",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    width: `calc(100% - var(${sliderVars.thumb.size}))`,
    cursor: "pointer",
  },
  enabled: {
    [sliderVars.rail.color]: tokens.colorNeutralStrokeAccessible,
  },
  disabled: {
    pointerEvents: "none",
    [sliderVars.rail.color]: tokens.colorNeutralBackgroundDisabled,
  },
});

const useRailStyles = makeStyles({
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    ...shorthands.overflow("hidden"),
    display: "block",
    position: "absolute",
    width: "100%",
    height: `var(${sliderVars.rail.size})`,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: `var(${sliderVars.rail.color})`,
  },
});

const useTrackStyles = makeStyles({
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    display: "block",
    position: "absolute",
    height: `var(${sliderVars.rail.size})`,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: `var(${sliderVars.track.color})`,
  },
  active: {
    [sliderVars.track.color]: tokens.colorCompoundBrandBackgroundPressed,
  },
  enabled: {
    [sliderVars.track.color]: tokens.colorCompoundBrandBackground,
  },
  disabled: {
    [sliderVars.track.color]: tokens.colorNeutralForegroundDisabled,
  },
});

export const useSliderStyles_unstable = (state: SliderState): SliderState => {
  const rootStyles = useRootStyles();
  const controlStyles = useControlStyles();
  const railStyles = useRailStyles();
  const trackStyles = useTrackStyles();

  const {
    disabled,
    trackOffset,
    trackWidth,
    active,
    markLabels,
    sectionLabels,
    size,
    values,
  } = state;

  const { dir } = useFluent();

  const rtl = dir === "rtl";

  const hasMarkLabel = markLabels.length > 0;
  const hasSectionLabels = sectionLabels.length > 0;

  state.root.className = mergeClasses(
    sliderClassNames.root,
    rootStyles.root,
    size === "small" && rootStyles.small,
    size === "medium" && rootStyles.medium,
    rootStyles.focusIndicator,
    hasMarkLabel && rootStyles.hasMarkLabel,
    hasSectionLabels && rootStyles.hasSectionLabels,
    state.root.className
  );

  state.control.className = mergeClasses(
    sliderClassNames.control,
    controlStyles.control,
    disabled ? controlStyles.disabled : controlStyles.enabled,
    state.control.className
  );

  state.rail.className = mergeClasses(
    sliderClassNames.rail,
    railStyles.root,
    state.rail.className
  );

  state.track.className = mergeClasses(
    sliderClassNames.track,
    trackStyles.root,
    disabled ? trackStyles.disabled : trackStyles.enabled,
    active && trackStyles.active,
    state.track.className
  );

  const hasSectionLabelsAndColors = sectionLabels.length > 0;

  const offsetDirection = rtl ? "right" : "left";
  const offset = hasSectionLabelsAndColors
    ? undefined
    : {
      [offsetDirection]: `${trackOffset}%`,
    };

  const sectionStyles = useMemo(() => {
    /** trackColorGradient */
    let tcg;
    let thumbColor;

    if (hasSectionLabelsAndColors) {
      const { min, max } = state;
      const rangeStart = values[0];
      const rangeEnd = values.length > 1
        ? values[values.length - 1]
        : undefined;

      const trackStart = rangeEnd === undefined ? min : rangeStart;
      const trackEnd = rangeEnd === undefined ? rangeStart : rangeEnd;

      const defaultColor = tokens.colorCompoundBrandBackground;

      const gradientDirection = !rtl ? "right" : "left";

      tcg = `linear-gradient(to ${gradientDirection}, `;
      for (const sl of state.sectionLabels) {
        const color = sl.trackColor ?? defaultColor;

        // start
        if (sl.edges.from <= trackStart) {
          if (sl.edges.from < trackStart) {
            // transparent block before track
            tcg += `transparent ${toPercent(sl.edges.from, min, max)}%, `;
            tcg += `transparent ${toPercent(trackStart, min, max)}%, `;
          }

          if (sl.edges.to > trackStart && sl.edges.to < trackEnd) {
            tcg += `${color} ${toPercent(trackStart, min, max)}%, `;
            tcg += `${color} ${toPercent(sl.edges.to, min, max)}%, `;
          }
        }

        // middle full
        if (
          (sl.edges.from ?? max) >= trackStart
          && (sl.edges.to ?? max) <= trackEnd
        ) {
          tcg += `${color} ${toPercent(sl.edges.from, min, max)}%, `;
          tcg += `${color} ${toPercent(sl.edges.to, min, max)}%, `;
        }
        // middle inside
        if (
          (sl.edges.from ?? max) <= trackStart
          && (sl.edges.to ?? max) >= trackEnd
        ) {
          tcg += `${color} ${toPercent(trackStart, min, max)}%, `;
          tcg += `${color} ${toPercent(trackEnd, min, max)}%, `;

          // transparent block after track
          tcg += `transparent ${toPercent(trackEnd, min, max)}%, `;
          tcg += `transparent ${toPercent(sl.edges.to, min, max)}%, `;
        }

        // end
        if (sl.edges.from > trackStart && sl.edges.to > trackEnd) {
          // colored block of track
          tcg += `${color} ${toPercent(sl.edges.from, min, max)}%, `;
          tcg += `${color} ${toPercent(trackEnd, min, max)}%, `;

          // transparent block after track
          tcg += `transparent ${toPercent(trackEnd, min, max)}%, `;
          tcg += `transparent ${toPercent(sl.edges.to, min, max)}%, `;
        }

        if (sl.edges.from > trackEnd) {
          // transparent block after track
          tcg += `transparent ${toPercent(sl.edges.from, min, max)}%, `;
          tcg += `transparent ${toPercent(sl.edges.to, min, max)}%, `;
        }
      }
      tcg = tcg.substring(0, tcg.length - 2); // remove trailing ", "
      tcg += ")";

      thumbColor = tokens.colorCompoundBrandBackground;

      for (const [index, sectionLabel] of state.sectionLabels.entries()) {
        if (
          trackEnd === min ? index === 0 : trackEnd > sectionLabel.edges.from
        ) {
          thumbColor = sectionLabel.trackColor ?? defaultColor;
        }
      }

      return { trackColorGradient: tcg, thumbColor };
    }
  }, [values]);

  state.thumb = {
    ...state.thumb,
    style: {
      ...state.thumb?.style,
      backgroundColor: sectionStyles?.thumbColor,
    },
  };
  state.track.style = {
    backgroundImage: sectionStyles?.trackColorGradient,
    width: hasSectionLabelsAndColors ? "100%" : `${trackWidth}%`,
    ...offset,
    ...state.track.style,
  };

  return state;
};
