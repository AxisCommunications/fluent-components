import React, { PropsWithChildren } from "react";

import {
  Caption1,
  makeStyles,
  Title2,
  tokens,
} from "@fluentui/react-components";

type PageHeaderProps = {
  title: string;
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
});

export const StoryPageHeader = ({
  title,
  children,
}: PropsWithChildren<PageHeaderProps>) => {
  const styles = useStyles();

  return (
    <div
      className={styles.root}
    >
      <Title2>
        {title}
        <span className={styles.point}>.</span>
      </Title2>
      <Caption1>{children}</Caption1>
    </div>
  );
};
