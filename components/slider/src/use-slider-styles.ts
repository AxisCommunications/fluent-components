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

  if (hasSectionLabelsAndColors) {
    const gradientDirection = !rtl ? "right" : "left";

    const trackColorGradient = useMemo(() => {
      const value = values[0]; // note: no tested support for range sliders using sections

      const defaultColor = tokens.colorCompoundBrandBackground;
      const { min, max } = state;

      let styleValue = `linear-gradient(to ${gradientDirection}, `;
      for (const sl of state.sectionLabels) {
        const color = sl.trackColor ?? defaultColor;
        if (value > (sl.edges.right ?? max)) {
          styleValue += `${color} ${toPercent(sl.edges.left, min, max)}%, `;
          styleValue += `${color} ${toPercent(sl.edges.right, min, max)}%, `;
        } else {
          styleValue += `${color} ${toPercent(sl.edges.left, min, max)}%, `;
          styleValue += `${color} ${toPercent(value, min, max)}%, `;

          styleValue += `transparent ${toPercent(value, min, max)}%, `;
          styleValue += `transparent ${toPercent(sl.edges.right, min, max)}%, `;
        }
      }
      styleValue = styleValue.substring(0, styleValue.length - 2); // remove trailing ", "
      styleValue += ")";

      return styleValue;
    }, [values[0], state, gradientDirection]);

    const thumbColor = useMemo(() => {
      const value = values[0];

      const defaultColor = tokens.colorCompoundBrandBackground;
      let color = tokens.colorCompoundBrandBackground;

      for (const sl of state.sectionLabels) {
        const tempColor = sl.trackColor ?? defaultColor;
        if (value > (sl.edges.left ?? 100)) {
          color = tempColor;
        }
      }

      return color;
    }, [values[0], state]);

    state.thumb = {
      style: {
        backgroundColor: thumbColor,
      },
    };
    state.track.style = {
      width: "100%",
      backgroundImage: trackColorGradient,
    };
  }

  const offsetDirection = rtl ? "right" : "left";
  state.track.style = {
    [offsetDirection]: `${trackOffset}%`,
    width: `${trackWidth}%`,
    ...state.track.style,
  };

  return state;
};
