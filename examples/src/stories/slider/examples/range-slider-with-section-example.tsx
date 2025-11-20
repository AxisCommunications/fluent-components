import { RangeSlider } from "@axiscommunications/fluent-slider";
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

export function RangeSliderWithSectionExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <RangeSlider
      min={-40}
      max={300}
      defaultValue={[-10, 37, 69]}
      title="Click to change the value"
      marks={[
        {
          value: 37,
          labelEqualActive: true,
        },
        {
          value: 0,
          label: "Freezing",
          labelEqualActive: true,
        },
        {
          value: 100,
          label: "Boiling",
          labelEqualActive: true,
        },
      ]}
      sectionLabels={[
        { edges: { to: 0 }, label: "Solid", trackColor: "cyan" },
        {
          edges: { from: 0, to: 100 },
          label: "Liquid",
          trackColor: "lightblue",
        },
        {
          edges: { from: 100 },
          label: "Gas",
          trackColor: "white",
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
    />
  );
}

export const RangeSliderWithSectionExampleAsString = `
import { RangeSlider } from "@axiscommunications/fluent-slider";
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

export function RangeSliderWithSectionExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <RangeSlider
      min={-40}
      max={300}
      defaultValue={[-10, 120]}
      title="Click to change the value"
      marks={[
        {
          value: 37,
          labelEqualActive: true,
        },
        {
          value: 0,
          labelEqualActive: true,
        },
        {
          value: 100,
          labelEqualActive: true,
        },
      ]}
      sectionLabels={[
        { edges: { to: 0 }, label: "Solid", trackColor: "cyan" },
        {
          edges: { from: 0, to: 100 },
          label: "Liquid",
          trackColor: "lightblue",
        },
        {
          edges: { from: 100 },
          label: "Gas",
          trackColor: "white",
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
    />
  );
}`;
