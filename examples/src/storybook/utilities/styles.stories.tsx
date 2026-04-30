import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { MainMenu } from "../../stories/main-menu/examples/main-menu";
import { MainMenuVertical } from "../../stories/main-menu/examples/main-menu-vertical";
import { StyledTabListComponent } from "../../stories/tab-list-utilities/tab-list-example";
import { TableExample } from "../../stories/table-utilities/table-example";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gap: "24px",
  },
  section: {
    padding: "8px",
  },
});

const meta: Meta = {
  title: "Utilities/Styles",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MainMenuStyles: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.root}>
        <div className={styles.section}>
          <MainMenu />
        </div>
        <div className={styles.section}>
          <MainMenuVertical />
        </div>
      </div>
    );
  },
};

export const TableStyles: Story = {
  render: () => <TableExample />,
};

export const TabListStyles: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.root}>
        <StyledTabListComponent />
        <StyledTabListComponent withText={false} />
        <StyledTabListComponent vertical />
        <StyledTabListComponent withText={false} vertical />
      </div>
    );
  },
};
