import { PropsWithChildren } from "react";

import {
  Body1,
  Title1,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { EStoryStatus, StoryStatus } from "./story-status";

type PageHeaderProps = {
  title: string;
  status?: EStoryStatus[];
};

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalM),
  },
  watermark: {
    position: "absolute",
    top: "-20px",
    right: "16px",
    fontSize: "120px",
    fontWeight: tokens.fontWeightBold,
    lineHeight: "1",
    color: tokens.colorNeutralForeground1,
    opacity: "0.06",
    pointerEvents: "none",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  point: {
    color: tokens.colorBrandBackground,
  },
  title: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
    position: "relative",
  },
  children: {
    color: tokens.colorNeutralForeground3,
    position: "relative",
  },
});

export const StoryPageHeader = ({
  title,
  children,
  status,
}: PropsWithChildren<PageHeaderProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <span className={styles.watermark}>{title}</span>
      <div className={styles.title}>
        <Title1>
          {title}
          <span className={styles.point}>.</span>
        </Title1>
        {status && <StoryStatus status={status} />}
      </div>
      <Body1 className={styles.children}>{children}</Body1>
    </div>
  );
};
