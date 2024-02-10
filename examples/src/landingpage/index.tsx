import { makeStyles } from "@fluentui/react-components";
import React from "react";
import { TestId } from "../../system-test/util/test-id";
import { WelcomeImage } from "./welcome-image/welcome-image.component";
import { WelcomeMessage } from "./welcome-message/welcome-message.component";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export const WelcomePage = () => {
  const styles = useStyles();

  return (
    <div data-testid={TestId.welcomePage} className={styles.root}>
      <WelcomeMessage />
      <div className={styles.image}>
        <WelcomeImage />
      </div>
    </div>
  );
};
