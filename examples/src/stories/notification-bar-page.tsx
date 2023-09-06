import React from "react";
import {
  Button,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { PageHeader } from "../components/page-header";
import { useLayoutStyles } from "../styles/page";
import { NotificationBar } from "@axiscommunications/fluent-notification-bar";

const useNotificationBarStyles = makeStyles({
  barGroup: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    height: "max-content",
    ...shorthands.gap(tokens.spacingVerticalL),
  },
});

const randomText =
  "Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond.";

export const NotificationBarPage = () => {
  const layoutStyles = useLayoutStyles();
  const styles = useNotificationBarStyles();

  return (
    <div className={layoutStyles.grid}>
      <PageHeader className={layoutStyles.header} title="Notification bar" />

      <div
        className={mergeClasses(
          "content",
          layoutStyles.content,
          layoutStyles.sections
        )}
      >
        <div className={styles.barGroup}>
          <NotificationBar title={"Default (Info) Notification"} />
          <NotificationBar
            title={"Info Notification with childRight"}
            childRight={<Button size="small">Button</Button>}
          />
          <NotificationBar title={"Warning Notification"} intent="warning" />
          <NotificationBar title={"Notification without icon"} intent="none" />
          <NotificationBar
            title={`Notification with long text. ${randomText}`}
          />
        </div>
      </div>
    </div>
  );
};
