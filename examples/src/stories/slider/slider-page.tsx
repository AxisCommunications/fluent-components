import { makeStyles } from "@fluentui/react-components";
import { StoryPage } from "../../components/story/story-page";
import {
  pageData,
  useExampleWithNavigation,
} from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  CustomSliderExample,
  CustomSliderExampleAsString,
} from "./examples/custom-example";
import {
  DisabledSliderExample,
  DisabledSliderExampleAsString,
} from "./examples/disabled-example";
import {
  WithStepsRangeSliderExample,
  WithStepsRangeSliderExampleAsString,
} from "./examples/range-slider-with-steps-example";
import {
  WithStepsAndMarksRangeSliderExample,
  WithStepsAndMarksRangeSliderExampleAsString,
} from "./examples/range-slider-with-streps-and-marks-example";
import {
  RegularSliderExample,
  RegularSliderExampleAsString,
} from "./examples/regular-example";
import {
  SmallSliderExample,
  SmallSliderExampleAsString,
} from "./examples/small-example";
import {
  SteppingToMarksSliderExample,
  SteppingToMarksSliderExampleAsString,
} from "./examples/stepping-to-marks-example";
import {
  TransformValueSliderExample,
  TransformValueSliderExampleAsString,
} from "./examples/transform-value-example";
import {
  ExternalButtonsSliderExample,
  ExternalButtonsSliderExampleAsString,
} from "./examples/with-external-buttons-example";
import {
  WithMarkSliderExample,
  WithMarkSliderExampleAsString,
} from "./examples/with-marks-example";
import {
  RangeSliderExample,
  RangeSliderExampleAsString,
} from "./examples/with-range-example";
import {
  WithStepsSliderExample,
  WithStepsSliderExampleAsString,
} from "./examples/with-steps-example";

import {
  DualSectionSliderExample,
  DualSectionSliderExampleAsString,
} from "./examples/dual-section-example";
import {
  RangeSliderWithSectionExample,
  RangeSliderWithSectionExampleAsString,
} from "./examples/range-slider-with-section-example";
import {
  TripleSectionSliderExample,
  TripleSectionSliderExampleAsString,
} from "./examples/triple-section-example";
import {
  TripleSectionSliderNoZeroStartExample,
  TripleSectionSliderNoZeroStartExampleAsString,
} from "./examples/triple-section-no-zero-start-example";

const useStyles = makeStyles({
  example: {
    maxWidth: "auto",
  },
});

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
    title: "With steps and marks",
    anchor: "WithStepsAndMarksSliderExample",
    example: <WithStepsAndMarksRangeSliderExample />,
    codeString: WithStepsAndMarksRangeSliderExampleAsString,
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

  {
    title: "Dual section",
    anchor: "DualSectionSliderExample",
    example: <DualSectionSliderExample />,
    codeString: DualSectionSliderExampleAsString,
  },
  {
    title: "Triple section",
    anchor: "TripleSectionSliderExample",
    example: <TripleSectionSliderExample />,
    codeString: TripleSectionSliderExampleAsString,
  },
  {
    title: "Triple section with negative section",
    anchor: "TripleSectionSliderNoZeroStartExample",
    example: <TripleSectionSliderNoZeroStartExample />,
    codeString: TripleSectionSliderNoZeroStartExampleAsString,
  },
  {
    title: "Range slider with section",
    anchor: "RangeSliderWithSliderExample",
    example: <RangeSliderWithSectionExample />,
    codeString: RangeSliderWithSectionExampleAsString,
  },
];

export const SliderPage = () => {
  const gh = getGhInfoByKey(routes.Slider);
  const styles = useStyles();

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples.map((d) => {
      return {
        ...d,
        example: <div className={styles.example}>{d.example}</div>,
      };
    })
  );

  return (
    <StoryPage
      title="Slider"
      description={"An amazing slider"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
