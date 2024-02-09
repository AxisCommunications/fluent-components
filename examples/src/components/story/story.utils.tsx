import { StoryCodeBlockAccordion } from "./story-code-block-accordion";
import {
  StoryPageNavigation,
  TStoryNavigationLink,
} from "./story-navigation/story-page-navigation";
import { StorySection } from "./story-section";
import React, { useMemo } from "react";

export type pageData = {
  example: JSX.Element;
  codeString: string;
} & TStoryNavigationLink;

export function useExampleWithNavigation(examples: pageData[]) {
  const links = examples.map(({ title, anchor }) => ({
    title,
    anchor,
  }));

  const renderSections = useMemo(
    () =>
      examples.map(({ title, example, codeString, anchor }) => {
        return (
          <StorySection key={anchor} title={title} id={anchor}>
            {example}
            <StoryCodeBlockAccordion codeString={codeString} />
          </StorySection>
        );
      }),
    []
  );

  const renderNavigation = useMemo(
    () => <StoryPageNavigation links={links} />,
    []
  );

  return { renderSections, renderNavigation };
}
