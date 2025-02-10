import {
  makeStyles,
  mergeClasses,
  tokens,
  useFluent,
} from "@fluentui/react-components";

import { sliderClassNames, sliderVars } from "../use-slider-styles";
import { MarkState } from "./mark.types";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: tokens.strokeWidthThick,
    height: `var(${sliderVars.rail.size})`,
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: `var(${sliderVars.tick.color})`,
  },
  active: {
    [sliderVars.tick.color]: tokens.colorNeutralStroke1,
  },
  enabled: {
    [sliderVars.tick.color]: tokens.colorNeutralStroke1,
  },
  disabled: {
    [sliderVars.tick.color]: tokens.colorNeutralBackgroundDisabled,
  },
});

export const useMarkStyles_unstable = (state: MarkState): MarkState => {
  const styles = useStyles();

  const { offset, disabled, active } = state;

  const colorStyles = disabled
    ? styles.disabled
    : active
      ? styles.active
      : styles.enabled;

  state.root.className = mergeClasses(
    sliderClassNames.mark.root,
    styles.root,
    colorStyles,
    state.root.className
  );

  const { dir } = useFluent();
  const offsetDirection = dir === "rtl" ? "right" : "left";
  state.root.style = { [offsetDirection]: `${offset}%`, ...state.root.style };

  return state;
};
