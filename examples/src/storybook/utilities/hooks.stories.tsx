import {
  useMediaQuery,
  usePageController,
} from "@axiscommunications/fluent-hooks";
import {
  Button,
  Card,
  CardHeader,
  Text,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gap: tokens.spacingVerticalM,
    maxWidth: "720px",
  },
  buttonRow: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
});

function UseMediaQueryDemo() {
  const mediaType = useMediaQuery();

  return (
    <Card>
      <CardHeader header={<Text weight="semibold">useMediaQuery</Text>} />
      <Text>
        Resize the preview iframe to see the current breakpoint value change.
      </Text>
      <Text>Current breakpoint: {mediaType}</Text>
    </Card>
  );
}

function UsePageControllerDemo() {
  const styles = useStyles();
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(5);
  const total = 42;

  const controller = usePageController({
    total,
    skip,
    take,
    setSkip,
  });

  const visibleItems = useMemo(() => {
    const first = skip + 1;
    const last = skip + controller.pageSize;

    return `${first} - ${last}`;
  }, [controller.pageSize, skip]);

  return (
    <Card>
      <CardHeader header={<Text weight="semibold">usePageController</Text>} />
      <Text>Page: {controller.currentPage + 1}</Text>
      <Text>Total pages: {controller.totalPages}</Text>
      <Text>Visible items: {visibleItems}</Text>
      <div className={styles.buttonRow}>
        <Button
          onClick={controller.prevPage}
          disabled={!controller.canGoBackward}
        >
          Previous
        </Button>
        <Button
          onClick={controller.nextPage}
          disabled={!controller.canGoForward}
        >
          Next
        </Button>
        <Button onClick={controller.goToFirstPage}>First page</Button>
        <Button onClick={() => setTake((current) => (current === 5 ? 10 : 5))}>
          Toggle page size ({take})
        </Button>
      </div>
    </Card>
  );
}

function HooksShowcase() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <UseMediaQueryDemo />
      <UsePageControllerDemo />
    </div>
  );
}

const meta: Meta = {
  title: "Utilities/Hooks",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => <HooksShowcase />,
};
