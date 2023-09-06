// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------
import React from "react";
import { Body1, Link, Title2 } from "@fluentui/react-components";
import { useWelcomeMessageStyle } from "./welcome-message.styles";

export const WelcomeMessage: React.FC = () => {
  const styles = useWelcomeMessageStyle();

  const bodyText = (
    <>
      <div>
        Here you may find{" "}
        <Link
          href="https://www.npmjs.com/package/@fluentui/react-components"
          inline
        >
          fluent
        </Link>{" "}
        customizations regarding:
      </div>
      <ul>
        <li>Components</li>
        <li>Themes</li>
        <li>Icons</li>
      </ul>
    </>
  );
  return (
    <div className={styles.content}>
      <Title2>Welcome to Axis Fluent Components</Title2>
      <Body1 className={styles.bodyText}>{bodyText}</Body1>
    </div>
  );
};
