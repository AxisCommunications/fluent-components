import React from "react";

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

const markValue = 45.5;

export function DualSectionSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={100}
      title="Click to set zoom level"
      marks={[
        {
          value: markValue,
          label: "Sweet spot",
          labelEqualActive: true,
        },
      ]}
      sectionLabels={[
        { edges: { to: markValue }, label: "Lossless zoom" },
        {
          edges: { from: markValue },
          label: "Lossy zoom",
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
      defaultValue={33}
    />
  );
}

export const DualSectionSliderExampleAsString = `
import React from "react";

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

const markValue = 45.5;

export function DualSectionSliderExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={0}
      max={100}
      title="Click to set zoom level"
      marks={[{ value: markValue, label: "Sweet spot" }]}
      sectionLabels={[
        { edges: { right: markValue }, label: "Lossless zoom" },
        { edges: { left: markValue }, label: "Lossy zoom" },
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
      defaultValue={33}
    />
  );
}
`;
