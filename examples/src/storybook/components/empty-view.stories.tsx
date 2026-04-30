import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { DialogEmptyViewExample } from "../../stories/empty-view/examples/dialog";
import { MainEmptyViewExample } from "../../stories/empty-view/examples/main";
import { PanelEmptyViewExample } from "../../stories/empty-view/examples/panel";
import { SubmenuEmptyViewExample } from "../../stories/empty-view/examples/submenu";

const useStyles = makeStyles({
  constrained: {
    height: "500px",
  },
});

const meta: Meta = {
  title: "Components/Empty View",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.constrained}>
        <MainEmptyViewExample />
      </div>
    );
  },
};

export const Panel: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.constrained}>
        <PanelEmptyViewExample />
      </div>
    );
  },
};

export const Submenu: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.constrained}>
        <SubmenuEmptyViewExample />
      </div>
    );
  },
};

export const Dialog: Story = {
  render: () => <DialogEmptyViewExample />,
};
