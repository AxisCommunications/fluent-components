import {
  Caption1,
  DrawerBody,
  DrawerHeader,
  InlineDrawer,
  Link,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { PropsWithChildren, ReactElement } from "react";
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
    ...shorthands.padding(0, "8%", 0, "5%"),
    maxWidth: "1400px",
  },
  header: {
    ...shorthands.padding(
      tokens.spacingVerticalXXL,
      tokens.spacingHorizontalM,
      tokens.spacingVerticalM,
      tokens.spacingHorizontalM
    ),
  },
  headerDescription: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingHorizontalS),
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
    ...shorthands.gap(tokens.spacingVerticalXXL),
    ...shorthands.padding(
      tokens.spacingVerticalL,
      tokens.spacingVerticalL,
      tokens.spacingVerticalXXXL,
      tokens.spacingVerticalL
    ),
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
    width: "200px",
    ...shorthands.border(0),
    backgroundColor: tokens.colorNeutralBackground3,
  },
  navigationBody: {
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.margin(0),
    ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalS),
  },
  navigationLabel: {
    color: tokens.colorNeutralForeground3,
    ...shorthands.padding(tokens.spacingVerticalM, tokens.spacingHorizontalM),
  },
  navigationHeader: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
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
  customHeader?: ReactElement;
  navigation?: ReactElement;
  status?: EStoryStatus[];
};

export function StoryPage({
  title,
  description,
  ghPackage,
  ghUrl,
  navigation,
  children,
  customHeader,
  status = [EStoryStatus.STABLE],
  ...rest
}: PropsWithChildren<TStoryPage>) {
  const { styles, rootStyle } = useStoryPageStyles();
  return (
    <div data-testid={componentId} className={rootStyle} {...rest}>
      <div className={styles.main} data-scroll-container>
        <div className={styles.header}>
          <StoryPageHeader title={title} status={status}>
            <div className={styles.headerDescription}>
              <div className={styles.package}>
                {ghUrl ? (
                  <Link href={ghUrl} className={styles.package}>
                    {ghPackage}
                  </Link>
                ) : (
                  ghPackage
                )}
              </div>
              {description}
            </div>
            {customHeader && (
              <div className={styles.customHeaderSlot}>{customHeader}</div>
            )}
          </StoryPageHeader>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
      {navigation && (
        <InlineDrawer
          className={styles.navigation}
          position={"end"}
          open={true}
        >
          <DrawerHeader className={styles.navigationHeader}>
            <Caption1 className={styles.navigationLabel}>On this page</Caption1>
          </DrawerHeader>
          <DrawerBody className={styles.navigationBody}>
            {navigation}
          </DrawerBody>
        </InlineDrawer>
      )}
    </div>
  );
}
