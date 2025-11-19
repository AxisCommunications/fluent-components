import { PropsWithChildren } from "react";

import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

type SimpleHeaderProps = {
  readonly title?: string;
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
  content: {
    width: "100%",
  },
});

export const SimpleHeader = ({
  children,
  borderBottom = true,
  className,
}: PropsWithChildren<SimpleHeaderProps>) => {
  const styles = useStyles();

  return (
    <div
      className={mergeClasses(
        "simple-header",
        styles.root,
        borderBottom && styles.borderBottom,
        className
      )}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
