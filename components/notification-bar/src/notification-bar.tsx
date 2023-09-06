import {
  Caption1Strong,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { Info20Filled, Warning20Filled } from "@fluentui/react-icons";
import React from "react";
import { useNotificationBarStyles } from "./notification-bar.styles";

type NotificationBarProps = {
  title?: string;
  childRight?: React.ReactNode;
  intent?: "none" | "info" | "warning";
  "data-testid"?: string;
};

export const NotificationBar = ({
  title,
  childRight,
  intent = "info",
  "data-testid": testId = "notification-bar",
}: NotificationBarProps) => {
  const classes = useNotificationBarStyles();
  const rootStyles = mergeClasses(
    classes.root,
    intent === "warning" && classes.warning
  );

  return (
    <div data-testid={testId} className={rootStyles}>
      <div className={classes.iconAndText} data-testid={`${testId}-title`}>
        {intent !== "none" && (
          <div className={classes.icon}>
            {intent === "warning"
              ? (
                <Warning20Filled
                  primaryFill={tokens.colorPaletteDarkOrangeForeground1}
                />
              )
              : <Info20Filled />}
          </div>
        )}
        <Caption1Strong>{title}</Caption1Strong>
      </div>
      {childRight}
    </div>
  );
};
