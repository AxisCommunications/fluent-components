import React, { PropsWithChildren } from "react";

import {
  Body1,
  Body1Strong,
  Body2,
  Caption1,
  Subtitle2,
  Title3,
} from "@fluentui/react-components";

import { useMediaQuery } from "@axiscommunications/fluent-hooks";

import { useStyles } from "./styles";
import { ContentProps, EmptyViewProps } from "./types";
import { Illustration } from "./constants";

function ContainerSpacious({ children }: PropsWithChildren) {
  const screenStyles = useStyles();
  return (
    <div className={screenStyles.container}>
      <div className={screenStyles.spacer} />
      {children}
      <div className={screenStyles.spacer} />
      <div className={screenStyles.spacer} />
    </div>
  );
}

function ContainerCompact({ children }: PropsWithChildren) {
  const screenStyles = useStyles();
  return (
    <div className={screenStyles.container}>
      <div className={screenStyles.spacer} />
      {children}
      <div className={screenStyles.spacer} />
    </div>
  );
}

function ContainerTop({ children }: PropsWithChildren) {
  const screenStyles = useStyles();
  return (
    <div className={screenStyles.container}>
      <div className={screenStyles.fixedSpacer} />
      {children}
    </div>
  );
}

function ContentLarge({ body, illustration, title }: ContentProps) {
  const screenStyles = useStyles();
  const IllustrationComponent = Illustration[illustration];
  return (
    <>
      <IllustrationComponent className={screenStyles.illustrationLarge} />
      <Title3 className={screenStyles.title}>{title}</Title3>
      <Body2 className={screenStyles.text}>{body}</Body2>
    </>
  );
}

function ContentMedium({ body, illustration, title }: ContentProps) {
  const screenStyles = useStyles();
  const IllustrationComponent = Illustration[illustration];
  return (
    <>
      <IllustrationComponent className={screenStyles.illustrationMedium} />
      <Subtitle2 className={screenStyles.title}>{title}</Subtitle2>
      <Body1 className={screenStyles.text}>{body}</Body1>
    </>
  );
}

function ContentSmall({ body, illustration, title }: ContentProps) {
  const screenStyles = useStyles();
  const IllustrationComponent = Illustration[illustration];
  return (
    <>
      <IllustrationComponent className={screenStyles.illustrationSmall} />
      <Subtitle2 className={screenStyles.title}>{title}</Subtitle2>
      <Body1 className={screenStyles.text}>{body}</Body1>
    </>
  );
}

function ContentExtraSmall(
  { title, body }: Omit<ContentProps, "illustration">
) {
  const screenStyles = useStyles();
  return (
    <>
      <Body1Strong className={screenStyles.title}>{title}</Body1Strong>
      <Caption1 className={screenStyles.text}>{body}</Caption1>
    </>
  );
}

export function MainEmptyView(
  { after, illustration, title, children }: EmptyViewProps
) {
  const screenStyles = useStyles();
  const media = useMediaQuery();
  return (
    <ContainerSpacious>
      {media === "small"
        ? (
          <ContentMedium
            illustration={illustration}
            title={title}
            body={children}
          />
        )
        : (
          <ContentLarge
            illustration={illustration}
            title={title}
            body={children}
          />
        )}
      <div className={screenStyles.after}>{after}</div>
    </ContainerSpacious>
  );
}

export function PanelEmptyView(
  { after, illustration, title, children }: EmptyViewProps
) {
  const screenStyles = useStyles();
  return (
    <ContainerTop>
      <ContentMedium
        illustration={illustration}
        title={title}
        body={children}
      />
      <div className={screenStyles.after}>{after}</div>
    </ContainerTop>
  );
}

export function SubmenuEmptyView(
  { illustration, title, children }: Omit<EmptyViewProps, "after">
) {
  return (
    <ContainerTop>
      <ContentSmall illustration={illustration} title={title} body={children} />
    </ContainerTop>
  );
}

/**
 * Note: Your dialog content might need a wrapper that has a fixed height.
 * Since both DialogContent and DialogEmptyView don't have it.
 *
 * Example:
 * ```ts
 * <DialogContent>
 *   <div style={{ height: '240px' }}>
 *     <DialogEmptyView title="No roles">You haven’t created any roles yet.</DialogEmptyView>
 *   </div>
 * </DialogContent>
 * ```
 */
export function DialogEmptyView(
  { after, title, children }: Omit<EmptyViewProps, "illustration">
) {
  const screenStyles = useStyles();
  return (
    <ContainerCompact>
      <ContentExtraSmall title={title} body={children} />
      <div className={screenStyles.after}>{after}</div>
    </ContainerCompact>
  );
}
