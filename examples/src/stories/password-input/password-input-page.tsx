import { makeStyles } from "@fluentui/react-components";
import { pageData } from "examples/src/components/story/story.utils";
import React from "react";
import { StoryPage } from "../../components/story/story-page";
import { useExampleWithNavigation } from "../../components/story/story.utils";
import { getGhInfoByKey } from "../../routing/route-map";
import { routes } from "../../routing/routes";
import {
  PasswordInputExample,
  PasswordInputExampleAsString,
} from "./password-input-example";

const useStyles = makeStyles({
  example: {
    maxWidth: "400px",
  },
});

const examples: pageData[] = [
  {
    title: "Password input",
    anchor: "PasswordInputExample",
    example: <PasswordInputExample />,
    codeString: PasswordInputExampleAsString,
  },
];

export const PasswordInputPage = () => {
  const gh = getGhInfoByKey(routes.PasswordInput);
  const styles = useStyles();

  const { renderSections, renderNavigation } = useExampleWithNavigation(
    examples.map(d => {
      return {
        ...d,
        example: (
          <div className={styles.example}>
            {d.example}
          </div>
        ),
      };
    })
  );

  return (
    <StoryPage
      title="Password input"
      description={"Input field witch use case is for hiding sensitive information"}
      ghUrl={gh.url}
      ghPackage={gh.packageName}
      navigation={renderNavigation}
    >
      {renderSections}
    </StoryPage>
  );
};
