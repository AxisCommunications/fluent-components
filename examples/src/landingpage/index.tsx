import React from "react";
import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useLayoutStyles } from "../styles/page";
import { WelcomeMessage } from "./welcome-message/welcome-message.component";
import { WelcomeImage } from "./welcome-image/welcome-image.component";
import { TestId } from "../../system-test/util/test-id";

const useStyles = makeStyles({
  pageContainer: {
    ...shorthands.flex(1),
    backgroundColor: tokens.colorNeutralBackground4,
  },
  page: {
    display: "flex",
    height:
      `calc(100% - ${tokens.spacingHorizontalL} - ${tokens.spacingVerticalS})`,
    justifyContent: "space-between",
    paddingRight: tokens.spacingHorizontalXXXL,
    backgroundColor: tokens.colorNeutralBackground2,
    borderTopLeftRadius: tokens.borderRadiusXLarge,
    paddingTop: tokens.spacingHorizontalL,
    paddingBottom: tokens.spacingVerticalS,
  },
});

export const WelcomePage = () => {
  const styles = useStyles();
  const layoutStyles = useLayoutStyles();

  return (
    <div data-testid={TestId.welcomePage} className={layoutStyles.grid}>
      <div className={styles.pageContainer}>
        <div className={styles.page}>
          <WelcomeMessage />
          <WelcomeImage />
        </div>
      </div>
    </div>
  );
};
