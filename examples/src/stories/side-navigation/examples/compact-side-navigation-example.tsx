import { SideNavigation } from "@axiscommunications/fluent-side-navigation";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  railShell: {
    height: "720px",
    width: "68px",
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

export function CompactSideNavigationExample() {
  const [selectedItemId, setSelectedItemId] = useState("home");
  const styles = useStyles();

  return (
    <div className={styles.railShell}>
      <SideNavigation
        style={{ height: "100%" }}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        aria-label="Side navigation"
      />
    </div>
  );
}

export const CompactSideNavigationExampleAsString = `
import { SideNavigation } from "@axiscommunications/fluent-side-navigation";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  railShell: {
    height: "720px",
    width: "68px",
    borderRight: \`1px solid \${tokens.colorNeutralStroke2}\`,
  },
});

export function CompactSideNavigationExample() {
  const [selectedItemId, setSelectedItemId] = useState("home");
  const styles = useStyles();

  return (
    <div className={styles.railShell}>
      <SideNavigation
        style={{ height: "100%" }}
        selectedItemId={selectedItemId}
        onSelect={setSelectedItemId}
        aria-label="Side navigation"
      />
    </div>
  );
}
`;
