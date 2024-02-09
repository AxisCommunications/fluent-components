import React from "react";
import { makeStyles } from "@fluentui/react-components";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
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
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";

const useStyles = makeStyles({
  example: {
    maxWidth: "400px",
  },
});

export const SliderPage = () => {
  const gh = getGhInfoByKey(routes.Slider);
  const styles = useStyles();

  return (
    <StoryPage
      title="Slider"
      description={"An amazing slider"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
    >
      <StorySection title="Default">
        <div className={styles.example}>
          <RegularSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={RegularSliderExampleAsString} />
      </StorySection>
      <StorySection title="Small">
        <div className={styles.example}>
          <SmallSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={SmallSliderExampleAsString} />
      </StorySection>
      <StorySection title="With marks">
        <div className={styles.example}>
          <WithMarkSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={WithMarkSliderExampleAsString} />
      </StorySection>
      <StorySection title="With steps">
        <div className={styles.example}>
          <WithStepsSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={WithStepsSliderExampleAsString} />
      </StorySection>
      <StorySection title="Stepping to marks">
        <div className={styles.example}>
          <SteppingToMarksSliderExample />
        </div>
        <StoryCodeBlockAccordion
          codeString={SteppingToMarksSliderExampleAsString}
        />
      </StorySection>
      <StorySection title="Transform value">
        <div className={styles.example}>
          <TransformValueSliderExample />
        </div>
        <StoryCodeBlockAccordion
          codeString={TransformValueSliderExampleAsString}
        />
      </StorySection>
      <StorySection title="Range slider">
        <div className={styles.example}>
          <RangeSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={RangeSliderExampleAsString} />
      </StorySection>
      <StorySection title="Range slider with steps">
        <div className={styles.example}>
          <WithStepsRangeSliderExample />
        </div>
        <StoryCodeBlockAccordion
          codeString={WithStepsRangeSliderExampleAsString}
        />
      </StorySection>
      <StorySection title="Disabled">
        <div className={styles.example}>
          <DisabledSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={DisabledSliderExampleAsString} />
      </StorySection>
      <StorySection title="External buttons">
        <div className={styles.example}>
          <ExternalButtonsSliderExample />
        </div>
        <StoryCodeBlockAccordion
          codeString={ExternalButtonsSliderExampleAsString}
        />
      </StorySection>
      <StorySection title="Custom">
        <div className={styles.example}>
          <CustomSliderExample />
        </div>
        <StoryCodeBlockAccordion codeString={CustomSliderExampleAsString} />
      </StorySection>
    </StoryPage>
  );
};
