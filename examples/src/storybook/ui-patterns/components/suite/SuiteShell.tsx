import { makeStyles, tokens } from "@fluentui/react-components";
import { DrawerPanel } from "./DrawerPanel";
import { MainWorkspace } from "./MainWorkspace";
import { SideNavigation } from "./SideNavigation";
import { SuiteHeader } from "./SuiteHeader";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "48px 1fr",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  body: {
    minHeight: 0,
    display: "grid",
    gridTemplateColumns: "68px 320px 1fr",
  },
});

export function SuiteShell() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <SuiteHeader />
      <div className={styles.body}>
        <SideNavigation />
        <DrawerPanel />
        <MainWorkspace />
      </div>
    </div>
  );
}
