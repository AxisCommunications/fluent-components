import { ReactElement } from "react";

import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

type LayoutProps = {
  readonly header: ReactElement;
  readonly navigation: ReactElement;
  readonly content: ReactElement;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground4,
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    gridTemplateRows: "min-content 1fr",
    gridTemplateAreas: `
    'header header'
    'navigation outlet'`,
    width: "100vw",
    height: "100vh",
    ...shorthands.overflow("hidden"),
  },
  header: {
    ...shorthands.gridArea("header"),
  },
  navigation: {
    ...shorthands.gridArea("navigation"),
  },
  outlet: {
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.gridArea("outlet"),
    ...shorthands.overflow("hidden"),
  },
});

export const Layout = ({ header, navigation, content }: LayoutProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>{header}</div>
      <div className={styles.navigation}>{navigation}</div>
      <div className={styles.outlet}>{content}</div>
    </div>
  );
};
