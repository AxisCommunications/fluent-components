import React from "react";
import { StoryCodeBlockAccordion } from "../../components/story/story-code-block-accordion";
import { StoryPage } from "../../components/story/story-page";
import { StorySection } from "../../components/story/story-section";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  PasswordInputExample,
  PasswordInputExampleAsString,
} from "./password-input-example";

export const PasswordInputPage = () => {
  const gh = getGhInfoByKey(routes.PasswordInput);

  return (
    <StoryPage
      title="Password input"
      description={"Input field witch use case is for hiding sensitive information"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
    >
      <StorySection title="Default">
        <div>
          <PasswordInputExample />
        </div>
        <StoryCodeBlockAccordion codeString={PasswordInputExampleAsString} />
      </StorySection>
    </StoryPage>
  );
};
