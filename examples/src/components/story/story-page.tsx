import {
  DrawerBody,
  DrawerHeader,
  InlineDrawer,
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  Subtitle2,
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
    position: "relative",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.padding(tokens.spacingVerticalXXS, tokens.spacingVerticalL),
  },
  main: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  navigation: {
    height: "100%",
    width: "250px",
  },
  navigationBody: {
    backgroundImage:
      `linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to top, ${tokens.colorNeutralBackground3}, ${tokens.colorNeutralBackground3}),
    linear-gradient(to bottom, ${tokens.colorNeutralStroke1}, ${tokens.colorNeutralBackground3})`,
    backgroundColor: tokens.colorNeutralBackground3,
    backgroundSize: "100% 2px, 100% 2px, 94% 1px, 100% 0px",
    ...shorthands.margin(0),
    ...shorthands.padding(
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS,
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS
    ),
    ":first-child": {
      paddingTop: "unset",
    },
  },
  navigationHeader: {
    ...shorthands.margin(0),
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingVerticalS,
      tokens.spacingVerticalXS,
      tokens.spacingVerticalS
    ),
    backgroundColor: tokens.colorNeutralBackground3,
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
  navigation?: JSX.Element;
};

export function StoryPage(
  { title, description, ghPackage, ghUrl, navigation, children, ...rest }:
    PropsWithChildren<TStoryPage>
) {
  const { styles, rootStyle } = useStoryPageStyles();
  return (
    <div data-testid={componentId} className={rootStyle} {...rest}>
      <div className={styles.main}>
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
      {navigation && (
        <InlineDrawer
          className={styles.navigation}
          position={"end"}
          open={true}
        >
          <DrawerHeader className={styles.navigationHeader}>
            <Subtitle2>
              On this page
            </Subtitle2>
          </DrawerHeader>
          <DrawerBody className={styles.navigationBody}>
            {navigation}
          </DrawerBody>
        </InlineDrawer>
      )}
    </div>
  );
}
