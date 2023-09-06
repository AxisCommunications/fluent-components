import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

import { ThumbState } from "./thumb.types";
import {
  sliderClassNames,
  sliderDurations,
  sliderEasings,
  sliderVars,
} from "../use-slider-styles";

const useRootStyles = makeStyles({
  root: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: `var(${sliderVars.thumb.size})`,
    height: `var(${sliderVars.thumb.size})`,
    top: "50%",
    transform: "translate(-50%, -50%) /* @noflip */",
    backgroundColor: `var(${sliderVars.thumb.color})`,
    boxSizing: "border-box",
    boxShadow:
      `0 0 0 calc(var(${sliderVars.thumb.size}) * .2) ${tokens.colorNeutralBackground1} inset`,

    "::before": {
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
      ...shorthands.border(
        `calc(var(${sliderVars.thumb.size}) * .05)`,
        "solid",
        tokens.colorNeutralStroke1
      ),

      position: "absolute",
      top: "0px",
      left: "0px",
      bottom: "0px",
      right: "0px",
      boxSizing: "border-box",
      content: "\"\"",
    },

    // create an invisible circular block around the thumb that captures hover
    "::after": {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: `calc(var(${sliderVars.thumb.size}) + 22px)`,
      height: `calc(var(${sliderVars.thumb.size}) + 22px)`,
      content: "\"\"",
      transform: "translate(-50%, -50%)",
      ...shorthands.borderRadius(tokens.borderRadiusCircular),
    },

    "& > input": {
      opacity: 0,
      width: 0,
      height: 0,
      pointerEvents: "none",
    },
  },
  active: {
    zIndex: 100, // ensure active thumb is on top of other thumbs
    [sliderVars.thumb.color]: tokens.colorCompoundBrandBackgroundPressed,
  },
  enabled: {
    [sliderVars.thumb.color]: tokens.colorCompoundBrandBackground,
    ":hover": {
      [sliderVars.thumb.color]: tokens.colorCompoundBrandBackgroundHover,
    },
  },
  disabled: {
    [sliderVars.thumb.color]: tokens.colorNeutralForegroundDisabled,
  },
});

const useLabelStyles = makeStyles({
  label: {
    ...shorthands.transition(
      "transform",
      sliderDurations.short,
      sliderEasings.easeOutFast
    ),
    ...shorthands.padding(tokens.spacingVerticalXS, tokens.spacingHorizontalM),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    position: "absolute",
    top: "-10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.colorNeutralBackground1,
    transformOrigin: "center bottom 0px",
    filter:
      `drop-shadow(0 0 2px ${tokens.colorNeutralShadowAmbient}) drop-shadow(0 4px 8px ${tokens.colorNeutralShadowKey})`,

    // this is the little arrow thingy below the label box
    "::before": {
      position: "absolute",
      content: "\"\"",
      width: "8px",
      height: "8px",
      transform: "translate(-50%, 50%) rotate(45deg)",
      backgroundColor: "inherit",
      bottom: "0px",
      left: "50%",
    },
  },
  hidden: {
    transform: "translateY(-100%) scale(0)",
  },
  visible: {
    transform: "translateY(-100%) scale(1)",
  },
});

export const useThumbStyles_unstable = (state: ThumbState): ThumbState => {
  const rootStyles = useRootStyles();
  const labelStyles = useLabelStyles();

  const { offset, disabled, open, active } = state;

  state.root.className = mergeClasses(
    sliderClassNames.thumb.root,
    rootStyles.root,
    disabled
      ? rootStyles.disabled
      : active
      ? rootStyles.active
      : rootStyles.enabled,
    state.root.className
  );
  state.root.style = { left: `${offset}%`, ...state.root.style };

  state.label.className = mergeClasses(
    sliderClassNames.thumb.label,
    labelStyles.label,
    open ? labelStyles.visible : labelStyles.hidden,
    state.label.className
  );

  return state;
};
