import React, { PropsWithChildren } from "react";

import {
  Caption2,
  makeStyles,
  Subtitle2,
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

export const StorySectionHeader = ({
  title,
  children,
}: PropsWithChildren<PageHeaderProps>) => {
  const styles = useStyles();
  return (
    <div
      className={styles.root}
    >
      <Subtitle2>
        {title}
        <span className={styles.point}>.</span>
      </Subtitle2>
      <Caption2>{children}</Caption2>
    </div>
  );
};
