import { Slider, SliderOnChangeData } from "@axiscommunications/fluent-slider";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import React, { useCallback, useState } from "react";

const useSliderPageStyles = makeStyles({
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: tokens.spacingHorizontalM,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: tokens.spacingVerticalS,
  },
});

export function ExternalButtonsSliderExample() {
  const [value, setValue] = useState(50);

  const onChange = useCallback((data: SliderOnChangeData) => {
    setValue(data.value);
  }, []);

  const onClick = useCallback(
    (value: number) => () => {
      setValue(value);
    },
    []
  );

  const pageClasses = useSliderPageStyles();

  return (
    <div className={pageClasses.sliderContainer}>
      <Slider min={0} max={100} value={value} onChange={onChange} />
      <div className={pageClasses.buttonContainer}>
        <Button onClick={onClick(10)}>10</Button>
        <Button onClick={onClick(50)}>50</Button>
        <Button onClick={onClick(90)}>90</Button>
      </div>
    </div>
  );
}

export const ExternalButtonsSliderExampleAsString = `
import { Slider, SliderOnChangeData } from "@axiscommunications/fluent-slider";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import React, { useCallback, useState } from "react";

const useSliderPageStyles = makeStyles({
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: tokens.spacingHorizontalM,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: tokens.spacingVerticalS,
  },
});

export function ExternalButtonsSliderExample() {
  const [value, setValue] = useState(50);

  const onChange = useCallback((data: SliderOnChangeData) => {
    setValue(data.value);
  }, []);

  const onClick = useCallback(
    (value: number) => () => {
      setValue(value);
    },
    []
  );

  const pageClasses = useSliderPageStyles();

  return (
    <div className={pageClasses.sliderContainer}>
      <Slider min={0} max={100} value={value} onChange={onChange} />
      <div className={pageClasses.buttonContainer}>
        <Button onClick={onClick(10)}>10</Button>
        <Button onClick={onClick(50)}>50</Button>
        <Button onClick={onClick(90)}>90</Button>
      </div>
    </div>
  );
}
`;
