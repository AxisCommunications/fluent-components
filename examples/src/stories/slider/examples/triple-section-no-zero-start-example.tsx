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

export function TripleSectionSliderNoZeroStartExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={-40}
      max={300}
      defaultValue={0}
      title="Click to change the value"
      marks={[
        {
          value: 37,
          // label: "Body temperature",
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
}

export const TripleSectionSliderNoZeroStartExampleAsString = `
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

export function TripleSectionSliderNoZeroStartExample() {
  const classes = useCustomizedSliderStyles();
  return (
    <Slider
      min={-40}
      max={300}
      defaultValue={0}
      title="Click to change the value"
      marks={[
        {
          value: 37,
          // label: "Body temperature",
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
