import {
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React, { PropsWithChildren } from "react";
import { StoryPageHeader } from "./story-page-header";

const componentId = "story-page";
export const storyPageClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    ...shorthands.padding(tokens.spacingHorizontalM, tokens.spacingVerticalL),
  },
  headerDescription: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingHorizontalXXL),
  },
  package: {
    color: tokens.colorBrandBackground,
  },
  body: {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.padding(tokens.spacingVerticalXXS, tokens.spacingVerticalL),
  },
});

export function useStoryPageStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(storyPageClassNames.root, styles.root);
  return { styles, rootStyle };
}

type TStoryPage = {
  title: string;
  ghPackage: string;
  ghUrl?: string;
  description?: string;
};

export function StoryPage(
  { title, description, ghPackage, ghUrl, children, ...rest }:
    PropsWithChildren<TStoryPage>
) {
  const { styles, rootStyle } = useStoryPageStyles();
  return (
    <div data-testid={componentId} className={rootStyle} {...rest}>
      <div className={styles.header}>
        <StoryPageHeader title={title}>
          <div className={styles.headerDescription}>
            <div className={styles.package}>
              {ghUrl
                ? (
                  <Link href={ghUrl} className={styles.package}>
                    {ghPackage}
                  </Link>
                )
                : ghPackage}
            </div>
            {description}
          </div>
        </StoryPageHeader>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}
