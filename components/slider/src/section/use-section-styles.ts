import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  useFluent,
} from "@fluentui/react-components";

import {
  sliderClassNames,
  sliderDurations,
  sliderEasings,
  sliderVars,
} from "../use-slider-styles";
import { SectionState } from "./section.types";

const useStyles = makeStyles({
  root: {
    ...shorthands.transition(
      "color",
      sliderDurations.short,
      sliderEasings.easeOutFast
    ),
    position: "absolute",
    color: `var(${sliderVars.section.color})`,
    top: `var(${sliderVars.thumb.size})`,
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
  },
  active: {
    [sliderVars.section.color]: tokens.colorNeutralForeground1,
  },
  enabled: {
    [sliderVars.section.color]: tokens.colorNeutralForeground2,
  },
  disabled: {
    [sliderVars.section.color]: tokens.colorNeutralForegroundDisabled,
  },
});

export const useSectionStyles_unstable = (
  state: SectionState
): SectionState => {
  const styles = useStyles();

  const { offset, disabled, active } = state;

  const colorStyles = disabled
    ? styles.disabled
    : active
    ? styles.active
    : styles.enabled;

  state.root.className = mergeClasses(
    sliderClassNames.section.label,
    styles.root,
    colorStyles,
    state.root.className
  );

  const { dir } = useFluent();
  const offsetDirection = dir === "rtl" ? "right" : "left";
  state.root.title = "";
  state.root.style = {
    cursor: "default",
    [offsetDirection]: `${offset}%`,
    ...state.root.style,
  };

  return state;
};
