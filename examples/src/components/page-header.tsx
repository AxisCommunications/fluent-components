import React, { PropsWithChildren } from "react";

import {
  makeStyles,
  mergeClasses,
  shorthands,
  Text,
  tokens,
} from "@fluentui/react-components";

type PageHeaderProps = {
  readonly title: string;
  readonly borderBottom?: boolean;
  readonly className?: string;
};

const useStyles = makeStyles({
  root: {
    alignItems: "flex-end",
    display: "flex",
    flexShrink: 0,
    minHeight: "40px",
    width: "100%",
  },
  borderBottom: {
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke3),
  },
  title: {
    flexShrink: 0,
    alignSelf: "center",
  },
  point: {
    color: tokens.colorBrandBackground,
  },
  content: {
    width: "100%",
  },
});

export const PageHeader = ({
  title,
  borderBottom = true,
  children,
  className,
}: PropsWithChildren<PageHeaderProps>) => {
  const styles = useStyles();

  return (
    <div
      className={mergeClasses(
        "page-header",
        styles.root,
        borderBottom && styles.borderBottom,
        className
      )}
    >
      {title && (
        <Text size={500} weight="semibold" className={styles.title}>
          {title}
          <span className={styles.point}>.</span>
        </Text>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
