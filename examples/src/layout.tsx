import React from "react";

import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";

type LayoutProps = {
  readonly header: JSX.Element;
  readonly navigation: JSX.Element;
  readonly content: JSX.Element;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground4,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  },
  body: {
    ...shorthands.overflow("hidden"),
    display: "flex",
    flexGrow: 1,
    width: "100vw",
  },
  content: {
    ...shorthands.border(
      tokens.strokeWidthThin,
      "solid",
      tokens.colorNeutralShadowKeyLighter
    ),
    ...shorthands.borderRadius(tokens.borderRadiusXLarge, 0, 0, 0),
    ...shorthands.overflow("hidden"),
    backgroundColor: tokens.colorNeutralBackground2,
    boxShadow: tokens.shadow4,
    width: "100%",
  },
});

export const Layout = ({ header, navigation, content }: LayoutProps) => {
  const styles = useStyles();

  return (
    <div className={mergeClasses("layout-root", styles.root)}>
      {header}
      <div className={mergeClasses("layout-body", styles.body)}>
        {navigation}
        <div className={mergeClasses("layout-content", styles.content)}>
          {content}
        </div>
      </div>
    </div>
  );
};
