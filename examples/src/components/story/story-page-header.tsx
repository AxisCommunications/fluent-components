import React, { PropsWithChildren } from "react";

import {
  Caption1,
  Title2,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { EStoryStatus, StoryStatus } from "./story-status";

type PageHeaderProps = {
  title: string;
  status?: EStoryStatus[];
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyItems: "flex-end",
    flexDirection: "column",
  },
  point: {
    color: tokens.colorBrandBackground,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
      <div className={styles.title}>
        <Title2>
          {title}
          <span className={styles.point}>.</span>
        </Title2>
        {status && <StoryStatus status={status} />}
      </div>
      <Caption1>{children}</Caption1>
    </div>
  );
};
