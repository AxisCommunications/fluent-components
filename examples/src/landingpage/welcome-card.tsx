import {
  Body1,
  Card,
  Subtitle2,
  makeStyles,
  mergeClasses,
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
    minHeight: "180px",
    ...shorthands.padding(tokens.spacingVerticalXL, tokens.spacingHorizontalXL),
    ...shorthands.gap(tokens.spacingVerticalS),
    ...shorthands.overflow("hidden"),
    cursor: "pointer",
    transitionDuration: tokens.durationNormal,
    transitionProperty: "background, box-shadow, transform",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      boxShadow: tokens.shadow16,
      transform: "translateY(-2px)",
    },
    ":hover .axis-WelcomeCard__icon": {
      backgroundColor: tokens.colorBrandBackground,
      color: tokens.colorNeutralForegroundOnBrand,
    },
    ":hover .axis-WelcomeCard__footer svg": {
      transform: "translateX(4px)",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    ...shorthands.borderRadius(tokens.borderRadiusLarge),
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground1,
    fontSize: "24px",
    transitionDuration: tokens.durationNormal,
    transitionProperty: "background, color",
  },
  title: {
    color: tokens.colorNeutralForeground1,
  },
  description: {
    color: tokens.colorNeutralForeground3,
    flexGrow: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalXS),
    color: tokens.colorBrandForeground1,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
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
      <div className={mergeClasses("axis-WelcomeCard__icon", styles.icon)}>
        {icon}
      </div>
      <Subtitle2 className={styles.title}>{title}</Subtitle2>
      <Body1 className={styles.description}>{description}</Body1>
      <div className={mergeClasses("axis-WelcomeCard__footer", styles.footer)}>
        Explore <ArrowRightRegular />
      </div>
    </Card>
  );
};
