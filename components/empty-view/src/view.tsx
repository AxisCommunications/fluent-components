import { PropsWithChildren } from "react";

import {
  Body1,
  Body1Strong,
  Body2,
  Caption1,
  Subtitle2,
  Title3,
} from "@fluentui/react-components";

import { useMediaQuery } from "@axiscommunications/fluent-hooks";

import { Illustration } from "./constants.js";
import { useContainerStyle, useStyles } from "./styles.js";
import {
  ContentProps,
  EmptyViewProps,
  HtmlDivAttributesRestProps,
} from "./types.js";

function ContainerSpacious({
  children,
  className,
  ...rest
}: PropsWithChildren<HtmlDivAttributesRestProps>) {
  const styles = useStyles();
  const containerStyle = useContainerStyle({ className });

  return (
    <div className={containerStyle} {...rest}>
      <div className={styles.spacer} />
      {children}
      <div className={styles.spacer} />
      <div className={styles.spacer} />
    </div>
  );
}

function ContainerCompact({
  children,
  className,
  ...rest
}: PropsWithChildren<HtmlDivAttributesRestProps>) {
  const styles = useStyles();
  const containerStyle = useContainerStyle({ className });

  return (
    <div className={containerStyle} {...rest}>
      <div className={styles.spacer} />
      {children}
      <div className={styles.spacer} />
    </div>
  );
}

function ContainerTop({
  children,
  className,
  ...rest
}: PropsWithChildren<HtmlDivAttributesRestProps>) {
  const styles = useStyles();
  const containerStyle = useContainerStyle({ className });

  return (
    <div className={containerStyle} {...rest}>
      <div className={styles.fixedSpacer} />
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

function ContentExtraSmall({
  title,
  body,
}: Omit<ContentProps, "illustration">) {
  const screenStyles = useStyles();
  return (
    <>
      <Body1Strong className={screenStyles.title}>{title}</Body1Strong>
      <Caption1 className={screenStyles.text}>{body}</Caption1>
    </>
  );
}

export function MainEmptyView({
  after,
  illustration,
  title,
  children,
  ...rest
}: EmptyViewProps) {
  const screenStyles = useStyles();
  const media = useMediaQuery();
  return (
    <ContainerSpacious {...rest}>
      {media === "small" ? (
        <ContentMedium
          illustration={illustration}
          title={title}
          body={children}
        />
      ) : (
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

export function PanelEmptyView({
  after,
  illustration,
  title,
  children,
  ...rest
}: EmptyViewProps) {
  const screenStyles = useStyles();
  return (
    <ContainerTop {...rest}>
      <ContentMedium
        illustration={illustration}
        title={title}
        body={children}
      />
      <div className={screenStyles.after}>{after}</div>
    </ContainerTop>
  );
}

export function SubmenuEmptyView({
  illustration,
  title,
  children,
  ...rest
}: Omit<EmptyViewProps, "after">) {
  return (
    <ContainerTop {...rest}>
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
export function DialogEmptyView({
  after,
  title,
  children,
  ...rest
}: Omit<EmptyViewProps, "illustration">) {
  const screenStyles = useStyles();
  return (
    <ContainerCompact {...rest}>
      <ContentExtraSmall title={title} body={children} />
      <div className={screenStyles.after}>{after}</div>
    </ContainerCompact>
  );
}
