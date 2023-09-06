import React, { useCallback, useId, useState } from "react";

import {
  RangeSlider,
  RangeSliderProps,
  Slider,
  SliderOnChangeData,
  SliderProps,
} from "@axiscommunications/fluent-slider";
import {
  Button,
  Label,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { useLayoutStyles, useScrollPageStyle } from "../styles/page";
import { PageHeader } from "../components/page-header";

const useSliderPageStyles = makeStyles({
  container: {
    paddingBottom: "120px",
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: tokens.spacingHorizontalM,
    maxWidth: "400px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: tokens.spacingVerticalS,
  },
});

type DemoSliderProps = SliderProps & {
  title: string;
};

const DemoSlider = (props: DemoSliderProps) => {
  const classes = useSliderPageStyles();
  const { title, ...sliderProps } = props;
  const id = useId();

  return (
    <div className={classes.sliderContainer}>
      <Label htmlFor={id}>{title}</Label>
      <Slider {...sliderProps} id={id} />
    </div>
  );
};

type DemoRangeSliderProps = RangeSliderProps & {
  title: string;
};

const DemoRangeSlider = (props: DemoRangeSliderProps) => {
  const classes = useSliderPageStyles();
  const { title, ...sliderProps } = props;
  const id = useId();

  return (
    <div className={classes.sliderContainer}>
      <Label htmlFor={id}>{title}</Label>
      <RangeSlider {...sliderProps} id={id} />
    </div>
  );
};

const RegularSlider = () => {
  return <DemoSlider title={"Slider"} min={0} max={100} defaultValue={50} />;
};

const SliderWithMarks = () => {
  return (
    <DemoSlider
      title={"Slider with marks"}
      min={0}
      max={100}
      defaultValue={50}
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
    />
  );
};

const SliderSteppingToMarks = () => {
  return (
    <DemoSlider
      title={"Slider stepping to marks"}
      min={0}
      max={100}
      defaultValue={50}
      step="marks"
      marks={[
        { value: 25 },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
    />
  );
};

const TransformedValueSlider = () => {
  return (
    <DemoSlider
      title={"Slider with transformed value"}
      min={0}
      max={100}
      valueLabelTransform={(value) => (value < 100 ? value * 2 : "∞")}
      defaultValue={50}
    />
  );
};

const DisabledSlider = () => {
  return (
    <DemoSlider
      title={"Slider (disabled)"}
      min={0}
      max={100}
      defaultValue={50}
      disabled
    />
  );
};

const SliderWithRange = () => {
  return (
    <DemoRangeSlider
      title="Range Slider"
      min={0}
      max={100}
      defaultValue={[25, 75]}
      marks={[
        { value: 20, label: "20" },
        { value: 40, label: "40" },
        { value: 60 },
        { value: 80, label: "80" },
        { value: 100, label: "-" },
      ]}
    />
  );
};

const SliderWithSteps = () => {
  return (
    <DemoSlider
      min={0}
      max={100}
      title="Slider with Steps"
      defaultValue={50}
      marks={true}
      step={10}
    />
  );
};

const RangeSliderWithSteps = () => {
  return (
    <DemoRangeSlider
      min={0}
      max={100}
      title="Range Slider with steps"
      defaultValue={[25, 75]}
      marks={true}
      step={25}
    />
  );
};

const SliderSmall = () => {
  return <DemoSlider min={0} max={100} title={"Slider (small)"} size="small" />;
};

const SliderWithExternalButtons = () => {
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
  const id = useId();

  return (
    <div className={pageClasses.sliderContainer}>
      <Label htmlFor={id}>Slider with external buttons</Label>
      <Slider min={0} max={100} value={value} onChange={onChange} id={id} />
      <div className={pageClasses.buttonContainer}>
        <Button onClick={onClick(10)}>10</Button>
        <Button onClick={onClick(50)}>50</Button>
        <Button onClick={onClick(90)}>90</Button>
      </div>
    </div>
  );
};

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

const CustomizedSlider = () => {
  const classes = useCustomizedSliderStyles();
  return (
    <DemoSlider
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
};

export const SliderPage = () => {
  const scrollPageStyle = useScrollPageStyle();
  const layoutStyles = useLayoutStyles();
  const classes = useSliderPageStyles();

  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Slider" />
      <div
        className={mergeClasses(
          "content",
          layoutStyles.content,
          layoutStyles.sections,
          scrollPageStyle,
          classes.container
        )}
      >
        <RegularSlider />
        <SliderSmall />
        <SliderWithMarks />
        <SliderWithSteps />
        <SliderSteppingToMarks />
        <TransformedValueSlider />
        <SliderWithRange />
        <RangeSliderWithSteps />
        <DisabledSlider />
        <SliderWithExternalButtons />
        <CustomizedSlider />
      </div>
    </div>
  );
};
