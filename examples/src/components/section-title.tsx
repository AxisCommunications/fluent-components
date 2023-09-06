import React, { PropsWithChildren } from "react";

import {
  makeStyles,
  mergeClasses,
  Text,
  tokens,
} from "@fluentui/react-components";

type SectionTitleProps = {
  readonly title: string;
  readonly className?: string;
  readonly withDot?: boolean;
};

const useStyles = makeStyles({
  root: {
    alignItems: "flex-end",
    display: "flex",
    flexShrink: 0,
    height: "40px",
    width: "100%",
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
    marginLeft: tokens.spacingHorizontalXXXL,
  },
});

export const SectionTitle = ({
  title,
  children,
  withDot = false,
  className,
}: PropsWithChildren<SectionTitleProps>) => {
  const styles = useStyles();

  return (
    <div className={mergeClasses(styles.root, className)}>
      <Text size={400} weight="semibold" className={styles.title}>
        {title}
        {withDot && <span className={styles.point}>.</span>}
      </Text>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
