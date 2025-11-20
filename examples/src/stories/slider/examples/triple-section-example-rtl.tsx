import { Slider } from "@axiscommunications/fluent-slider";
import { makeStyles, tokens } from "@fluentui/react-components";

const useCustomizedSliderStyles = makeStyles({
  mark: {
    height: "16px",
    width: "1px",
    backgroundColor: "white",
  },
  markLabel: {
    color: tokens.colorPaletteRedForeground1,
  },
  track: {
    backgroundColor: "gray",
  },
});

export function TripleSectionSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={60}
      title="Click to change the value"
      marks={[
        {
          value: 20,
          label: "First mark",
          labelEqualActive: true,
        },
        {
          value: 40,
          label: "Next mark",
          labelEqualActive: true,
        },
      ]}
      sectionLabels={[
        { edges: { to: 20 }, label: "Section 1", trackColor: "yellow" },
        {
          edges: { from: 20, to: 40 },
          label: "Section 2",
          trackColor: "orange",
        },
        {
          edges: { from: 40 },
          label: "Section 3",
          trackColor: "red ",
        },
      ]}
      markLabel={{
        style: { fontWeight: "bold" },
      }}
      mark={{
        className: classes.mark,
      }}
      track={{
        className: classes.track,
      }}
      defaultValue={50}
    />
  );
}

export const TripleSectionSliderExampleAsString = `

import { Slider } from "@axiscommunications/fluent-slider";
import { makeStyles, tokens } from "@fluentui/react-components";

const useCustomizedSliderStyles = makeStyles({
  mark: {
    height: "16px",
    width: "1px",
    backgroundColor: "white",
  },
  markLabel: {
    color: tokens.colorPaletteRedForeground1,
  },
  track: {
    backgroundColor: "gray",
  },
});

export function TripleSectionSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={60}
      title="Click to change the value"
      marks={[{
        value: 20,
        label: "First mark",
        activeOnlyOnMatching: true,
      }, {
        value: 40,
        label: "Other mark",
        activeOnlyOnMatching: true,
      }]}
      sectionLabels={[
        { edges: { right: 20 }, label: "Section 1", trackColor: "yellow" },
        {
          edges: { left: 20, right: 40 },
          label: "Section 2",
          trackColor: "orange",
        },
        {
          edges: { left: 40 },
          label: "Section 3",
          trackColor: "red ",
        },
      ]}
      markLabel={{
        style: { fontWeight: "bold" },
      }}
      mark={{
        className: classes.mark,
      }}
      track={{
        className: classes.track,
      }}
      defaultValue={50}
    />
  );
}
`;
