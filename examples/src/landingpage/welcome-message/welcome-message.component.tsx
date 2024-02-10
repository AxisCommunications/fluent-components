// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------
import { Body1, Title2 } from "@fluentui/react-components";
import React from "react";
import { useWelcomeMessageStyle } from "./welcome-message.styles";

export const WelcomeMessage: React.FC = () => {
  const styles = useWelcomeMessageStyle();

  const bodyText = (
    <>
      <div>
        Here you may find fluent customizations regarding:
      </div>
      <ul>
        <li>Components</li>
        <li>Themes</li>
        <li>Icons</li>
        <li>Styling and more..</li>
      </ul>
    </>
  );
  return (
    <div className={styles.content}>
      <Title2 block wrap>Welcome to Axis Fluent Components</Title2>
      <Body1 className={styles.bodyText}>{bodyText}</Body1>
    </div>
  );
};
