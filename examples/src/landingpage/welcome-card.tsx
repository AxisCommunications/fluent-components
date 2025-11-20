import {
  Caption1,
  Card,
  CardHeader,
  Text,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ReactElement } from "react";

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
  icon: ReactElement;
  onClick: () => void;
};

export const WelcomeCard = ({
  title,
  description,
  text,
  icon,
  onClick,
}: TCardExample) => {
  const styles = useStyles();

  return (
    <Card className={styles.root} onClick={onClick}>
      <CardHeader
        header={<Text weight="semibold">{title}</Text>}
        image={icon}
        description={
          <Caption1 className={styles.caption}>{description}</Caption1>
        }
      />
      <p className={styles.text}>{text}</p>
    </Card>
  );
};
