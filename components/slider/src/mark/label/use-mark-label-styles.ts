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
} from "../../use-slider-styles";
import { MarkLabelState } from "./mark-label.types";

const useStyles = makeStyles({
  root: {
    ...shorthands.transition(
      "color",
      sliderDurations.short,
      sliderEasings.easeOutFast
    ),
    position: "absolute",
    color: `var(${sliderVars.mark.color})`,
    top: `var(${sliderVars.thumb.size})`,
    transform: `translateX(-50%)`,
    whiteSpace: "nowrap",
  },
  active: {
    [sliderVars.mark.color]: tokens.colorNeutralForeground1,
  },
  enabled: {
    [sliderVars.mark.color]: tokens.colorNeutralForeground2,
  },
  disabled: {
    [sliderVars.mark.color]: tokens.colorNeutralForegroundDisabled,
  },
});

export const useMarkLabelStyles_unstable = (
  state: MarkLabelState
): MarkLabelState => {
  const styles = useStyles();

  const { offset, disabled, active } = state;

  const colorStyles = disabled
    ? styles.disabled
    : active
    ? styles.active
    : styles.enabled;

  state.root.className = mergeClasses(
    sliderClassNames.mark.label,
    styles.root,
    colorStyles,
    state.root.className
  );

  const { dir } = useFluent();
  const offsetDirection = dir === "rtl" ? "right" : "left";
  state.root.style = { [offsetDirection]: `${offset}%`, ...state.root.style };

  return state;
};
