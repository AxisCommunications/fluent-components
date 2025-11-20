import { Slider } from "@axiscommunications/fluent-slider";
import { makeStyles, tokens } from "@fluentui/react-components";

const useCustomizedSliderStyles = makeStyles({
  thumb: {
    backgroundColor: tokens.colorPaletteRedBackground3,
    width: "28px",
    height: "28px",
    "&:hover": {
      backgroundColor: tokens.colorPaletteRedBackground2,
    },
  },
  thumbLabel: {
    backgroundColor: tokens.colorPaletteRedBackground3,
    color: tokens.colorPaletteYellowForeground1,
  },
  mark: {
    height: "8px",
    width: "5px",
  },
  markLabel: {
    color: tokens.colorPaletteRedForeground1,
  },
  track: {
    marginLeft: "2px",
    marginRight: "2px",
    backgroundColor: tokens.colorPaletteYellowBorder1,
    "&:hover": {
      backgroundColor: tokens.colorPaletteYellowBorderActive,
    },
  },
  rail: {
    height: "8px",
    backgroundColor: tokens.colorPaletteRedBorder1,
    "&:hover": {
      backgroundColor: tokens.colorPaletteRedBorderActive,
    },
  },
});

export function CustomSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={100}
      title="Customized slider"
      marks={[
        { value: 10 },
        { value: 25, label: "25" },
        { value: 50, label: <span className={classes.markLabel}>50</span> },
        {
          value: 75,
          label: (
            <div
              style={{
                color: tokens.colorPaletteGreenForeground1,
                fontWeight: "normal",
              }}
            >
              75
            </div>
          ),
        },
        { value: 100 },
      ]}
      thumb={{
        style: { zIndex: 2 },
        className: classes.thumb,
        label: { className: classes.thumbLabel },
      }}
      markLabel={{
        style: { fontWeight: "bold" },
      }}
      mark={{
        style: { backgroundColor: tokens.colorNeutralBackgroundInverted },
        className: classes.mark,
      }}
      rail={{ style: { opacity: 0.8 }, className: classes.rail }}
      track={{ style: { zIndex: 2 }, className: classes.track }}
    />
  );
}

export const CustomSliderExampleAsString = `
import { Slider } from "@axiscommunications/fluent-slider";
import { makeStyles, tokens } from "@fluentui/react-components";

const useCustomizedSliderStyles = makeStyles({
  thumb: {
    backgroundColor: tokens.colorPaletteRedBackground3,
    width: "28px",
    height: "28px",
    "&:hover": {
      backgroundColor: tokens.colorPaletteRedBackground2,
    },
  },
  thumbLabel: {
    backgroundColor: tokens.colorPaletteRedBackground3,
    color: tokens.colorPaletteYellowForeground1,
  },
  mark: {
    height: "8px",
    width: "5px",
  },
  markLabel: {
    color: tokens.colorPaletteRedForeground1,
  },
  track: {
    marginLeft: "2px",
    marginRight: "2px",
    backgroundColor: tokens.colorPaletteYellowBorder1,
    "&:hover": {
      backgroundColor: tokens.colorPaletteYellowBorderActive,
    },
  },
  rail: {
    height: "8px",
    backgroundColor: tokens.colorPaletteRedBorder1,
    "&:hover": {
      backgroundColor: tokens.colorPaletteRedBorderActive,
    },
  },
});

export function CustomSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={100}
      title="Customized slider"
      marks={[
        { value: 10 },
        { value: 25, label: "25" },
        { value: 50, label: <span className={classes.markLabel}>50</span> },
        {
          value: 75,
          label: (
            <div
              style={{
                color: tokens.colorPaletteGreenForeground1,
                fontWeight: "normal",
              }}
            >
              75
            </div>
          ),
        },
        { value: 100 },
      ]}
      thumb={{
        style: { zIndex: 2 },
        className: classes.thumb,
        label: { className: classes.thumbLabel },
      }}
      markLabel={{
        style: { fontWeight: "bold" },
      }}
      mark={{
        style: { backgroundColor: tokens.colorNeutralBackgroundInverted },
        className: classes.mark,
      }}
      rail={{ style: { opacity: 0.8 }, className: classes.rail }}
      track={{ style: { zIndex: 2 }, className: classes.track }}
    />
  );
}
`;
