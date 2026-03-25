import { PropsWithChildren } from "react";

import {
  Caption2,
  Subtitle2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";

type PageHeaderProps = {
  title: string;
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalXXS),
    ...shorthands.borderLeft("3px", "solid", tokens.colorBrandBackground),
    ...shorthands.padding(
      tokens.spacingVerticalXXS,
      0,
      tokens.spacingVerticalXXS,
      tokens.spacingHorizontalM
    ),
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
    <div className={styles.root}>
      <Subtitle2>
        {title}
        <span className={styles.point}>.</span>
      </Subtitle2>
      {children && <Caption2>{children}</Caption2>}
    </div>
  );
};
