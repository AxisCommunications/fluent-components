import {
  Caption1,
  Card,
  CardHeader,
  makeStyles,
  shorthands,
  Text,
  tokens,
} from "@fluentui/react-components";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    maxWidth: "100%",
    height: "fit-content",
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  text: {
    ...shorthands.margin(0),
  },
});

type TCardExample = {
  title: string;
  description?: string;
  text?: string;
  onClick: () => void;
};

export const WelcomeCard = (
  { title, description, text, onClick }: TCardExample
) => {
  const styles = useStyles();

  return (
    <Card
      className={styles.root}
      onClick={onClick}
    >
      <CardHeader
        header={<Text weight="semibold">{title}</Text>}
        description={
          <Caption1 className={styles.caption}>{description}</Caption1>
        }
      />
      <p className={styles.text}>
        {text}
      </p>
    </Card>
  );
};
