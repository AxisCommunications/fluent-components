import {
  Divider,
  DrawerBody,
  DrawerHeader,
  InlineDrawer,
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React, { PropsWithChildren } from "react";
import { StoryPageHeader } from "./story-page-header";
import { EStoryStatus } from "./story-status";

const componentId = "story-page";
export const storyPageClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: tokens.colorNeutralBackground3,
    display: "grid",
    gridTemplateColumns: "1fr min-content",
    ...shorthands.padding(0, "15%", 0, "5%"),
  },
  header: {
    ...shorthands.padding(
      tokens.spacingHorizontalM,
      tokens.spacingHorizontalM,
      tokens.spacingHorizontalXXS,
      tokens.spacingHorizontalM
    ),
  },
  headerDescription: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingHorizontalL),
  },
  package: {
    color: tokens.colorNeutralForeground3,
  },
  body: {
    overflowY: "auto",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.padding(tokens.spacingVerticalXXS, tokens.spacingVerticalL),
  },
  main: {
    overflowY: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  navigation: {
    height: "100%",
    width: "220px",
    ...shorthands.border(0),
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
  customHeaderSlot: {
    paddingTop: tokens.spacingHorizontalXL,
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
  customHeader?: JSX.Element;
  navigation?: JSX.Element;
  status?: EStoryStatus[];
};

export function StoryPage(
  {
    title,
    description,
    ghPackage,
    ghUrl,
    navigation,
    children,
    customHeader,
    status = [],
    ...rest
  }: PropsWithChildren<TStoryPage>
) {
  const { styles, rootStyle } = useStoryPageStyles();
  return (
    <div data-testid={componentId} className={rootStyle} {...rest}>
      <div className={styles.main}>
        <div className={styles.header}>
          <StoryPageHeader title={title} status={status}>
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
            {customHeader && (
              <div className={styles.customHeaderSlot}>
                {customHeader}
              </div>
            )}
          </StoryPageHeader>
        </div>
        <Divider />
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
          <DrawerHeader className={styles.navigationHeader} />
          <DrawerBody className={styles.navigationBody}>
            {navigation}
          </DrawerBody>
        </InlineDrawer>
      )}
    </div>
  );
}
