import { makeStyles } from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInputExample } from "../../stories/password-input/password-input-example";

const useStyles = makeStyles({
  frame: {
    maxWidth: "400px",
  },
});

const meta: Meta = {
  title: "Components/Password Input",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const styles = useStyles();

    return (
      <div className={styles.frame}>
        <PasswordInputExample />
      </div>
    );
  },
};
