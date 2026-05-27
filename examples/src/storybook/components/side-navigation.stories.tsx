import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { CompactSideNavigationExample } from "../../stories/side-navigation/examples/compact-side-navigation-example";

const useStyles = makeStyles({
  frame: {
    width: "68px",
  },
});

const meta: Meta = {
  title: "UI patterns/Side Navigation",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CompactRail: Story = {
  render: () => {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <CompactSideNavigationExample />
      </div>
    );
  },
};
