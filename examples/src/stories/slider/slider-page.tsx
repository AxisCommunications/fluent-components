import { makeStyles } from "@fluentui/react-components";
import React, { useMemo } from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import {
  StoryPageNavigation,
  TStoryNavigationLink,
} from "../../components/story/story-navigation/story-page-navigation";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  CustomSliderExample,
  CustomSliderExampleAsString,
} from "./custom-example";
import {
  DisabledSliderExample,
  DisabledSliderExampleAsString,
} from "./disabled-example";
import {
  WithStepsRangeSliderExample,
  WithStepsRangeSliderExampleAsString,
} from "./range-slider-with-steps-example";
import {
  RegularSliderExample,
  RegularSliderExampleAsString,
} from "./regular-example";
import {
  SmallSliderExample,
  SmallSliderExampleAsString,
} from "./small-example";
import {
  SteppingToMarksSliderExample,
  SteppingToMarksSliderExampleAsString,
} from "./stepping-to-marks-example";
import {
  TransformValueSliderExample,
  TransformValueSliderExampleAsString,
} from "./transform-value-example";
import {
  ExternalButtonsSliderExample,
  ExternalButtonsSliderExampleAsString,
} from "./with-external-buttons-example";
import {
  WithMarkSliderExample,
  WithMarkSliderExampleAsString,
} from "./with-marks-example";
import {
  RangeSliderExample,
  RangeSliderExampleAsString,
} from "./with-range-example";
import {
  WithStepsSliderExample,
  WithStepsSliderExampleAsString,
} from "./with-steps-example";

const useStyles = makeStyles({
  example: {
    maxWidth: "400px",
  },
});

type pageData =
  & { example: JSX.Element; codeString: string }
  & TStoryNavigationLink;

const examples: pageData[] = [
  {
    title: "Default",
    anchor: "RegularSliderExample",
    example: <RegularSliderExample />,
    codeString: RegularSliderExampleAsString,
  },
  {
    title: "Disabled",
    anchor: "DisabledSliderExample",
    example: <DisabledSliderExample />,
    codeString: DisabledSliderExampleAsString,
  },
  {
    title: "Small",
    anchor: "SmallSliderExample",
    example: <SmallSliderExample />,
    codeString: SmallSliderExampleAsString,
  },
  {
    title: "With marks",
    anchor: "WithMarkSliderExample",
    example: <WithMarkSliderExample />,
    codeString: WithMarkSliderExampleAsString,
  },
  {
    title: "With steps",
    anchor: "WithStepsSliderExample",
    example: <WithStepsSliderExample />,
    codeString: WithStepsSliderExampleAsString,
  },
  {
    title: "Stepping to marks",
    anchor: "SteppingToMarksSliderExample",
    example: <SteppingToMarksSliderExample />,
    codeString: SteppingToMarksSliderExampleAsString,
  },
  {
    title: "Transform value",
    anchor: "TransformValueSliderExample",
    example: <TransformValueSliderExample />,
    codeString: TransformValueSliderExampleAsString,
  },
  {
    title: "External buttons",
    anchor: "ExternalButtonsSliderExample",
    example: <ExternalButtonsSliderExample />,
    codeString: ExternalButtonsSliderExampleAsString,
  },
  {
    title: "Custom",
    anchor: "CustomSliderExample",
    example: <CustomSliderExample />,
    codeString: CustomSliderExampleAsString,
  },
  {
    title: "Range slider",
    anchor: "RangeSliderExample",
    example: <RangeSliderExample />,
    codeString: RangeSliderExampleAsString,
  },
  {
    title: "Range slider with steps",
    anchor: "WithStepsRangeSliderExample",
    example: <WithStepsRangeSliderExample />,
    codeString: WithStepsRangeSliderExampleAsString,
  },
];

export const SliderPage = () => {
  const gh = getGhInfoByKey(routes.Slider);
  const styles = useStyles();
  const links = examples.map(({ title, anchor, ...rest }) => ({
    title,
    anchor,
    ...rest,
  }));

  const renderSections = useMemo(
    () =>
      examples.map(({ title, example, codeString, anchor }) => {
        return (
          <StorySection key={anchor} title={title} id={anchor}>
            <div className={styles.example}>
              {example}
            </div>
            <StoryCodeBlockAccordion codeString={codeString} />
          </StorySection>
        );
      }),
    [routes]
  );

  return (
    <StoryPage
      title="Slider"
      description={"An amazing slider"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={<StoryPageNavigation links={links} />}
    >
      {renderSections}
    </StoryPage>
  );
};
