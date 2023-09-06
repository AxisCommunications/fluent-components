// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------
import React from "react";
import welcomeImageDark from "./img/welcome-image-dark.svg";
import welcomeImageLight from "./img/welcome-image-light.svg";
import { useWelcomeImageStyles } from "./welcome-image.styles";
import { axisDarkTheme } from "@axiscommunications/fluent-theme";
import { Card, Image } from "@fluentui/react-components";
import { useAppContext } from "../../context/ApplicationStateProvider";

export const WelcomeImage: React.FC = () => {
  const theme = useAppContext((context) => context.theme);
  const styles = useWelcomeImageStyles();

  return (
    <Card>
      <Image
        className={styles.image}
        fit="contain"
        src={theme === axisDarkTheme ? welcomeImageDark : welcomeImageLight}
      />
    </Card>
  );
};
