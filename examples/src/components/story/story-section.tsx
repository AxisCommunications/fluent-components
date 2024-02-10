import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import React, { PropsWithChildren } from "react";
import { StorySectionHeader } from "./story-section-header";

const componentId = "story-section";
export const storySectionClassNames = {
  root: componentId,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  body: {
    backgroundImage:
      `linear-gradient(90deg,${tokens.colorNeutralBackground1}0%,${tokens.colorNeutralBackground3}95%)`,
    display: "flex",
    flexDirection: "column",
    ...shorthands.border("1px", "solid", tokens.colorNeutralBackground1),
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    ...shorthands.padding(tokens.spacingHorizontalM),
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
});

export function useStorySectionStyles() {
  const styles = useStyles();
  const rootStyle = mergeClasses(storySectionClassNames.root, styles.root);
  return { styles, rootStyle };
}

type TStorySection = {
  title?: string;
  description?: string;
} & JSX.IntrinsicElements["div"];

export function StorySection(
  { title, description, children, ...rest }: PropsWithChildren<TStorySection>
) {
  const { styles, rootStyle } = useStorySectionStyles();

  return (
    <div data-testid={componentId} className={rootStyle} {...rest}>
      {title && (
        <StorySectionHeader title={title}>
          {description}
        </StorySectionHeader>
      )}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}
