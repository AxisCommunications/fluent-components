import {
  Body1,
  Card,
  Subtitle2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ArrowRightRegular } from "@fluentui/react-icons";
import { ReactElement } from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minWidth: "200px",
    maxWidth: "100%",
    height: "auto",
    minHeight: "170px",
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
    ...shorthands.gap(tokens.spacingVerticalXS),
    ...shorthands.overflow("hidden"),
    cursor: "pointer",
    transitionDuration: tokens.durationNormal,
    transitionProperty: "background, box-shadow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      boxShadow: tokens.shadow16,
    },
    ":hover > :first-child": {
      transform: "rotate(-8deg) scale(1.15)",
      opacity: "0.18",
    },
    ":hover > :last-child > svg": {
      transform: "translateX(4px)",
    },
  },
  watermark: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    fontSize: "96px",
    opacity: "0.1",
    color: tokens.colorBrandForeground1,
    transitionDuration: tokens.durationNormal,
    transitionProperty: "transform, opacity",
    pointerEvents: "none",
    lineHeight: "1",
  },
  title: {
    color: tokens.colorBrandForeground1,
    position: "relative",
  },
  description: {
    color: tokens.colorNeutralForeground2,
    position: "relative",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    color: tokens.colorBrandForeground1,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    marginTop: tokens.spacingVerticalS,
    position: "relative",
    "& svg": {
      transitionDuration: tokens.durationNormal,
      transitionProperty: "transform",
    },
  },
});

type TCardExample = {
  title: string;
  description?: string;
  icon: ReactElement;
  onClick: () => void;
};

export const WelcomeCard = ({
  title,
  description,
  icon,
  onClick,
}: TCardExample) => {
  const styles = useStyles();

  return (
    <Card className={styles.root} onClick={onClick}>
      <div className={styles.watermark}>{icon}</div>
      <Subtitle2 className={styles.title}>{title}</Subtitle2>
      <Body1 className={styles.description}>{description}</Body1>
      <div className={styles.footer}>
        Explore <ArrowRightRegular />
      </div>
    </Card>
  );
};
