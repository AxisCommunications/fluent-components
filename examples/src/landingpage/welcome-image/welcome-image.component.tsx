// --------------------------------------------------------------------
// Copyright (c) Axis Communications AB, SWEDEN. All rights reserved.
// --------------------------------------------------------------------
import { axisDarkTheme } from "@axiscommunications/fluent-theme";
import { Image } from "@fluentui/react-components";
import React from "react";
import { useAppContext } from "../../context/ApplicationStateProvider";
import welcomeImageDark from "./img/welcome-image-dark.svg";
import welcomeImageLight from "./img/welcome-image-light.svg";
import { useWelcomeImageStyles } from "./welcome-image.styles";

export const WelcomeImage: React.FC = () => {
  const theme = useAppContext((context) => context.theme);
  const styles = useWelcomeImageStyles();

  return (
    <Image
      className={styles.image}
      fit="contain"
      src={theme === axisDarkTheme ? welcomeImageDark : welcomeImageLight}
    />
  );
};
